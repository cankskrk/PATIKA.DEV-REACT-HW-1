const axios = require('axios');

const getData = async (number) => {
  try {
    const { data: users } = await axios(
      `https://jsonplaceholder.typicode.com/users/${number}`
    );
    const { data: posts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${number}`
    );

    console.log(users);
    console.log(posts);
  } catch (e) {
    return e;
  }
};

module.exports = getData;
