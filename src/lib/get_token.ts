/**
 * get_token function: From get_token view (DB: private_app_authentication).
 */

import { ViewValue_getToken as Value } from './type/db_view_getToken_value';
import { AuthenDoc }                   from './type/db_doc_authen';
import * as NANO                       from 'nano';
import * as CONFIG                     from '../config.json';
const DESIGN_NAME    = CONFIG.couchdb.designName;
const VIEW_NAME      = 'get_token';

async function get_token(db:NANO.DocumentScope<AuthenDoc>, appID:string)
  :Promise<NANO.DocumentViewResponse<Value,AuthenDoc>>
{
  return db.view(DESIGN_NAME, VIEW_NAME, {key: appID});
}

export { get_token };
