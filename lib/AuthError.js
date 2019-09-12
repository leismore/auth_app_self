/**
 * AuthError is the Error class for this project.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              not boolean
 * 2              not number
 * 3              not bigint
 * 4              not string
 * 5              not application/json
 */

'use strict';
const LMError = require('@leismore/lmerror');

class AuthError extends LMError {}

module.exports = AuthError;
