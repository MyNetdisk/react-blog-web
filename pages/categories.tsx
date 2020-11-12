/** @format */
import Head from 'next/head'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {Row, Col, List, Breadcrumb, BackTop, Pagination, Divider} from 'antd'
import {CalendarOutlined, FolderOpenOutlined, FireOutlined} from '@ant-design/icons'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import axios from 'axios'
import Layout from '../components/Layout'
import Author from '../components/Author'
import Advertise from '../components/Advertise'
import servicePath from '../config/apiUrl'

export default function MyList(list) {
  const [mylist, setMylist] = useState<Array<any>>(list.data)
  useEffect(() => {
    setMylist(list.data)
  })
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
    <Layout indexBG={false}>
      <div className="container">
        <Head>
          <title>LIST</title>
        </Head>
        <Row className="comm-main" justify="center">
          <Col className="comm-left" xs={0} sm={0} md={7} lg={6} xl={5}>
            <Author />
            <Advertise />
          </Col>
          <Col className="comm-right box-shadow" xs={24} sm={24} md={17} lg={18} xl={16}>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>视频教程</Breadcrumb.Item>
              </Breadcrumb>
            </div>
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
        <BackTop />

        {/* <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style> */}
      </div>
    </Layout>
  )
}
MyList.getInitialProps = async context => {
  const {id} = context.query
  const promise = new Promise(resolve => {
    axios(servicePath.getListById + id).then(res => {
      resolve(res.data)
    })
  })
  // eslint-disable-next-line no-return-await
  return await promise
}
