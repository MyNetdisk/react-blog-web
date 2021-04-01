/** @format */

import React, {useState, useEffect} from 'react'
import {createFromIconfontCN, GithubFilled} from '@ant-design/icons'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import Contact from './Contact'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2174183_dn83jy6h7ah.js',
})

const Footer = () => {
  const [siteinfo, setsiteinfo] = useState(Object)
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getSiteinfo).then(res => {
        return res.data.data
      })
      setsiteinfo(result[0])
    }
    fetchData()
  }, [])
  return (
    <footer className="footer-div">
      <Contact />
      <hr className="footer-divider" />
      <div>
        Powered by <a href={siteinfo.powerby_link}>{siteinfo.powerby}</a>
      </div>
      Copyright {siteinfo.create_date}&nbsp;
      <a href={siteinfo.link} target="_blank" rel="noopener noreferrer">
      {siteinfo.name}
      </a>
      &nbsp;| <a href={siteinfo.copyright_link}>{siteinfo.copyright}</a>
      <br />
      <a href={siteinfo.icp_link} rel="noopener noreferrer" target="_blank">
      {siteinfo.icp}
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
