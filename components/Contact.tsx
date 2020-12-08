/** @format */

import React from 'react'
import {createFromIconfontCN, GithubFilled} from '@ant-design/icons'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2174183_dn83jy6h7ah.js',
})

export default function Contact() {
  return (
    <div id="site-social-icons" className="site-social-icons">
      <a className="social-icon" href="https://gitee.com/MyNetdisk" target="__blank">
        <IconFont type="gitee" />
      </a>
      <a className="social-icon" href="https://github.com/MyNetdisk" target="__blank">
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
      {/* <a className="social-icon" href="/#">
          <WechatFilled />
        </a>
        <a className="social-icon" href="/#">
          <AlipayOutlined />
        </a> */}
      <style jsx global>{`
        .site-social-icons {
          display: block;
          width: 100%;
          text-align: center;
          margin: 0 auto;
        }

        @media screen and (max-width: 768px) {
          .site-social-icons {
            display: block;
          }
        }
        .social-icon {
          margin: 0 0.5rem;
          font-size: 1.5rem;
          color: #eee;
          text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }

        .social-icon .anticon-github {
          color: #fff;
        }

        .social-icon .anticon-wechat {
          color: #73c051;
        }

        .social-icon .anticon-alipay {
          color: #4890f7;
        }
      `}</style>
    </div>
  )
}
