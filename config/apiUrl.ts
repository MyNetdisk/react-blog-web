/** @format */
let ipUrl = ''
const HOST = process.env.NODE_ENV
if (HOST === 'development') {
  ipUrl = 'http://127.0.0.1:7001/default/'
} else if (HOST === 'production') {
  ipUrl = 'http://47.105.40.202:7001/default/'
}
const servicePath = {
  getArticleList: `${ipUrl}getArticleList`, // 首页接口
  getArticleById: `${ipUrl}getArticleById/`, // 详情页接口
  getTypeInfo: `${ipUrl}getTypeInfo`, // 文章类别接口
  getListById: `${ipUrl}getListById/`, // 根据类型ID获得文章列表
}

export default servicePath
