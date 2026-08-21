import { visit } from 'unist-util-visit';

/**
 * 为 markdown 渲染出的 <img> 添加懒加载属性，避免首屏加载全部图片。
 */
export function rehypeLazyImages() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        node.properties.loading = 'lazy';
        node.properties.decoding = 'async';
        if (!node.properties.alt) {
          node.properties.alt = '';
        }
      }
    });
  };
}
