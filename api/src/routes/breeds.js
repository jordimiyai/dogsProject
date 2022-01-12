const { Router } = require("express");
const { getBreeds, getBreedById, createBreed } = require("./controllers/breeds");
const router = Router();
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const querySchema = Joi.object({
  name: Joi.string().regex(/^[a-zA-Z\s]+$/),
});

const paramsSchema = Joi.object({
  id: Joi.string().regex(/^([a-zA-Z0-9-]+)$/)
});

const bodySchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  height: Joi.object({
    min: Joi.number().min(1).integer(),
    max: Joi.number().min(1).integer()
  }).required(),
  weight: Joi.object({
    min: Joi.number().min(1).integer(),
    max: Joi.number().min(1).integer()
  }).required(),
  life_span: Joi.string().regex(/^([a-zA-Z0-9- ]+)$/),
  img:Joi.string()
  .regex(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i),
  temperament: Joi.array()
    .items(
      Joi.number().min(1).max(124)
    )
    .required(),
});

router.get("/", validator.query(querySchema), getBreeds);

router.get("/:id", validator.params(paramsSchema), getBreedById );

router.post("/", validator.body(bodySchema), createBreed);

module.exports = router;
