/**
 * POST handler 2 - Authentication
 */

import { Token }          from '@leismore/token';
import * as express       from 'express';
import * as nano          from 'nano';
import * as CONFIG        from '../config.json';
import { connect_db }     from '../lib/connect_db';
import { get_token }      from '../lib/get_token';
import { AuthenResponse } from '../lib/AuthenResponse';
import { AuthenInputs } from '../lib/AuthenInputs';
import { AuthenError }    from '../lib/AuthenError';
import { Token_getToken as TokenDB, View_getToken as ResultDB } from '../lib/type/View_getToken';
const DB_NAME = CONFIG.couchdb.dbPrefix + '_private_app_authentication';

function post_handler2(_req:express.Request, res:express.Response, next:express.NextFunction):void
{
  const inputs:AuthenInputs = res.locals.inputs;
  const resp        = new AuthenResponse(res);
  let   dataFromDB  = {
    appID:     null,
    token:     null
  };
  let r             = null;
  let db:nano.DocumentScope<ResultDB>;

  // Connect to DB
  try {
    db = connect_db().use(DB_NAME);
  } catch (e) {
    next( new AuthenError('connect CouchDB failure', 6, 500, e) );
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
      dataFromDB.appID = r.rows[0].key;
      dataFromDB.token = new Token(
        r.rows[0].value.token,
        r.rows[0].value.generated,
        r.rows[0].value.expiry
      );
    }

    // Auth.
    if ( dataFromDB.token.verify(inputs.token) )
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
    next( new AuthenError('CouchDB: get_token failure', 7, 500, e) );
    return;
  });

}

export { post_handler2 };
