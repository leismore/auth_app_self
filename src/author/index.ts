/**
 * The Authorization API -- /api/authorizer
 *
 * @res.locals
 * {
 *   inputs:         {AuthorInputs object}
 * }
 */

'use strict';

exports.post_handler1 = require('./post_handler1');
exports.post_handler2 = require('./post_handler2');
exports.post_handler3 = require('./post_handler3');

exports.get_handler1  = require('./get_handler1');
exports.all_handler1  = require('./all_handler1');
