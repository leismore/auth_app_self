/**
 * All Handler 1 - Prevent not-allowed HTTP methods
 */

import * as express from 'express';
import { AuthorError } from '../lib/AuthorError';
const ALLOWED        = ['OPTIONS', 'GET', 'POST'];

function all_handler1(req:express.Request, _res:express.Response, next:express.NextFunction):void
{
  if ( ALLOWED.includes( req.method.toUpperCase() ) === false )
  {
    let error = {message: 'HTTP 405: Method Not Allowed', code: '9'};
    let response = {
      statusCode: '405',
      headers: {'Allow': ALLOWED.join(', ')}
    };
    next( new AuthorError(error, response) );
  }
  else
  {
    next('route');
  }
}

export { all_handler1 };
