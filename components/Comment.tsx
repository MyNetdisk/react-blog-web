/** @format */

import React, {useState, useEffect} from 'react'
import {LoadingOutlined} from '@ant-design/icons'
import Replay from './Reply'
import Util from '../util'
// import { emojis } from '../util/constans'
import axios from 'axios'
import servicePath from '../config/apiUrl'

type Props = {
  pageId: String
  article_title: String
}

const Comment = ({pageId, article_title}: Props) => {
  const [showPanel, setshowPanel] = useState(true)
  const [commentData, setcommentData] = useState([])
  // console.log(commentData)
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getCommentById + pageId).then(res => {
        return res.data.data
      })
      setcommentData(result)
    }
    fetchData()
  })
  function formateComment(content) {
    if (content != null && content !== '') {
      return Util.formateComment(content)
    } else {
      return ''
    }
  }
  function rTime(date) {
    var json_date = new Date(date).toJSON();
    return new Date(+new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
  }
  return (
    <div id="repond">
      <h3 id="comments" className="repond_title">
        发表评论
      </h3>
      <Replay pageId={pageId} article_title={article_title} />
      <div className="comment-count">
        <span>88</span>条评论
      </div>
      <div className="comment-loading" style={{display: 'none'}}>
        <LoadingOutlined style={{fontSize: '30px'}} />
      </div>
      <div className="comment-list">
        {/* <div className="no-comment">暂无评论</div> */}
        {commentData.map(item => {
          return (
            <div className="comment-item" key={item.id}>
              <img src={item.comment_avatar} alt="" className="coment-avatar" />
              <div className="comment-info">
                <div className="comment-name">
                  <a href="/#" className="nick">
                    {item.from_name}
                  </a>
                  {/* <span className="sys">Chrome 86.0.4240.111</span>
                  <span className="sys">Windows 10.0</span> */}
                </div>
                <div className="comment-date">
                  <span className="time">{rTime(item.comment_date)}</span>
                  <span className="replay-btn">回复</span>
                </div>
                <div className="comment-content">
                  <p dangerouslySetInnerHTML={{__html: formateComment(item.content)}}></p>
                </div>
                {/* <div className="replay-wrapper">回复框占位</div> */}
                <div className="quote">
                  {item.subCom.map(item => {
                    return (
                      <div className="comment-item" key={item.id}>
                        <img
                          src={item.comment_avatar}
                          alt=""
                          className="coment-avatar sub"
                        />
                        <div className="comment-info">
                          <div className="comment-name">
                            <a href="/#" className="nick">
                            {item.from_name}
                            </a>
                            {/* <span className="sys">Chrome 86.0.4240.111</span>
                            <span className="sys">Windows 10.0</span> */}
                          </div>
                          <div className="comment-date">
                            <span className="time">{rTime(item.comment_date)}</span>
                            <span className="replay-btn">回复</span>
                          </div>
                          <div className="comment-content">
                            <p dangerouslySetInnerHTML={{__html: formateComment(item.content)}}>
                              {/* <a href="/#" className="nick">
                                @{item.from_name}
                              </a> */}
                            </p>
                          </div>
                          {/* <div className="replay-wrapper">回复框占位</div> */}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <style jsx global>{`
        #repond {
          max-width: 100%;
          padding: 1rem;
        }

        .repond_title {
          margin-top: 10px;
          font-size: 1.8em;
        }

        .comment-count {
          font-size: 1.25em;
          font-weight: 600;
        }

        .comment-loading {
          margin: 10px 0;
          text-align: center;
        }

        .comment-item {
          display: flex;
          justify-content: flex-start;
          margin-top: 20px;
          width: 100%;
        }

        .coment-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
        }

        .coment-avatar.sub {
          width: 40px;
          height: 40px;
        }

        .comment-info {
          padding-left: 10px;
          flex: 1;
        }

        .comment-name .nick {
          display: inline-block;
          margin-right: 15px;
          cursor: pointer;
          font-size: 0.975em;
          font-weight: 500;
        }

        .comment-name .sys {
          padding: 3px 5px;
          margin-right: 10px;
          border-radius: 5px;
          color: #242424;
          background-color: rgba(27, 31, 35, 0.05);
        }

        .comment-date {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .comment-date .time {
          font-size: 12px;
          color: #b3b3b3;
        }

        .replay-btn {
          font-size: 14px;
          padding: 2px 6px;
          border-radius: 3px;
          color: #242424;
          background-color: rgba(27, 31, 35, 0.05);
        }

        .comment-content {
          margin: 0 3px;
          padding: 0 10px;
          box-sizing: border-box;
          background-color: rgba(27, 31, 35, 0.05);
          border-radius: 3px;
          font-size: 14px;
          color: #555;
          line-height: 2;
          word-break: break-all;
        }

        .comment-content p {
          margin-bottom: 0;
          padding: 1em 0;
        }
      `}</style>
    </div>
  )
}
export default Comment
