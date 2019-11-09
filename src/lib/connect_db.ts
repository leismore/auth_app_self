/**
 * connect_db function: Connect to the CouchDB
 */

import * as NANO       from 'nano';
import { AuthError }   from './AuthError';
import * as CREDENTIAL from '../credential/couchdb.json';

/**
 * @throw {AuthError}
 */
function connect_db():NANO.ServerScope
{
  try {
    return NANO(
      'https://' + CREDENTIAL.user     + ':' +
                   CREDENTIAL.password + '@' +
                   CREDENTIAL.host     + ':' +
                   CREDENTIAL.port
    );
  } catch (e) {
    let error = { message: 'CouchDB: connection failure', code: '2' };
    let response = { statusCode:'500' };
    throw new AuthError(error, response, e);
  }
}

export { connect_db };
