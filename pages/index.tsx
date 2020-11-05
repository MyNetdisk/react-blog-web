/** @format */
import Head from 'next/head'
import Link from 'next/link'
import React, {useState} from 'react'
import {Row, Col, List, BackTop, Pagination, Divider} from 'antd'
import axios from 'axios'
import {CalendarOutlined, FolderOpenOutlined, FireOutlined} from '@ant-design/icons'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Header from '../components/Header'
import Author from '../components/Author'
import Advertise from '../components/Advertise'
import Footer from '../components/Footer'
import '../public/style/pages/index.css'
import servicePath from '../config/apiUrl'

export default function Home(list) {
  const [mylist] = useState<Array<any>>(list.data)
  const renderer = new marked.Renderer()
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
  return (
    <div className="index-container">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta name="keywords" content="next.js,react.js" />
        <meta content="next 简介 next.js作为一款轻量级的应用框架，主要用于构建静态网站和后端渲染网站。 next 特点 默认情况下由服务器呈现 自动代码拆分可加快页面加载速度 简单的客户端路由（基于页面） 基于" />
        <title>欢迎来到我的首页</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="body-wrap">
        <Header indexBG />
        <main id="anchor">
          <Row className="comm-main" justify="center">
            <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
              <List
                header={<div>最新日志</div>}
                itemLayout="vertical"
                dataSource={mylist}
                renderItem={item => (
                  <List.Item>
                    <div className="list-title">
                      <Link href={{pathname: '/detail', query: {id: item.id}}}>
                        <a href="javascript;">{item.title}</a>
                      </Link>
                    </div>
                    <div className="list-icon">
                      <span>
                        <CalendarOutlined />
                        {item.addTime}
                      </span>
                      <span>
                        <FolderOpenOutlined />
                        {item.typeName}
                      </span>
                      <span>
                        <FireOutlined />
                        {item.view_count}人
                      </span>
                    </div>
                    {/* eslint-disable-next-line react/no-danger */}
                    <div className="list-context" dangerouslySetInnerHTML={{__html: marked(item.introduce)}} />
                  </List.Item>
                )}
              />
              <Divider />
              <Pagination defaultCurrent={1} total={50} />
            </Col>
            <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
              <Author />
              <Advertise />
            </Col>
          </Row>
          <Footer />
        </main>
      </div>
      <BackTop />
    </div>
  )
}
Home.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    axios(servicePath.getArticleList).then(res => {
      resolve(res.data)
    })
  })
  // eslint-disable-next-line no-return-await
  return await promise
}
