/**
 * AuthenError is the Error class for the authentication API.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              not boolean
 * 2              not number
 * 3              not bigint
 * 4              not string
 * 5              not application/json
 * 6              connect CouchDB failure
 */

'use strict';
const LMError = require('@leismore/lmerror');

class AuthenError extends LMError {}

module.exports = AuthenError;
