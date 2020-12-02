/** @format */

import React from 'react'
import Head from 'next/head'
import {Typography, Checkbox, Divider, PageHeader, Row, Col, BackTop} from 'antd'
import {TagsFilled} from '@ant-design/icons'
import Author from '../components/Author'
import Category from '../components/Category'
import Tag from '../components/Tag'
import Comment from '../components/Comment'
import Layout from '../components/Layout'
import '../public/style/pages/messages.css'

const {Title, Paragraph} = Typography

export default function Timeline() {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`)
  }
  return (
    <Layout indexBG={false}>
      <Head>
        <title>欢迎来到我的留言板</title>
      </Head>
      <div className="container">
        <div className="body-wrap">
          <main>
            <Row className="comm-main" justify="center">
              <Col className="comm-left box-shadow messages-left" xs={24} sm={24} md={17} lg={18} xl={16}>
                <Typography>
                  <Title type="danger" style={{textAlign: 'center'}}>
                    留言须知
                  </Title>
                  <Paragraph>
                    <Checkbox onChange={onChange} checked>
                      对此博客有任何疑问欢迎留言
                    </Checkbox>
                    <br />
                    <Checkbox onChange={onChange} checked>
                      留言建议留下你的qq号/昵称（输入qq号自动拉取昵称），方便及时收到博主回复
                    </Checkbox>
                    <br />
                    <Checkbox onChange={onChange} checked>
                      本站支持丰富的表情，满足你的个性需求
                    </Checkbox>
                    <br />
                    <Checkbox onChange={onChange} checked>
                      请不要评论违反中国法律的内容。
                    </Checkbox>
                  </Paragraph>
                </Typography>
                <Divider />
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
              </Col>
            </Row>
          </main>
        </div>
        <BackTop />
      </div>
    </Layout>
  )
}
