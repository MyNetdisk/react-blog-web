/** @format */

import Head from 'next/head'
// import Link from 'next/link'
import React, {useState} from 'react'
import {PageHeader, Row, Col, Breadcrumb, Affix, BackTop} from 'antd'
import axios from 'axios'
import {CalendarOutlined, FolderOpenOutlined, FireOutlined, BookOutlined, TagsFilled} from '@ant-design/icons'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import dynamic from 'next/dynamic'
import Layout from '../components/Layout'
import Author from '../components/Author'
import Category from '../components/Category'
import Tag from '../components/Tag'
// import Weather from '../components/Weather'
// import Advertise from '../components/Advertise'
import Comment from '../components/Comment'
import '../public/style/pages/detail.css'
import Tocify from '../components/tocify'
import servicePath from '../config/apiUrl'

// const DynamicComponentWithNoSSR = dynamic(import('../components/Weather'), {
//   ssr: false,
// })

export default function Detail(props: any) {
  const [data] = useState(props)
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
  const html = marked(data.article_content)
  return (
    <Layout indexBG={false}>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="container">
        <Row className="comm-main" justify="center">
          <Col className="comm-left box-shadow" xs={24} sm={24} md={17} lg={18} xl={16}>
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
              <div className="detail-title">{data.title}</div>
              <div className="list-icon center">
                <span>
                  <CalendarOutlined />
                  {data.addTime}
                </span>
                <span>
                  <FolderOpenOutlined />
                  {data.typeName}
                </span>
                <span>
                  <FireOutlined />
                  {data.view_count}
                </span>
              </div>
              {/* eslint-disable-next-line react/no-danger */}
              <div className="detail-content" dangerouslySetInnerHTML={{__html: html}} />
            </div>
            <Comment />
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={7} lg={6} xl={5}>
            <Author />
            <Category />
            <div className="tag comm-box box-shadow">
              <PageHeader
                className="tag-page-header"
                backIcon={<TagsFilled />}
                onBack={() => null}
                title="标签"
                subTitle=""
              />
              <Tag />
            </div>
            {/* <DynamicComponentWithNoSSR /> */}
            {/* <Advertise /> */}
            <Affix offsetTop={0}>
              <div className="detail-nav comm-box box-shadow">
                <div className="nav-title">
                  <BookOutlined style={{marginRight: '5px'}} />
                  文章目录
                </div>
                {tocify && tocify.render()}
              </div>
            </Affix>
          </Col>
        </Row>
        <BackTop />
      </div>
    </Layout>
  )
}
Detail.getInitialProps = async context => {
  const {id} = context.query
  // console.log(id)
  const promise = new Promise(resolve => {
    axios(servicePath.getArticleById + id).then(res => {
      resolve(res.data.data[0])
    })
  })
  // eslint-disable-next-line no-return-await
  return await promise
}
