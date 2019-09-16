/**
 * The Authentication API -- /api/authenticator
 *
 * @res.locals
 * {
 *   AuthenError:    {AuthenError}
 *   inputs:         {AuthenInputs object}
 *   db:             {nano}
 * }
 */

'use strict';

exports.post_handler1 = require('./post_handler1');
exports.post_handler2 = require('./post_handler2');
