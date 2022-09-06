module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-antv`,
      options: {
      },
    },
  ],
  siteMetadata: {
    title: `AntV test site`,
    siteUrl: `https://antvis.github.io`,
    description: `Ant Visualization solution home page`,
    docs: [
      {
        slug: 'specification',
        title: {
          zh: '设计语言',
          en: 'Specification',
        },
        order: 0,
      },
      {
        slug: 'specification/category',
        title: {
          zh: '分类一',
          en: 'category1',
        },
        order: 1,
      },
      {
        slug: 'other',
        title: {
          zh: '其他文档',
          en: 'other',
        },
        order: 0,
      },
      {
        slug: 'other/category',
        title: {
          zh: '分类二',
          en: 'category2',
        },
        order: 2,
      },
    ],
  },
};
