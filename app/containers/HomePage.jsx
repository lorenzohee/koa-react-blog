/**
 * @Description
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-22 下午6:14
 * @Version 1.0.0
 **/
import React, {Component} from 'react';
import {connect} from 'react-redux';

class HomePage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div>nihao</div>
    }
}

export default connect(
    state => state
)(HomePage)