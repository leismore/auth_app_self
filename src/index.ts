/**
 * The Main Script of auth_app_self Project
 */

// Import modules
import * as express           from 'express';
import cors                   = require('cors');
import bodyParser             = require('body-parser');
import { corsOrigin }         from './corsOrigin';
import { error_handler_last } from '@leismore/error_handler_last';
import * as authen            from './authen/index';
import * as author            from './author/index';
import * as CONFIG            from './config.json';

const corsOptions:cors.CorsOptions = {
  origin:  corsOrigin,
  methods: ['OPTIONS', 'GET', 'POST']
};

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
app.use( error_handler_last );

// Start server
app.listen( Number(CONFIG.app.port),
            CONFIG.app.host,
            CONFIG.app.backlog,
  () => {
    console.log(
      `[${CONFIG.app.projectName}]` + ` is working on ` +
      `<${CONFIG.app.host}:${CONFIG.app.port}>`
    );
  }
);
