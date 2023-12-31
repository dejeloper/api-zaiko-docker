import { describe, expect, it } from "vitest";
import request from "supertest";
import app from "./app";

describe("Index Api", () => {
  describe("GET /", () => {
    it("should return 200", async () => {
      const response = await request(app).get("/").send();
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toBe("text/html; charset=utf-8");
      expect(response.text).toBe("Api backend Zaiko");
    });
  });
});
