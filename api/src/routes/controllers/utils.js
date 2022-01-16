const axios = require("axios");
const { API_KEY } = process.env;
const { Op } = require("sequelize");
const { Breed, Temperament } = require("../../db");

const fetchBreedsApi = async function (name) {
  const allBreeds = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  return name? allBreeds.data.filter(breed => breed.name.toLowerCase().includes(name.toLowerCase())) : allBreeds.data
};

const fetchBreedsDB = async function (name) {
  allBreedsDB = await Breed.findAll(hasQueryDB(name));

  return allBreedsDB;
};

const hasQueryDB = function (name) {
  return name
    ? {
        where: { name: { [Op.iLike]: "%" + name + "%" } },
        include: [
          {
            model: Temperament,
          },
        ],
        attributes: {
          exclude: ["breed_temperament"],
        },
      }
    : {include: [
      {
        model: Temperament,
      },
    ],
    attributes: {
      exclude: ["breed_temperament"],
    }
  };
};


function stringToJson(string) {
  let [min, max] = string.split(" - ");
  let formatOk = {
    min: Number(min),
    max: Number(max),
  };

  return formatOk;
}

function formatTemperamet(temper) {
  let formatedTemper = [];

  if (typeof temper === "string") {
    formatedTemper = temper.split(", ");
  }
  if (typeof temper === "object") {
    formatedTemper = temper.map((temp) => temp.name);
  }

  return formatedTemper;
}

const formatApiDetail = function (breed) {
  let detailApi = {
    id: breed.id,
    name: breed.name,
    weight: stringToJson(breed.weight.metric),
    temperament: formatTemperamet(breed.temperament),
    image: breed.image.url,
    life_span: breed.life_span,
  };

  if (breed.height) {
    detailApi.height = stringToJson(breed.height.metric)

  }
  if (breed.life_span) {
    detailApi.life_span = breed.life_span;
  }

  return detailApi;
};

const formatDBDetail = function (breed) {
  let detailDB = {
    id: breed.id,
    name: breed.name,
    weight: breed.weight,
    temperament: formatTemperamet(breed.temperaments),
    image: breed.img,
  };
  
  if (breed.life_span) {
    detailDB.life_span = breed.life_span;
  }
  if (breed.height) {
    detailDB.height = breed.height;
  }
  return detailDB;
};

module.exports = {
  fetchBreedsApi,
  fetchBreedsDB,
  formatApiDetail,
  formatDBDetail,
};
