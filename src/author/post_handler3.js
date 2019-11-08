/**
 * POST handler 3 - Authorization
 */

'use strict';

const CONFIG         = require('../config.json');
const DB_NAME        = CONFIG.couchdb.dbPrefix + '_private_app_authorization';
const connect_db     = require('../lib/connect_db');
const get_permission = require('../lib/get_permission');
const AuthorResponse = require('../lib/AuthorResponse');

function post_handler3(req, res, next)
{
  const AuthorError = res.locals.AuthorError;
  const inputs      = res.locals.inputs;
  const resp        = new AuthorResponse(res);
  let r             = null;
  let db            = null;

  // Connect to DB
  try {
    db = connect_db().use(DB_NAME);
  } catch (e) {
    next( new AuthorError('connect CouchDB failure', 6, 500, e) );
    return;
  }

  // Get data from DB
  get_permission(db, [inputs.data.clientID, inputs.data.hostID, inputs.data.permission])

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
    next( new AuthorError('CouchDB: get_permission failure', 7, 500, e) );
    return;
  });

}

module.exports = post_handler3;
