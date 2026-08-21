/**
 * 修复迁移后残留的破损图片引用与遗留死链。
 * 规则：能在图片树中找到的修正路径，找不到的移除整行图片。
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';

const MD_ROOT = path.resolve('src/content/docs');

const fixes = [
  // ---- 图片：修正路径 ----
  {
    file: 'luren/creation.md',
    from: '![](/image/lu/creation/ph-1.webp)',
    to: '![](/image/lu/ph-1.webp)',
  },
  {
    file: 'xianxia/十三余.md',
    from: '![](/image/xianxi/13yu.webp)',
    to: '![](/image/xianxi/13yu1.webp)',
  },
  {
    file: 'xianxia/周边.md',
    from: '![](/image/xianxi/paner-2.gif)',
    to: '![](/image/cc/piant/paner-2.webp)',
  },
  {
    file: 'xianxia/周边.md',
    from: '![](/image/xianxi/book.webp)',
    to: '![](/image/discuss/books/book.webp)',
  },
  {
    file: 'xianxia/周边.md',
    from: '![](/image/xianxi/book-2.webp)',
    to: '![](/image/discuss/books/book-2.webp)',
  },
  // ---- 图片：移除（原图不存在）----
  { file: 'discuss/ordinary.md', from: '![](/image/discuss/other/qit.webp)', to: '' },
  { file: 'discuss/ordinary.md', from: '![](/image/discuss/other/fangzhuang2.webp)', to: '' },
  { file: 'team/刘亦菲.md', from: '![](/image/team/repo.webp)', to: '' },
  { file: 'xianxia/周边.md', from: '![](/image/xianxi/zdd-2.webp)', to: '' },
  { file: 'xianxia/周边.md', from: '![](/image/xianxi/huizhang.webp)', to: '' },
  { file: 'xianxia/周边.md', from: '![](/image/xianxi/shuqian.webp)', to: '' },
  // ---- 遗留死链：指向新站点中对应的页面 ----
  { file: 'data/community.md', from: '](/二创/剪辑/)', to: '](/re-creation/editing/)' },
  { file: 'discuss/主创报道.md', from: '](/亦菲/媒体报道/)', to: '](/cc/reports/)' },
  { file: 'xianxia/business.md', from: '](/出圈/发文报道/#摄像)', to: '](/discuss/)' },
  { file: 'xianxia/travel.md', from: '](/出圈/发文报道/#旅游)', to: '](/discuss/)' },
];

async function main() {
  for (const f of fixes) {
    const p = path.join(MD_ROOT, f.file);
    const src = await fs.readFile(p, 'utf8');
    if (!src.includes(f.from)) {
      console.log('WARN not found:', f.file, '->', f.from);
      continue;
    }
    let out = src;
    if (f.to === '') {
      // 移除整行（连同行尾换行）
      out = src.replace(new RegExp(`^\\s*${escapeRegExp(f.from)}\\s*$\\n?`, 'm'), '');
    } else {
      out = src.split(f.from).join(f.to);
    }
    await fs.writeFile(p, out, 'utf8');
    console.log('fixed:', f.file);
  }
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
