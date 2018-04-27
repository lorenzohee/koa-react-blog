/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time $
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserList} from '../actions/usersAction'

class UserList extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const {dispatch} = this.props;
        console.log('get user list container');
        dispatch(getUserList(this.props))
    }

    render(){
        console.log('!!!!!!!+ this props'+JSON.stringify(this.props))
        if(!this.props.loaded){
            return <div>加载中...</div>
        }
        if(!this.props.success){
            return <div>获取数据失败</div>
        }
        const users = this.props.users
        return <div>
            {JSON.stringify(users)}
        </div>
    }
}

export default connect(
    state=>state.userReducer
)(UserList)