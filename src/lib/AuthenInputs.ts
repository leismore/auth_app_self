/**
 * AuthenInputs class: the input data for authentication.
 * {
 *   appID:  {string}
 *   token:  {string}
 * }
 */

'use strict';

const AuthenError = require('./AuthenError');

class AuthenInputs
{
  /**
   * @param {appID: string, token: string} inputs
   * @throws {AuthenError}
   */
  constructor(inputs)
  {
    if ( typeof inputs.appID !== 'string' || inputs.appID.length === 0 )
    {
      throw new AuthenError('invalid appID', 8, 415);
    }

    if ( typeof inputs.token !== 'string' || inputs.token.length === 0 )
    {
      throw new AuthenError('invalid token', 9, 415);
    }

    this.appID = inputs.appID;
    this.token = inputs.token;
  }
}

module.exports = AuthenInputs;
