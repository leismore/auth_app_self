import { assert }       from 'chai';
import axios            from 'axios';
import * as APP_CONFIG  from '../src/config.json';
import * as TEST_CONFIG from './config.json';

const API = APP_CONFIG.app.ssl ?
  ( `https://${APP_CONFIG.app.domain}:${APP_CONFIG.app.publicPort}${APP_CONFIG.api.baseURL}${APP_CONFIG.api.authen.url}` ) :
  (  `http://${APP_CONFIG.app.domain}:${APP_CONFIG.app.publicPort}${APP_CONFIG.api.baseURL}${APP_CONFIG.api.authen.url}` );

describe('@leismore/auth_app_self - Authentication', function(){

  it('Tester: Host', function(){
    return axios.post
    (
      API,
      { appID: TEST_CONFIG.tester_host.appID,
        token: TEST_CONFIG.tester_host.token
      }
    )
    .then( res => {
      assert
      (
        ( res.status      === 200  &&
          res.data.result === true &&
          String(res.headers['content-type']).includes('application/json')
        ),
        'Returns incorrect content'
      );
    })
    .catch( e => {
      assert(false, 'Returns failure');
    });
  });

  it('Tester: Host - should fail with an invalid token', function(){
    return axios.post
    (
      API,
      { appID: TEST_CONFIG.tester_host.appID,
        token: 'abcdefg'
      }
    )
    .then( res => {
      assert
      (
        ( res.status      === 200  &&
          res.data.result === false &&
          String(res.headers['content-type']).includes('application/json')
        ),
        'Returns incorrect content'
      );
    })
    .catch( e => {
      assert(false, 'Returns failure');
    });
  });

  it('Tester: Client', function(){
    return axios.post
    (
      API,
      { appID: TEST_CONFIG.tester_client.appID,
        token: TEST_CONFIG.tester_client.token
      }
    )
    .then( res => {
      assert
      (
        ( res.status      === 200  &&
          res.data.result === true &&
          String(res.headers['content-type']).includes('application/json')
        ),
        'Returns incorrect content'
      );
    })
    .catch( e => {
      assert(false, 'Returns failure');
    });
  });

  it('Tester: Client - should fail with an invalid token', function(){
    return axios.post
    (
      API,
      { appID: TEST_CONFIG.tester_client.appID,
        token: 'jfowjefowe'
      }
    )
    .then( res => {
      assert
      (
        ( res.status      === 200  &&
          res.data.result === false &&
          String(res.headers['content-type']).includes('application/json')
        ),
        'Returns incorrect content'
      );
    })
    .catch( e => {
      assert(false, 'Returns failure');
    });
  });

});
