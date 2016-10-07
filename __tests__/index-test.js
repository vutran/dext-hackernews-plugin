jest.mock('got');
const hack = require('../');

require('got').__setFakeData([12660803,12661299,12661227,12661011,12659141,12660533,12660468,12660056,12659858,12657522,12660452,12657618,12660702,12658892,12659897,12659706,12659150,12657628,12661187,12654499,12651889,12658764,12657249,12657336,12659429,12657891,12657308,12656426,12649414,12660253,12657162,12660543,12658040,12660772,12657227,12651848,12660722,12657872,12655445,12652660,12655114,12659503,12658150,12657034,12653164,12660690,12654621,12659673,12655675,12654268,12657576,12660426,12655433,12653313,12654829,12643547,12637126,12658505,12652691,12653028,12652074,12657466,12657346,12658802]);

describe('Hacker News Plugin', () => {
  it('execute should returns 10 items for "new"', async () => {
    const data = await hack.execute('new');
    expect(data.items.length).toBe(10);
  });

  it('execute should returns 10 items for "top"', async () => {
    const data = await hack.execute('top');
    expect(data.items.length).toBe(10);
  });

  it('execute should returns 10 items for "best"', async () => {
    const data = await hack.execute('best');
    expect(data.items.length).toBe(10);
  });
});
