/**
 * AuthenResponse class for the authentication API.
 */

'use strict';

const Response    = require('@leismore/response');
const AuthenError = require('./AuthenError');

class AuthenResponse extends Response
{
  res200(result)
  {
    if (typeof result !== 'boolean')
    {
      throw new AuthenError('not boolean', 1, 503);
    }

    this.res.set('Content-Type', 'application/json');
    this.res.status(200).send({'result': result});
  }
}

module.exports = AuthenResponse;
