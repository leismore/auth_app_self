/**
 * get_token function: Get token from the CouchDB by appID
 * @param   {nano-db} db     - Nano database
 * @param   {string}  appID
 * @returns {Promise}        - The result
 */

'use strict';

const CONFIG         = require('../config.json');
const DESIGN_NAME    = CONFIG.couchdb.designName;
const VIEW_NAME      = 'get_token';

async function get_token(db, appID)
{
  return db.view(DESIGN_NAME, VIEW_NAME, {key: appID});
}

module.exports = get_token;
