/**
 * @Description combine reducers
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-4-27 下午3:14
 * @Version 1.0.0
 **/
import { combineReducers } from 'redux'
import mirror from './mirrorState'
import server from './serverState'
import userReducer from './usersReducer'
import blogReducer from './blogsReducer'

export default combineReducers({
    mirror,
    server,
    userReducer,
    blogReducer
})
