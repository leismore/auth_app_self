/**
 * AuthorInputs class: the input data for authorization.
 * {
 *   credential: {AuthenInputs object}
 *   data:
 *   {
 *     clientID:    {string}  appID UUID
 *     hostID:      {string}  appID UUID
 *     permission:  {string}  Permission name
 *   }
 * }
 */

'use strict';

const AuthorError  = require('./AuthorError');
const AuthenInputs = require('./AuthenInputs');
const auth         = require('basic-auth');

class AuthorInputs
{
  /**
   * @param {string} credential - The value of HTTP Header Authorization
   * @param {clientID (string), hostID (string), permission (string)} data
   * @throws {AuthorError}
   */
  constructor(credential, data)
  {
    credential = auth.parse(credential);
    if (credential === undefined)
    {
      throw new AuthorError('invalid credential', 9, 415);
    }
    else
    {
      try {
        credential = {
          appID: credential.name,
          token: credential.pass
        };
        credential = new AuthenInputs(credential);
      } catch (e) {
        throw new AuthorError('invalid credential', 9, 415, e);
      }
    }

    if (typeof data.clientID !== 'string' || data.clientID.length === 0)
    {
      throw new AuthorError('invalid clientID', 10, 415);
    }

    if (typeof data.hostID !== 'string' || data.hostID.length === 0)
    {
      throw new AuthorError('invalid hostID', 11, 415);
    }

    if (typeof data.permission !== 'string' || data.permission.length === 0)
    {
      throw new AuthorError('invalid permission', 12, 415);
    }

    this.credential = credential;
    this.data = {
      clientID:   data.clientID,
      hostID:     data.hostID,
      permission: data.permission
    };
  }
}

module.exports = AuthorInputs;
