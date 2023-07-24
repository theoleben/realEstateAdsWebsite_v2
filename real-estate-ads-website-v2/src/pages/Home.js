import React from "react";
import backgrd from "../img/background.jpg";
import classes from "./Home.module.css";
import data from "../data/realEstate";
import Card from "../components/Card";

const Home = () => {
  return (
    <React.Fragment>
      <img src={backgrd} alt="Banner" className={classes.banner} />
      <h1>Nos dernières découvertes</h1>
      <ul className={classes.container}>
        {data.map((realEstate) => {
          // console.log(realEstate);
          return (
            <li key={realEstate.id} className={classes.item}>
              <Card data={realEstate} />
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Home;
