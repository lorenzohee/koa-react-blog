/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-17 下午2:27
 */
import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {getBlogById} from "../../actions/blogAction";
import {Icon} from 'antd'
import './blog.less'

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
            <div style={{display: 'inline-block', width: '100%'}}>
                <div className='blog_show_title'>
                    {blog && blog.title}
                    <Link to={'/blog/edit/'+(blog && blog._id)}>
                        <Icon type="edit" className='blog_edit_button' />
                    </Link>
                </div>
                <div className='blog_show_content'><ReactMarkdown source={blog && blog.content}/></div>
            </div>
        </div>
    }
}

export default connect(
    state=>state.blogReducer
)(BlogShow)