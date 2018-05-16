/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-9 下午6:01
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getBlogList} from '../../actions/blogAction'
import './blog.less'

class BlogIndex extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){}

    componentDidMount(){
    	const {dispatch} = this.props;
    	dispatch(getBlogList())
    }

    render(){
    	const blogs = this.props.blogs;
        return <div>
        	<Link to="/blog/new">新建</Link>
        	<ul>
                {
                    blogs && blogs.reverse().map((item, key) => (
                        <li key={key}>
                            <p>{item.title} -- {item.tag}</p>
                        </li>
                    ))
                }
        	</ul>
        </div>
    }
}

export default connect(
    state=>state.blogReducer
)(BlogIndex)