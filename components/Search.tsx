/** @format */
import React, {useState, useEffect, useImperativeHandle, forwardRef} from 'react'
import {Input, Modal} from 'antd'
import {createFromIconfontCN} from '@ant-design/icons'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2174183_dn83jy6h7ah.js',
})

const Search = (_props, ref) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  useImperativeHandle(ref, () => ({
    showModal,
  }))

  return (
    <div className="search">
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

export default forwardRef(Search)
