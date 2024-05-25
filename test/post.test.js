import app from "../app";
import request from "supertest";
describe("POST /api/posts/create", () => {
  it("should create a new post with valid data", async () => {
    const res = await request(app).post("/api/posts/create").send({
      title: "Test Post",
      description: "This is a test post description",
    });

    expect(res.status).toEqual(201);
    expect(res.body.data).toHaveProperty("title", "Test Post");
    expect(res.body.data).toHaveProperty(
      "description",
      "This is a test post description"
    );
  });

  it("should return 400 if data is invalid", async () => {
    const res = await request(app)
      .post("/api/posts/create")
      .send({ description: "Short" });
    expect(res.status).toEqual(400);
  });
});
