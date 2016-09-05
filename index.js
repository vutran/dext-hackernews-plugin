// Hacker News Icon by Freepik <http://www.flaticon.com/free-icon/hacker-news-logo_51785>
const got = require('got');
const OPTS_DEFAULT = {
  json: true,
};
const getItemData = id => got(
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  OPTS_DEFAULT
);

const processNews = ({ body }) => {
  const top = body
    .filter((x, y) => y < 10)
    .map(getItemData);
  Promise.all(top)
    .then(topResults => {
      const items = topResults.map(({ body: item }) => ({
        title: item.title,
        subtitle: item.by,
        arg: item.url,
        icon: {
          path: './icon.png',
        }
      }));
      resolve({ items });
    });
};

module.exports = {
  keyword: 'hn',
  action: 'openurl',
  helper: {
    title: `Get stories on Hacker News`,
    subtitle: `Available Options: new, top, best`,
    icon: {
      path: './icon.png',
    },
  },
  execute: q => new Promise(resolve => {
    switch (q) {
      case 'new':
      case 'top':
      case 'best': {
        const stories = got(
          `https://hacker-news.firebaseio.com/v0/${q}stories.json`,
          OPTS_DEFAULT
        ).then(processNews);
        return;
      }
      default:
        return;
    }
    resolve({ items: [] });
  }),
};
