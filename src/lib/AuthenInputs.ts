/**
 * AuthenInputs class: the input data for authentication.
 */

import { AuthenError }            from './AuthenError';
import { AuthenInputs as Inputs } from './type/AuthenInputs';

class AuthenInputs
{
  public readonly appID:string;
  public readonly token:string;

  /**
   * @param {appID: string, token: string} inputs
   * @throws {AuthenError}
   */
  public constructor(inputs:Inputs)
  {
    if ( typeof inputs.appID !== 'string' || inputs.appID.length === 0 )
    {
      let error = {message:'invalid appID', code: '4'};
      let response = {statusCode:'415'};
      throw new AuthenError(error, response);
    }

    if ( typeof inputs.token !== 'string' || inputs.token.length === 0 )
    {
      let error = {message:'invalid token', code: '5'};
      let response = {statusCode:'415'};
      throw new AuthenError(error, response);
    }

    this.appID = inputs.appID;
    this.token = inputs.token;
  }
}

export { AuthenInputs };
