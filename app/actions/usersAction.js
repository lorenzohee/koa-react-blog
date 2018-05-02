/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 2018-04-27 11:31:21
 */
import fetch from 'isomorphic-fetch';

export const USER_LIST_REQUEST = 'USER_LIST_REQUEST';
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS';
export const USER_LIST_FAIL = 'USER_LIST_FAIL';

const fetchUserUrl = typeof(__SERVER__)=='undefined' ? '/api/users' : `http://localhost:${require('../../platforms/common/config').port}/api/users`

function fetchUsers(){
    return dispatch=>{
        dispatch(getUserRequest());
        return fetch(fetchUserUrl)
            .then(res=>res.json())
            .then(data=>{
                if('error' === data.state){
                    const error = new Error(data.errorMsg);
                    error.response = response;
                    throw error;
                }
                dispatch(userListGetSuccess(data.data))
            })
            .catch(e=>{
                dispatch(userListGetFail(e))
            })
    }
}

export function getUserList(state){
    return (dispatch)=>{
        if(!state.loaded){
            return dispatch(fetchUsers())
        }
        return dispatch(userListGetSuccess(state.users))
    }
}

export function getUserRequest(){
    return {
        type: USER_LIST_REQUEST
    }
}

export function userListGetSuccess(users){
    return {
        type: USER_LIST_SUCCESS,
        users: users
    }
}

export function userListGetFail(e){
    return {
        type: USER_LIST_FAIL,
        e
    }
}