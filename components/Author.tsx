/** @format */
import React from 'react'
import {Avatar, Divider} from 'antd'
import {createFromIconfontCN, GithubFilled} from '@ant-design/icons'
import '../public/style/components/author.css'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2174183_0pdxs7xy4tp.js',
})

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
        <div className="site-social-icons">
          <a className="social-icon" href="https://gitee.com/MyNetdisk" target="__blank">
            <IconFont type="gitee" />
          </a>
          <a className="social-icon " href="https://github.com/MyNetdisk" target="__blank">
            <GithubFilled />
          </a>
          <a className="social-icon" href="https://blog.csdn.net/weixin_44663365" target="__blank">
            <IconFont type="csdn" />
          </a>
          <a className="social-icon" href="https://juejin.im/user/1345457964191518" target="__blank">
            <IconFont type="juejin" />
          </a>
          <a className="social-icon" href="https://www.zhihu.com/people/kungfumi" target="__blank">
            <IconFont type="zhihu" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Author
