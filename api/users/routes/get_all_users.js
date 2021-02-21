const glob = require('glob');
const xx = require('path-to-regexp');

module.exports = {
  method: 'GET',
  path: '/api/users',
  handler: async (context) => {
    console.log('Getting all users....');
    return;
  },
};
