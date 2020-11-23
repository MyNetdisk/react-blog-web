/** @format */

import React, {useState, useEffect} from 'react'
import Router, {withRouter} from 'next/router'
import {Avatar, Menu} from 'antd'
import {createFromIconfontCN, HomeFilled, AppstoreFilled, TagFilled} from '@ant-design/icons'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import '../public/style/components/nav.css'

const {SubMenu} = Menu

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2174183_j52zhhdz5a.js',
})

const Nav = router => {
  const [current, setcurrent] = useState('index')
  const [navArray, setnavArray] = useState([])
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

  return (
    <div id="mobile-sidebar">
      <div className="menu-mask" />
      <div className="mobile-sidebar-menus">
        <div className="mobile-author-icon">
          <Avatar size={100} src="/static/img/avatar.jpg" />
        </div>
        <div className="mobile-post-data">
          <div className="mobile-data-item">
            <a>
              <div className="headline">文章</div>
              <div className="length-num">7</div>
            </a>
          </div>
          <div className="mobile-data-item">
            <a>
              <div className="headline">标签</div>
              <div className="length-num">7</div>
            </a>
          </div>
          <div className="mobile-data-item">
            <a>
              <div className="headline">分类</div>
              <div className="length-num">7</div>
            </a>
          </div>
        </div>
        <hr />
        <Menu
          mode="vertical"
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
            // popupOffset={[0, 0]}
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
            // popupOffset={[0, 0]}
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
      </div>
    </div>
  )
}
export default withRouter(Nav)
