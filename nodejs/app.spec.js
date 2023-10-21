const request = require("supertest");
const app = require("./app");

describe("Hello World API", () => {
  it("should return success", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});
