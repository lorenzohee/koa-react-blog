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
            let blog_init = JSON.parse(blog);
            blog_init.create_at = (new Date()).getTime();
            blogCol.insert(blog_init).then(res=>{
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
    },
    deleteById: async (id)=>{
        return new Promise((resolve, reject)=>{
            var blogCol = db.get('blogs');
            blogCol.findOne({_id: ObjectID(id)}, (err, doc)=>{
                blogCol.remove({_id: ObjectID(id)}, ()=>{
                    resolve(doc);
                })
            })
        })
    },
    updateBlog: async (id, blog)=>{
        return new Promise((resolve, reject)=>{
            var blogCol = db.get('blogs');
            let blog_init = JSON.parse(blog);
            blog_init.update_at = (new Date()).getTime();
            blogCol.findOne({_id: ObjectID(id)}, (err, doc)=>{
                blogCol.update(doc, blog_init).then(
                    res=>{
                        resolve(doc)
                    }
                ).catch(e=>reject(e))
            })
        })
    }
}

export default blogModel