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

exports.get_handler1  = require('./get_handler1');
exports.all_handler1  = require('./all_handler1');
