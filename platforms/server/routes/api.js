/**
 * @Description api route
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-4-27 下午2:51
 * @Version 1.0.0
 **/
import Router from 'koa-router'
import mirrorState from '../controllers/stateCtrl'
import serverState from '../controllers/serverCtrl'
import usersCtrl from '../controllers/usersCtrl'
const router = new Router()
router.prefix('/api')

router.get('/state', mirrorState)
router.get('/server', serverState)
router.get('/users', usersCtrl)

export default router
