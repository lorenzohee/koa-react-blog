/**
 * @Description
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-22 下午6:14
 * @Version 1.0.0
 **/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Modal, Icon } from 'antd';
const confirm = Modal.confirm;


class HomePage extends Component{
    constructor(props){
        super(props)
    }
    showConfirm() {
        confirm({
            title: 'Do you Want to delete these items?',
            content: 'Some descriptions',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    showDeleteConfirm() {
        confirm({
            title: 'Are you sure delete this task?',
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    render(){
        return <div>nihao
            <Icon type='primary' onClick={this.showDeleteConfirm} type="dashed">
                Delete
            </Icon>
        </div>
    }
}

export default connect(
    state => state
)(HomePage)