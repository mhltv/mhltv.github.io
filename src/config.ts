/**
 * 站点栏目配置：顺序、标题、描述与侧边栏子页顺序均沿用旧站。
 * children 中的 '' 表示该栏目的首页（README），
 * 只出现在 '' 出现在 children 里时，侧边栏标题链接到栏目首页。
 */

export interface Section {
  folder: string;
  navTitle: string;
  sidebarTitle: string;
  desc: string;
  children: string[];
}

export const sections: Section[] = [
  {
    folder: 'discuss',
    navTitle: '破圈',
    sidebarTitle: '出圈',
    desc: '关于《梦华录》的讨论、热搜与话题破圈记录',
    children: ['tea', 'authority', 'international', 'local', 'media', 'all', 'paper', 'education', 'zhiwang', 'celebrity', 'brand', 'culture', 'tv-shows', 'lines', 'music', 'creative', 'ordinary'],
  },
  {
    folder: 'xianxia',
    navTitle: '线下',
    sidebarTitle: '线下',
    desc: '剧本杀、联名与线下活动打卡记录',
    children: ['diancha', 'lianming', 'huayueyan', 'guofeng', 'zhucha', 'show', 'culture', 'travel', 'business'],
  },
  {
    folder: 'scenario',
    navTitle: '剧情',
    sidebarTitle: '剧情',
    desc: '分集剧情、人物解析与经典场面',
    children: ['fenji', 'all', 'character', 'highlight', 'other', 'comment', 're-creation'],
  },
  {
    folder: 'kepu',
    navTitle: '科普',
    sidebarTitle: '科普',
    desc: '茶文化、宋代生活、服饰礼仪等剧集相关科普',
    children: ['all', 'tea', 'nature', 'history', 'dress', 'painting', 'officials', 'law', 'economics', 'custom', 'thing', 'medicine', 'art'],
  },
  {
    folder: 're-creation',
    navTitle: '二创',
    sidebarTitle: '二创',
    desc: '绘画、剪辑、手工、音乐等粉丝创作',
    children: ['', 'drawing', 'drawing-a7y', 'drawing-hu', 'editing', 'craft', 'music', 'dance', 'article', 'song', 'calligraphy'],
  },
  {
    folder: 'luren',
    navTitle: '录人',
    sidebarTitle: '录人',
    desc: '剧迷群像：观剧现场、应援与站子记录',
    children: ['live', 'zhanbao', 'luren-1', 'luren-2', 'observe', 'cute', 'creation', 'food', 'meme', 'flower', 'activity', 'yuanxiao', 'this-site', 'support'],
  },
  {
    folder: 'data',
    navTitle: '数据',
    sidebarTitle: '数据',
    desc: '收视、播放量、热搜、豆瓣等数据统计',
    children: ['', 'official', 'authority', 'important', 'community', 'business', 'other', '2022', 'channel', 'long-tail'],
  },
  {
    folder: 'award',
    navTitle: '奖项',
    sidebarTitle: '奖项',
    desc: '剧集与演员获奖、提名记录',
    children: ['gov', 'jinying', 'jinlianhua', 'all', 'tencent', 'weibo', 'bus', 'nomination'],
  },
  {
    folder: 'team',
    navTitle: '主创',
    sidebarTitle: '主创团队',
    desc: '导演、编剧、主演与幕后团队',
    children: ['', 'behind', 'leading', 'supporting', 'cut', 'juesehao', 'thoughts', 'role', 'unique'],
  },
  {
    folder: 'cc',
    navTitle: '盼儿',
    sidebarTitle: '刘亦菲',
    desc: '刘亦菲相关：报道、采访与过往作品',
    children: ['', 'reports', 'photo', 'clips', 'reviews', 'again', 'after', '20th', 'role', 'painting', 'letter'],
  },
];

export const siteInfo = {
  title: '梦华录',
  tagline: '东京真是富贵迷人眼',
  description:
    '《梦华录》（英语：A Dream of Splendor）,为据关汉卿原著《赵盼儿风月救风尘》改编的2022年中国大陆古装剧。关于刘亦菲与《梦华录》的一切, 防止岁月史书',
  keywords:
    '刘亦菲,梦华录,天仙,电视剧,宋朝,古装剧,群像剧,赵盼儿,录人,出圈, A Dream of Splendor,Crystal Liu',
  heroImage: '/image/data/guanfanghaibao1015.webp',
  feedbackUrl: 'https://www.douban.com/group/topic/276689884/?_i=5716003Rn8heGv',
  features: [
    { title: '国家版本馆电子藏品', details: '首部入藏古装剧，2022年唯一电视剧' },
    { title: '2022广电电视剧选集', details: '三部古装剧之一' },
    { title: '2022新华社文化产业IP价值榜', details: '位列总榜第五,影视类第一' },
    { title: '豆瓣数据', details: '评分人数历史第五，年度第一。专组14万人，讨论量影视剧历史第一' },
    { title: '金莲花奖', details: '刘亦菲获电视最佳女主角' },
    { title: '2022中国授权金星奖', details: '获2022优秀新生代授权IP奖，与喜茶联名获2022优秀被授权商奖' },
  ],
};
