/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-17 下午2:27
 */
import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getBlogById} from "../../actions/blogAction";

class BlogShow extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){}

    componentDidMount(){
        const {dispatch} = this.props;
        const id = this.props.match.params.id
        dispatch(getBlogById(id))
    }

    render(){
        const blog = this.props.blog;
        return <div>
            <div>{blog && blog.title}</div>
        </div>
    }
}

export default connect(
    state=>state.blogReducer
)(BlogShow)