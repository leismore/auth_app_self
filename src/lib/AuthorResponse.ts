/**
 * AuthorResponse class for the authorization API.
 * Refer to @leismore/response <https://www.npmjs.com/package/@leismore/response>
 */

'use strict';

const Response    = require('@leismore/response');
const AuthorError = require('./AuthorError');

class AuthorResponse extends Response
{
  res200(result)
  {
    if (typeof result !== 'boolean')
    {
      throw new AuthorError('not boolean', 1, 500);
    }

    this.res.set('Content-Type', 'application/json');
    this.res.status(200).send({'result': result});
  }
}

module.exports = AuthorResponse;
