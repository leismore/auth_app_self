/**
 * The Main Script of auth_app_self Project
 */

'use strict';

// Import modules
const express                  = require('express');
const cors                     = require('cors');
const corsOptions              = {
  origin:  require('./corsOrigin'),
  methods: ['OPTIONS', 'GET', 'POST']
};
const bodyParser               = require('body-parser');
const authen                   = require('./authen/index');
const author                   = require('./author/index');
const CONFIG                   = require('./config.json');
const error_handler_LMError    = require('@leismore/error_handler_lmerror');
const error_handler_Error      = require('@leismore/error_handler_error');

// Init.
let app = express();
app.use( cors(corsOptions), bodyParser.json() );

// Authentication module
const        AUTHEN_URL = CONFIG.api.baseURL + CONFIG.api.authen.url;
app.all(     AUTHEN_URL, authen.all_handler1 );
app.options( AUTHEN_URL, ()=>{} );
app.get(     AUTHEN_URL, authen.get_handler1 );
app.post(    AUTHEN_URL, authen.post_handler1, authen.post_handler2 );

// Authorization module
const        AUTHOR_URL = CONFIG.api.baseURL + CONFIG.api.author.url;
app.all(     AUTHOR_URL, author.all_handler1 );
app.options( AUTHOR_URL, ()=>{} );
app.get(     AUTHOR_URL, author.get_handler1 );
app.post(    AUTHOR_URL, author.post_handler1, author.post_handler2, author.post_handler3 );

// Error handling
app.use( error_handler_LMError, error_handler_Error );

// Start server
app.listen( CONFIG.app.port,
            CONFIG.app.host,
            CONFIG.app.backlog,
  () => {
    console.log(
      `[${CONFIG.app.projectName}]` + ` is working on ` +
      `<${CONFIG.app.host}:${CONFIG.app.port}>`
    );
  }
  
);
