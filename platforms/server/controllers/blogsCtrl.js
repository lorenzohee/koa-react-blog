/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-8 下午4:54
 */

import {createBlog} from '../models/blogsModel'

export async function postBlog(ctx, next){
    console.log("ctx controller body is :"+JSON.stringify(ctx.request))
    const blog = await createBlog(ctx.request.body)
    ctx.body={
        state: 'success',
        data: blog
    }
}