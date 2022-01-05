const { Breed, Temperament } = require("../../db");
const axios = require("axios");
const { API_KEY } = process.env;
const { Op } = require("sequelize");

const getBreeds = async function (req, res, next) {
  const { name } = req.query;
  try {
    const breeds = await fetchBreeds(name);
    console.log("estoy en get breeds esta es mi respuesta", breeds);
    res.json(breeds);
  } catch (error) {
    next(error);
  }
};

const fetchBreedsApi = async function (name) {
  const allBreeds = await axios.get(
    `https://api.thedogapi.com/v1/breeds${hasQueryApi(name)}api_key=${API_KEY}`
  );
  return allBreeds.data;
};

const fetchBreedsDB = async function (name) {
  allBreedsDB = await Breed.findAll(hasQueryDB(name));

  return allBreedsDB;
};

const fetchBreeds = async function (name) {
  try {
    const breedsApi = await fetchBreedsApi(name);
    const breedsDB = await fetchBreedsDB(name);

    const wantedBreeds = [...formatApi(breedsApi), ...formatDB(breedsDB)];

    if (!wantedBreeds.length) {
      return "There aren't any breeds with that name";
    }

    return wantedBreeds;
  } catch (e) {
    console.log(e);
  }
};

function weightToJson(weightString) {
  let [min, max] = weightString.split(" - ");
  let weightOk = {
    min: Number(min),
    max: Number(max),
  };

  return weightOk;
}

const formatApi = function (breeds) {
  let formated = breeds.map((breed) => {
    let newFormat = {
      id: breed.id,
      name: breed.name,
      weight: weightToJson(breed.weight.metric),
      temperament: breed.temperament,
      image: `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`,
    };
    return newFormat;
  });
  return formated;
};
const formatDB = function (breeds) {
  //ACA ESTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  return breeds;
};

const hasQueryDB = function (name) {
  return name ? { where: { name: { [Op.iLike]: "%" + name + "%" } } } : {};
};

const hasQueryApi = function (name) {
  let completeUrl = "?";
  if (name) {
    completeUrl = "/search?q=" + name + "&";
  }
  return completeUrl;
};

const getBreedById = function (req, res, next) {
  const { id } = req.params;
  res.send(id);
};

const createBreed = async function (req, res, next) {
  try {
    const { name, height, weight, life_span, img, temperament } = req.body;

    let newBreed = await Breed.create({
      name,
      height,
      weight,
      life_span,
      img,
    });
    await newBreed.addTemperament(temperament);

    res.send("Breed created");
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getBreeds,
  getBreedById,
  createBreed,
  fetchBreedsApi,
};
