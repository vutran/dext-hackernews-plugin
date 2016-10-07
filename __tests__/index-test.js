jest.mock('got');
const hack = require('../');
require('got').__setFakeData([
  { title: 'I Passed on Tesla: VCs Confess Their Biggest Regrets',
      subtitle: 'Udo_Schmitz',
      arg: 'http://fortune.com/2016/10/06/uber-apple-snapchat-missed-deals/',
      icon: { path: './icon.png' } },
    { title: 'Tech Billionaires funding research to break out of the Matrix',
      subtitle: 'dragonbonheur',
      arg: 'http://www.independent.co.uk/life-style/gadgets-and-tech/news/computer-simulation-world-matrix-scientists-elon-musk-artificial-intelligence-ai-a7347526.html',
      icon: { path: './icon.png' } },
]);

describe('Hacker News Plugin', () => {
  it('execute returns new 10 items', async () => {
    const data = await hack.execute('new');
    expect(data.items.length).toBe(2);
  });

  it('execute returns top 10 items', async () => {
    const data = await hack.execute('top');
    expect(data.items.length).toBe(2);
  });

  it('execute returns best 10 items', async () => {
    const data = await hack.execute('best');
    expect(data.items.length).toBe(2);
  });
});
