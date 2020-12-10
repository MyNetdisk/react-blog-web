/** @format */
import React, {useState, useEffect} from 'react'
import {Input, Modal, Button} from 'antd'
import {createFromIconfontCN} from '@ant-design/icons'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2174183_dn83jy6h7ah.js',
})

type Props = {
  isSearchVisible: boolean
}

const Search = ({isSearchVisible}: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    setIsModalVisible(isSearchVisible)
  })

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div className="search">
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="本地搜索" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <Input />
      </Modal>
      <style jsx global>{`
        .search {
          display: 'block';
        }
      `}</style>
    </div>
  )
}

export default Search
