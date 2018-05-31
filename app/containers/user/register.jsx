/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-31 下午3:01
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form, Input, Button, Icon} from 'antd'
import {register} from "../../actions/usersAction";

class Register extends Component{
    constructor(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const {dispatch, history} = this.props;
        this.props.form.validateFields((err, values)=>{
            if(!err){
                console.log(values)
                dispatch(register({user: values, history: history}))
            }
        })
    }

    render(){
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 18 },
        };
        const FormItem = Form.Item;
        const {getFieldDecorator} = this.props.form;
        return <div>
            <Form onSubmit={this.handleSubmit.bind(this)} className="blog-new-form" >
                <FormItem {...formItemLayout} label="邮箱">
                    {getFieldDecorator('email',{
                        rules: [{required: true, message: 'Email is required!'}],
                    })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Please input your email." />)}
                </FormItem>
                <FormItem {...formItemLayout} label="密码">
                    {getFieldDecorator('password',{
                        rules: [{required: true, message: 'password is required!'}, {min: 8, message: 'password should more than 8 chars!'}],
                    })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)}
                </FormItem>
                <FormItem {...formItemLayout} label="">
                    <Button type='primary' htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        </div>
    }
}

export default connect(
    state=>state.userReducer
)(Form.create()(Register))