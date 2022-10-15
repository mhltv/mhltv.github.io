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
        text: '数据',
        link: '/数据/',
      },
      {
        text: '盼儿',
        link: '/亦菲/',
      },
      {
        text: '主创',
        link: '/主创/',
      }
    ],
    sidebar: {
      '/出圈/': [
        {
          title: '出圈',
          collapsable: true,
          children: [
            '权威媒体',
            '外国媒体',
            '发文报道',
            '纸质刊物',
            '知网收录',
            '名人追录',
            '品牌联动',
            '文化推广',
            '各类节目',
            '角色台词',
          ]
        }
      ],
      '/数据/': [
        {
          title: '数据',
          collapsable: false,
          children: [
            '',
            '官方数据',
            '权威榜单',
            '重点指数',
            '商务数据',
            '其他数据'
          ]
        }
      ],
      '/亦菲/': [
        {
          title: '刘亦菲',
          collapsable: false,
          children: [
            '',
            '媒体报道',
            '精彩剧照',
            '片段赏析',
            '综合评价',
            '后续影响',
            '粉丝致敬',
          ]
        }
      ],
      '/录人/': [
        {
          title: '录人',
          collapsable: false,
          children: [
            '',
            '录学',
            '缺德录人',
            '高贵录人',
            '段子',
            '小黄花',
            '团建',
            '网站相关'
          ]
        }
      ],
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

      '/主创/': [
        {
          title: '主创团队',
          collapsable: false,
          children: [
            '',
            '幕后团队',
            '主演相关',
            '配角相关',
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
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    'reading-progress',
    '@vuepress/active-header-links'
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
