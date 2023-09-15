import { describe, expect, it } from "vitest";
import supertest from "supertest";
import app from "./index";

describe("Index Api", () => {
  describe("GET /", () => {
    it("should return 200", async () => {
      const response = await supertest(app).get("/").send();
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toBe("text/html; charset=utf-8");
      expect(response.text).toBe("Api backend Zaiko");
    });
  });
});
