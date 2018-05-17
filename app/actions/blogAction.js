/**
 * @Description BLog action
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-2 下午4:59
 */
import fetch from 'isomorphic-fetch';

export const BLOG_LIST_REQUEST = 'BLOG_LIST_REQUEST';
export const BLOG_LIST_SUCCESS = 'BLOG_LIST_SUCCESS';
export const BLOG_LIST_FAIL = 'BLOG_LIST_FAIL';
export const BLOG_GET_REQUEST = 'BLOG_GET_REQUEST';
export const BLOG_GET_SUCCESS = 'BLOG_GET_SUCCESS';
export const BLOG_GET_FAIL = 'BLOG_GET_FAIL';
export const BLOG_POST_REQUEST = 'BLOG_POST_REQUEST';
export const BLOG_POST_SUCCESS = 'BLOG_POST_SUCCESS';
export const BLOG_POST_FAIL = 'BLOG_POST_FAIL';

function getBlogListService(){
    return dispatch=>{
        dispatch(getBlogListRequest());
        fetch('/api/blogs')
            .then(res=>res.json())
            .then(data=>{
                if('error'===data.state){
                    const error = new Error(data.errorMsg);
                    error.response = response;
                    throw error;
                }
                dispatch(getBlogListSuccess(data.data))
            })
            .catch(e=>{
                dispatch(getBlogListFail(e))
            })
    }
}

function getBlogByIdService(id){
    return dispatch=>{
        dispatch(getBlogByIdRequest());
        fetch('/api/blog/'+id)
            .then(res=>res.json())
            .then(data=>{
                if('error'===data.state){
                    const error = new Error(data.errorMsg);
                    error.response = response;
                    throw error;
                }
                dispatch(getBlogByIdSuccess(data.data))
            })
            .catch(e=>{
                dispatch(getBlogByIdFail(e))
            })
    }
}

function postBlogService(blog){
    return dispatch=>{
        dispatch(postBlogRequest());
        fetch('/api/blog/create', {method: 'POST', body: JSON.stringify({title: blog.title, tag: blog.tag, content: blog.content})})
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

export function getBlogList(){
    return dispatch => {
        return dispatch(getBlogListService());
    }
}

export function getBlogById(id){
    return dispatch=>{
        return dispatch(getBlogByIdService(id))
    }
}

export function getBlogListRequest(){
    return {
        type: BLOG_LIST_REQUEST
    }
}

export function getBlogListSuccess(blogs){
    return {
        type: BLOG_LIST_SUCCESS,
        data: blogs
    }
}

export function getBlogListFail(e){
    return {
        type: BLOG_LIST_FAIL
    }
}

export function getBlogByIdRequest(){
    return {
        type: BLOG_GET_REQUEST
    }
}

export function getBlogByIdSuccess(blog){
    return {
        type: BLOG_GET_SUCCESS,
        data: blog
    }
}

export function getBlogByIdFail(e){
    return {
        type: BLOG_GET_FAIL,
        error: e
    }
}

export function postBlogSuccess(blog) {
    return {
        type: BLOG_POST_SUCCESS,
        data: blog
    }
}

export function postBlogRequest(){
    return {
        type: BLOG_POST_REQUEST
    }
}

export function postBlogFail(e) {
    return {
        type: BLOG_POST_FAIL,
        error: e
    }
}