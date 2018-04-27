/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-4-27 下午3:10
 */
import {USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAIL} from '../actions/usersAction';

export default (state={}, action)=>{
    switch (action.type){
        case USER_LIST_REQUEST:
            return {...state, loaded: false}
        case USER_LIST_SUCCESS:
            return { ...state, loaded: true, success: true, users: action.users }
        case USER_LIST_FAIL:
            return { ...state, loaded: true, success: false, error: action.error }
        default:
            return state
    }
}