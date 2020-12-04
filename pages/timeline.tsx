/** @format */

import React from 'react'
import Head from 'next/head'
import {Timeline, PageHeader, Row, Col, BackTop} from 'antd'
import {TagsFilled} from '@ant-design/icons'
import Author from '../components/Author'
import Category from '../components/Category'
import Tag from '../components/Tag'
import Layout from '../components/Layout'
import '../public/style/pages/timeline.css'

export default function Timelines() {
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
                  <Timeline.Item color="green" position="right">
                    <img src="https://butterfly.js.org/image/avatar.png" alt="" />
                    <div style={{display: 'inline-block'}}>
                      2015-09-01
                      <br />
                      Create a services site
                    </div>
                  </Timeline.Item>
                  <Timeline.Item color="green" position="left">
                    <div style={{display: 'inline-block'}}>
                      2015-09-01
                      <br />
                      Create a services site
                    </div>
                  </Timeline.Item>
                  <Timeline.Item color="green">
                    <div style={{display: 'inline-block'}}>
                      2015-09-01
                      <br />
                      Create a services site
                    </div>
                  </Timeline.Item>
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
    </Layout>
  )
}
