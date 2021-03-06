/** @format */
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {PageHeader, Row, Col, List, BackTop} from 'antd'
import axios from 'axios'
import {
  CalendarOutlined,
  FieldTimeOutlined,
  FolderOpenOutlined,
  TagOutlined,
  EyeOutlined,
  TagsFilled,
} from '@ant-design/icons'
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
import servicePath from '../config/apiUrl'

// const DynamicComponentWithNoSSR = dynamic(import('../components/Weather'), {
//   ssr: false,
// })
import store from '../store'
import {
  setarticlesAction
} from '../store/actionCreators.js';

export default function Home(list) {
  const [mylist] = useState<Array<any>>(list.data)
  function setarticlesRedux(articles){
    const action = setarticlesAction(articles)
    store.dispatch(action)
  }
  useEffect(() => {
    setarticlesRedux(mylist.length)
  }, [])
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
    <Layout indexBG>
      <Head>
        <title>欢迎来到我的首页</title>
      </Head>
      <div className="container" id="anchor">
        <div className="body-wrap">
          <main>
            <Row className="comm-main" justify="center">
              <Col className="comm-left" xs={24} sm={24} md={17} lg={18} xl={16}>
                <List
                  itemLayout="vertical"
                  pagination={{
                    onChange: page => {
                      // eslint-disable-next-line no-console
                      console.log(page)
                    },
                    pageSize: 5,
                    position: 'bottom',
                  }}
                  dataSource={mylist}
                  renderItem={item => (
                    <List.Item className="box-shadow">
                      <Row justify="center">
                        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                          <div
                            className="list-item-pic"
                            style={{
                              backgroundImage:
                                `url(${item.cover_image})`,
                            }}
                          />
                        </Col>
                        <Col xs={24} sm={24} md={14} lg={14} xl={14} className="list-item-content">
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
                              <FieldTimeOutlined />
                              {item.update_date}
                            </span>
                            <span>
                              <FolderOpenOutlined />
                              {item.typeName}
                            </span>
                            <span>
                              <TagOutlined />
                              {item.label}
                            </span>
                            <span>
                              <EyeOutlined />
                              {item.view_count}人
                            </span>
                          </div>
                          {/* eslint-disable-next-line react/no-danger */}
                          <div className="list-context" dangerouslySetInnerHTML={{__html: marked(item.introduce)}} />
                        </Col>
                      </Row>
                    </List.Item>
                  )}
                />
                {/* <Divider />
                <Pagination defaultCurrent={1} total={50} /> */}
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
              </Col>
            </Row>
          </main>
        </div>
        <BackTop />
      </div>
      <style jsx global>{`
        pre {
          display: block;
          background-color: #283646 !important;
          padding: 0.5rem !important;
          overflow-y: auto;
          font-weight: 300;
          font-family: Menlo, monospace;
          border-radius: 0.3rem;
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

        .list-context img {
          width: 100%;
          border-radius: 5px;
          border: 1px solid #f0f0f0;
          max-width: 1000px !important;
          display: block;
          margin: 8px auto;
        }
      `}</style>
    </Layout>
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
