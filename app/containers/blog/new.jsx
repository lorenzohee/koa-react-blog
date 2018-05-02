/**
 * @Description create new blog page
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-2 下午2:38
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Input, Button} from 'antd'
import './blog.less';

class BlogNew extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields({first: true}, (err, values)=>{
            if(!err){
                console.log('Received values of form:', values);
            }
        })
    }

    render(){
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 8 },
        };
        const FormItem = Form.Item;
        const { TextArea } = Input;
        const {getFieldDecorator} = this.props.form;
        return <Form onSubmit={this.handleSubmit.bind(this)} className="blog-new-form" >
            <FormItem {...formItemLayout} label="标题">
                {getFieldDecorator('title',{
                    rules: [{required: true, message: 'Title is required!'}],
                })(<Input placeholder="Please input blog title." />)}
            </FormItem>
            <FormItem {...formItemLayout} label="标签">
                {getFieldDecorator('tags',{
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
    }
}

export default connect(
    state=>state
)(Form.create()(BlogNew))