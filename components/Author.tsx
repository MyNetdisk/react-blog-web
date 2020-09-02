/** @format */
import React from 'react'
import {Avatar, Divider} from 'antd'
import {GithubOutlined, QqOutlined, WechatOutlined} from '@ant-design/icons'
import '../public/style/components/author.css'

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar
          size={100}
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595399172302&di=69bbe6ca5639707e287839673fd9c4a1&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201710%2F18%2F20171018230400_5zmuJ.jpeg"
        />
      </div>
      <div className="author-introduction">
        大胖叨叨逼，专注前端12年。
        <Divider>社交账号</Divider>
        <GithubOutlined style={{fontSize: '28px'}} className="account" />
        <QqOutlined style={{fontSize: '28px'}} className="account" />
        <WechatOutlined style={{fontSize: '28px'}} className="account" />
      </div>
    </div>
  )
}

export default Author
