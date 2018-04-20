/**
 * Created at 16/5/17.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import React, { Component, PropTypes} from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import './header.less'
import logo from './logo.png'


export default class Header extends Component {
  render () {
    const { current } = this.props

    return <header id="header" className="clearfix">
      <div className="logo">
        <img src={logo} />
      </div>
      <h2>Lorenzo · ho</h2>
      <Menu mode="horizontal" selectedKeys={[current]} theme='dark' style={{width: 256}} mode="inline">
        <Menu.Item key="home">
            <Icon type='pie-chart'/>
          <Link to='/'>
          首页
          </Link>
        </Menu.Item>
          <Menu.Item key="events">
              <Link to='/events'>
                  事件通告
              </Link>
          </Menu.Item>
          <Menu.Item key="events">
              <Link to='/server'>
                  Server
              </Link>
          </Menu.Item>
      </Menu>
    </header>;
  }
}