/**
 * @Description footer file
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-22 下午6:13
 * @Version 1.0.0
 **/
import React, { Component } from 'react';
import { Col, Row } from 'antd';

import './footer.less';

export default class FooterPage extends Component {
  render () {
    return (<footer id="footer">
      <Row className="footer-content">
        <Col span="6" style={{padding: '5px 2% 15px'}}>
          <h2>Github</h2>
          <a target="_blank" href="https://github.com/lorenzohee/koa-react-blog">仓库</a>
        </Col>
        <Col span="6" style={{padding: '5px 2% 15px'}}>
          <h2>关于我</h2>
          <a target="_blank" href="##">Lorenzo ho</a>
        </Col>
        <Col span="6" style={{padding: '5px 2% 15px'}}>
          <h2>联系我</h2>
          <a target="_blank" href="https://github.com/lorenzohee/koa-react-blog/issues">Bug 反馈</a> ||
          <a target="_blank" href="mailto://yongqinghee@163.com" style={{margin:10}}>Email</a>
          <a target="_blank" href="https://www.telegram.me/zfox49"></a>
        </Col>
        <Col span="6" style={{padding: '5px 2% 15px'}}>
          <div style={{marginTop: '15px'}}></div>
          <div style={{marginTop: '5px'}}></div>
        </Col>
      </Row>
    </footer>);
  }
}
