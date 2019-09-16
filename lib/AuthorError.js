/**
 * AuthorError is the Error class for the authorization API.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              not boolean
 * 2              not number
 * 3              not bigint
 * 4              not string
 * 5              not application/json
 * 6              connect CouchDB failure
 * 7              CouchDB: get_permission failure
 * 8              authentication failure
 * 9              invalid credential
 * 10             invalid clientID
 * 11             invalid hostID
 * 12             invalid permission
 */

'use strict';
const LMError = require('@leismore/lmerror');

class AuthorError extends LMError {}

module.exports = AuthorError;
