/** @format */

import React from 'react'
import Head from 'next/head'
import {Typography, Divider, PageHeader, Row, Col, BackTop} from 'antd'
import {TagsFilled} from '@ant-design/icons'
import Author from '../components/Author'
import Category from '../components/Category'
import Tag from '../components/Tag'
import Layout from '../components/Layout'
import Contact from '../components/Contact'

const {Title, Paragraph, Text, Link} = Typography

export default function About() {
  return (
    <Layout indexBG={false}>
      <Head>
        <title>欢迎来到关于我</title>
      </Head>
      <div className="container">
        <div className="body-wrap">
          <main>
            <Row className="comm-main" justify="center">
              <Col className="comm-left box-shadow about-left" xs={24} sm={24} md={17} lg={18} xl={16}>
                <Paragraph>
                  一名追求技术喜欢安静的程序员，追求优雅的代码，喜欢好看的UI。目前主要的方向是前端数据可视化，偶尔也会捣鼓后端的东西，励志成为一名全栈工程师！
                </Paragraph>
                <Title level={3}>我都喜欢什么？</Title>
                <Paragraph>
                  <ul>
                    <li>看看书，写写字。</li>
                    <li>听音乐，看电影。</li>
                    <li>跑跑步，健健身。</li>
                  </ul>
                </Paragraph>
                <Title level={3}>我的愿望是什么？</Title>
                <Paragraph>
                  我曾看到一篇美国未来作家约翰·奈斯比特的文章《大趋势——改变我们生活中的十大新方向》，其中一段话深深的触动了我，“要想真正取得成功，你必须懂三种语言：流利的英语，一门外国语和电脑语言。”
                  <br />
                  所以未来我希望能学好英语、java、python。
                  <br />
                  学好英语是学好电脑语言的基础，学好java是为了职业发展，学好python是提高工作效率的关键。
                  <br />
                </Paragraph>
                <Title level={3}>在哪里能找到我？</Title>
                <Paragraph>
                  <Contact />
                </Paragraph>
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
        .about-left {
          padding: 50px 40px;
        }

        .about-left .social-icon .anticon-github {
          color: #000;
        }

        .about-left .site-social-icons {
          text-align: left;
        }

        .about-left div.ant-typography {
          font-size: 16px;
          color: #2c3e50;
        }
      `}</style>
    </Layout>
  )
}
