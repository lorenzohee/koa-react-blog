/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 2018-04-23 16:04:00
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends Component{
    constructor(props){
        super(props);
        this.state={
            current: 'home'
        };
    }
    componentDidMount(){
        console.log(this.props.location)
    }

    render(){
        const { location: { pathname } } = this.props
        const headerCurrent = pathname === '/' ? 'home' : pathname.slice(1)
        return <div>
            <Menu theme='dark' mode='horizontal' selectedKeys={[headerCurrent]}>
                <Menu.Item key='home'>
                    <Link to='/home'>Home</Link>
                </Menu.Item>
                <Menu.Item key='good'>
                    <Link to={'/good'}>Good</Link>
                </Menu.Item>
                <Menu.Item key="events">
                    <Link to='/events'>
                        <Icon type="bars" />事件通告
                    </Link>
                </Menu.Item>
                <Menu.Item key="server">
                    <Link to='/server'>
                        Server
                    </Link>
                </Menu.Item>
                <Menu.Item key="guide">
                    <Link to='/guide/good'>
                        Guide
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    }
}

export default connect(
    state=> state.mirror
)(Nav)