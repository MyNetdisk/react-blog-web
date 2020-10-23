/** @format */

import Head from 'next/head'
// import Link from 'next/link'
import React from 'react'
import {Row, Col, Breadcrumb, Affix} from 'antd'
import axios from 'axios'
import {CalendarOutlined, FolderOpenOutlined, FireOutlined} from '@ant-design/icons'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Header from '../components/Header'
import Author from '../components/Author'
import Advertise from '../components/Advertise'
import Comment from '../components/comment'
import Footer from '../components/Footer'
import '../public/style/pages/detail.css'
import Tocify from '../components/tocify'
import servicePath from '../config/apiUrl'

export default function Detail(props: any) {
  const tocify = new Tocify()
  const renderer = new marked.Renderer()
  renderer.heading = (text, level) => {
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }
  marked.setOptions({
    renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight(code) {
      return hljs.highlightAuto(code).value
    },
  })
  // eslint-disable-next-line react/destructuring-assignment
  const html = marked(props.article_content)
  return (
    <div className="container">
      <Head>
        <title>Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className="comm-main" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>视频教程</Breadcrumb.Item>
              <Breadcrumb.Item>文章名</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className="detail-title">阿里巴巴阿里巴巴</div>
            <div className="list-icon center">
              <span>
                <CalendarOutlined />
                2020-7-22
              </span>
              <span>
                <FolderOpenOutlined />
                视频教程
              </span>
              <span>
                <FireOutlined />
                2000人
              </span>
            </div>
            {/* eslint-disable-next-line react/no-danger */}
            <div className="detail-content" dangerouslySetInnerHTML={{__html: html}} />
          </div>
          <Comment />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advertise />
          <Affix offsetTop={5}>
            <div className="detail-nav comm-box">
              <div className="nav-title">文章目录</div>
              {tocify && tocify.render()}
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}
Detail.getInitialProps = async context => {
  const {id} = context.query
  const promise = new Promise(resolve => {
    axios(servicePath.getArticleById + id).then(res => {
      resolve(res.data.data[0])
    })
  })
  // eslint-disable-next-line no-return-await
  return await promise
}
