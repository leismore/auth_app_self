/**
 * POST Handler 1 - Verify Client Input
 */

'use strict';

const AuthorError    = require('../lib/AuthorError');
const AuthorInputs   = require('../lib/AuthorInputs');

function post_handler1(req, res, next)
{
  let inputs = null;

  // Test media type
  if ( !req.is('application/json') )
  {
    next( new AuthorError('not application/json', 5, 415) );
    return;
  }

  // Test input data
  try {
    inputs = new AuthorInputs( req.get('Authorization'), req.body );
  } catch (e) {
    next(e);
    return;
  }

  // Next
  res.locals.AuthorError = AuthorError;
  res.locals.inputs      = inputs;
  next();
}

module.exports = post_handler1;
