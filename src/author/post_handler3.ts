/**
 * POST handler 3 - Authorization
 */

import express          = require('express');
import nano             = require('nano');
import { AuthorError }    from '../lib/AuthorError';
import { AuthorInputs }   from '../lib/AuthorInputs';
import { AuthorResponse } from '../lib/AuthorResponse';
import { AuthorDoc }      from '../lib/type/db_doc_author';
import { connect_db }     from '../lib/connect_db';
import { get_permission } from '../lib/get_permission';
import * as CONFIG        from '../config.json';
const DB_NAME = CONFIG.couchdb.dbPrefix + '_private_app_authorization';

function post_handler3(_req:express.Request, res:express.Response, next:express.NextFunction):void
{
  const inputs:AuthorInputs = res.locals.inputs;
  const resp                = new AuthorResponse(res);
  let   db:nano.DocumentScope<AuthorDoc>;

  // Connect to DB
  try {
    db = connect_db().use(DB_NAME);
  } catch (e) {
    let error = {message: 'CouchDB: connection failure', code: '2'};
    let response = {statusCode: '500'};
    // @ts-ignore
    next( new AuthorError(error, response, e) );
    return;
  }

  // Get data from DB
  get_permission(db, [inputs.credential.appID, inputs.data.hostID, inputs.data.permission])
  .then( r => {
    if (r.rows.length === 0 || r.rows[0].value === false)
    {
      resp.res200(false);
      return;
    }
    else
    {
      resp.res200(true);
      return;
    }
  })
  .catch( e => {
    let error = {message: 'CouchDB (View): get_permission failure', code: '3'};
    let response = {statusCode: '500'};
    next( new AuthorError(error, response, e) );
    return;
  });

}

export { post_handler3 };
