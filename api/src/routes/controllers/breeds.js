const { Breed, Temperament } = require("../../db");
const uuid = require("uuid");
const {
  fetchBreedsApi,
  fetchBreedsDB,
  formatApiDetail,
  formatDBDetail,
} = require("./utils");
const _ = require("lodash");

const getBreeds = async function (req, res, next) {
  const { name } = req.query;
  try {
    const breeds = await fetchBreeds(name);
    res.json(breeds);
  } catch (error) {
    next(error);
  }
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
const formatApi = function (breeds) {
  //let formated = breeds.map(formatApiDetail);
  let formated = breeds.map((breed) =>
    formatApiDetail(
      _.pick(breed, ["id", "name", "weight", "temperament", "image"])
    )
  );

  return formated;
};

const formatDB = function (breeds) {
  let formatedDB = breeds.map((breed) =>
    formatDBDetail(
      
      _.pick(breed, ["id", "name", "weight", "temperaments", "img"])
    )
  );
  return formatedDB;
};

const searchIdDB = async function (id) {
  try {
    const breedRaw = await Breed.findOne({
      where: { id: id },
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return breedRaw;
  } catch (error) {
    console.log(error);
  }
};

const searchApiId = async function (id) {
  try {
    let breedRaw = await fetchBreedsApi();
    breedRaw = breedRaw.filter((breed) => breed.id == id);

    return breedRaw;
  } catch (error) {
    console.log(error);
  }
};

const getBreedById = async function (req, res, next) {
  const { id } = req.params;
  let breedInfo = null;

  if (uuid.validate(id)) {
    breedInfo = await searchIdDB(id);
    breedInfo = breedInfo ? formatDBDetail(breedInfo) : "No matches found";
  } else {
    breedInfo = await searchApiId(id);
    // REGUNTAR AL FRAN COMO HACER QUE ESTO QUEDE MENOS A LO MONO
    breedInfo = breedInfo.length
      ? formatApiDetail(breedInfo[0])
      : "No matches found";
  }
  res.json(breedInfo);
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
