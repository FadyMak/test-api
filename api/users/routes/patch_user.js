// NOTE: could have dangerous code here that would be executed upon require
const file = require('../utils/file');

module.exports = {
  method: 'PATCH',
  path: '/api/users/:id',
  handler: async (context) => {
    console.log('Patching user....');
    return;
  },
};
