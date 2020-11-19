/** @format */

import React, {useState, useEffect} from 'react'
import {Menu, PageHeader} from 'antd'
import {AppstoreOutlined, MailOutlined, FolderOpenFilled} from '@ant-design/icons'
import '../public/style/components/category.css'

const {SubMenu} = Menu

const rootSubmenuKeys = ['sub1', 'sub2']

const Category = () => {
  const [openKeys, setOpenKeys] = useState(['sub1'])
  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  return (
    <div className="category comm-box box-shadow">
      <PageHeader
        className="category-page-header"
        backIcon={<FolderOpenFilled />}
        onBack={() => null}
        title="分类"
        subTitle=""
      />
      <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{width: 256}}>
        <SubMenu key="sub1" icon={<MailOutlined />} title="技术总结">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="生活与创作">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default Category
