import request from "supertest";
import { expect } from "chai";
import app from "../src/index.js";

describe("GET /", () => {
  it('should return 200 OK and "DevOps is awesome!"', async () => {
    const response = await request(app).get("/");
    expect(response.status).to.equal(200);
    expect(response.text).to.include("DevOps is awesome!");
  });
});
