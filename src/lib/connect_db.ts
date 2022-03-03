/**
 * connect_db function: Connect to the CouchDB
 */

import NANO          =   require('nano');
import { AuthError }     from './AuthError';
import * as CREDENTIAL   from '../credential/couchdb.json';
import { unknown2error } from '@leismore/unknown2error';

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
    const f = unknown2error(e);
    let error = { message: 'CouchDB: connection failure', code: '2' };
    let response = { statusCode:'500' };
    throw new AuthError(error, response, f);
  }
}

export { connect_db };
