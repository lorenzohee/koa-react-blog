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
export const USER_POST_REQUEST = 'USER_POST_REQUEST';
export const USER_POST_SUCCESS = 'USER_POST_REQUEST';
export const USER_POST_FAIL = 'USER_POST_FAIL';
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

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

function fetchRegister(object){
    const user = object.user
    return dispatch=>{
        dispatch(userPostRequest());
        return fetch('/api/users/register', {method: 'POST', body: JSON.stringify(user)})
            .then(res=>res.json())
            .then(data=>{
                if('error' === data.state){
                    const error = new Error(data.errorMsg);
                    error.response = response;
                    throw error;
                }
                object.history.push(`/blogs`)
            })
            .catch(e=>{
                dispatch(userPostFail(e))
            })
    }
}

function fetchLogin(object) {
    const user = object.user
    return dispatch=>{
        dispatch(loginRequest());
        return fetch('/api/users/login', user)
            .then(res=>res.json())
            .then(data=>{
                if('error' === data.state){
                    const error = new Error(data.errorMsg);
                    error.response = response;
                    throw error;
                }
                object.history.push(`/users`)
            })
            .catch(e=>{
                dispatch(loginFail(e))
            })
    }
}

export function login(object){
    return (dispatch)=>{
        return dispatch(fetchLogin(object))
    }
}

export function register(object){
    return dispatch=>{
        return dispatch(fetchRegister(object))
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

export function userPostRequest(){
    return {
        type: USER_POST_REQUEST
    }
}

export function userPostSuccess(user){
    return {
        type: USER_POST_SUCCESS,
        data: user
    }
}

export function userPostFail(e){
    return {
        type: USER_POST_FAIL,
        error: e
    }
}

export function loginRequest(){
    return {
        type: USER_LOGIN_REQUEST
    }
}

export function loginSucess(user){
    return {
        type: USER_LOGIN_SUCCESS,
        data: user
    }
}

export function loginFail(e){
    return {
        type: USER_LOGIN_FAIL,
        error: e
    }
}