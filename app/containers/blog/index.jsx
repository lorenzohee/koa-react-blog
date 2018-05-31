/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-9 下午6:01
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Modal, Icon} from 'antd'
import {getBlogList, deleteBlog} from '../../actions/blogAction'
const ReactMarkdown = require('react-markdown')
import './blog.less'
import DateFormatter from '../../common/common-dateformatter'

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
            <div style={{display: 'inline-block', width: '100%'}}>
        	<Link to="/blog/new" style={{float: 'right', margin: '10px', border: '1px solid #dcdcdc', padding: '4px 12px'}}>新建</Link>
                {/*<Button onClick={this.deleteListner} >delete</Button>*/}
            </div>
            {
                blogs && blogs.reverse().map((item, key) => (
                    <div key={key} className='blog_list_item'>
                        <div className='blog_list_item_title'>
                            <Link to={'/blog/show/'+item._id} >{item.title}</Link>
                            <Icon type="delete" onClick={this.deleteListner} id={item._id} className='blog_delete_button' />
                        </div>
                        <div className='blog_list_item_sub_title'>
                            <Icon type="clock-circle-o" /> {DateFormatter({time: (item.create_at|| '')})}
                        </div>
                        <div className='blog_list_item_tags'></div>
                        <div className='blog_list_item_content'>
                            <image src="" />
                            <div className='blog_list_item_content_body'><ReactMarkdown source={item.content+'...'} /></div>
                        </div>
                        <div className='blog_list_item_footer'></div>
                    </div>
                ))
            }
        </div>
    }

    deleteListner(event){
        const deleteId = event.target.id
        const confirm = Modal.confirm;
        const {dispatch} = this.props;
        confirm({
            title: '确认要删除吗？',
            content: '删除后，数据将不可恢复',
            onOk() {
                return dispatch(deleteBlog(deleteId));
            },
            onCancel() {},
        });
    }
}

export default connect(
    state=>state.blogReducer
)(BlogIndex)