/**
 * The Authentication API -- /api/authenticator
 *
 * @res.locals
 * {
 *   inputs:         {AuthenInputs object}
 * }
 */

import { all_handler1 }  from './all_handler1';
import { get_handler1 }  from './get_handler1';
import { post_handler1 } from './post_handler1';
import { post_handler2 } from './post_handler2';

export { all_handler1, get_handler1, post_handler1, post_handler2 };
