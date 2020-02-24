/**
 * All Handler 1 - Prevent not-allowed HTTP methods
 */

import { AuthenError }             from '../lib/AuthenError';
import { generator, gen_response } from '@leismore/all_handler';
const ALLOWED        = ['OPTIONS', 'GET', 'POST'];
const ERROR          = new AuthenError({message: 'HTTP 405: Method Not Allowed', code: '6'}, gen_response(ALLOWED));
const all_handler1   = generator(ALLOWED, ERROR);

export { all_handler1 };
