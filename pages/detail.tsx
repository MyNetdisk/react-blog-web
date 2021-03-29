/** @format */

import Head from 'next/head'
// import Link from 'next/link'
import React, {useState} from 'react'
import {PageHeader, Row, Col, Breadcrumb, Affix, BackTop} from 'antd'
import axios from 'axios'
import {CalendarOutlined, FolderOpenOutlined, EyeOutlined, BookOutlined, TagsFilled, FieldTimeOutlined, TagOutlined} from '@ant-design/icons'
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
import Tocify from '../components/tocify'
import servicePath from '../config/apiUrl'

// const DynamicComponentWithNoSSR = dynamic(import('../components/Weather'), {
//   ssr: false,
// })

export default function Detail(props: any) {
  const [data] = useState(props)
  console.log(data)
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
                <Breadcrumb.Item>{data.typeName}</Breadcrumb.Item>
                <Breadcrumb.Item>{data.title}</Breadcrumb.Item>
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
                  <FieldTimeOutlined />
                  {data.update_date}
                </span>
                <span>
                  <FolderOpenOutlined />
                  {data.typeName}
                </span>
                <span>
                  <TagOutlined />
                  {data.label}
                </span>
                <span>
                  <EyeOutlined />
                  {data.view_count}
                </span>
              </div>
              {/* eslint-disable-next-line react/no-danger */}
              <div className="detail-content" dangerouslySetInnerHTML={{__html: html}} />
            </div>
            <Comment pageId={data.id} article_title={data.title}/>
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
      <style jsx global>{`
        .bread-div {
          padding: 0.5rem;
          border-bottom: 1px solid #eee;
          background-color: #e1f0ff;
        }
        .detail-title {
          font-size: 1.8rem;
          text-align: center;
          padding: 1rem;
        }
        .center {
          text-align: center;
        }
        .detail-content {
          padding: 1.3rem;
          font-size: 1rem;
        }
        pre {
          display: block;
          background-color: #f3f3f3;
          padding: 0.5rem !important;
          overflow-y: auto;
          font-weight: 300;
          font-family: Menlo, monospace;
          border-radius: 0.3rem;
        }
        pre {
          background-color: #283646 !important;
        }
        pre > code {
          border: 0px !important;
          background-color: #283646 !important;
          color: #fff;
        }
        code {
          display: inline-block;
          background-color: #f3f3f3;
          border: 1px solid #fdb9cc;
          border-radius: 3px;
          font-size: 12px;
          padding-left: 5px;
          padding-right: 5px;
          color: #4f4f4f;
          margin: 0px 3px;
        }

        .title-anchor {
          color: #888 !important;
          padding: 4px !important;
          margin: 0rem !important;
          height: auto !important;
          line-height: 1.2rem !important;
          font-size: 0.7rem !important;
          border-bottom: 1px dashed #eee;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .active {
          color: rgb(30, 144, 255) !important;
        }
        .detail-nav {
          padding: 1rem;
          margin-top: 0.5rem;
        }
        .nav-title {
          font-size: 16px;
          text-align: left;
          color: #888;
        }
        .article-menu {
          font-size: 12px;
        }
        iframe {
          height: 34rem;
        }
        .detail-content img {
          width: 100%;
          border: 1px solid #f3f3f3;
        }
        .title-level3 {
          display: none;
        }
        .ant-anchor-link-title {
          font-size: 14px;
        }
        .ant-anchor-wrapper {
          padding: 5px;
        }
      `}</style>
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
