/**
 * /* eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

/** @format */

import React, {useState, useEffect} from 'react'
import Router, {withRouter} from 'next/router'
import cn from 'classnames'
import axios from 'axios'
// import Link from 'next/link'
import '../public/style/components/header.css'
import {Menu, Anchor} from 'antd'
import {
  createFromIconfontCN,
  HomeFilled,
  AppstoreFilled,
  TagFilled,
  GithubFilled,
  // WechatFilled,
  // AlipayOutlined,
  SearchOutlined,
  MenuOutlined,
} from '@ant-design/icons'
import Typed from 'react-typed'
import servicePath from '../config/apiUrl'
import Contact from './Contact'

const {SubMenu} = Menu
const {Link} = Anchor

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2174183_dn83jy6h7ah.js',
})

type Props = {
  indexBG: boolean
  router
  getChildValue
}

const Header = ({indexBG, router, getChildValue}: Props) => {
  const [current, setcurrent] = useState('index')
  const [navArray, setnavArray] = useState([])
  const [beforeScrollTop, setbeforeScrollTop] = useState(0)
  const [downward, setdownward] = useState(false)
  const [upward, setupward] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then(res => {
        return res.data.data
      })
      setnavArray(result)
      if (router.pathname === '/' || router.pathname === '/index') {
        setcurrent('index')
      } else if (router.pathname === '/categories') {
        setcurrent(router.query.id)
      } else if (router.pathname === '/hobbies') {
        setcurrent('music')
      } else if (router.pathname === '/links') {
        setcurrent('links')
      } else if (router.pathname === '/messages') {
        setcurrent('messages')
      } else if (router.pathname === '/timeline') {
        setcurrent('timeline')
      } else if (router.pathname === '/about') {
        setcurrent('about')
      } else {
        setcurrent('')
      }
    }
    fetchData()
  }, [])

  const menuClick = e => {
    if (e.key === 'index') {
      Router.push('/index')
    } else if (e.keyPath[1] === 'categories') {
      Router.push(`/categories?id=${e.key}`)
    } else if (e.key === 'tags') {
      Router.push('/tags')
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

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    const scroll = scrollTop - beforeScrollTop
    setbeforeScrollTop(scrollTop)
    if (scroll > 0) {
      setdownward(true)
      setupward(false)
    } else if (scroll < 0) {
      setdownward(true)
      setupward(true)
    }
    if (scrollTop === 0) {
      setupward(false)
      setdownward(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <header className={cn('header', {'full-page': indexBG, 'not-index-bg': !indexBG})} id="header">
      <nav
        id="nav"
        className={cn('nav', {fixed: downward, visible: upward})}
        style={{opacity: '1', animation: '1s ease 0s 1 normal none running headerNoOpacity'}}>
        <div className="nav-inner clearfix">
          <div className="nav-logo">
            <span>MyNetdisk</span>
          </div>
          <div className="nav-menu">
            <div className="nav-button">
              <SearchOutlined />
              搜索
            </div>
            <Menu
              mode="horizontal"
              onClick={menuClick}
              triggerSubMenuAction="hover"
              defaultSelectedKeys={[current]}
              selectedKeys={[current]}>
              <Menu.Item key="index">
                <HomeFilled />
                主页
              </Menu.Item>
              <SubMenu
                key="categories"
                popupClassName="categories-popup-item popup-item"
                // onTitleClick={subMenuClick}
                popupOffset={[0, 0]}
                // icon={<AppstoreFilled />}
                title={
                  <>
                    <AppstoreFilled />
                    <span>博客</span>
                    <IconFont type="downarrow" className="submenu-arrow" />
                  </>
                }>
                {navArray.map(item => {
                  return <Menu.Item key={item.Id}>{item.typeName}</Menu.Item>
                })}
              </SubMenu>
              <Menu.Item key="tags">
                <TagFilled />
                标签
              </Menu.Item>
              <SubMenu
                key="hobbies"
                popupClassName="hobbies-popup-item popup-item"
                popupOffset={[0, 0]}
                // icon={<IconFont type="aihao" />}
                title={
                  <>
                    <IconFont type="aihao" />
                    <span>爱好</span>
                    <IconFont type="downarrow" className="submenu-arrow" />
                  </>
                }>
                <Menu.Item key="music" icon={<IconFont type="music" />}>
                  音乐
                </Menu.Item>
                <Menu.Item key="movie" icon={<IconFont type="movie" />}>
                  电影
                </Menu.Item>
                <Menu.Item key="book" icon={<IconFont type="book" />}>
                  书单
                </Menu.Item>
              </SubMenu>
              {/* <SubMenu
                key="links"
                popupClassName="links-popup-item popup-item"
                popupOffset={[0, 0]}
                // icon={<IconFont type="link" />}
                title={
                  <>
                    <IconFont type="link" />
                    <span>链接</span>
                    <IconFont type="downarrow" className="submenu-arrow" />
                  </>
                }>
                <Menu.Item key="friend" icon={<IconFont type="friend" />}>
                  友链
                </Menu.Item>
                <Menu.Item key="oldblog" icon={<IconFont type="pen" />}>
                  老版技博
                </Menu.Item>
              </SubMenu> */}
              <Menu.Item key="messages">
                <IconFont type="liuyan" />
                留言板
              </Menu.Item>
              <Menu.Item key="timeline">
                <IconFont type="timeline" />
                时间轴
              </Menu.Item>
              <Menu.Item key="about">
                <IconFont type="about" />
                关于我
              </Menu.Item>
            </Menu>
            <div className="nav-button santiao" onClick={() => getChildValue(true)}>
              <MenuOutlined />
            </div>
          </div>
        </div>
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
        <Contact />
      </div>

      <div id="scroll-down" className="scroll-down">
        <Anchor affix={false}>
          <Link title="" href="#anchor">
            <IconFont type="downarrow" className="anticon-down scroll-down-effects" />
          </Link>
        </Anchor>
      </div>
    </header>
  )
}

export default withRouter(Header)
