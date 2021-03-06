/**
 * @Description header file
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-22 下午6:13
 * @Version 1.0.0
 **/
import React, { Component, PropTypes} from 'react'
import { Link } from 'react-router-dom'
import './header.less'
import logo from './logo.png'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer } = Layout;


export default class HeaderNav extends Component {
  render () {
    const { current } = this.props

    return <Layout className="layout">
    <Header>
        <div className='logo'>
          <img src={logo} />
        </div>
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']} style={{lineHeight: '64px'}}>
          <Menu.Item key='1'>Home</Menu.Item>
          <Menu.Item key="events">
              <Link to='/events'>
                  事件通告
              </Link>
          </Menu.Item>
          <Menu.Item key="server">
              <Link to='/server'>
                  Server
              </Link>
          </Menu.Item>
        </Menu>
    </Header>
    </Layout>;
  }
}