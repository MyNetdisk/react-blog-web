/** @format */

import React, {useState, useEffect} from 'react'
import {Menu, PageHeader} from 'antd'
import {AppstoreOutlined, MailOutlined, FolderOpenFilled} from '@ant-design/icons'
import axios from 'axios'
import servicePath from '../config/apiUrl'

const {SubMenu} = Menu

const rootSubmenuKeys = ['sub1', 'sub2']

const Category = () => {
  const [category, setcategory] = useState([])
  const [openKeys, setOpenKeys] = useState(['sub1'])
  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getCategory).then(res => {
        return res.data.data
      })
      setcategory(result)
    }
    fetchData()
  }, [])
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
        {category.map(item => {
          return (
            <SubMenu key={item.types_id} title={item.typeName}>
              {/* <div>{item}</div> */}
              {item.subCate.map(item => {
                return <Menu.Item key={item.post_id}>{item.title}</Menu.Item>
              })}
            </SubMenu>
          )
        })}
        {/* <SubMenu key="sub2" icon={<AppstoreOutlined />} title="生活与创作">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </SubMenu> */}
      </Menu>
      <style jsx global>{`
        .category {
          margin-top: 0.5rem;
        }

        .category-page-header {
          padding: 0 24px;
        }

        .ant-page-header-back {
          margin-right: 8px;
          font-size: 24px;
        }
      `}</style>
    </div>
  )
}

export default Category
