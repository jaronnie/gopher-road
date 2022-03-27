module.exports = {
  base: '/',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'gopher-road',
      description: 'golang 后端之路'
    },
  },
  plugins: [
    '@vuepress/back-to-top',
  ],
  themeConfig: {
    logo: 'https://resource.gocloudcoder.com/logo.jpeg',
    locales: {  
      '/': {
       // 多语言下拉菜单的标题
       selectText: '选择语言',
       // 该语言在下拉菜单中的标签
       label: '简体中文',
       // 编辑链接文字
       repo: 'jaronnie/gopher-road',
       docsDir: 'docs',
       editLinkText: '在 GitHub 上编辑此页',
       // Service Worker 的配置
       serviceWorker: {
         updatePopup: {
           message: "发现新内容可用.",
           buttonText: "刷新"
         }
       },
       // 当前 locale 的 algolia docsearch 选项
       algolia: {},
       nav: [
         { text: 'golang', link: '/golang/', ariaLabel: '指南' },
         { text: 'linux', link: '/linux/', ariaLabel: '指南' },
         { text: '算法与数据结构', link: '/algorithms/', ariaLabel: '指南' },
         { text: '代码管理', link: '/codeManage/', ariaLabel: '指南' },
         { text: '中间件', link: '/middleware/', ariaLabel: '指南' },
         { text: 'docker', link: '/docker/', ariaLabel: '指南' },
         { text: 'kubernetes', link: '/kubernetes/', ariaLabel: '指南' },
         { text: '项目实战', link: '/project/', ariaLabel: '指南' },
         { text: '推荐阅读', link: '/recommendation/', ariaLabel: '指南' },
         { text: 'Github', link: 'https://github.com/jaronnie/gopher-road' }
       ],
       sidebar: {
         '/introduction/': [
           '',
         ],
         '/golang/': [
          {
            title: '标准库',
            collapsable: true,
            children: [
              { title: 'Go time 时间处理', path: '/golang/standard-library/time' },
            ]
          },
          {
            title: '第三方库standard-library',
            collapsable: true,
            children: [
              { title: 'Go 类型转换神器 cast', path: '/golang/third-party-library/cast' },
              { title: 'Go 操作 excel 利器 excelize', path: '/golang/third-party-library/excelize' },
              { title: 'Go 常用正则表达式 commonregex', path: '/golang/third-party-library/commonregex' },
              { title: 'Go 对标 linux tail 命令的 tail 包', path: '/golang/third-party-library/tail' },
            ]
          },
          {
            title: 'web 框架',
            collapsable: true,
            children: [
              {
                title: 'Golang 原生 http 框架',
                collapsable: true,
                children: [
                  { title: '入门使用', path: '/golang/web-frame/net-http/start' },
                ]
              },
              {
                title: 'Golang 轻量级 http 框架 Gin',
                collapsable: true,
                children: [
                  { title: '入门使用', path: '/golang/web-frame/gin/start' },
                ]
              },
            ]
          },
         ],
         '/linux/': [
           '',
         ],
         '/algorithms/': [
           '',
         ],
         '/codeManage/': [
           '',
         ],
         '/middleware/': [
          {
            title: 'mysql',
            collapsable: true,
            children: [
              { title: 'test1', path: '/middleware/mysql/' },
            ]
          },
          {
            title: 'mongodb',
            collapsable: true,
            children: [
              { title: 'mongodb 入门使用', path: '/middleware/mongodb/' },
            ]
          },
          {
            title: 'rabbitmq',
            collapsable: true,
            children: [
              { title: 'rabbitmq 入门使用', path: '/middleware/rabbitmq/' },
            ]
          },
          {
            title: 'nats',
            collapsable: true,
            children: ['nats/']
          },
          {
            title: 'minio',
            collapsable: true,
            children: ['minio/']
          }
        ],
         '/docker/': [
          'what-is-docker',
          'docker-install',
          'docker-create-run-use-container',
          'docker-build-image',
          'docker-dockerfile',
          'docker-practice-ubuntu-ssh',
          'docker-practice-mysql'
         ],
         '/kubernetes/': [
          ''
         ],
         '/project/': [
          'qiniu-cli',
          'music-player',
          'julenkv'
         ],
         '/recommendation/': [
          'go-code-guide',
          'go-books-read',
          'go-leetcode',
         ]
       }
      },
    }
  },
}