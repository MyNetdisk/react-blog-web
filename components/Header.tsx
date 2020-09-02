/** @format */

import React, {useState, useEffect} from 'react'
import Router from 'next/router'
// import Link from 'next/link'
import axios from 'axios'
import '../public/style/components/header.css'
import {Row, Col, Menu} from 'antd'
// import {HomeOutlined, VideoCameraOutlined, SmileOutlined} from '@ant-design/icons'
import servicePath from '../config/apiUrl'

const Header = () => {
  const [navArray, setnavArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then(res => {
        return res.data.data
      })
      setnavArray(result)
    }
    fetchData()
  }, [])

  const handleClick = e => {
    // eslint-disable-next-line eqeqeq
    if (e.key == 0) {
      Router.push('/index')
    } else {
      Router.push(`/list?id=${e.key}`)
    }
  }

  return (
    <div className="header">
      <Row justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">MyNetdisk</span>
          <span className="header-txt">专注前端十余年</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="0">Home</Menu.Item>
            {navArray.map(item => {
              return <Menu.Item key={item.Id}>{item.typeName}</Menu.Item>
            })}
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header
