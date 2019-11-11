/**
 * AuthorError is the Error class for the authorization API.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              not application/json
 * 2              CouchDB: connection failure
 * 3              CouchDB (View): get_permission failure
 * 4              authentication failure
 * 5              invalid credential
 * 6              invalid clientID
 * 7              invalid hostID
 * 8              invalid permission
 * 9              HTTP 405: Method Not Allowed
 * 10             authentication server failure
 */

import { LMError } from '@leismore/lmerror';

class AuthorError extends LMError {}

export { AuthorError };
