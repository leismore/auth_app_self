/**
 * AuthorResponse class for the authorization API.
 * Refer to @leismore/response <https://www.npmjs.com/package/@leismore/response>
 */

import { Response } from '@leismore/response';

class AuthorResponse extends Response
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

export { AuthorResponse };
