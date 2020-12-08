/** @format */

import React from 'react'
import {createFromIconfontCN, GithubFilled} from '@ant-design/icons'
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
      <style jsx>{`
        .footer-div {
          margin-top: 15px;
          padding: 20px 0 40px 0;
          width: 100%;
          color: #fff;
          font-size: 16px;
          text-align: center;
          background-color: #00b894;
        }

        .footer-divider {
          max-width: 100%;
          margin-right: 20px;
          margin-left: 20px;
          height: 0;
          max-height: 0;
          border: solid;
          border-width: thin 0 0;
          border-color: rgba(0, 0, 0, 0.2);
        }

        .footer-div a {
          color: #fff;
        }
      `}</style>
    </footer>
  )
}
export default Footer
