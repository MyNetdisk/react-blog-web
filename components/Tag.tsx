/** @format */

import React from 'react'
import {PageHeader, Tag} from 'antd'
import {createFromIconfontCN, TagsFilled} from '@ant-design/icons'
import '../public/style/components/tag.css'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2174183_j52zhhdz5a.js',
})

const Tags = () => {
  return (
    <div className="tag comm-box box-shadow">
      <PageHeader className="tag-page-header" backIcon={<TagsFilled />} onBack={() => null} title="标签" subTitle="" />
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
      </div>
    </div>
  )
}
export default Tags
