/** @format */

import React from 'react'

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
        <p>
          <input name="submit" type="submit" id="submit" value="提交评论" />
          <span id="commRem" className="m120" style={{color: '#cd0000'}} />
        </p>
      </form>
    </div>
  )
}

export default Replay
