/**
 * get_token function: Get token from the CouchDB by appID
 */

import { Token_getToken } from './type/View_getToken';
import { AuthenDoc }     from './type/AuthenDoc';
import * as NANO         from 'nano';
import * as CONFIG       from '../config.json';
const DESIGN_NAME    = CONFIG.couchdb.designName;
const VIEW_NAME      = 'get_token';

async function get_token(db:NANO.DocumentScope<AuthenDoc>, appID:string)
  :Promise<NANO.DocumentViewResponse<Token_getToken,AuthenDoc>>
{
  return db.view(DESIGN_NAME, VIEW_NAME, {key: appID});
}

export { get_token };
