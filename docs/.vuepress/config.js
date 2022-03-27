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
         { text: 'algorithms', link: '/algorithms/', ariaLabel: '指南' },
         { text: 'codeManage', link: '/codeManage/', ariaLabel: '指南' },
         { text: 'middleware', link: '/middleware/', ariaLabel: '指南' },
         { text: 'docker', link: '/docker/', ariaLabel: '指南' },
         { text: 'kubernetes', link: '/kubernetes/', ariaLabel: '指南' },
         { text: 'project', link: '/project/', ariaLabel: '指南' },
         { text: 'recommendation', link: '/recommendation/', ariaLabel: '指南' },
         { text: 'Github', link: 'https://github.com/jaronnie/gopher-road' }
       ],
       sidebar: {
         '/introduction/': [
           '',
         ],
         '/golang/': [
           'sync',
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
              { title: 'test1', path: '/middleware/mysql/test1' },
              { title: 'test2', path: '/middleware/mysql/test2' },
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
         ]
       }
      },
    }
  },
}