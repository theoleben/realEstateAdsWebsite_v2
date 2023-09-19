import React, {
  Fragment,
  // lazy,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { AiOutlineSearch } from "react-icons/ai";
import classes from "./RealEstate.module.css";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";
import RealEstateContext from "../store/real-estate-context";

// Useless
// const Card = lazy(() => import("../components/Card"));

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
  const ctx = useContext(RealEstateContext);
  const data = ctx.realEstate;
  // console.log(data);

  const [transaction, setTransaction] = useState("");
  const [region, setRegion] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [surface, setSurface] = useState(0);
  const [budget, setBudget] = useState(0);
  const [filteredRealEstate, setFilteredRealEstate] = useState(data);
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    // console.log("data changed");
    setFilteredRealEstate(data);
  }, [data]);

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
    setEnable(false);
  };

  const bedroomsHandler = (event) => {
    // console.log(event.target.value);
    setBedrooms(event.target.value);
    setEnable(false);
  };

  const surfaceHandler = (event) => {
    // console.log(event.target.value);
    let surface = 0;
    if (event.target.value !== "") {
      surface = parseInt(event.target.value, 10);
    }

    // console.log(surface);
    setSurface(surface);
    setEnable(false);
  };

  const budgetHandler = (event) => {
    // console.log(event.target.value);
    let budget = 0;
    if (event.target.value !== "") {
      budget = parseInt(event.target.value, 10);
    }

    // console.log(budget);
    setBudget(budget);
    setEnable(false);
  };

  const searchHandler = useCallback(() => {
    // console.log("** searchHandler **");
    let result = data.filter((realEstate) => {
      return transaction === "" || realEstate.transaction === transaction;
    });

    // Region
    result = result.filter((realEstate) => {
      return region === "" || realEstate.region === region;
    });

    // Bedrooms
    result = result.filter((realEstate) => {
      if (bedrooms === "5+") {
        return parseInt(realEstate.bedrooms, 10) >= 5;
      }
      return bedrooms === "" || realEstate.bedrooms === bedrooms;
    });

    // Surface
    result = result.filter((realEstate) => {
      const reformattedSurface = realEstate.surface.replaceAll(" ", "");
      return parseInt(reformattedSurface, 10) >= surface;
    });

    // Budget
    result = result.filter((realEstate) => {
      const reformattedBudget = realEstate.price.replaceAll(" ", "");
      return budget === 0 || parseInt(reformattedBudget, 10) <= budget;
    });

    setFilteredRealEstate(result);

    // console.log(result.length);
  }, [bedrooms, budget, region, surface, transaction, data]);

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
        <form className={classes.container2}>
          <select
            id="transaction"
            value={transaction}
            onChange={transactionHandler}
          >
            <option value="">Type de transaction</option>
            <option value="Achat">Achat</option>
            <option value="Location">Location</option>
          </select>

          <select
            id="region"
            value={region}
            onChange={regionHandler}
            autoComplete="off"
          >
            <option value="">Régions</option>
            {regions.map((element) => {
              const id = Math.random();
              return (
                <option key={`${element}-${id}`} value={element}>
                  {element}
                </option>
              );
            })}
          </select>

          <select id="bedrooms" value={bedrooms} onChange={bedroomsHandler}>
            <option value="">Nombre de chambres</option>
            <option value="1">1 chambre</option>
            <option value="2">2 chambres</option>
            <option value="3">3 chambres</option>
            <option value="4">4 chambres</option>
            <option value="5+">5 chambres et plus</option>
          </select>

          <div className={classes["container-input"]}>
            <span>m²</span>
            <input
              id="surface"
              type="number"
              min="0"
              placeholder="Surface min"
              onChange={surfaceHandler}
            />
          </div>

          <div className={classes["container-input"]}>
            <span>€</span>
            <input
              id="budget"
              type="number"
              min="0"
              placeholder="Budget max"
              onChange={budgetHandler}
            />
          </div>

          <div className={classes["container-button"]}>
            <AiOutlineSearch className={classes.icon} />
            <button type="button" onClick={searchHandler}>
              Rechercher
            </button>
          </div>
        </form>
      </div>

      <section className={classes.container3}>
        <span>Votre recherche : {filteredRealEstate.length} résultats</span>
        <ul className={classes.filteredList}>
          {filteredRealEstate.map((realEstate) => {
            // console.log(realEstate);
            return (
              <li key={realEstate.id} className={classes.item}>
                <Card data={realEstate} type="Search" />
              </li>
            );
          })}
        </ul>
      </section>
    </Fragment>
  );
};

export default RealEstate;
