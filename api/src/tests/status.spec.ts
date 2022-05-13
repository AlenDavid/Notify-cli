import request from "supertest";
import app from "../app";

describe("GET /api", () => {
  it("returns 200 OK", async () => {
    const response = await request(app).get("/api");
    expect(response.status).toBe(200);
  });

  it("returns type application/json", async () => {
    const response = await request(app).get("/api");

    expect(response.type).toBe("application/json");
  });

  it("returns status OK", async () => {
    const response = await request(app).get("/api");

    expect(response.body).toEqual({ status: "OK" });
  });
});
