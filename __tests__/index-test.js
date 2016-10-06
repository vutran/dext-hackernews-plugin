require("babel-polyfill");

describe('Hacker News Plugin', () => {
  it('execute returns new 10 items', async () => {
    const hack = require('../index.js');
    const data = await hack.execute('new');

    expect(data.items.length).toBe(10);
  });

  it('execute returns top 10 items', async () => {
    const hack = require('../index.js');
    const data = await hack.execute('top');

    expect(data.items.length).toBe(10);
  });

  it('execute returns best 10 items', async () => {
    const hack = require('../index.js');
    const data = await hack.execute('best');

    expect(data.items.length).toBe(10);
  });
});
