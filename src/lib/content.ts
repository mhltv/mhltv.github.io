import type { Section } from '../config';

/** 把内容集合的 id 归一化为路由 slug（去掉 .md 后缀、README 归一化为栏目根） */
export function toSlug(id: string): string {
  return id.replace(/\.md$/i, '').replace(/\/README$/i, '').replace(/^README$/i, '');
}

/** 栏目内子页链接；child 为 '' 时指向栏目首页 */
export function hrefFor(section: string, child: string): string {
  return child === '' ? `/${section}/` : `/${section}/${child}/`;
}

/** 从 markdown 正文提取第一个 # 标题作为页面标题 */
export function titleOf(body: string, fallback: string): string {
  const m = body.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : fallback;
}

/** 构建 id(小写) → 页面标题 的映射，供侧边栏/上下篇使用 */
export async function buildTitleMap(): Promise<Map<string, string>> {
  const { getCollection } = await import('astro:content');
  const all = await getCollection('docs');
  const map = new Map<string, string>();
  for (const e of all) {
    map.set(e.id.toLowerCase(), titleOf(e.body, e.id));
  }
  return map;
}

export function sectionBySlug(slug: string, sections: Section[]): Section | undefined {
  const folder = slug.split('/')[0];
  return sections.find((s) => s.folder === folder);
}
