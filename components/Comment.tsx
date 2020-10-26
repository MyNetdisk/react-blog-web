/** @format */

import React from 'react'
import '../public/style/components/comment.css'

const Comment = () => {
  return (
    <div id="repond">
      <div className="comment-box">
        <h3 id="comments" className="repond_title">
          发表评论（目前55条评论）
        </h3>
        <div id="cancel-comment-reply">
          <small>
            <a rel="nofollow" href="/#" id="cancel-comment-reply-link" style={{display: 'none'}}>
              点击这里取消回复。
            </a>
          </small>
        </div>
        <form action="/#" method="post" id="conmentform" className="mobile">
          <p>
            <input type="text" name="author" id="author" size={22} required placeholder="名称(必须)" />
            <label htmlFor="author">
              <small>名称 (必须)</small>
            </label>
          </p>
          <p>
            <input type="email" name="email" id="email" size={22} required placeholder="邮箱(必须)" />
            <label htmlFor="email">
              <small>邮件地址(不会被公开)(必须)</small>
            </label>
          </p>
          <p className="hidden" hidden>
            <input type="url" name="url" id="url" size={22} />
            <label htmlFor="url">
              <small>网站</small>
            </label>
          </p>
          <p>
            <textarea name="comment" id="comment" rows={10} />
          </p>
          <p>
            <input name="submit" type="submit" id="submit" value="提交评论" />
            <span id="commRem" className="m120" style={{color: '#cd0000'}} />
          </p>
        </form>
      </div>
      {/* <div className="comment-list"></div> */}
    </div>
  )
}
export default Comment
