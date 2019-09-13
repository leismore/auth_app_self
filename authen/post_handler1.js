/**
 * POST Handler 1 - Verify Client Input
 */

'use strict';

const AuthenError = require('../lib/AuthenError');

function post_handler1(req, res, next)
{
  // Test media type
  if ( !req.is('application/json') )
  {
    next( new AuthenError('not application/json', 5, 415) );
    return;
  }

  // Test appID
  if ( typeof req.body.appID !== 'string' || req.body.appID.length === 0 )
  {
    next( new AuthenError('invalid appID', 8, 415) );
    return;
  }

  // Test token
  if ( typeof req.body.token !== 'string' || req.body.token.length === 0 )
  {
    next( new AuthenError('invalid token', 9, 415) );
    return;
  }

  // Normalization
  res.locals.AuthenError = AuthenError;
  res.locals.inputs      = {
    appID:  String(req.body.appID),
    token:  String(req.body.token)
  };

  next();
}

module.exports = post_handler1;
