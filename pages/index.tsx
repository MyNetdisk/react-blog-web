/** @format */
import Link from 'next/link'
import React, {useState} from 'react'
import Head from 'next/head'
import {Row, Col, List, BackTop, Pagination, Divider} from 'antd'
import axios from 'axios'
import {CalendarOutlined, FolderOpenOutlined, FireOutlined} from '@ant-design/icons'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Layout from '../components/Layout'
import Author from '../components/Author'
import Advertise from '../components/Advertise'
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
    <Layout indexBG>
      <Head>
        <title>欢迎来到我的首页</title>
      </Head>
      <div className="container">
        <div className="body-wrap">
          <main id="anchor">
            <Row className="comm-main" justify="center">
              <Col className="comm-left" xs={0} sm={0} md={7} lg={6} xl={5}>
                <Author />
                <Advertise />
              </Col>
              <Col className="comm-right box-shadow" xs={24} sm={24} md={17} lg={18} xl={16}>
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
            </Row>
          </main>
        </div>
        <BackTop />
      </div>
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
