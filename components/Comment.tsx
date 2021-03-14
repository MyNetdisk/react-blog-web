/** @format */

import React, {useState, useEffect} from 'react'
import {Image} from 'antd'
import {LoadingOutlined, SmileFilled} from '@ant-design/icons'
import {emojis} from '../util/constans'
import Replay from './Reply'
import Util from '../util'
import axios from 'axios'
import servicePath from '../config/apiUrl'

type Props = {
  pageId: String
  article_title: String
}

const Comment = ({pageId, article_title}: Props) => {
  const [showPanel, setshowPanel] = useState(true)
  const [commentData, setcommentData] = useState([])
  const [commentTotal, setcommentTotal] = useState()
  let [name, setname] = useState('')
  let [email, setemail] = useState('')
  let [content, setcontent] = useState('')
  let [active, setactive] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getCommentById + pageId).then(res => {
        return res.data
      })
      setcommentData(result.data)
      setcommentTotal(result.comtotal)
    }
    fetchData()
  })
  const handleEmoji = emoji => {
    setcontent((content += '[' + emoji.title + ']'))
  }
  const toggleEmoji = () => {
    setactive(!active)
  }
  const handleInputNameChange = e => {
    setname(e.target.value)
  }
  const handleInputEmailChange = e => {
    setemail(e.target.value)
    console.log(email)
  }
  const handleTextareaChange = e => {
    setcontent(e.target.value)
    console.log(content)
  }
  function randomAvator(){
    return `https://images.mynetdisk.vercel.app/react-blogs/avator/${Util.randomNum(1,16)}.jpg`
  }
  const saveComment = () => {
    let dataProps = {
      content: null,
      article_id: null,
      article_title: null,
      comment_id: null,
      from_id: null,
      from_name: null,
      from_avatar: null,
      like_num: null,
      create_date: null,
      is_del: null
   }
   // dataProps.id = null
   dataProps.content = content
   dataProps.article_id = pageId
   dataProps.article_title = article_title
   dataProps.comment_id = null
   dataProps.from_id = null
   dataProps.from_name = name
   dataProps.from_avatar = randomAvator()
   dataProps.create_date = rTime(new Date())
   axios({
     method: 'post',
     url: servicePath.addComment,
     data: dataProps,
     withCredentials: true,
   }).then(res => {
     console.log(res)
   })
  }
  function formateComment(content) {
    if (content != null && content !== '') {
      return Util.formateComment(content)
    } else {
      return ''
    }
  }
  function rTime(date) {
    var json_date = new Date(date).toJSON()
    return new Date(+new Date(json_date) + 8 * 3600 * 1000)
      .toISOString()
      .replace(/T/g, ' ')
      .replace(/\.[\d]{3}Z/, '')
  }
  return (
    <div id="repond">
      <h3 id="comments" className="repond_title">
        发表评论
      </h3>
      <div className="comment-box">
        <div id="cancel-comment-reply">
          <small>
            <a rel="nofollow" href="/#" id="cancel-comment-reply-link" style={{display: 'none'}}>
              点击这里取消回复。
            </a>
          </small>
        </div>
        <form method="post" id="conmmentform" className="mobile">
          <p className="commentator">
            <input
              type="text"
              name="author"
              id="author"
              size={22}
              required
              placeholder="名称(必须)"
              value={name}
              onChange={e => handleInputNameChange(e)}
            />
            <input
              type="email"
              name="email"
              id="email"
              size={22}
              required
              placeholder="邮箱(必须)"
              value={email}
              onChange={e => handleInputEmailChange(e)}
            />
          </p>
          <p>
            <textarea
              name="comment"
              id="comment"
              rows={8}
              placeholder="填写邮箱可以收到回复哦！"
              value={content}
              onChange={e => handleTextareaChange(e)}
            />
          </p>
          <p className="clearfix" style={{position: 'relative'}}>
            <SmileFilled
              onClick={() => toggleEmoji()}
              style={{
                fontSize: '28px',
                color: active ? '#40a9ff' : 'rgba(0,0,0,.54)',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />
            <input name="submit" type="submit" id="submit" value="提交评论" onClick={() => saveComment()} />
          </p>
          <div className="well" style={{display: active ? 'block' : 'none'}}>
            <div>
              {emojis.map(item => {
                return (
                  <a key={item.title} onClick={() => handleEmoji(item)}>
                    <Image preview={false} className="d-inline-flex" width={32} src={item.url} />
                  </a>
                )
              })}
            </div>
          </div>
        </form>
      </div>
      <div className="comment-count">
        <span>{commentTotal}</span>条评论
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
                <div className="replay-wrapper">
                  <Replay pageId={pageId} article_title={article_title} />
                </div>
                <div className="quote">
                  {item.subCom.map(item => {
                    return (
                      <div className="comment-item" key={item.id}>
                        <img src={item.comment_avatar} alt="" className="coment-avatar sub" />
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
                          <div className="replay-wrapper">
                            <Replay pageId={pageId} article_title={article_title} />
                          </div>
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
          box-sizing: border-box;
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
        // 评论样式开始
        .comment-box {
          padding: 10px;
          margin-bottom: 10px;
          background-color: rgba(27, 31, 35, 0.05);
          border-radius: 3px;
        }

        #commentform {
          margin: 5px 0 0 0;
        }

        #conmmentform p {
          margin: 0;
        }

        #conmmentform .commentator input {
          font-size: 12px;
          color: #555;
          box-sizing: border-box;
          width: 50%;
          border-bottom: 1px dashed #eaecef;
        }

        #conmmentform .commentator input:focus {
          border-bottom: 1px dashed #3eaf7c;
        }

        @media screen and (max-width: 520px) {
          #conmmentform .commentator input {
            width: 100%;
          }
        }

        #conmmentform input,
        #conmmentform textarea {
          padding: 8px;
          border: none;
          outline: none;
          background: transparent;
        }

        #conmmentform input {
          margin-bottom: 5px;
        }

        #conmmentform textarea {
          width: 100%;
          height: 140px;
          overflow: auto;
        }

        #conmmentform .anticon-smile {
          float: left;
        }

        #conmmentform #submit {
          float: right;
          width: 100px;
          height: 36px;
          overflow: visible;
          background-color: #f0f3f9;
          box-shadow: 1px 1px #afc4ea, 2px 2px #afc4ea, 3px 3px #afc4ea;
        }

        #conmmentform .well {
          min-height: 20px;
          padding: 19px;
          margin-bottom: 20px;
          background-color: #f5f5f5;
          border: 1px solid #e3e3e3;
          border-radius: 4px;
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
        }
        // 评论样式结束
      `}</style>
    </div>
  )
}
export default Comment
