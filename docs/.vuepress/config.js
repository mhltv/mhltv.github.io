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
  description: '《梦华录》（英语：A Dream of Splendor）,为据关汉卿原著《赵盼儿风月救风尘》改编的2022年中国大陆古装剧, 讲述了赵盼儿、宋引章、孙三娘经历各种困境，携手勇闯东京，并在皇城司指挥使顾千帆的帮助下，最终姐妹齐心，通过自己的努力将小茶坊变成东京最大酒楼的故事。由杨阳执导，张巍编剧，刘亦菲、陈晓、柳岩、林允、徐海乔、代旭 领衔主演。2021年2月开拍，同年于7月杀青。2022年6月2日在腾讯视频播出，海外地区则由WeTV、Netflix播出。香港于2022年6月9日起由MyTV Super首播，其后于9月5日起在翡翠台播映粤语配音版。',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'keywords', content: '刘亦菲,梦华录,天仙,电视剧,宋朝,古装剧,群像剧,赵盼儿,录人,出圈, A Dream of Splendor,Crystal Liu'}]
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
        text: '剧情',
        link: '/剧情/',
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
        text: '主创',
        link: '/主创/',
      },
      {
        text: '盼儿',
        link: '/亦菲/',
      },

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
            '教育考试',
            '知网收录',
            '名人追录',
            '品牌联动',
            '文化推广',
            '各类节目',
            '角色台词',
            '音乐出圈'
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
            '再次合作',
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
      
      '/剧情/': [
        {
          title: '剧情',
          collapsable: false,
          children: [
            '分集解析',
            '全剧解析',
            '人物分析',
            '延伸讨论',
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
    'vuepress-plugin-baidu-autopush',
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
