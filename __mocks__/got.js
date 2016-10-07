let mockData = null;
let mockItemData = null;

/**
 * Mocks the `got()`` function
 * @param {String} url
 */
const got = (url) => {
  const body = (url.indexOf('item') !== -1) ? mockItemData : mockData;
  return new Promise(function(resolve) {
    resolve({ body });
  });
};

/**
 * Set fake data for the list endpoint
 */
got.__setFakeData = (data) => {
  mockData = data;
};

/**
 * Set fake data for the item endpoint
 */
got.__setProcessData = (data) => {
  mockItemData = data;
};

module.exports = got;
