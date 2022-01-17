/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Breed, conn } = require("../../src/db.js");

const agent = session(app);
const breed = {
  name: "Pug",
  height: { min: 15, max: 20 },
  weight: { min: 10, max: 20 },
  temperament: [1, 2, 3],
};

describe("Breeds routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() => Breed.sync({ force: true }).then(() => Breed.create(breed)));
  describe("GET /breeds", () => {
    it("should get 200", () => agent.get("/breeds").expect(200));
  });
  describe("POST /breeds", () => {
    it("Post with empty body should respond with status code 400", () =>
      agent.post("/breeds").expect(400));
    it("Post breed should respond with status code 200", async () => {
      const res = await agent.post("/breeds").send(breed);
      expect(res.statusCode).to.equal(200);
    });
  });
});
