/** @format */

import React from 'react'
import {LoadingOutlined} from '@ant-design/icons'
import '../public/style/components/comment.css'

const Comment = () => {
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
        <form action="/#" method="post" id="conmmentform" className="mobile">
          <p className="commentator">
            <input type="text" name="author" id="author" size={22} required placeholder="名称(必须)" />
            <input type="email" name="email" id="email" size={22} required placeholder="邮箱(必须)" />
            <input type="url" name="url" id="url" size={22} placeholder="网址(http://)" />
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
      <div className="comment-count">
        <span>88</span>条评论
      </div>
      <div className="comment-loading" style={{display: 'none'}}>
        <LoadingOutlined style={{fontSize: '30px'}} />
      </div>
      <div className="comment-list">
        {/* <div className="no-comment">暂无评论</div> */}
        <div className="comment-item">
          <img
            src="https://gravatar.loli.net/avatar/415ae4eeb931482bc1a0676729519e44?d=retro&v=1.4.14"
            alt=""
            className="coment-avatar"
          />
          <div className="comment-info">
            <div className="comment-name">
              <a href="/#" className="nick">
                ChongQin
              </a>
              <span className="sys">Chrome 86.0.4240.111</span>
              <span className="sys">Windows 10.0</span>
            </div>
            <div className="comment-date">
              <span className="time">2020-10-18</span>
              <span className="replay-btn">回复</span>
            </div>
            <div className="comment-content">
              <p>可以，学习下 </p>
            </div>
            <div className="replay-wrapper">回复框占位</div>
            <div className="quote">
              <div className="comment-item">
                <img
                  src="https://gravatar.loli.net/avatar/415ae4eeb931482bc1a0676729519e44?d=retro&v=1.4.14"
                  alt=""
                  className="coment-avatar"
                />
                <div className="comment-info">
                  <div className="comment-name">
                    <a href="/#" className="nick">
                      ChongQin
                    </a>
                    <span className="sys">Chrome 86.0.4240.111</span>
                    <span className="sys">Windows 10.0</span>
                  </div>
                  <div className="comment-date">
                    <span className="time">2020-10-18</span>
                    <span className="replay-btn">回复</span>
                  </div>
                  <div className="comment-content">
                    <p>可以，学习下 </p>
                  </div>
                  <div className="replay-wrapper">回复框占位</div>
                  <div className="quote">回复嵌套占位</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comment-item">
          <img
            src="https://gravatar.loli.net/avatar/415ae4eeb931482bc1a0676729519e44?d=retro&v=1.4.14"
            alt=""
            className="coment-avatar"
          />
          <div className="comment-info">
            <div className="comment-name">
              <a href="/#" className="nick">
                ChongQin
              </a>
              <span className="sys">Chrome 86.0.4240.111</span>
              <span className="sys">Windows 10.0</span>
            </div>
            <div className="comment-date">
              <span className="time">2020-10-18</span>
              <span className="replay-btn">回复</span>
            </div>
            <div className="comment-content">
              <p>可以，学习下 </p>
            </div>
            <div className="replay-wrapper">回复框占位</div>
            <div className="quote">
              <div className="comment-item">
                <img
                  src="https://gravatar.loli.net/avatar/415ae4eeb931482bc1a0676729519e44?d=retro&v=1.4.14"
                  alt=""
                  className="coment-avatar"
                />
                <div className="comment-info">
                  <div className="comment-name">
                    <a href="/#" className="nick">
                      ChongQin
                    </a>
                    <span className="sys">Chrome 86.0.4240.111</span>
                    <span className="sys">Windows 10.0</span>
                  </div>
                  <div className="comment-date">
                    <span className="time">2020-10-18</span>
                    <span className="replay-btn">回复</span>
                  </div>
                  <div className="comment-content">
                    <p>可以，学习下 </p>
                  </div>
                  <div className="replay-wrapper">回复框占位</div>
                  <div className="quote">回复嵌套占位</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Comment
