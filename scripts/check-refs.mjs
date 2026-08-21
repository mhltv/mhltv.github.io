/**
 * 检查 src/content/docs 下 markdown 中：
 * 1. 图片引用指向的文件是否真实存在
 * 2. 内部 .html 链接（需要改写为新路由）
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';

const MD_ROOT = path.resolve('src/content/docs');
const IMG_ROOT = path.resolve('public/image');

const IMG_RE = /!\[[^\]]*\]\((\/image\/[^)\s]+?)\)|<img[^>]+src="(\/image\/[^"]+?)"/g;
const LINK_RE = /\[[^\]]*\]\((\/[^)]*\.html[^)]*)\)/g;

async function walk(dir) {
  const out = [];
  for (const name of await fs.readdir(dir)) {
    const p = path.join(dir, name);
    const st = await fs.stat(p);
    if (st.isDirectory()) out.push(...(await walk(p)));
    else if (name.endsWith('.md')) out.push(p);
  }
  return out;
}

async function main() {
  const files = await walk(MD_ROOT);
  const brokenImages = [];
  const htmlLinks = [];

  for (const file of files) {
    const src = await fs.readFile(file, 'utf8');
    for (const m of src.matchAll(IMG_RE)) {
      const ref = m[1] ?? m[2];
      const rel = ref.replace(/^\/image\//, '');
      const exists = await fs
        .access(path.join(IMG_ROOT, decodeURIComponent(rel)))
        .then(() => true)
        .catch(() => false);
      if (!exists) brokenImages.push({ file: path.relative(MD_ROOT, file), ref });
    }
    for (const m of src.matchAll(LINK_RE)) {
      const ref = m[1];
      if (ref.startsWith('http')) continue;
      htmlLinks.push({ file: path.relative(MD_ROOT, file), ref });
    }
  }

  console.log('=== broken image refs ===');
  for (const b of brokenImages) console.log(`${b.file}: ${b.ref}`);
  console.log(`count=${brokenImages.length}`);
  console.log('=== internal .html links ===');
  for (const l of htmlLinks) console.log(`${l.file}: ${l.ref}`);
  console.log(`count=${htmlLinks.length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
