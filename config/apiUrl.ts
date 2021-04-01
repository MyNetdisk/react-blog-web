/** @format */
let ipUrl = ''
const HOST = process.env.NODE_ENV
if (HOST === 'development') {
  ipUrl = 'http://127.0.0.1:7001/default/'
} else if (HOST === 'production') {
  ipUrl = 'https://api.mynetdisk.top/default/'
}
const servicePath = {
  getArticleList: `${ipUrl}getArticleList`, // 首页接口
  getArticleById: `${ipUrl}getArticleById/`, // 详情页接口
  getTypeInfo: `${ipUrl}getTypeInfo`, // 文章类别接口
  getCategory: `${ipUrl}getCategory`, // 获取文章类型列表
  getPhrase: `${ipUrl}getPhrase`, // 格言接口
  getListById: `${ipUrl}getListById/`, // 根据类型ID获得文章列表
  getTimeline: `${ipUrl}getTimeline`, // 根据类型ID获得文章列表
  getSiteinfo: `${ipUrl}getSiteinfo`, // 获取网站信息
  getTags: `${ipUrl}getTags`, // 获取标签
  getCommentById: `${ipUrl}getCommentById/`, // 根据类型ID获得文章列表
  addComment: `${ipUrl}addComment/`, // 添加评论
  isRegister: `${ipUrl}isRegister/`, // 是否注册
  register: `${ipUrl}register/`, // 注册
  login: `${ipUrl}login/`, // 注册
}

export default servicePath
