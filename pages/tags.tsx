/** @format */
import Link from 'next/link'
import React, {useState} from 'react'
import Head from 'next/head'
import {PageHeader, Row, Col, List, BackTop} from 'antd'
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
import axios from 'axios'
import Layout from '../components/Layout'
import Author from '../components/Author'
import Category from '../components/Category'
import Tag from '../components/Tag'
import servicePath from '../config/apiUrl'
import '../public/style/pages/tags.css'

// const DynamicComponentWithNoSSR = dynamic(import('../components/Weather'), {
//   ssr: false,
// })

export default function Tags(list) {
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
    <Layout indexBG={false}>
      <Head>
        <title>欢迎来到我的标签页</title>
      </Head>
      <div>
        <div className="body-wrap">
          <main>
            <Row className="comm-main" justify="center">
              <Col className="comm-left" xs={24} sm={24} md={17} lg={18} xl={16}>
                <div className="tags-wrap box-shadow">
                  <Tag />
                </div>
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
                                'url(https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png)',
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
                              修改时间
                            </span>
                            <span>
                              <FolderOpenOutlined />
                              {item.typeName}
                            </span>
                            <span>
                              <TagOutlined />
                              标签
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
    </Layout>
  )
}
Tags.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    axios(servicePath.getArticleList).then(res => {
      resolve(res.data)
    })
  })
  // eslint-disable-next-line no-return-await
  return await promise
}
