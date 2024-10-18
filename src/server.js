const express = require("express");

// make an instance of the Express server system
// so that we can configure it
const app = express();

// localhost:3000/
// domainName:port/
// serverIntance.verb(path, callback)
app.get("/", (request, response) => {
  response.json({
    message: "Hello World!",
  });
});

module.exports = {
  app,
};
