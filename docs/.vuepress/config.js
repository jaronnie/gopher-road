module.exports = {
  head: [
    [
        'link', // 设置 favicon.ico
        { rel: 'icon', href: 'favicon-gopher-road.ico' }
    ]
],
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
    docsRepo: 'https://github.com/jaronnie/gopher-road',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinks: true, // 底部增加编辑此页
    // lastUpdated: 'Last Updated', // 最近更新时间
    logo: 'https://resource.gocloudcoder.com/logo.jpeg',
    locales: {  
      '/': {
       // 多语言下拉菜单的标题
       selectText: '选择语言',
       // 该语言在下拉菜单中的标签
       label: '简体中文',
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
         '/golang/': [
          {
            title: '标准库',
            collapsable: true,
            children: [
              { title: 'Go time 时间处理', path: '/golang/standard-library/time' },
              { title: 'Go os 系统信息', path: '/golang/standard-library/os' },
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
            title: '范型学习',
            collapsable: true,
            children: [
              { title: '概念介绍', path: '/golang/generic-learn/start' },
              { title: 'slice 范型使用', path: '/golang/generic-learn/slices' },
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
          {
            title: '其他',
            collapsable: true,
            children: [
              { title: 'golang 编译成 so 后 C 调用', path: '/golang/others/golang-so-example' },
            ]
          },
         ],
         '/linux/': [
           'why-need-linux',
           'du',
           'silversearcher-ag',
           'grep-sed-awk',
           'compress-decompress',
           'copy-compare-cut'
         ],
         '/algorithms/': [
           'kahan-summation',
         ],
         '/codeManage/': [
           'gomodule',
           'git-workflow',
           'jenkins-go'
         ],
         '/middleware/': [
          {
            title: 'mongodb',
            collapsable: true,
            children: [
              { title: 'mongodb 入门使用', path: '/middleware/mongodb/start' },
            ]
          },
          {
            title: 'rabbitmq',
            collapsable: true,
            children: [
              { title: 'rabbitmq 入门使用', path: '/middleware/rabbitmq/start' },
            ]
          },
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
          'k8s-image-pull-policy'
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