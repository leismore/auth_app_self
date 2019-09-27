/**
 * All Handler 1 - Prevent not-allowed HTTP methods
 */

'use strict';

const AuthorResponse = require('../lib/AuthorResponse');
const ALLOWED        = ['OPTIONS', 'GET', 'POST'];

module.exports = (req, res) => {

  const resp = new AuthorResponse(res);

  if ( ALLOWED.includes(req.method.toUpperCase()) === false )
  {
    resp.res405(ALLOWED);
  }
  else
  {
    next('route');
  }
};
