/**
 * All Handler 1 - Prevent not-allowed HTTP methods
 */

import { AuthorError }             from '../lib/AuthorError';
import {
    all_handler_generator            as generator,
    all_handler_LMErrorRes_generator as gen_response } from '@leismore/all_handler';
const ALLOWED        = ['OPTIONS', 'GET', 'POST', 'HEAD'];
const ERROR          = new AuthorError({message: 'HTTP 405: Method Not Allowed', code: '8'}, gen_response(ALLOWED));
const all_handler1   = generator(ALLOWED, ERROR);

export { all_handler1 };
