/** @format */

import React, {useState} from 'react'
import {Form, Input, Checkbox, Button} from 'antd'
import axios from 'axios'
import servicePath from '../config/apiUrl'

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

const Register = () => {
  // let [isRegister, setisRegister] = useState(true)
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  // const onValuesChange = (values: any) => {
  //   if(values.nickname){
  //     console.log(values.nickname)
  //   }
  //   console.log('hello', values)
  // }

  // const onFieldsChange = (values: any) => {
  //   console.log('hello', values)
  // }

  return (
    <div className="register">
      <div className="register-bg"></div>
      <div className="register-form">
        <Form
          layout="vertical"
          form={form}
          name="register"
          onFinish={onFinish}
          // onValuesChange={onValuesChange}
          // onFieldsChange={onFieldsChange}
          scrollToFirstError>
          <Form.Item
            name="nickname"
            label="用户名"
            tooltip="What do you want others to call you?"
            rules={[
              () => ({
                validator(_, value, callback) {
                  const dataProps = {
                    username: value,
                  }
                  console.log(value.replace(/(^\s*)|(\s*$)/g, '')=='')
                  if(!value){
                    return Promise.reject(new Error('请输入用户名!'))
                  }else if(!value && value.replace(/(^\s*)|(\s*$)/g, '')==''){
                    return Promise.reject(new Error('用户名不能为空!'))
                  }else{
                    axios({
                      method: 'post',
                      url: servicePath.isRegister,
                      data: dataProps,
                      withCredentials: true,
                    }).then(res => {
                      console.log(res)
                      if (!res.data) {
                        console.log('hello')
                        return Promise.resolve()
                      } else if (res.data) {
                        console.log('哈哈')
                        try {
                          throw new Error('该用户名已注册')
                        } catch (err) {
                          callback(err)
                        }
                      } 
                      // return Promise.reject(new Error('该用户名已注册'));
                    })
                  }
                },
              }),
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              {
                type: 'email',
                message: '请输入格式正确的邮箱',
              },
              {
                required: true,
                message: '请输入邮箱',
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: '请输入邮箱',
              },
            ]}
            hasFeedback>
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="确认密码"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请确认密码',
              },
              ({getFieldValue}) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'))
                },
              }),
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
              },
            ]}>
            <Checkbox>
              我接受 <a href="">协议</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
      <style jsx>{`
        .register-bg{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            z-index:-1;
            overflow:hidden;
            background-image:url('/static/img/bg-wall2.jpg');
            background-size:cover;
            backgoundd-position:center center;
        }
        .register-form{
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
        }
      `}</style>
    </div>
  )
}

export default Register
