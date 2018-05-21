/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-9 下午6:01
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import {getBlogList, deleteBlog} from '../../actions/blogAction'
import './blog.less'

class BlogIndex extends Component{
    constructor(props){
        super(props)
        this.deleteListner = this.deleteListner.bind(this)
    }

    componentWillMount(){}

    componentDidMount(){
    	const {dispatch} = this.props;
    	dispatch(getBlogList())
    }

    render(){
    	const blogs = this.props.blogs;
        return <div>
        	<Link to="/blog/new" style={{display: 'inline-block', margin: '10px 0 10px', border: '1px solid #dcdcdc', padding: '4px 12px'}}>新建</Link>
        	<ul className="index_content">
                {
                    blogs && blogs.reverse().map((item, key) => (
                        <li key={key}>
                            <p><Link to={'/blog/'+item._id} style={{fontSize: '18px'}} >{item.title}</Link> <Icon type="delete" onClick={this.deleteListner} id={item._id} style={{fontSize: '12px'}} />-- {item.content}</p>
                        </li>
                    ))
                }
        	</ul>
        </div>
    }

    deleteListner(event){
        const {dispatch} = this.props;
        dispatch(deleteBlog(event.target.id))
    }
}

export default connect(
    state=>state.blogReducer
)(BlogIndex)