const themeConfig = require('./config/themeConfig')
const markdown = require('./config/markdown')
const plugins = require('./config/plugins')
const head = require('./config/head')

module.exports = {
  theme: 'vdoing',
  title: "尚天竹",
  description: '一个关于前端和后端技术分享和学习的个人博客,坚持原创,坚持分享',
  dest: 'webView',
  cache: true,
  base: '/',
  category: true,
  markdown,
  plugins,
  head, 
  themeConfig
}