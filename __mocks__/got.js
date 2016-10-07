let mockData = null;

// then in our mock `got()` function, we can set the mockData as the body

const got = function(url) {
  let success = new Promise(function(resolve) {
    resolve({ body: mockData });
  });

  return success;
};

// here, we're creating a new function called __setFakeData() which sets the mockData variable
got.__setFakeData = (data) => {
  mockData = data;
};

module.exports = got;
