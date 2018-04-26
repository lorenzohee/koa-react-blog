/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time $
 */
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