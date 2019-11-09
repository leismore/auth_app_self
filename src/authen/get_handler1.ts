/**
 * Get Handler 1 - READY response.
 */

import * as express from 'express';
import { AuthenResponse } from '../lib/AuthenResponse';

function get_handler1(_req:express.Request, res:express.Response):void
{
  const resp = new AuthenResponse(res);
  resp.send({
    statusCode: '204'
  });
}

export { get_handler1 };
