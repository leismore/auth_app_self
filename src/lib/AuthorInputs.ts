/**
 * AuthorInputs class: the input data for authorization.
 */

import auth                              = require('basic-auth');
import { AuthorError }                     from './AuthorError';
import { AuthenInputs }                    from './AuthenInputs';
import { AuthenInputs as InputCredential } from './type/AuthenInputs';
import { AuthorInputs as InputData       } from './type/AuthorInputs';
import { unknown2error }                   from '@leismore/unknown2error';

class AuthorInputs
{
  public readonly credential: AuthenInputs;
  public readonly data:       InputData;

  /**
   * @throw {AuthorError}
   */
  public constructor(credentialHTTP: string, data: InputData)
  {
    let credential:      AuthenInputs;    // AuthenInputs class instance
    let credentialInput: InputCredential; // Data for AuthenInputs class

    // Test credential
    let credentialHTTP_parsed = auth.parse(String(credentialHTTP));
    if (credentialHTTP_parsed === undefined)
    {
      let error = {message: 'invalid credential', code: '5'};
      let response = {statusCode: '415'};
      throw new AuthorError(error, response);
    }
    else
    {
      try {
        credentialInput = {
          appID: credentialHTTP_parsed.name,
          token: credentialHTTP_parsed.pass
        };
        credential = new AuthenInputs(credentialInput);
      } catch (e) {
        const f = unknown2error(e);
        let error = {message: 'invalid credential', code: '5'};
        let response = {statusCode: '415'};
        throw new AuthorError(error, response, f);
      }
    }

    // Test data
    if ('hostID' in data === false || typeof data.hostID !== 'string' || data.hostID.length === 0)
    {
      let error = {message: 'invalid hostID', code: '6'};
      let response = {statusCode: '415'};
      throw new AuthorError(error, response);
    }

    if ('permission' in data === false || typeof data.permission !== 'string' || data.permission.length === 0)
    {
      let error = {message: 'invalid permission', code: '7'};
      let response = {statusCode: '415'};
      throw new AuthorError(error, response);
    }

    // Init.
    this.credential = credential;
    this.data       = {
      hostID:     data.hostID,
      permission: data.permission
    };
  }
}

export { AuthorInputs };
