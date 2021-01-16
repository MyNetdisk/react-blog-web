/** @format */

import React from 'react'
import { SmileFilled } from '@ant-design/icons'

const Replay = () => {
  return (
    <div className="comment-box">
      <div id="cancel-comment-reply">
        <small>
          <a rel="nofollow" href="/#" id="cancel-comment-reply-link" style={{display: 'none'}}>
            点击这里取消回复。
          </a>
        </small>
      </div>
      <form action="/#" method="post" id="conmmentform" className="mobile">
        <p className="commentator">
          <input type="text" name="author" id="author" size={22} required placeholder="名称(必须)" />
          <input type="email" name="email" id="email" size={22} required placeholder="邮箱(必须)" />
          {/* <input type="url" name="url" id="url" size={22} placeholder="网址(http://)" /> */}
        </p>
        <p>
          <textarea name="comment" id="comment" rows={8} placeholder="填写邮箱可以收到回复哦！" />
        </p>
        <p className="clearfix">
          <SmileFilled style={{ fontSize: '28px', color: '#08c' }} />
          <input name="submit" type="submit" id="submit" value="提交评论" />
          {/* <span id="commRem" className="m120" style={{color: '#cd0000'}} /> */}
        </p>
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

        #conmmentform .anticon-smile{
          float:left
        }

        #conmmentform #submit {
          float:right;
          width: 100px;
          height: 36px;
          overflow: visible;
          background-color: #f0f3f9;
          box-shadow: 1px 1px #afc4ea, 2px 2px #afc4ea, 3px 3px #afc4ea;
        }
      `}</style>
    </div>
  )
}

export default Replay
