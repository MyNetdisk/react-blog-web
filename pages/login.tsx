/** @format */

import React from 'react'
import {Form, Input, Button, Checkbox} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'

const Login = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }
  return (
    <div className="login">
      <div className="login-bg"></div>
      <div className="login-form">
        <Form layout="vertical" name="normal_login" className="login-form" initialValues={{remember: true}} onFinish={onFinish}>
          <Form.Item htmlFor="user_name" label="用户名或者电子邮箱号码" name="username" rules={[{required: true, message: 'Please input your Username!'}]}>
            <Input id="user_name" prefix={<UserOutlined className="site-form-item-icon" />} />
          </Form.Item>
          <Form.Item htmlFor="user_pwd" label="登录密码" name="password" rules={[{required: true, message: 'Please input your Password!'}]}>
            <Input id="user_pwd" prefix={<LockOutlined className="site-form-item-icon" />} type="password" />
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
            或  <a href="">注册</a>
          </Form.Item>
        </Form>
      </div>
      <style jsx>{`
        .login-bg{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            z-index:-1;
            overflow:hidden;
            background-image:url('/static/img/bg-wall2.jpg');
            background-size:cover;
            background-position:center center;
        }
        .login-form{
            position:absolute;
            top:50%;
            left:50%;
            width:350px;
            margin-left:-175px;
            margin-top:-235px;
            background-color:#fff;
            padding:30px;
            border-radius:8px;
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
