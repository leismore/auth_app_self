/**
 * connect_db function: Connect to the CouchDB
 *
 * @returns {nano}
 * @throws  {AuthError}
 */

'use strict';

const AuthError  = require('./AuthError');
const CREDENTIAL = require('../credential/couchdb.json');

function connect_db()
{
  try {
    return require('nano')(
      'https://' + CREDENTIAL.user     + ':' +
                   CREDENTIAL.password + '@' +
                   CREDENTIAL.host     + ':' +
                   CREDENTIAL.port
    );
  } catch (e) {
    throw new AuthError('connect CouchDB failure', 6, 500, e);
  }
}

module.exports = connect_db;
