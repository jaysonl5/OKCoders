var cron = require('node-cron');

cron.schedule('0 5 * * * *', () => {
  console.log('hello world');
});