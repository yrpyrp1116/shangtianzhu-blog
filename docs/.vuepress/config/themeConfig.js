const nav = require('./nav')

module.exports = {
  nav,
  sidebarDepth: 2,
  lastUpdated: '上次更新',
  searchMaxSuggestions: 10,
  // repo: 'yrpyrp1116/au-blog',
  // docsDir: 'docs',
  // editLinks: true,
  // editLinkText: '编辑',
  sidebar: {
    mode: 'structuring',
    collapsable: false
  },
  rightMenuBar: true,
  pageButton: true,
  // bodyBgImg: (process.env.NODE_ENV === 'development' ? '' : '/blog') + '/images/bg-6.jpeg',
  // bodyBgImgOpacity: 0.8,
  footer: {
    createYear: 2021,
    copyrightInfo: '尚天竹 | <a href="https://github.com/yrpyrp1116" target="_blank">MIT License</a>'
  },
  blogger: {
    avatar: 'https://avatar-static.segmentfault.com/249/884/2498845138-602fc45007b7c_big64',
    name: '尚天竹',
    slogan: '我也不知道。。。',
  },
  author: {
    name: '尚天竹',
    link: 'https://github.com/yrpyrp1116',
  },
  social: {
    iconfontCssFile: '//at.alicdn.com/t/font_2382143_eetu51zaufa.css',
    icons: [
      {
        iconClass: 'iconshejiaotubiao-46',
        title: '知乎',
        link: 'https://www.zhihu.com/people/yrp-48/posts',
      },
      {
        iconClass: 'iconGitHub',
        title: 'GitHub',
        link: 'https://github.com/yrpyrp1116',
      },
    ],
  },
}