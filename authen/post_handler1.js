/**
 * POST Handler 1 - Verify Client Input
 */

'use strict';

const AuthenError  = require('../lib/AuthenError');
const AuthenInputs = require('../lib/AuthenInputs');

function post_handler1(req, res, next)
{
  let inputs = null;

  // Test media type
  if ( !req.is('application/json') )
  {
    next( new AuthenError('not application/json', 5, 415) );
    return;
  }

  // Test input data
  try {
    inputs = new AuthenInputs(req.body);
  } catch (e) {
    next(e);
    return;
  }

  // Normalization
  res.locals.AuthenError = AuthenError;
  res.locals.inputs      = inputs;

  next();
}

module.exports = post_handler1;
