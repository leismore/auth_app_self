/**
 * AuthenResponse class for the authentication API.
 * Refer to @leismore/response <https://www.npmjs.com/package/@leismore/response>
 */

import { LMResponse as Response } from '@leismore/response';

class AuthenResponse extends Response
{
  public res200(result:boolean):void
  {
    this.send({
      statusCode: '200',
      headers: {'Content-Type': 'application/json'},
      body: {'result': result}
    });
  }
}

export { AuthenResponse };
