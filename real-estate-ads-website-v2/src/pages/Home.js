import React from "react";
import backgrd from "../img/background.jpg";
import classes from "./Home.module.css";
import data from "../data/realEstate";

const Home = () => {
  return (
    <React.Fragment>
      <img src={backgrd} alt="Banner" className={classes.banner} />
      <h1>Nos dernières découvertes</h1>
      <ul className={classes.container}>
        {data.map((realEstate) => {
          console.log(realEstate);
          return (
            <li key={realEstate.id} className={classes.item}>
              <div className={classes.card}>
                <img src={realEstate.photo.p1} alt="Description" />
                <p>
                  {`${realEstate.title}, ${realEstate.location}, ${realEstate.pieces} pièces, ${realEstate.surface} m²`}
                </p>
                <span>{realEstate.price}</span>
                <button>Voir le détail</button>
              </div>
            </li>
          );
        })}
      </ul>
      {/* <div className={classes.card}>
        
        <hr />
        <span>Appartement</span>
        <span>Appartement</span>
        <span>Appartement</span>
        <span>Appartement</span>
        <span>Appartement</span>
        <div>
          <span>1 500 000 €</span>
        </div>
        <button>Voir le détail</button>
      </div> */}
    </React.Fragment>
  );
};

export default Home;
