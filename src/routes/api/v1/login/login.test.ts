import { describe, expect, it } from "vitest";
import request from "supertest";
import app from "../../../../app";

describe("Login Api", () => {
  describe("get api/v1/login", async () => {
    const response = await request(app).get("/api/v1/login").send();
    it("should return 200", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toBe("text/html; charset=utf-8");
      expect(response.text).toBe("Api backend Zaiko - Login");
    });
  });
});
