/**
 * get_permission function: Get permission from the CouchDB by clientID, hostID, permission
 */

import { View_getPermission }     from './type/View_getPermission';
import { View_getPermission_key } from './type/View_getPermission_key';
import * as NANO                  from 'nano';
import * as CONFIG                from '../config.json';
const DESIGN_NAME    = CONFIG.couchdb.designName;
const VIEW_NAME      = 'get_permission';

/**
 * @param  queryKeys - [clientID, hostID, permission], all strings
 */
async function get_permission(db:NANO.DocumentScope<View_getPermission>, queryKeys:View_getPermission_key)
  :Promise<NANO.DocumentViewResponse<unknown,View_getPermission>>
{
  return db.view(DESIGN_NAME, VIEW_NAME, {key: queryKeys});
}

export { get_permission };
