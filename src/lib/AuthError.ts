/**
 * AuthError is the Error class for this project.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              not application/json
 * 2              connect CouchDB failure
 */

import { LMError } from '@leismore/lmerror';
class    AuthError extends LMError {}
export { AuthError };
