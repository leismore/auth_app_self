/**
 * Get Handler 1 - READY response.
 */

'use strict';

const AuthorResponse = require('../lib/AuthorResponse');

module.exports = (req, res) => {
  const resp = new AuthorResponse(res);
  resp.res204();
};
