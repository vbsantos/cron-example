const cron = require("node-cron");

function eachOneMinute() {
  console.log(`[${new Date().toISOString()}] Jobs that runs each 1 minute...`);
}

module.exports = cron.schedule("*/1 * * * *", eachOneMinute, {
  scheduled: false,
});
