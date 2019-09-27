/**
 * All Handler 1 - Prevent not-allowed HTTP methods
 */

'use strict';

const AuthenResponse = require('../lib/AuthenResponse');
const ALLOWED        = ['OPTIONS', 'GET', 'POST'];

module.exports = (req, res) => {

  const resp = new AuthenResponse(res);

  if ( ALLOWED.includes(req.method.toUpperCase()) === false )
  {
    resp.res405(ALLOWED);
  }
};
