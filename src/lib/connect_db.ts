/**
 * connect_db function: Connect to the CouchDB
 */

import NANO          = require('nano');
import { AuthError }   from './AuthError';
import * as CREDENTIAL from '../credential/couchdb.json';

/**
 * @throw {AuthError}
 */
function connect_db():NANO.ServerScope
{
  const PROTOCOL = CREDENTIAL.ssl ? 'https' : 'http';

  try {
    return NANO(
      PROTOCOL + '://' + CREDENTIAL.user     + ':' +
                         CREDENTIAL.password + '@' +
                         CREDENTIAL.host     + ':' +
                         CREDENTIAL.port
    );
  } catch (e) {
    let error = { message: 'CouchDB: connection failure', code: '2' };
    let response = { statusCode:'500' };
    // @ts-ignore
    throw new AuthError(error, response, e);
  }
}

export { connect_db };
