/**
 * POST Handler 2 - Authentication
 */

'use strict';

const CONFIG = require('../config.json');
const axios  = require('axios');
const API    = 'https://' + CONFIG.app.domain + CONFIG.api.baseURL + CONFIG.api.authen.url;

function post_handler2(req, res, next)
{
  const inputs      = res.locals.inputs;
  const AuthorError = res.locals.AuthorError;
  const axiosConfig = {
    url:        API,
    method:     'post',
    data:       {
      appID: inputs.credential.appID,
      token: inputs.credential.token
    },
    timeout:    CONFIG.api.authen.timeout
  };

  axios(axiosConfig).then( r=> {
    if (r.data.result === true)
    {
      next();
      return;
    }
    else
    {
      next( new AuthorError('authentication failure', 8, 403) );
      return;
    }
  })
  .catch( e => {
    next( new AuthorError('authentication failure', 8, 500, e) );
    return;
  });
}

module.exports = post_handler2;
