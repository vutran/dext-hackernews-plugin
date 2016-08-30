const got = require('got');

const getTopStories = () => got('https://hacker-news.firebaseio.com/v0/topstories.json', { json: true });
const getNewStories = () => got('https://hacker-news.firebaseio.com/v0/newstories.json', { json: true });
const getBestStories = () => got('https://hacker-news.firebaseio.com/v0/beststories.json', { json: true });

const getItemData = id => got(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, { json: true });

module.exports = {
  keyword: 'hn',
  action: 'openurl',
  output: q => new Promise(resolve => {
    let prom = false;
    switch (q) {
      case 'new':
        prom = getNewStories();
        break;
      case 'top':
        prom = getTopStories();
        break;
      case 'best':
        prom = getBestStories();
        break;
      default:
        // do nothing...
        break;
    }
    if (prom) {
      prom
        .then(res => {
          const top = res.body
            .filter((x, y) => y < 10)
            .map(getItemData);
          Promise.all(top)
            .then(topResults => {
              const items = topResults.map(res => ({
                title: res.body.title,
                subtitle: res.body.by,
                arg: res.body.url,
                icon: {
                  path: './icon.png',
                }
              }));
              resolve({ items });
            });
        });
    } else {
      resolve({ items: [] });
    }
  }),
};
