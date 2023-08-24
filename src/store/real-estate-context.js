import React, { useEffect, useState } from "react";
import storage from "../firebase/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { HOME_DIRECTORY } from "../firebase/constants";
import picturesHome from "../data/homePictures";
import { OFFICES_URL, REAL_ESTATE_URL } from "../firebase/private_constants";

const RealEstateContext = React.createContext({
  realEstate: [],
  offices: [],
  pictures: [],
});

export const RealEstateProvider = (props) => {
  // console.log("RealEstateProvider");
  const [realEstate, setRealEstate] = useState([]);
  const [offices, setOffices] = useState([]);
  const [pictures, setPictures] = useState([]);

  function realEstateHandler() {
    // console.log("realEstateHandler");

    fetch(REAL_ESTATE_URL)
      .then((response) => {
        //   console.log(response);
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        const realEstate = [];
        const refs = [];
        let formattedRealEstate = [];

        for (const property in data) {
          // console.log(data[property]);
          const imgRef = data[property].photo.p1;
          const nodeRef = ref(storage, imgRef);
          // console.log(imgRef);
          // console.log(nodeRef);
          realEstate.push({ ...data[property], id: property });
          refs.push(nodeRef);
        }

        // console.log(realEstate);
        // console.log(refs);

        let requests = refs.map((url) => getDownloadURL(url));
        // console.log(requests);

        Promise.all(requests).then((responses) => {
          // console.log(responses);

          formattedRealEstate = realEstate.map((element, index) => {
            // console.log(element);
            // console.log(index);
            return {
              ...element,
              photo: {
                p1: responses[index],
              },
            };
          });

          // console.log(formattedRealEstate);
          setRealEstate(formattedRealEstate);
        });
      });
  }

  function officeHandler() {
    // console.log("officeHandler");

    fetch(OFFICES_URL)
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        // console.log(data);

        const offices = [];
        const refs = [];
        let formattedOffices = [];

        for (const property in data) {
          const imgRef = data[property].thumbnail.photo;
          const nodeRef = ref(storage, imgRef);
          // console.log(imgRef);
          // console.log(nodeRef);
          offices.push({ ...data[property], id: property });
          refs.push(nodeRef);
        }

        // console.log(offices);
        // console.log(refs);

        let requests = refs.map((url) => getDownloadURL(url));
        // console.log(requests);

        Promise.all(requests).then((responses) => {
          // console.log(responses);

          formattedOffices = offices.map((element, index) => {
            // console.log(element);
            // console.log(index);
            return {
              ...element,
              thumbnail: {
                ...element.thumbnail,
                photo: responses[index],
              },
            };
          });

          // console.log(formattedOffices);
          setOffices(formattedOffices);
        });
      });
  }

  function homePictures() {
    const refs = [];

    let formattedObjects = [];
    const temp = [...picturesHome];
    // console.log(temp);

    for (const element of picturesHome) {
      // console.log(element);
      const imgRef = HOME_DIRECTORY + "/" + element.image;
      // console.log(imgRef);
      const nodeRef = ref(storage, imgRef);
      refs.push(nodeRef);
    }

    // console.log(refs);

    let requests = refs.map((url) => getDownloadURL(url));
    // console.log(requests);

    Promise.all(requests).then((responses) => {
      // console.log(responses);

      formattedObjects = temp.map((element, index) => {
        return { ...element, image: responses[index] };
      });

      // console.log(formattedObjects);
      setPictures(formattedObjects);
    });
  }

  useEffect(() => {
    // console.log("useEffect");
    realEstateHandler();
    officeHandler();
    homePictures();
  }, []);

  // console.log(realEstate);
  // console.log(offices);

  return (
    <RealEstateContext.Provider value={{ realEstate, offices, pictures }}>
      {props.children}
    </RealEstateContext.Provider>
  );
};

export default RealEstateContext;
