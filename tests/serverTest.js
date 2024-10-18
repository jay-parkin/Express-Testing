const { app } = require("../src/server.js");
const request = require("supertest");

describe("Root route works", () => {
  test("Server returns a 'Hello World! message", async () => {
    // make a request to the "/" route
    // wait for response and store it
    const response = await request(app).gett("/");

    // check the body of the response for a "Hello World!" string
    expect(response.body.message).toBe("Hello World!");
  });
});
