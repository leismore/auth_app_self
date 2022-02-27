/**
 * POST handler 2 - Authentication
 */

import express          = require('express');
import nano             = require('nano');
import { Token }          from '@leismore/token';

import { AuthenError }    from '../lib/AuthenError';
import { AuthenResponse } from '../lib/AuthenResponse';
import { AuthenInputs }   from '../lib/AuthenInputs';
import { connect_db }     from '../lib/connect_db';
import { get_token }      from '../lib/get_token';
import { AuthenDoc }      from '../lib/type/db_doc_authen';
import { AuthenDB }       from '../lib/type/AuthenDB';

import * as CONFIG        from '../config.json';
const DB_NAME             = CONFIG.couchdb.dbPrefix + '_private_app_authentication';

function post_handler2(_req:express.Request, res:express.Response, next:express.NextFunction):void
{
  const inputs:AuthenInputs  = res.locals.inputs;
  const resp                 = new AuthenResponse(res);
  let   dataFromDB:AuthenDB;
  let   db:nano.DocumentScope<AuthenDoc>;

  // Connect to DB
  try {
    db = connect_db().use(DB_NAME);
  } catch (e) {
    let error = {message: 'CouchDB: connection failure', code: '2'};
    let response = {statusCode: '500'};
    // @ts-ignore
    next( new AuthenError(error, response, e) );
    return;
  }

  // Get data from DB
  get_token(db, inputs.appID)

  .then( r => {

    // Normalization
    if (r.rows.length === 0)
    {
      resp.res200(false);
      return;
    }
    else
    {
      dataFromDB = {
        appID:       r.rows[0].key,
        token:       new Token({
          token:     r.rows[0].value.token,
          generated: r.rows[0].value.generated,
          expiry:    r.rows[0].value.expiry
        })
      };
    }

    // Auth.
    if ( dataFromDB.token.verify(inputs.token) === true )
    {
      resp.res200(true);
      return;
    }
    else
    {
      resp.res200(false);
      return;
    }

  })

  .catch( e => {
    let error = {message: 'CouchDB (View): get_token failure', code: '3'};
    let response = {statusCode: '500'};
    next( new AuthenError(error, response, e) );
    return;
  });

}

export { post_handler2 };
