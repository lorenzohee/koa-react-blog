/**
 * @Description nav page
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 2018-04-23 16:04:00
 */
import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
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

    }

    render(){
        const { location: { pathname } } = this.props
        const headerCurrent = pathname === '/' ? 'home' : pathname.slice(1)
        return <div>
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['home']} selectedKeys={[headerCurrent]}>
                <Menu.Item key='home'>
                    <Link to='/home'>Home</Link>
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
                <Menu.Item key="users">
                    <Link to='/users'>
                        Users
                    </Link>
                </Menu.Item>
                <Menu.Item key="blogs">
                    <Link to='/blogs'>
                        Blogs
                    </Link>
                </Menu.Item>
                <Menu.Item key="login">
                    <Link to='/login'>
                        Login
                    </Link>
                </Menu.Item>
                <Menu.Item key="register">
                    <Link to='/register'>
                        Register
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    }
}

export default connect(
    state=> state
)(Nav)