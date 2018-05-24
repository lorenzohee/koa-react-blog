/**
 * @Description create new blog page
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-2 下午2:38
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Input, Button} from 'antd'
import {postBlog, postBlogNew} from '../../actions/blogAction'
import './blog.less';

class BlogNew extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const {dispatch, history} = this.props;
        this.props.form.validateFields((err, values)=>{
            if(!err){
                dispatch(postBlog({blog: values, history: history}))
            }
        })
    }

    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(postBlogNew())
    }

    render(){
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 18 },
        };
        const FormItem = Form.Item;
        const { TextArea } = Input;
        const {getFieldDecorator} = this.props.form;
        return <div>
                <Form onSubmit={this.handleSubmit.bind(this)} className="blog-new-form" >
                    <FormItem {...formItemLayout} label="标题">
                        {getFieldDecorator('title',{
                            rules: [{required: true, message: 'Title is required!'}],
                        })(<Input placeholder="Please input blog title." />)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="标签">
                        {getFieldDecorator('tag',{
                            rules: [{required: true, message: 'tags is required!'}],
                        })(<Input placeholder="Please input blog tags." />)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="内容">
                        {getFieldDecorator('content',{
                            rules: [{required: true, message: 'content is required!'}],
                        })(<TextArea placeholder="Please input blog content." rows="10" />)}
                        <Button type='primary' htmlType="submit">Submit</Button>
                    </FormItem>
                </Form>
            </div>
    }

    componentWillUpdate(){
        // this._postBlogSuccess()
    }
    _postBlogSuccess(){
        if(this.props.success && this.props.blog && this.props.blog._id){
            this.props.history.push(`/blogs/${this.props.blog._id}`)
        }
    }
}

export default connect(
    state=>state.blogReducer
)(Form.create()(BlogNew))