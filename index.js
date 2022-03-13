const express = require("express");
const managerCron = require("./cron");
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Running on http://localhost:" + PORT);
  managerCron.run();
});
