console.log("real-estate-script");
import { appendFile } from "fs";
import data from "../data/realEstate.js";
import offices from "../data/offices.js";
import { OFFICES_DIRECTORY, REAL_ESTATE_DIRECTORY } from "../firebase/constants.js";

// console.log(JSON.stringify(data));
// console.log(data);
// console.log(offices);

// Build the object
const obj = {};

// Real estate object
obj["real-estate"] = {};
// console.log(obj);

for (const element of data) {
  //   console.log(element);
  const unique_id = Math.floor(Math.random() * (0xffff + 1)).toString();
  const id = "id_" + unique_id;
  const pathImg = REAL_ESTATE_DIRECTORY + element.photo.p1;
  const temp = { ...element, photo: { p1: pathImg } };
  delete temp.id;

  obj["real-estate"][id] = { ...temp };
}

// Offices object
obj["offices"] = {};
for (const element of offices) {
  //   console.log(element);
  const unique_id = Math.floor(Math.random() * (0xffff + 1)).toString();
  const id = "id_" + unique_id;
  const pathImg = OFFICES_DIRECTORY + element.thumbnail.photo;
  //   console.log(pathImg);
  const temp = {
    ...element,
    thumbnail: { ...element.thumbnail, photo: pathImg },
  };
  delete temp.id;

  obj["offices"][id] = { ...temp };
}

// console.log(obj);

// Generate real-estate json file
const formattedData = JSON.stringify(obj);
const options = { flag: "w" };

appendFile(
  "generated-real-estate.json",
  formattedData,
  options,
  function (err) {
    if (err) throw err;
    console.log("generated-real-estate.json updated!");
  }
);
