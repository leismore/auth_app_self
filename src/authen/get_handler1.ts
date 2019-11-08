/**
 * Get Handler 1 - READY response.
 */

'use strict';

const AuthenResponse = require('../lib/AuthenResponse');

module.exports = (req, res) => {
  const resp = new AuthenResponse(res);
  resp.res204();
};
