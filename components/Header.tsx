/**
 * /* eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

/** @format */

import React, {useState, useEffect} from 'react'
import Router from 'next/router'
import cn from 'classnames'
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
  SearchOutlined,
} from '@ant-design/icons'
import Typed from 'react-typed'
import servicePath from '../config/apiUrl'

const {SubMenu} = Menu
const {Link} = Anchor

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2174183_i4qvalcywwp.js',
})

type Props = {
  indexBG: boolean
}

const Header = ({indexBG}: Props) => {
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
    } else if (e.keyPath[1] === 'categories') {
      Router.push(`/categories?id=${e.key}`)
    } else if (e.keyPath[1] === 'hobbies') {
      Router.push('/hobbies')
    } else if (e.key === 'messages') {
      Router.push('/messages')
    } else if (e.key === 'timeline') {
      Router.push('/timeline')
    } else if (e.key === 'about') {
      Router.push('/about')
    }
  }

  return (
    <header className={cn('header', {'full-page': indexBG, 'not-index-bg': !indexBG})} id="header">
      <nav id="nav">
        <Affix offsetTop={top} className="header-affix">
          <Row justify="center" className="header-nav-affix">
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="header-logo">
              <span>MyNetdisk</span>
            </Col>
            <Col xs={0} sm={0} md={18} lg={18} xl={18} className="header-menu">
              <div>
                <SearchOutlined />
                搜索
              </div>
              <Menu mode="horizontal" onClick={menuClick} triggerSubMenuAction="hover">
                <Menu.Item key="index">
                  <HomeFilled />
                  主页
                </Menu.Item>
                <SubMenu
                  key="categories"
                  popupClassName="popup-item"
                  // onTitleClick={subMenuClick}
                  popupOffset={[0, 0]}
                  icon={<AppstoreFilled />}
                  title="博客">
                  {navArray.map(item => {
                    return <Menu.Item key={item.Id}>{item.typeName}</Menu.Item>
                  })}
                </SubMenu>
                <SubMenu
                  key="hobbies"
                  popupClassName="popup-item"
                  popupOffset={[0, 0]}
                  icon={<IconFont type="icon-motuoche" />}
                  title="爱好">
                  <Menu.Item key="music">音乐</Menu.Item>
                  <Menu.Item key="movie">电影</Menu.Item>
                  <Menu.Item key="book">书单</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="links"
                  popupClassName="popup-item"
                  popupOffset={[0, 0]}
                  icon={<IconFont type="icon-link" />}
                  title="链接">
                  <Menu.Item key="friend">友链</Menu.Item>
                  <Menu.Item key="oldblog">老版技博</Menu.Item>
                </SubMenu>
                <Menu.Item key="messages">
                  <IconFont type="icon-msg" />
                  留言板
                </Menu.Item>
                <Menu.Item key="timeline">
                  <IconFont type="icon-time" />
                  时间轴
                </Menu.Item>
                <Menu.Item key="about">
                  <IconFont type="icon-account" />
                  关于我
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
        <div id="site-subtitle" className="site-subtitle">
          <Typed
            className="subtitle"
            strings={[
              '欢迎来到MyNetdisk说你想说',
              'Welcome to MyNetdisk',
              '从来没有真正的绝境',
              '只有心灵的迷途',
              'Never really desperate',
              'only the lost of the soul',
            ]}
            typeSpeed={60}
            backSpeed={60}
            loop
          />
        </div>
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
