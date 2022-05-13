import request from "supertest";
import app from "../app";

jest.mock("axios");

describe("POST /api/notify", () => {
  describe("As not authorized", () => {
    it("fails is not authenticated", async () => {
      const response = await request(app).post("/api/notify");

      expect(response.status).toBe(401);
      expect(response.body).toEqual({ error: "Unauthorized" });
    });
  });
  describe("As authorized", () => {
    const authorization = "Bearer test-123";

    it("fails with missing body", async () => {
      const response = await request(app)
        .post("/api/notify")
        .set("Authorization", authorization);

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: "Missing body" });
    });

    it.skip("returns 201 CREATED with valid body", async () => {
      const data = {
        to: "some",
        title: "some",
        body: "{}",
      };

      const response = await request(app)
        .post("/api/notify")
        .set("Authorization", authorization)
        .send(data);

      expect(response.status).toBe(201);
      expect(response.body).toEqual({});
    });
  });
});
