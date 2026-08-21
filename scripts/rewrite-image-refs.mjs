/**
 * 重写 src/content/docs 下 markdown 中的图片引用：.jpg/.jpeg/.jfif/.png → .webp
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';

const MD_ROOT = path.resolve('src/content/docs');

const RE = /(\/image\/[^"'\s<>()]+?)\.(jpg|jpeg|jfif|png)(?=[)"'\s<>]|$)/gi;

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
  let total = 0;
  for (const file of files) {
    const src = await fs.readFile(file, 'utf8');
    const replaced = src.replace(RE, (_m, p) => {
      total++;
      return `${p}.webp`;
    });
    if (replaced !== src) {
      await fs.writeFile(file, replaced, 'utf8');
    }
  }
  console.log(`rewrote ${total} image references across ${files.length} files`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
