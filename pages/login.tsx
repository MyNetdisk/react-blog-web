/** @format */

import React from 'react'
import {Form, Input, Button, Checkbox, message} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import axios from 'axios'
import servicePath from '../config/apiUrl'

const Login = () => {
  const key = 'updatable'

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
    let dataProps = {
      username: null,
      password: null,
    }
    dataProps.username = values.username
    dataProps.password = values.password
    message.loading({ content: '登录中...', key })
    axios({
      method: 'post',
      url: servicePath.login,
      data: dataProps,
      withCredentials: true,
    }).then(res => {
      if(res.data.isSuccess){
        message.success({ content: '登录成功!', key})
      }else {
        message.error({ content: '用户名或密码错误', key})
      }
    })
  }
  
  // const onValuesChange = (values: any) => {
  //   console.log('hello', values)
  // }

  return (
    <div className="login">
      <div className="login-bg"></div>
      <div className="login-form">
        <Form
          layout="vertical"
          name="normal_login"
          className="login-form"
          initialValues={{remember: true}}
          onFinish={onFinish}
          // onValuesChange={onValuesChange}
          >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{required: true, message: '请输入您的用户名!'}]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} />
          </Form.Item>
          <Form.Item
            label="登录密码"
            name="password"
            rules={[{required: true, message: '请输入您的密码!'}]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              忘记密码？
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            或 <a href="/register">注册</a>
          </Form.Item>
        </Form>
      </div>
      <style jsx>{`
        .login-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
          background-image: url('/static/img/bg-wall2.jpg');
          background-size: cover;
          background-position: center center;
        }
        .login-form {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 350px;
          margin-left: -175px;
          margin-top: -235px;
          background-color: #fff;
          padding: 30px;
          border-radius: 8px;
        }
        #components-form-demo-normal-login .login-form {
          max-width: 300px;
        }
        #components-form-demo-normal-login .login-form-forgot {
          float: right;
        }
        #components-form-demo-normal-login .ant-col-rtl .login-form-forgot {
          float: left;
        }
        #components-form-demo-normal-login .login-form-button {
          width: 100%;
        }
      `}</style>
    </div>
  )
}

export default Login
