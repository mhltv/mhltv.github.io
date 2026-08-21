/**
 * 修复被 rewrite-html-links 误改的外部 URL：
 * 原始 URL 形如 http(s)://.../page.html，被改写成了 http(s)://.../page/
 * 以 git master 分支的原文为准，恢复所有被改动的外部 URL。
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const MD_ROOT = path.resolve('src/content/docs');

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

function gitShow(ref, file) {
  try {
    return execFileSync('git', ['show', `${ref}:${file}`], { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
  } catch {
    return null;
  }
}

async function main() {
  const files = await walk(MD_ROOT);
  let fixed = 0;
  for (const file of files) {
    const rel = path.relative(MD_ROOT, file).split(path.sep).join('/');
    const orig = gitShow('master', `docs/${rel}`);
    if (orig === null) continue;
    const current = await fs.readFile(file, 'utf8');
    const urls = orig.match(/https?:\/\/[^)\s"'<>]+/g) ?? [];
    let out = current;
    for (const url of urls) {
      if (out.includes(url)) continue;
      // 被误改的形式：结尾 .html → / 或 .html# → /#
      const candidates = [
        url.replace(/\.html$/i, '/'),
        url.replace(/\.html(?=#)/i, '/'),
      ];
      for (const mangled of candidates) {
        if (mangled !== url && out.includes(mangled)) {
          out = out.split(mangled).join(url);
          fixed++;
          break;
        }
      }
    }
    if (out !== current) await fs.writeFile(file, out, 'utf8');
  }
  console.log(`restored ${fixed} external URLs`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
