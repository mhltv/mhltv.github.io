const { description } = require('../../package')

const fs = require("fs");
const path = require("path");

module.exports = {
  theme: "book",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '梦华录',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: '赵盼儿东京历险记',

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
    lastUpdated: '最后更新',
    nav: [
      {
        text: '出圈',
        link: '/出圈/',
      },
      {
        text: '线下',
        link: '/线下/',
      },
      {
        text: '二创',
        link: '/二创/',
      },
      {
        text: '录人',
        link: '/录人/',
      },
      {
        text: '主创',
        link: '/主创/',
      },
      {
        text: '数据',
        link: '/数据/',
      },
      {
        text: '科普',
        link: '/科普/',
      }
    ],
    sidebar: {
      '/出圈/': [
        {
          title: '出圈',
          collapsable: false,
          children: [
            '权威媒体',
            '外国媒体',
            '发文报道'
          ]
        }
      ],
      '/主创/': getSideBar("主创", "主创团队"),
      '/数据/': [
        {
          title: '数据',
          collapsable: false,
          children: [
            '',
            '官方数据',
            '权威榜单',
            '重点指数',
            '其他数据'
          ]
        }
      ],
      '/录人/': getSideBar("录人", "录人"),
      '/二创/': [
        {
          title: '二创',
          collapsable: false,
          children: [
            '',
            '插画',
            '剪辑',
            "同人文",
            '同人曲'
          ]
        }
      ],

      '/线下/': [
        {
          title: '线下',
          collapsable: false,
          children: [
            '联名',
            '国风市集',
            "点茶",
            "花月宴",
            "文化",
            "旅游",
            "商业"
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/last-updated',
    'reading-progress',
    'vuepress-plugin-catalog-graph'

  ]
}


function getSideBar(folder, title) {
  const extension = [".md"];

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (item) =>
        item.toLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    );

  return [{ title: title, children: ["", ...files] }];
}
