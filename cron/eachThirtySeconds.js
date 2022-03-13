const cron = require("node-cron");

function eachThirtySeconds() {
  console.log(`[${new Date().toISOString()}] Jobs that runs each 30 seconds...`);
}

module.exports = cron.schedule("*/30 * * * * *", eachThirtySeconds, {
  scheduled: false,
});
