/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc group
 * - provide next/previous navigation
 */

const sidebars = {
 module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index', // 🌟 トップページ（はじめに）
    },
    {
      type: 'category',
      label: '担当業務と日常業務',
      items: ['products', 'tools'],
    },
    {
      type: 'doc',
      id: 'workflow', // 1日の仕事の流れ
    },
    {
      type: 'doc',
      id: 'tips', // 実務上のコツ・注意点
    },
    {
      type: 'doc',
      id: 'limitations', // 注意事項と制限
    },
    {
      type: 'doc',
      id: 'style', // 自分らしく働くために
    },
    {
      type: 'doc',
      id: 'deployment', // 検証・デプロイ
    },
    {
      type: 'doc',
      id: 'organization', // 組織について
    },
    {
      type: 'doc',
      id: 'templates', // 各種テンプレート集
    },
  ],
};


export default sidebars;
