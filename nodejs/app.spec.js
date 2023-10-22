const request = require("supertest");
const app = require("./app");

describe("Hello World API", () => {
  it("should return success", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
  it("should return Hactoberfest Surabaya", async () => {
    const response = await request(app).get("/");
    const message = response.body.message;
    expect(message.includes("Hactoberfest")).toBe(true);
    expect(message.includes("Surabaya")).toBe(true);
    expect(message.includes("2023")).toBe(true);
  });
});
