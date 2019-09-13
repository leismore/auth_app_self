/**
 * get_permission function: Get permission from the CouchDB by clientID, hostID, permission
 * @param   {nano-db} db         - Nano database
 * @param   {array}   queryKeys  - [clientID, hostID, permission], all strings
 * @returns {Promise}            - The result
 */

'use strict';

const CONFIG         = require('../config.json');
const DESIGN_NAME    = CONFIG.couchdb.designName;
const VIEW_NAME      = 'get_permission';

async function get_permission(db, queryKeys)
{
  return db.view(DESIGN_NAME, VIEW_NAME, {key: queryKeys});
}

module.exports = get_permission;
