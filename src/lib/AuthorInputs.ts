/**
 * AuthorInputs class: the input data for authorization.
 */

import * as auth                                        from 'basic-auth';
import { AuthorError }                                  from './AuthorError';
import { AuthenInputs }                                 from './AuthenInputs';
import { AuthenInputs              as InputCredential } from './type/AuthenInputs';
import { AuthorInputs_noCredential as InputData       } from './type/AuthorInputs';

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
        let error = {message: 'invalid credential', code: '5'};
        let response = {statusCode: '415'};
        throw new AuthorError(error, response, e);
      }
    }

    // Test data
    if (typeof data.clientID !== 'string' || data.clientID.length === 0)
    {
      let error = {message: 'invalid clientID', code: '6'};
      let response = {statusCode: '415'};
      throw new AuthorError(error, response);
    }

    if (typeof data.hostID !== 'string' || data.hostID.length === 0)
    {
      let error = {message: 'invalid hostID', code: '7'};
      let response = {statusCode: '415'};
      throw new AuthorError(error, response);
    }

    if (typeof data.permission !== 'string' || data.permission.length === 0)
    {
      let error = {message: 'invalid permission', code: '8'};
      let response = {statusCode: '415'};
      throw new AuthorError(error, response);
    }

    // Init.
    this.credential = credential;
    this.data       = data;
  }
}

export { AuthorInputs };
