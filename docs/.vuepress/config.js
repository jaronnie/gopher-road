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
    '@vuepress/last-updated',
  ],
  themeConfig: {
    docsRepo: 'https://github.com/jaronnie/gopher-road',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinks: true, // 底部增加编辑此页
    lastUpdated: 'Last Updated', // 最近更新时间
    logo: 'https://oss.jaronnie.com/logo.jpeg',
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
         { text: 'Github', link: 'https://github.com/jaronnie/gopher-road' },
         { text: 'Blog', link: 'https://blog.jaronnie.com' }
       ],
       sidebar: {
         '/golang/': [
          {
            title: '标准库',
            collapsable: true,
            children: [
              { title: 'Go time 时间处理', path: '/golang/1-standard-library/time' },
              { title: 'Go os 系统信息', path: '/golang/1-standard-library/os' },
              { title: 'Go ast 语法解析', path: '/golang/1-standard-library/ast' },
            ]
          },
          {
            title: '第三方库',
            collapsable: true,
            children: [
              { title: 'Go 类型转换神器 cast', path: '/golang/2-third-party-library/cast' },
              { title: 'Go 操作 excel 利器 excelize', path: '/golang/2-third-party-library/excelize' },
              { title: 'Go 常用正则表达式 commonregex', path: '/golang/2-third-party-library/commonregex' },
              { title: 'Go 对标 linux tail 命令的 tail 包', path: '/golang/2-third-party-library/tail' },
              { title: 'Go 使用 viper 最佳实践', path: '/golang/2-third-party-library/viper' },
              { title: 'Go 爬虫库 colly', path: '/golang/2-third-party-library/colly' },
              { title: 'cobra 终极指南', path: '/golang/2-third-party-library/cobra' },
            ]
          },
          {
            title: '范型学习',
            collapsable: true,
            children: [
              { title: '概念介绍', path: '/golang/4-generic-learn/start' },
              { title: 'slice 范型使用', path: '/golang/4-generic-learn/slices' },
            ]
          },
          {
            title: 'web 框架',
            collapsable: true,
            children: [
              { title: 'http', path: '/golang/3-web-frame/http' },
              { title: 'implement-http', path: '/golang/3-web-frame/implement-http' },
			  { title: 'http-unix-socket-tcp', path: '/golang/3-web-frame/http-unix-socket-tcp'},
              { title: 'gin', path: '/golang/3-web-frame/gin' },
            ]
          },
          {
            title: '其他',
            collapsable: true,
            children: [
              { title: 'golang 编译成 so 后 C 调用', path: '/golang/5-others/golang-so-example' },
              { title: 'golang plugin 示例', path: '/golang/5-others/golang-plugin-example' },
              { title: 'golang 文件锁 flock', path: '/golang/5-others/golang-file-lock' },
              { title: 'golang plan9 汇编', path: '/golang/5-others/golang-plan9-example' },
              { title: 'golang pprof', path: '/golang/5-others/golang-pprof' },
            ]
          },
         ],
         '/linux/': [
           'why-need-linux',
           'du',
           'silversearcher-ag',
           'grep-sed-awk',
           'compress-decompress',
           'copy-compare-cut',
           'ssh-free-password',
           'linux-firewall'
         ],
         '/algorithms/': [
           'kahan-summation',
         ],
         '/codeManage/': [
           'gomodule',
           'git-workflow',
           'git-use',
           'jenkins-go',
           'git-lfs',
           'github-action',
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
         {
             title: 'prometheus',
             collapsable: true,
             children: [
                 { title: '将推送数据到 pushgateway', path: '/middleware/prometheus/push-data-pushgateway' },
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
          'docker-practice-mysql',
          'docker-manage-image-container.md'
         ],
         '/kubernetes/': [
          'k8s-image-pull-policy'
         ],
         '/project/': [
         ],
         '/recommendation/': [
          'go-code-guide',
          'go-books-read',
          'go-leetcode',
          'auto-blog',
         ]
       }
      },
    }
  },
}
