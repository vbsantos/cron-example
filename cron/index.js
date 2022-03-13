const eachThirtySeconds = require("./eachThirtySeconds");
const eachOneMinute = require("./eachOneMinute");

class ManagerCron {
  constructor() {
    this.jobs = [eachOneMinute, eachThirtySeconds];
  }

  run() {
    this.jobs.forEach((job) => job.start());
  }
}

module.exports = new ManagerCron();
