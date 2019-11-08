/**
 * get_token function: Get token from the CouchDB by appID
 */

import { View_getToken } from './type/View_getToken';
import * as NANO         from 'nano';
import * as CONFIG       from '../config.json';
const DESIGN_NAME    = CONFIG.couchdb.designName;
const VIEW_NAME      = 'get_token';

async function get_token(db:NANO.DocumentScope<View_getToken>, appID:string)
  :Promise<NANO.DocumentViewResponse<unknown,View_getToken>>
{
  return db.view(DESIGN_NAME, VIEW_NAME, {key: appID});
}

export { get_token };
