let mockData = null;
let processNewsData = null;

// then in our mock `got()` function, we can set the mockData as the body

const got = function(url) {
  if (url.indexOf('item') !== -1) {
    return new Promise(function(resolve) {
      resolve({ body: processNewsData });
    });
  }

  return new Promise(function(resolve) {
    resolve({ body: mockData });
  });
};

// here, we're creating a new function called __setFakeData() which sets the mockData variable
got.__setFakeData = (data) => {
  mockData = data;
};
got.__setProcessData = (data) => {
  processNewsData = data;
};

module.exports = got;
