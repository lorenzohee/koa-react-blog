/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-22 下午6:51
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form, Input, Button} from 'antd'
import {getBlogById, editBlog, postBlog} from '../../actions/blogAction'
import './blog.less';

class BlogEdit extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this)
    }


    componentWillMount(){}

    componentDidMount(){
        const {dispatch} = this.props;
        const id = this.props.match.params.id
        dispatch(getBlogById(id))
    }

    handleSubmit(e){
        e.preventDefault();
        const {dispatch, history, blog} = this.props;
        this.props.form.validateFields((err, values)=>{
            if(!err){
                dispatch(editBlog({blog: values, history: history, id: blog._id}))
            }
        })
    }

    render(){
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 18 },
        };
        const blog = this.props.blog;
        const FormItem = Form.Item;
        const { TextArea } = Input;
        const {getFieldDecorator} = this.props.form;
        return <div>
            <Form onSubmit={this.handleSubmit.bind(this)} className="blog-new-form" >
                <FormItem {...formItemLayout} label="标题">
                    {getFieldDecorator('title',{initialValue: (blog && blog.title)},{
                        rules: [{required: true, message: 'Title is required!'}],
                    })(<Input placeholder="Please input blog title." />)}
                </FormItem>
                <FormItem {...formItemLayout} label="标签">
                    {getFieldDecorator('tags',{initialValue: (blog && blog.tags)},{
                        rules: [{required: true, message: 'tags is required!'}],
                    })(<Input placeholder="Please input blog tags."  />)}
                </FormItem>
                <FormItem {...formItemLayout} label="内容">
                    {getFieldDecorator('content',{initialValue: (blog && blog.content)},{
                        rules: [{required: true, message: 'content is required!'}],
                    })(<TextArea placeholder="Please input blog content." rows="10" />)}
                    <Button type='primary' htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        </div>
    }
}

export default connect(
    state=>state.blogReducer
)(Form.create()(BlogEdit))