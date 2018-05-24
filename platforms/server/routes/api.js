/**
 * @Description api route
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-4-27 下午2:51
 * @Version 1.0.0
 **/
import Router from 'koa-router'
import serverState from '../controllers/serverCtrl'
import usersCtrl from '../controllers/usersCtrl'
import {getBlogs, postBlog, getBlogById, deleteById, updateBlogById} from "../controllers/blogsCtrl";
import koaBody from 'koa-body'

const router = new Router()
router.prefix('/api')

router.get('/server', serverState)
router.get('/users', usersCtrl)
router.post('/blog/create', koaBody(), postBlog)
router.get('/blog/:id', getBlogById)
router.get('/blogs', getBlogs)
router.del('/blog/:id', deleteById)
router.put('/blog/edit/:id', koaBody(), updateBlogById)

export default router
