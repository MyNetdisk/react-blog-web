/** @format */

import React, {useState} from 'react'
import {Image} from 'antd'
import {SmileFilled} from '@ant-design/icons'
import {emojis} from '../util/constans'
import axios from 'axios'
import servicePath from '../config/apiUrl'

type Props = {
  pageId: String
  article_title: String
}

const Replay = ({pageId, article_title}: Props) => {
  let [name, setname] = useState('')
  let [email, setemail] = useState('')
  let [content, setcontent] = useState('')
  let [active, setactive] = useState(false)
  const handleEmoji = emoji => {
    setcontent((content += '[' + emoji.title + ']'))
    console.log(content)
  }
  const toggleEmoji = () => {
    setactive(!active)
  }
  const handleInputNameChange = (e) => {
    setname((e.target.value))
  }
  const handleInputEmailChange = (e) => {
    setemail((e.target.value))
    console.log(email)
  }
  const handleTextareaChange = (e) => {
    setcontent((e.target.value))
  }
  function rTime(date) {
    var json_date = new Date(date).toJSON();
    return new Date(+new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
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
    dataProps.from_avatar = "https://images.mynetdisk.vercel.app/react-blogs/avator/1.jpg"
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
  return (
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
          <input type="text" name="author" id="author" size={22} required placeholder="名称(必须)" value={name} onChange={(e)=>handleInputNameChange(e)} />
          <input type="email" name="email" id="email" size={22} required placeholder="邮箱(必须)" value={email} onChange={(e)=>handleInputEmailChange(e)} />
          {/* <input type="url" name="url" id="url" size={22} placeholder="网址(http://)" /> */}
        </p>
        <p>
          <textarea name="comment" id="comment" rows={8} placeholder="填写邮箱可以收到回复哦！" value={content} onChange={(e)=>handleTextareaChange(e)} />
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
          <input name="submit" type="submit" id="submit" value="提交评论" onClick = {() => saveComment()} />
        </p>
        <div className="well" style={{display : active ? "block" : "none"}}>
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
      <style jsx global>{`
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
      `}</style>
    </div>
  )
}

export default Replay
