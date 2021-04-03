/** @format */
import React, {useState, useEffect} from 'react'
import {Avatar, Divider} from 'antd'
import {createFromIconfontCN, GithubFilled} from '@ant-design/icons'
import Contact from './Contact'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import store from '../store'
import {
  setarticlesAction
} from '../store/actionCreators.js';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2174183_dn83jy6h7ah.js',
})

const Author = () => {
  const [articles, setarticles] = useState(0)
  const [categories, setcategories] = useState(0)
  const [tags, settags] = useState(0)
  const [authorInfo, setauthorInfo] = useState(Object)

  function getAdminInfo() {
    return axios(servicePath.getAdminInfo).then(res => {
      return res.data.data
    })
  }

  function getArticleList() {
    return axios(servicePath.getArticleList).then(res => {
      return res.data.data
    })
  }

  function setarticlesRedux(articles){
    const action = setarticlesAction(articles)
    store.dispatch(action)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.all([getAdminInfo(), getArticleList()]).then(
        axios.spread(function (AdminInfo, ArticleList) {
          // 两个请求现在都执行完成
          setarticlesRedux(ArticleList.length)
          setauthorInfo(AdminInfo[0])
          console.log(AdminInfo[0])
        }),
      )
    }
    fetchData()
  }, [])
  store.subscribe(()=>{
    setarticles(store.getState().articles)
    setcategories(store.getState().categories)
    settags(store.getState().tags)
  })
  return (
    <div className="author-div comm-box box-shadow">
      <div>
        <Avatar size={100} src={authorInfo.avatar} />
      </div>
      <div className="author-introduction">
        <h3 className="author-name">{authorInfo.username}</h3>
        <p className="author-detail">{authorInfo.introduction}</p>
        <div className="author-info-data">
          <div className="author-info-item">
            <a>
              <div className="headline">文章</div>
              <div className="length-num">{articles}</div>
            </a>
          </div>
          <div className="author-info-item">
            <a>
              <div className="headline">分类</div>
              <div className="length-num">{categories}</div>
            </a>
          </div>
          <div className="author-info-item">
            <a>
              <div className="headline">标签</div>
              <div className="length-num">{tags}</div>
            </a>
          </div>
        </div>
        <Divider>社交账号</Divider>
        <Contact />
      </div>
      <style jsx global>{`
        .author-div {
          text-align: center;
          padding: 1rem;
        }

        .author-div .author-div > div {
          margin-bottom: 1rem;
        }

        .author-introduction {
          font-size: 0.8rem;
          color: #999;
        }

        .author-introduction .social-icon .anticon-github {
          color: #000;
        }

        .author-name {
          font-weight: 600;
          font-size: 1.5rem;
          color: #4c4948;
          margin-bottom: 0;
        }

        .author-detail {
          color: #4c4948;
          margin-bottom: 0;
        }

        .author-info-data {
          display: table;
          table-layout: fixed;
          width: 100%;
          margin-top: 16px;
        }

        .author-info-item {
          display: table-cell;
          text-align: center;
        }

        .headline {
          color: #4c4948;
          font-size: 0.95rem;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .length-num {
          color: #000;
          font-size: 1.3rem;
        }

        .account {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }
      `}</style>
    </div>
  )
}

export default Author
