/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-9 下午6:01
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

class blogIndex extends Component{
    constructor(props){
        super(props)
    },

    render(){
        return <div>

        </div>
    }
}

export default connect(
    state=>state
)(blogIndex)