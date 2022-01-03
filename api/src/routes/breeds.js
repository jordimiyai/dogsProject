const { Router } = require("express");
const { getBreeds, getBreedById, createBreed } = require("./controllers/breeds");
const router = Router();
//const Joi = require("joi");
//const validator = require("express-joi-validation").createValidator({});

// const querySchema = Joi.object({
  // });

// const paramsSchema = Joi.object({
// })

//, validator.query(querySchema)
router.get("/", getBreeds);


//validator.params(paramsSchema),
router.get("/:id", getBreedById );
//validator.body(bodySchema),
router.post("/", createBreed);

module.exports = router;
