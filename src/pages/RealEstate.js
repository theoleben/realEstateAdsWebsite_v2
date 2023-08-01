import React, { Fragment, useCallback, useEffect, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import classes from "./RealEstate.module.css";
import data from "../data/realEstate";
import Card from "../components/Card";
import { useLocation /*useParams*/ } from "react-router-dom";

const INCORRECT_VALUE = "incorrect_value";
const regions = [
  "Auvergne-Rhône-Alpes",
  "Bourgogne-Franche-Comté",
  "Bretagne",
  "Centre-Val de Loire",
  "Corse",
  "Grand Est",
  "Hauts-de-France",
  "Île-de-France",
  "Normandie",
  "Nouvelle-Aquitaine",
  "Occitanie",
  "Pays de la Loire",
  "Provence-Alpes-Côte d'Azur",
];

const RealEstate = () => {
  // console.log("RealEstate");
  const [transaction, setTransaction] = useState(INCORRECT_VALUE);
  const [region, setRegion] = useState(INCORRECT_VALUE);
  const [bedrooms, setBedrooms] = useState(INCORRECT_VALUE);
  const [surface, setSurface] = useState(0);
  const [budget, setBudget] = useState(0);
  const [filteredRealEstate, setFilteredRealEstate] = useState(data);
  const [enable, setEnable] = useState(false);

  // console.log(data);

  // console.log("** transaction **", transaction);
  // console.log("** enable **", enable);

  const transactionHandler = (event) => {
    // console.log(event.target.value);
    setTransaction(event.target.value);
    setEnable(false);
  };

  const regionHandler = (event) => {
    // console.log(event.target.value);
    setRegion(event.target.value);
  };

  const bedroomsHandler = (event) => {
    // console.log(event.target.value);
    setBedrooms(event.target.value);
  };

  const surfaceHandler = (event) => {
    // console.log(event.target.value);
    const surface = parseInt(event.target.value, 10);
    setSurface(surface);
  };

  const budgetHandler = (event) => {
    // console.log(event.target.value);
    const budget = parseInt(event.target.value, 10);
    setBudget(budget);
  };

  const searchHandler = useCallback(() => {
    // console.log("** searchHandler **");
    let result = data.filter((realEstate) => {
      return (
        transaction === INCORRECT_VALUE ||
        realEstate.transaction === transaction
      );
    });

    // Region
    result = result.filter((realEstate) => {
      return region === INCORRECT_VALUE || realEstate.region === region;
    });

    // Bedrooms
    result = result.filter((realEstate) => {
      return bedrooms === INCORRECT_VALUE || realEstate.bedrooms === bedrooms;
    });

    // Surface
    result = result.filter((realEstate) => {
      return parseInt(realEstate.surface, 10) >= surface;
    });

    // Budget
    result = result.filter((realEstate) => {
      const reformattedBudget = realEstate.price.replaceAll(" ", "");
      return budget === 0 || parseInt(reformattedBudget, 10) <= budget;
    });

    setFilteredRealEstate(result);

    // console.log(result.length);
  }, [bedrooms, budget, region, surface, transaction]);

  const location = useLocation();

  useEffect(() => {
    // console.log("useEffect1");
    if (location.pathname === "/real-estate/transaction/buy") {
      // console.log("update");
      setTransaction("Achat");
      setEnable(true);
    } else if (location.pathname === "/real-estate/transaction/rent") {
      // console.log("update");
      setTransaction("Location");
      setEnable(true);
    }
  }, [location]);

  useEffect(() => {
    // console.log("useEffect2");
    if (enable && (transaction === "Achat" || transaction === "Location")) {
      // console.log("search");
      searchHandler();
    }
  }, [enable, transaction, searchHandler]);

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.container2}>
          <select value={transaction} onChange={transactionHandler}>
            <option value={INCORRECT_VALUE}>Type de transaction</option>
            <option value="Achat">Achat</option>
            <option value="Location">Location</option>
          </select>

          <select value={region} onChange={regionHandler}>
            <option value={INCORRECT_VALUE}>Régions</option>
            {regions.map((element) => {
              const id = Math.random();
              return (
                <option key={`${element}-${id}`} value={element}>
                  {element}
                </option>
              );
            })}
          </select>

          <select value={bedrooms} onChange={bedroomsHandler}>
            <option value={INCORRECT_VALUE}>Nombre de chambres</option>
            <option value="1">1 chambre</option>
            <option value="2">2 chambres</option>
            <option value="3">3 chambres</option>
            <option value="4">4 chambres</option>
            <option value="5+">5 chambres et plus</option>
          </select>

          <div className={classes["container-input"]}>
            <span>m²</span>
            <input
              type="number"
              min="0"
              placeholder="Surface minimum"
              onChange={surfaceHandler}
            />
          </div>

          <div className={classes["container-input"]}>
            <span>€</span>
            <input
              type="number"
              min="0"
              placeholder="Budget maximum"
              onChange={budgetHandler}
            />
          </div>

          <div className={classes["container-button"]}>
            <AiOutlineSearch className={classes.icon} />
            <button type="button" onClick={searchHandler}>
              Rechercher
            </button>
          </div>
        </div>
      </div>

      <section className={classes.container3}>
        <span>Votre recherche : {filteredRealEstate.length} résultats</span>
        <ul className={classes.filteredList}>
          {filteredRealEstate.map((realEstate) => {
            // console.log(realEstate);
            return (
              <li key={realEstate.id} className={classes.item}>
                <Card data={realEstate} />
              </li>
            );
          })}
        </ul>
      </section>
    </Fragment>
  );
};

export default RealEstate;
