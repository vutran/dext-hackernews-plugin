import hack from '../';

jest.mock('got');

require('got').__setFakeData([12660803,12661299,12661227,12661011,12659141,12660533,12660468,12660056,12659858,12657522,12660452,12657618,12660702,12658892,12659897,12659706,12659150,12657628,12661187,12654499,12651889,12658764,12657249,12657336,12659429,12657891,12657308,12656426,12649414,12660253,12657162,12660543,12658040,12660772,12657227,12651848,12660722,12657872,12655445,12652660,12655114,12659503,12658150,12657034,12653164,12660690,12654621,12659673,12655675,12654268,12657576,12660426,12655433,12653313,12654829,12643547,12637126,12658505,12652691,12653028,12652074,12657466,12657346,12658802]);
require('got').__setProcessData({
  "by": "Anon84",
  "descendants": 22,
  "id": 12659141,
  "kids": [
    12660370,
    12659509,
    12660390,
    12659406,
    12659486,
  ],
  "score": 143,
  "time": 1475830860,
  "title": "Foundations of Data Science [pdf]",
  "type": "story",
  "url": "https://www.cs.cornell.edu/jeh/book2016June9.pdf",
});

describe('Hacker News Plugin', () => {
  it('should returns 10 items for "new"', async () => {
    const data = await hack.query('new');
    expect(data.items.length).toBe(10);
    expect(data.items[0].title).not.toBeUndefined();
  });

  it('should returns 10 items for "top"', async () => {
    const data = await hack.query('top');
    expect(data.items.length).toBe(10);
    expect(data.items[0].title).not.toBeUndefined();
  });

  it('should returns 10 items for "best"', async () => {
    const data = await hack.query('best');
    expect(data.items.length).toBe(10);
    expect(data.items[0].title).not.toBeUndefined();
  });

  it('should return no items for other keywords', async () => {
    const data = await hack.query('FOOBAR');
    expect(data.items.length).toBe(0);
  });
});
