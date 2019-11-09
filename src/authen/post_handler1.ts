/**
 * POST Handler 1 - Verify Client Input
 */

import * as express     from 'express';
import { AuthenError }  from '../lib/AuthenError';
import { AuthenInputs } from '../lib/AuthenInputs';

function post_handler1(req:express.Request, res:express.Response, next:express.NextFunction):void
{
  let inputs:AuthenInputs;

  // Test media type
  if ( req.is('application/json') === false )
  {
    let error = {message: 'not application/json', code: '1'};
    let response = {
      statusCode: '415'
    };
    next( new AuthenError(error, response) );
    return;
  }

  // Test input data
  try {
    inputs = new AuthenInputs({
      appID: req.body.appID,
      token: req.body.token
    });
  } catch (e) {
    next(e);
    return;
  }

  // Normalization
  res.locals.inputs      = inputs;

  next();
}

export { post_handler1 };
