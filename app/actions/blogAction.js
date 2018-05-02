/**
 * @Description BLog action
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-2 下午4:59
 */

import fetch from 'isomorphic-fetch';

export const BLOG_POST_REQUEST = 'BLOG_POST_REQUEST';
export const BLOG_POST_SUCCESS = 'BLOG_POST_SUCCESS';
export const BLOG_POST_FAIL = 'BLOG_POST_FAIL';

function postBlogService(blog){
    return dispatch=>{
        dispatch(postBlogRequest());
        fetch('/api/blog', {method: 'POST', body: {title: blog.title, tag: blog.tag, content: blog.content}})
            .then(res=>res.json())
            .then(data=>{
                if('error' === data.state){
                    const error = new Error(data.errorMsg);
                    error.response = response;
                    throw error;
                }
                dispatch(postBlogSuccess(data.data))
            })
            .catch(e=>{
                dispatch(postBlogFail(e))
            })
    }
}

export function postBlog(blog){
    return (dispatch)=>{
        if(!blog.posted){
            return dispatch(postBlogService(blog))
        }
        return dispatch(postBlogSuccess(blog))
    }
}

export function postBlogSuccess(blog) {
    return {
        type: BLOG_POST_SUCCESS,
        blog: blog
    }
}

export function postBlogRequest(){
    return {
        type: BLOG_POST_REQUEST
    }
}

export function postBlogFail() {
    return {
        type: BLOG_POST_FAIL
    }
}