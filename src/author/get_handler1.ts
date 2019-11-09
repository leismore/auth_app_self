/**
 * Get Handler 1 - READY response.
 */

import * as express from 'express';
import { AuthorResponse } from '../lib/AuthorResponse';

function get_handler1(_req:express.Request, res:express.Response):void
{
  const resp = new AuthorResponse(res);
  resp.send({
    statusCode: '204'
  });
}

export { get_handler1 };
