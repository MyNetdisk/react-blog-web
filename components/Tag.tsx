/** @format */

import React, {useState, useEffect} from 'react'
import {Tag} from 'antd'
import {createFromIconfontCN, TagsFilled} from '@ant-design/icons'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import store from '../store'
import {
  settagsAction
} from '../store/actionCreators.js';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2174183_dn83jy6h7ah.js',
})

const Tags = () => {
  const [tags, settags] = useState([])
  function settagsRedux(categories){
    const action = settagsAction(categories)
    store.dispatch(action)
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTags).then(res => {
        settagsRedux(res.data.data.length)
        return res.data.data
      })
      settags(result)
    }
    fetchData()
  }, [])
  return (
    <div className="tag-container">
      {tags.map(item => {
        return <Tag /* icon={<IconFont type="github" />}  */ key={item.id} color={item.out_color}>{item.name}</Tag>
      })}
      <style jsx global>{`
        .tag-container {
          padding: 0 24px 10px;
        }

        .tag-container .ant-tag {
          margin-bottom: 5px;
          cursor: pointer;
        }

        .tag-container .ant-tag .anticon {
          font-size: 18px;
        }
      `}</style>
    </div>
  )
}
export default Tags
