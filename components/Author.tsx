/** @format */
import React from 'react'
import {Avatar, Divider} from 'antd'
import {GithubOutlined} from '@ant-design/icons'
import '../public/style/components/author.css'

const Author = () => {
  return (
    <div className="author-div comm-box box-shadow">
      <div>
        <Avatar size={100} src="/static/img/avatar.jpg" />
      </div>
      <div className="author-introduction">
        <h3 className="author-name">MyNetdisk</h3>
        <p className="author-detail">分享知识，记录生活。</p>
        <div className="author-info-data">
          <div className="author-info-item">
            <a>
              <div className="headline">文章</div>
              <div className="length-num">7</div>
            </a>
          </div>
          <div className="author-info-item">
            <a>
              <div className="headline">分类</div>
              <div className="length-num">2</div>
            </a>
          </div>
          <div className="author-info-item">
            <a>
              <div className="headline">标签</div>
              <div className="length-num">0</div>
            </a>
          </div>
        </div>
        <Divider>社交账号</Divider>
        <div className="author-info-social">
          <a href="https://github.com/MyNetdisk">
            <GithubOutlined style={{fontSize: '28px'}} className="account" />
          </a>
          <a href="https://github.com/MyNetdisk">
            <GithubOutlined style={{fontSize: '28px'}} className="account" />
          </a>
          <a href="https://github.com/MyNetdisk">
            <GithubOutlined style={{fontSize: '28px'}} className="account" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Author
