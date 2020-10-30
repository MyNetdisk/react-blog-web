/**
 * /* eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

/** @format */

import React, {useState, useEffect} from 'react'
import Router from 'next/router'
import axios from 'axios'
// import Link from 'next/link'
import '../public/style/components/header.css'
import {Row, Col, Menu, Affix, Dropdown, message} from 'antd'
import {
  DownOutlined,
  HomeOutlined,
  AppstoreOutlined,
  FieldTimeOutlined,
  UserOutlined,
  GithubOutlined,
  ExportOutlined,
} from '@ant-design/icons'
import servicePath from '../config/apiUrl'

const Header = () => {
  const [top] = useState(0)
  const [navBg, setNavBg] = useState(false)
  const [navArray, setnavArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then(res => {
        return res.data.data
      })
      setnavArray(result)
    }
    fetchData()
  }, [])

  const handleClick = e => {
    // eslint-disable-next-line eqeqeq
    if (e.key == 0) {
      Router.push('/index')
    } else {
      Router.push(`/categories?id=${e.key}`)
    }
  }

  const changeNavBg = e => {
    if (e) {
      setNavBg(true)
    } else {
      setNavBg(false)
    }
  }

  const onClick = ({key}) => {
    message.info(`Click on item ${key}`)
  }

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd memu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  )

  return (
    <header className="header">
      <Affix offsetTop={top} className="header-affix" onChange={changeNavBg}>
        <Row justify="center" className={`header-nav-affix ${navBg ? 'active' : ''}`}>
          <Col xs={24} sm={24} md={10} lg={15} xl={12}>
            <span className="header-logo">MyNetdisk</span>
          </Col>
          <Col xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu mode="horizontal" onClick={handleClick}>
              <Menu.Item key="0">
                <HomeOutlined />
                主页
              </Menu.Item>
              {navArray.map(item => {
                return <Menu.Item key={item.Id}>{item.typeName}</Menu.Item>
              })}
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  <AppstoreOutlined /> 博客 <DownOutlined />
                </a>
              </Dropdown>
              <Menu.Item key="0">
                <FieldTimeOutlined />
                时间轴
              </Menu.Item>
              <Menu.Item key="0">
                <UserOutlined />
                关于
              </Menu.Item>
              <Menu.Item key="0">
                <GithubOutlined />
                GitHub
                <ExportOutlined />
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Affix>
      <div className="banner">
        <div className="banner-container">
          <div className="banner-center">
            <h1>欢迎来到我的首页</h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
