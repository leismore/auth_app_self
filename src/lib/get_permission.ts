/**
 * get_permission function: From get_permission view (DB: private_app_authorization).
 */

import { ViewKey_getPermission as Key } from './type/db_view_getPermission_key';
import { AuthorDoc }                    from './type/db_doc_author';
import NANO                           = require('nano');
import * as CONFIG                      from '../config.json';
const DESIGN_NAME    = CONFIG.couchdb.designName;
const VIEW_NAME      = 'get_permission';

/**
 * @param  queryKeys - [clientID, hostID, permission], all strings
 */
async function get_permission(db:NANO.DocumentScope<AuthorDoc>, queryKeys:Key)
  :Promise<NANO.DocumentViewResponse<boolean,AuthorDoc>>
{
  return db.view(DESIGN_NAME, VIEW_NAME, {key: queryKeys});
}

export { get_permission };
