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

const {Header} = Layout;

class Nav extends Component{
    state={
        current: 'home'
    };
    componentDidMount(){
        console.log(this.props.location)
    }

    handleClick=(e)=>{
        this.setState({
            current: e.key
        })
    }

    render(){
        return <Header>
            <Menu theme='dark' mode='horizontal' onClick={this.handleClick} selectedKeys={[this.state.current]}>
                <Menu.Item key='home'>Home</Menu.Item>
                <Menu.Item key='good'>Good</Menu.Item>
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
        </Header>
    }
}

export default connect(
    state=> state
)(Nav)