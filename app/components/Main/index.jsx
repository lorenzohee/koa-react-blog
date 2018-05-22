/**
 * @Description main file
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-22 下午6:13
 * @Version 1.0.0
 **/
import React, { Component } from 'react';

import './main.less'
export default class Main extends Component {
  render() {
    return (<div className="main-wrapper">{this.props.children}</div>);
  }
}
