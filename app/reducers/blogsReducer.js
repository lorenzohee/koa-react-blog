/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-8 下午3:52
 */

import {BLOG_LIST_REQUEST, BLOG_LIST_SUCCESS, BLOG_LIST_FAIL, BLOG_GET_REQUEST, BLOG_GET_SUCCESS, BLOG_GET_FAIL, BLOG_POST_REQUEST, BLOG_POST_SUCCESS, BLOG_POST_FAIL} from '../actions/blogAction'

export default (state={}, action)=>{
    switch (action.type){
        case BLOG_LIST_REQUEST:
            return {...state, loaded: false}
        case BLOG_LIST_SUCCESS:
            return {...state, loaded: true, success: true, blogs: action.data}
        case BLOG_LIST_FAIL:
            return {...state, loaded: true, success: false, error: action.error}
        case BLOG_GET_REQUEST:
            return {...state, loaded: false}
        case BLOG_GET_SUCCESS:
            return {...state, loaded: true, success: true, blog: action.data}
        case BLOG_GET_FAIL:
            return {...state, loaded: true, success: false, error: action.error}
        case BLOG_POST_REQUEST:
            return {...state, loaded: false}
        case BLOG_POST_SUCCESS:
            return {...state, loaded: true, success: true, blog: action.data}
        case BLOG_POST_FAIL:
            return {...state, loaded: true, success: false, error: action.error }
        default:
            return state
    }
}