const express = require("express");

// make an instance of the Express server system
// so that we can configure it
const app = express();

// built in middleware that allows the server to
// receive JSON body data
app.use(express.json());

// localhost:3000/
// domainName:port/
// serverIntance.verb(path, callback)
app.get("/", (request, response) => {
  response.json({
    message: "Hello world!",
  });
});

const UserController = require("./controllers/UserController.js");
app.use("/users", UserController);

module.exports = {
  app,
};
