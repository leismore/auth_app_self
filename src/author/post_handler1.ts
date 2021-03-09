/**
 * POST Handler 1 - Verify Client Input
 */

import express        = require('express');
import { AuthorError }  from '../lib/AuthorError';
import { AuthorInputs } from '../lib/AuthorInputs';

function post_handler1(req:express.Request, res:express.Response, next:express.NextFunction):void
{
  let inputs:AuthorInputs;

  // Test media type
  if ( req.is('application/json') === false )
  {
    let error = {message: 'not application/json', code: '1'};
    let response = {statusCode: '415'};
    next( new AuthorError(error, response) );
    return;
  }

  // Test input data
  try {
    let httpAuthor = req.get('Authorization');
    if (httpAuthor === undefined)
    {
      let error = {message: 'invalid credential', code: '5'};
      let response = {statusCode: '415'};
      throw new AuthorError(error, response);
    }
    inputs = new AuthorInputs( httpAuthor, req.body );
  } catch (e) {
    next(e);
    return;
  }

  // Next
  res.locals.inputs      = inputs;
  next();
}

export { post_handler1 };
