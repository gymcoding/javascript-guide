const { description } = require('../../package')

module.exports = {
  base: '/javascript-guide/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Learning Javascript',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '홈',
        link: '/',
      },
      {
        text: '가이드',
        link: '/guide/',
      },
      {
        text: '설치',
        link: '/config/'
      }
    ],
    sidebar: [
      '/guide',
      {
        title: '자바스크립트 기초',
        collapsable: false,
        children: [
          '/basic/variable',
          '/basic/datatype',
          '/basic/operator',
          '/basic/control',
          '/basic/function',
          '/basic/scope',
          '/basic/array',
        ]
      },
      {
        title: '객체지향 프로그래밍',
        collapsable: true,
        children: [
          '/oop/',
        ]
      },
      {
        title: '3주차',
        collapsable: true,
        children: [
          '/chapter3/',
        ]
      },
      {
        title: '4주차',
        collapsable: true,
        children: [
          '/chapter4/',
        ]
      },
      {
        title: '5주차',
        collapsable: true,
        children: [
          '/chapter5/',
        ]
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
