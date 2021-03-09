import { assert }       from 'chai';
import axios            from 'axios';
import * as APP_CONFIG  from '../src/config.json';
import * as TEST_CONFIG from './config.json';

const API = APP_CONFIG.app.ssl ?
  ( `https://${APP_CONFIG.app.domain}:${APP_CONFIG.app.publicPort}${APP_CONFIG.api.baseURL}${APP_CONFIG.api.author.url}` ) :
  (  `http://${APP_CONFIG.app.domain}:${APP_CONFIG.app.publicPort}${APP_CONFIG.api.baseURL}${APP_CONFIG.api.author.url}` );

describe('@leismore/auth_app_self - Authorization', function(){

  it('test_permission_1', function(){
    return axios.post
    (
      API,
      {
        hostID:     TEST_CONFIG.tester_host.appID,
        permission: TEST_CONFIG.permissions[0]
      },
      {
        auth: { username: TEST_CONFIG.tester_client.appID,
                password: TEST_CONFIG.tester_client.token }
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

  it('test_permission_2', function(){
    return axios.post
    (
      API,
      {
        hostID:     TEST_CONFIG.tester_host.appID,
        permission: TEST_CONFIG.permissions[1]
      },
      {
        auth: { username: TEST_CONFIG.tester_client.appID,
                password: TEST_CONFIG.tester_client.token }
      }
    )
    .then( res => {
      assert
      (
        ( res.status      === 200   &&
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
