/** @format */

import React, {useState} from 'react'
import Head from 'next/head'
import {Timeline, PageHeader, Row, Col, BackTop} from 'antd'
import {TagsFilled} from '@ant-design/icons'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import Author from '../components/Author'
import Category from '../components/Category'
import Tag from '../components/Tag'
import Layout from '../components/Layout'

export default function Timelines(list) {
  return (
    <Layout indexBG={false}>
      <Head>
        <title>欢迎来到我的爱好</title>
      </Head>
      <div className="container">
        <div className="body-wrap">
          <main>
            <Row className="comm-main" justify="center">
              <Col className="comm-left box-shadow timeline-left" xs={24} sm={24} md={17} lg={18} xl={16}>
                <Timeline mode="left">
                  {list.data.map((item)=>{
                    return (<Timeline.Item key={item.id} color="green" position="right">
                    <div style={{display: 'inline-block'}}>
                      {item.addTime}
                      <br />
                      {item.title}
                    </div>
                  </Timeline.Item>)
                  })}
                </Timeline>
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
        .timeline-left {
          padding: 50px 40px;
        }
      `}</style>
    </Layout>
  )
}
Timelines.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    axios(servicePath.getTimeline).then(res => {
      resolve(res.data)
    })
  })
  // eslint-disable-next-line no-return-await
  return await promise
}