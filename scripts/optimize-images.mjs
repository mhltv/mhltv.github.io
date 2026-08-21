/**
 * 批量把 public/image 下的 jpg/jpeg/jfif/png 转换为 WebP 并删除原文件。
 * gif 动画保留不动。原图可从 git 历史找回。
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const IMG_ROOT = path.resolve('public/image');
const CONVERT_EXTS = new Set(['.jpg', '.jpeg', '.jfif', '.png']);
const QUALITY = 80;

async function walk(dir) {
  const out = [];
  for (const name of await fs.readdir(dir)) {
    const p = path.join(dir, name);
    const st = await fs.stat(p);
    if (st.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

async function main() {
  const files = await walk(IMG_ROOT);
  let converted = 0;
  let failed = 0;
  let skipped = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!CONVERT_EXTS.has(ext)) {
      skipped++;
      continue;
    }
    const size = (await fs.stat(file)).size;
    totalBefore += size;
    const outFile = file.slice(0, -ext.length) + '.webp';
    try {
      const info = await sharp(file).webp({ quality: QUALITY }).toFile(outFile);
      totalAfter += info.size;
      await fs.unlink(file);
      converted++;
    } catch (err) {
      console.error('FAILED', file, err.message);
      failed++;
    }
  }

  console.log(`converted=${converted} failed=${failed} skipped=${skipped}`);
  console.log(
    `size: ${(totalBefore / 1e6).toFixed(1)}MB -> ${(totalAfter / 1e6).toFixed(1)}MB (${(
      ((totalBefore - totalAfter) / totalBefore) * 100
    ).toFixed(0)}% reduction)`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
