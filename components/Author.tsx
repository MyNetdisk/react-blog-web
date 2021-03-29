/** @format */
import React from 'react'
import {Avatar, Divider} from 'antd'
import {createFromIconfontCN, GithubFilled} from '@ant-design/icons'
import Contact from './Contact'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2174183_dn83jy6h7ah.js',
})

const Author = () => {
  return (
    <div className="author-div comm-box box-shadow">
      <div>
        <Avatar size={100} src="https://images.mynetdisk.vercel.app/react-blogs/avatar/avatar.jpg" />
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
        <Contact />
      </div>
      <style jsx global>{`
        .author-div {
          text-align: center;
          padding: 1rem;
        }

        .author-div .author-div > div {
          margin-bottom: 1rem;
        }

        .author-introduction {
          font-size: 0.8rem;
          color: #999;
        }

        .author-introduction .social-icon .anticon-github {
          color: #000;
        }

        .author-name {
          font-weight: 600;
          font-size: 1.5rem;
          color: #4c4948;
          margin-bottom: 0;
        }

        .author-detail {
          color: #4c4948;
          margin-bottom: 0;
        }

        .author-info-data {
          display: table;
          table-layout: fixed;
          width: 100%;
          margin-top: 16px;
        }

        .author-info-item {
          display: table-cell;
          text-align: center;
        }

        .headline {
          color: #4c4948;
          font-size: 0.95rem;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .length-num {
          color: #000;
          font-size: 1.3rem;
        }

        .account {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }
      `}</style>
    </div>
  )
}

export default Author
