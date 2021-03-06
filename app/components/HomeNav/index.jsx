/**
 * @Description nav file
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-22 下午6:13
 * @Version 1.0.0
 **/
import React, { Component, PropTypes } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';
const { SubMenu } = Menu;

export default class extends Component {
  render () {
    const { guides, loaded, current } = this.props
    if (!loaded) {
      return <Icon type="loading" />;
    }
    return (<Menu className="menu"
                  defaultOpenKeys={['guides']}
                  selectedKeys={[current]}
                  mode="inline">
      <Menu.Item key="mirrorState">
        <Link to="/">
          <Icon type="bars" />镜像列表</Link>
      </Menu.Item>
      <SubMenu key="guides"
               title={<span>
                 <Icon type="info-circle-o" />
                 <span>使用说明</span>
               </span>}>
        {
          guides.map(item => {
            return (<Menu.Item key={`guide-${item.universalName}`}>
              <Link to={`/guide/${item.universalName}`}>{item.universalName}</Link>
            </Menu.Item>)
          })
        }
      </SubMenu>
      <Menu.Item key="server">
        <Link to="/server">
          <Icon type="hdd" />服务器状态</Link>
      </Menu.Item>
    </Menu>);
  }
}
