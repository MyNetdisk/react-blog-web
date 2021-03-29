/** @format */

import React, {useState} from 'react'
import {Form, Input, Checkbox, Button, message} from 'antd'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import Util from '../util'

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
  const [form] = Form.useForm()

  const key = 'updatable'

  function randomAvator() {
    return `https://images.mynetdisk.vercel.app/react-blogs/avatar/${Util.randomNum(1, 16)}.jpg`
  }

  function rTime(date) {
    var json_date = new Date(date).toJSON()
    return new Date(+new Date(json_date) + 8 * 3600 * 1000)
      .toISOString()
      .replace(/T/g, ' ')
      .replace(/\.[\d]{3}Z/, '')
  }

  const checkName = (_, value) => {
    var reg=/^[\u4E00-\u9FA5\uF900-\uFA2D|\w]{2,20}$/ig
    if (!value) {
      return Promise.reject(new Error('请输入用户名!'))
    } else if (value && value.replace(/(^\s*)|(\s*$)/g, '') == '') {
      return Promise.reject(new Error('用户名不能为空!'))
    } else if(value && reg.test(value)){
      return new Promise((resolve, reject) => {
        axios(servicePath.isRegister + value).then(res => {
          if (!res.data) {
            return resolve(res)
          } else if (res.data) {
            return reject(new Error('用户名已被注册'))
          }
        })
      })
    } else {
      return Promise.reject(new Error('中文，英文字母，数字及下划线组成，长度2-20位!'))
    }
  }

  const onFinish = (values: any) => {
    let dataProps = {
      username: null,
      password: null,
      email: null,
      avatar: null,
      register_date: null,
      last_password_reset_date: null,
    }
    dataProps.username = values.nickname
    dataProps.email = values.email
    dataProps.password = values.password
    dataProps.avatar = randomAvator()
    dataProps.register_date = rTime(new Date())
    message.loading({ content: '注册中...', key })
    axios({
      method: 'post',
      url: servicePath.register,
      data: dataProps,
      withCredentials: true,
    }).then(res => {
      if(res.data.isSuccess){
        message.success({ content: '注册成功!', key})
      }else {
        message.error({ content: '注册失败!', key})
      }
    })
  }

  return (
    <div className="register">
      <div className="register-bg"></div>
      <div className="register-form">
        <Form layout="vertical" form={form} name="register" onFinish={onFinish} scrollToFirstError>
          <Form.Item
            name="nickname"
            label="用户名"
            tooltip="What do you want others to call you?"
            // validateTrigger='onBlur'
            rules={[
              {
                validator: checkName,
              },
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
                message: '请输入密码',
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
                message: '请再次输入密码',
              },
              ({getFieldValue}) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('两次输入密码不一致'))
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
                validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error('请阅读并勾选协议'))),
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
