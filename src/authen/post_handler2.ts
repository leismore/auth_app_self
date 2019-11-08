/**
 * POST handler 2 - Authentication
 */

'use strict';

const CONFIG         = require('../config.json');
const DB_NAME        = CONFIG.couchdb.dbPrefix + '_private_app_authentication';
const connect_db     = require('../lib/connect_db');
const get_token      = require('../lib/get_token');
const AuthenResponse = require('../lib/AuthenResponse');
const Token          = require('@leismore/token');

function post_handler2(req, res, next)
{
  const AuthenError = res.locals.AuthenError;
  const inputs      = res.locals.inputs;
  const resp        = new AuthenResponse(res);
  let   dataFromDB  = {
    appID:     null,
    token:     null
  };
  let r             = null;
  let db            = null;

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

module.exports = post_handler2;
