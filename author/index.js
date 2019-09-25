/**
 * The Authorization API -- /api/authorizer
 *
 * @res.locals
 * {
 *   AuthorError:    {AuthorError class}
 *   inputs:         {AuthorInputs object}
 *   db:             {nano object}
 * }
 */

'use strict';

exports.post_handler1 = require('./post_handler1');
exports.post_handler2 = require('./post_handler2');
exports.post_handler3 = require('./post_handler3');
