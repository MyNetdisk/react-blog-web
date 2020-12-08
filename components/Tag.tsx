/** @format */

import React from 'react'
import {Tag} from 'antd'
import {createFromIconfontCN, TagsFilled} from '@ant-design/icons'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2174183_dn83jy6h7ah.js',
})

const Tags = () => {
  return (
    <div className="tag-container">
      <Tag icon={<IconFont type="github" />} color="#f50">
        github
      </Tag>
      <Tag icon={<IconFont type="database" />} color="#2db7f5">
        mysql
      </Tag>
      <Tag icon={<IconFont type="nodejs" />} color="#87d068">
        nodejs
      </Tag>
      <Tag icon={<IconFont type="docker" />} color="#108ee9">
        docker
      </Tag>
      <Tag icon={<IconFont type="adobe" />} color="#f50">
        adobe
      </Tag>
      <Tag icon={<IconFont type="java" />} color="#2db7f5">
        java
      </Tag>
      <Tag icon={<IconFont type="css3" />} color="#87d068">
        css3
      </Tag>
      <Tag icon={<IconFont type="javascript" />} color="#108ee9">
        javascript
      </Tag>
      <Tag icon={<IconFont type="typescript" />} color="#f50">
        typescript
      </Tag>
      <Tag icon={<IconFont type="reactjs" />} color="#2db7f5">
        reactjs
      </Tag>
      <Tag icon={<IconFont type="vuejs" />} color="#87d068">
        vuejs
      </Tag>
      <Tag icon={<IconFont type="html5" />} color="#108ee9">
        html5
      </Tag>
      <style jsx global>{`
        .tag-container {
          padding: 0 24px 10px;
        }

        .tag-container .ant-tag {
          margin-bottom: 5px;
          cursor: pointer;
          border-radius: 20px;
          line-height: 22px;
        }

        .tag-container .ant-tag .anticon {
          font-size: 18px;
        }
      `}</style>
    </div>
  )
}
export default Tags
