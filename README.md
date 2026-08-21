# 梦华录

关于刘亦菲与《梦华录》的一切, 防止岁月史书

- 网站地址: <https://mhltv.github.io>
- 技术栈: [Astro](https://astro.build) + Tailwind CSS，静态部署到 GitHub Pages（`gh_pages` 分支）
- 内容: `src/content/docs/` 下的 Markdown，构建时自动生成栏目与侧边栏

## 本地开发

```bash
npm install
npm run dev      # 开发预览 http://localhost:4321
npm run build    # 构建到 dist/（含 Pagefind 搜索索引）
npm run preview  # 预览构建产物
```

## 部署

push 到 `master` 后，GitHub Actions（`.github/workflows/deploy.yml`）自动构建并部署到 `gh_pages` 分支，由 GitHub Pages 提供服务。

## 图片

图片位于 `public/image/`（已统一转为 WebP）。新增图片后可运行 `node scripts/optimize-images.mjs` 批量压缩；`scripts/` 下其他脚本为站点迁移与检查工具。

## 意见反馈

[豆瓣小组帖](https://www.douban.com/group/topic/276689884/?_i=5716003Rn8heGv)
