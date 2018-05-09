/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-8 下午4:36
 */

import monk from 'monk'
import {ObjectID} from 'mongodb'

const db = monk('localhost/myproject')

const blogModel = {
    getBlogs: async ()=>{
        return new Promise((resolve, reject)=>{
            var blogCol = db.get('blogs');
            blogCol.find({}, (err, doc)=>{
                resolve(doc);
            })
        })
    },
    createBlog: async (blog)=>{
        return new Promise((resolve, reject)=>{
            var blogCol = db.get('blogs')
            blogCol.insert(JSON.parse(blog)).then(res=>{
                resolve(res)
            })
        })
    },
    getBlogById: async (id)=>{
        return new Promise((resolve, reject)=>{
            var blogCol = db.get('blogs');
            blogCol.findOne({_id: ObjectID(id)}, (err, doc)=>{
                resolve(doc);
            })
        })
    }
}

export default blogModel