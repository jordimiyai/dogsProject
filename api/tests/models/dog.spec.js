const { Breed, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Breed Model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Breed.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Breed.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Breed.create({ name: "Pug" });
      });
    });
    describe("weight", () => {
      it("should throw an error if weight is null", (done) => {
        Breed.create({})
          .then(() => done(new Error("It requires a valid weight")))
          .catch(() => done());
      });
      it("should work when its a valid weight", () => {
        Breed.create({ weight: { min: 0, max: 2 } });
      });
    });
    describe("height", () => {
      it("should throw an error if height is null", (done) => {
        Breed.create({})
          .then(() => done(new Error("It requires a valid height")))
          .catch(() => done());
      });
      it("should work when its a valid height", () => {
        Breed.create({ height: { min: 0, max: 2 } });
      });
    });
  });
});
