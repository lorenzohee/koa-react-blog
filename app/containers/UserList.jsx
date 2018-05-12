/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time $
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserList} from '../actions/usersAction'
import { Row, Col, Timeline } from 'antd';
const TimelineItem = Timeline.Item;

class UserList extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(getUserList(this.props))
    }

    render(){
        if(!this.props.loaded){
            return <div>加载中...</div>
        }
        if(!this.props.success){
            return <div>获取数据失败</div>
        }
        const users = this.props.users
        return (<Row className="page-events">
                <Col offset="4">
                    <h2># 用户列表</h2>
                    <Timeline>
                        {
                            users && users.reverse().map((event, key) => (
                                <TimelineItem key={key}>
                                    <p>{event.name} -- {event.email}</p>
                                </TimelineItem>
                            ))
                        }
                    </Timeline>
                </Col>
            </Row>)
    }
}

export default connect(
    state=>state.userReducer
)(UserList)