/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-8 下午4:54
 */

import blogModel from '../models/blogsModel'

export async function postBlog(ctx){
    const blog = await blogModel.createBlog(ctx.request.body)
    ctx.body=blog
}

export async function getBlogById(ctx){
    const blog = await blogModel.getBlogById(ctx.params.id);
    ctx.body=blog
}

export async function getBlogs(ctx) {
    const blogs = await blogModel.getBlogs();
    ctx.body=blogs;
}

export async function deleteById(ctx) {
    const blog = await blogModel.deleteById(ctx.params.id);
    ctx.body=blog
}