/** @format */

import React from 'react'
import {createFromIconfontCN, GithubFilled} from '@ant-design/icons'
import '../public/style/components/footer.css'
import Contact from './Contact'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2174183_dn83jy6h7ah.js',
})

const Footer = () => {
  return (
    <footer className="footer-div">
      <Contact />
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
