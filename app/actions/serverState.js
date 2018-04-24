/**
 * @Description server state action
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 2018-04-24 16:54:00
 */
import fetch from 'isomorphic-fetch'

export const SERVER_STATE_REQUEST = 'SERVER_STATE_REQUEST'
export const SERVER_STATE_SUCCEED = 'SERVER_STATE_SUCCEED'
export const SERVER_STATE_FAILED = 'SERVER_STATE_FAILED'

const fetchStateUrl = typeof(__SERVER__)=='undefined'
  ? '/api/server' : `http://localhost:${require('../../platforms/common/config').port}/api/server`

function fetchServerState() {
  return dispatch => {
    dispatch(serverStateRequest())
    return fetch(fetchStateUrl)
      .then(res => res.json())
      .then(data => dispatch(serverStateSucceed(data)))
      .catch(e => dispatch(serverStateFailed(e)))
  }
}

export function fetchServerStateIfNeeded (state) {
  return (dispatch) => {
    if( state && state.server && state.server.loaded ) {
      return dispatch(serverStateSucceed(state.server))
    }
    return dispatch(fetchServerState())
  }
}

export function serverStateRequest () {
  return {
    type: SERVER_STATE_REQUEST
  }
}
export function serverStateSucceed (data) {
  return {
    type: SERVER_STATE_SUCCEED,
    data: data
  }
}
export function serverStateFailed (error) {
  console.log('server state get failed', error)
  return {
    type: SERVER_STATE_FAILED,
    error
  }
}