/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-17 下午2:27
 */
import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getBlogById} from "../../actions/blogAction";
const ReactMarkdown = require('react-markdown')

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
            <div className='' style={{textAlign: 'center'}}>
                <h2>{blog && blog.title}</h2>
            </div>
            <div><ReactMarkdown source={blog && blog.content}/></div>
        </div>
    }
}

export default connect(
    state=>state.blogReducer
)(BlogShow)