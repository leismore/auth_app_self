/**
 * POST Handler 2 - Authentication
 */

import * as express                           from 'express';
import {default as axios, AxiosRequestConfig} from 'axios';
import { AuthorError }                        from '../lib/AuthorError';
import { AuthorInputs }                       from '../lib/AuthorInputs';
import * as CONFIG                            from '../config.json';
const API = 'https://' + CONFIG.app.domain + CONFIG.api.baseURL + CONFIG.api.authen.url;

function post_handler2(_req:express.Request, res:express.Response, next:express.NextFunction):void
{
  const inputs:AuthorInputs = res.locals.inputs;
  const axiosConfig:AxiosRequestConfig = {
    url:        API,
    method:     'POST',
    data:       {
      appID: inputs.credential.appID,
      token: inputs.credential.token
    },
    timeout:    CONFIG.api.author.timeout
  };

  axios(axiosConfig).then( r => {
    if (r.data.result === true)
    {
      next();
      return;
    }
    else
    {
      let error = {message: 'authentication failure', code: '4'};
      let response = {statusCode: '403'};
      next( new AuthorError(error, response) );
      return;
    }
  })
  .catch( e => {
    let error = {message: 'authentication server failure', code: '10'};
    let response = {statusCode: '500'};
    next( new AuthorError(error, response, e) );
    return;
  });
}

export { post_handler2 };
