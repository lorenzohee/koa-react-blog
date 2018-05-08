/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-8 下午4:36
 */

import monk from 'monk'

const db = monk('localhost/myproject')

export async function createBlog(blog){
    return new Promise((resolve, reject)=>{
        var blogCol = db.get('blogs')
        blogCol.insert(blog).then(res=>{
            console.log('db insert success and the blog is: '+res)
            resolve(res)
        })
    })
}