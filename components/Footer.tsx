/** @format */

import React from 'react'
import {createFromIconfontCN, GithubFilled} from '@ant-design/icons'
import '../public/style/components/footer.css'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2174183_dn83jy6h7ah.js',
})

const Footer = () => {
  return (
    <footer className="footer-div">
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
          <IconFont type="zhihu" color="white" />
        </a>
      </div>
      <hr className="footer-divider" />
      <div>
        Powered by <a href="https://www.nextjs.cn/">Nextjs</a>
      </div>
      Copyright 2018-present&nbsp;
      <a href="https://github.com/MyNetdisk" target="_blank" rel="noopener noreferrer">
        MyNetdisk
      </a>
      &nbsp;| <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC 4.0 BY-SA</a>
      <br />
      <a href="https://beian.miit.gov.cn/" rel="noopener noreferrer" target="_blank">
        湘ICP备2020019391号
      </a>
    </footer>
  )
}
export default Footer
