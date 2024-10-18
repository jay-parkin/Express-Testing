// Keep the app start-up code here so that app config happens
// in server.js and any test files can control server start/stop in their own code
const { app } = require("./server.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
