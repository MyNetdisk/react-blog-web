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
import {Row, Col, Menu, Affix, Anchor} from 'antd'
import {
  createFromIconfontCN,
  CaretDownFilled,
  HomeFilled,
  AppstoreFilled,
  GithubFilled,
  WechatFilled,
  AlipayOutlined,
} from '@ant-design/icons'
import servicePath from '../config/apiUrl'

const {SubMenu} = Menu
const {Link} = Anchor

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2174183_v1r5ciws2tj.js',
})

const Header = () => {
  const [top] = useState(0)
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

  const menuClick = e => {
    if (e.key === 'index') {
      Router.push('/index')
    } else if (e.key === 'timeline') {
      Router.push('/timeline')
    } else if (e.key === 'about') {
      Router.push('/about')
    } else {
      Router.push(`/categories?id=${e.key}`)
    }
  }

  return (
    <header className="header" id="header">
      <nav id="nav">
        <Affix offsetTop={top} className="header-affix">
          <Row justify="center" className="header-nav-affix">
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="header-logo">
              <span>MyNetdisk</span>
            </Col>
            <Col xs={0} sm={0} md={18} lg={18} xl={18} className="header-menu">
              <Menu mode="horizontal" onClick={menuClick}>
                <Menu.Item key="index">
                  <HomeFilled />
                  主页
                </Menu.Item>
                <SubMenu
                  key="categories"
                  popupClassName="categories-item--afadfasf"
                  popupOffset={[100, 100]}
                  title={
                    <span>
                      <AppstoreFilled />
                      <span>博客</span>
                      <CaretDownFilled />
                    </span>
                  }>
                  {navArray.map(item => {
                    return <Menu.Item key={item.Id}>{item.typeName}</Menu.Item>
                  })}
                </SubMenu>
                <Menu.Item key="timeline">
                  <IconFont type="icon-time" />
                  时间轴
                </Menu.Item>
                <Menu.Item key="about">
                  <IconFont type="icon-account" />
                  关于
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Affix>
      </nav>
      <div className="site-info">
        <h1 id="site-title" className="site-title">
          MyNetdisk说你想说
        </h1>
        <p id="site-subtitle" className="site-subtitle">
          <span className="subtitle">从来没有真正的绝境</span>
          <span className="typed-cursor">|</span>
        </p>
        <div id="site-social-icons" className="site-social-icons">
          <a className="social-icon" href="https://github.com/MyNetdisk">
            <GithubFilled />
          </a>
          <a className="social-icon" href="/#">
            <WechatFilled />
          </a>
          <a className="social-icon" href="/#">
            <AlipayOutlined />
          </a>
        </div>
      </div>

      <div id="scroll-down" className="scroll-down">
        <Anchor affix={false}>
          <Link title="" href="#anchor">
            <IconFont type="icon-xiangxiajiantou" className="anticon-down scroll-down-effects" />
          </Link>
        </Anchor>
      </div>
    </header>
  )
}

export default Header
