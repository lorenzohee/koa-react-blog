/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-8 下午3:52
 */

import {BLOG_POST_REQUEST, BLOG_POST_SUCCESS, BLOG_POST_FAIL} from '../actions/blogAction'

export default (state={}, action)=>{
    switch (action.type){
        case BLOG_POST_REQUEST:
            return {...state, loaded: false}
        case BLOG_POST_SUCCESS:
            return {...state, loaded: true, success: true, blog: action.blog}
        case BLOG_POST_FAIL:
            return {...state, loaded: true, success: false, error: action.error }
        default:
            return state
    }
}