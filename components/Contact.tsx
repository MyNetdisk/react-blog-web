/** @format */

import React from 'react'
import {createFromIconfontCN, GithubFilled} from '@ant-design/icons'
import '../public/style/components/contact.css'

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
    </div>
  )
}
