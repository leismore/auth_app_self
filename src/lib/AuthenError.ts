/**
 * AuthenError is the Error class for the authentication API.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              not application/json
 * 2              connect CouchDB failure
 * 3              CouchDB: get_token failure
 * 4              invalid appID
 * 5              invalid token
 * 6              HTTP 405: Method Not Allowed
 */

import { LMError } from '@leismore/lmerror';

class AuthenError extends LMError {}

export { AuthenError };
