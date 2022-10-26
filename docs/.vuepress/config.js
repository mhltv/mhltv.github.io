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
    ['meta', { name: 'baidu-site-verification', content: 'code-zD3j0sQS0X'}],
    ['meta', { name: 'google-site-verification', content: '81ucDeKwQIKLDEPiLA9RbPvuOoGKEY2ORcjK-7NBOkA'}],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'keywords', content: '刘亦菲,梦华录,天仙,电视剧,宋朝,古装剧,群像剧,赵盼儿,录人,出圈, A Dream of Splendor,Crystal Liu'}],


    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?108a67e589574ed7c77e2710083413dc";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
        `
    ]

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
        link: '/discuss/',
      },
      {
        text: '线下',
        link: '/xianxia/',
      },
      {
        text: '剧情',
        link: '/scenario/',
      },
      {
        text: '科普',
        link: '/kepu/',
      },
      {
        text: '二创',
        link: '/re-creation/',
      },
      {
        text: '录人',
        link: '/luren/',
      },
      {
        text: '数据',
        link: '/data/',
      },
      {
        text: '主创',
        link: '/team/',
      },
      {
        text: '盼儿',
        link: '/cc/',
      },

    ],
    sidebar: {
      '/discuss/': [
        {
          title: '出圈',
          collapsable: true,
          children: [
            'authority',
            'international',
            'all',
            'paper',
            'education',
            'zhiwang',
            'celebrity',
            'brand',
            'culture',
            'tea',
            'tv-shows',
            'lines',
            'music',
            'ordinary'
          ]
        }
      ],
      '/data/': [
        {
          title: '数据',
          collapsable: false,
          children: [
            '',
            'official',
            'authority',
            'important',
            'business',
            'other'
          ]
        }
      ],
      '/cc/': [
        {
          title: '刘亦菲',
          collapsable: false,
          children: [
            '',
            'reports',
            'photo',
            'clips',
            'reviews',
            'again',
            'after',
            '20th',
            'painting',
            'letter'
          ]
        }
      ],
      '/luren/': [
        {
          title: '录人',
          collapsable: false,
          children: [
            'live',
            'zhanbao',
            'luren-1',
            'luren-2',
            'creation',
            'meme',
            'flower',
            'activity',
            'this-site'
          ]
        }
      ],
      '/re-creation/': [
        {
          title: '二创',
          collapsable: false,
          children: [
            '',
            'drawing',
            'drawing-a7y',
            'drawing-hu',
            'editing',
            'music',
            "article",
            'song'
          ]
        }
      ],

      '/team/': [
        {
          title: '主创团队',
          collapsable: false,
          children: [
            '',
            'behind',
            'leading',
            'supporting',
          ]
        }
      ],
      '/scenario/': [
        {
          title: '剧情',
          collapsable: false,
          children: [
            'fenji',
            'all',
            'character',
            'highlight',
            'other',
          ]
        }
      ],
      '/kepu/': [
        {
          title: '科普',
          collapsable: false,
          children: [
            'tea',
            'nature',
            'history',
            'officials',
            'law',
            'economics',
            'custom',
            'thing',
            'medicine',
            'art',
          ]
        }
      ],
      '/xianxia/': [
        {
          title: '线下',
          collapsable: false,
          children: [
            'lianming',
            'guofeng',
            "diancha",
            "huayueyan",
            "culture",
            "travel",
            "business"
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
    '@vuepress/active-header-links',
    ['sitemap', {
      hostname: 'https://mhlyf.cc'
    }]
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
