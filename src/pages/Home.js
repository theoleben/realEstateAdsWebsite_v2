import React from "react";
import backgrd from "../img/background.jpg";
import classes from "./Home.module.css";
import data from "../data/realEstate";
import Card from "../components/Card";
import House from "../img/house.jpg";
import Pool from "../img/swimming-pool.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <img src={backgrd} alt="Banner" className={classes.banner} />
      <section>
        <div className={classes.agence}>
          <div>
            <div className={classes["title-container"]}>
              <h2>Notre agence</h2>
            </div>
            <p>
              Notre équipe dévouée de professionnels de l'immobilier vous
              propose un accès privilégié aux plus prestigieuses propriétés à
              travers tout le territoire français. Chaque propriété présentée
              est soigneusement sélectionnée. En effet, nous nous efforçons de
              proposer des biens immobiliers qui se distinguent par leur
              unicité, leur élégance et leur rareté. Notre réseau d'agences dans
              toute la France nous permet également d'être au plus proche des
              clients souhaitant acquérir un bien d'exception.
            </p>
          </div>
          <div className={classes["img-container"]}>
            <img src={House} alt="Description" />
          </div>
        </div>
      </section>
      <section>
        <div className={classes.excellence}>
          <div className={classes["img-container"]}>
            <img src={Pool} alt="Description" />
          </div>
          <div>
            <div className={classes["title-container"]}>
              <h2>Plonger dans l'excellence</h2>
            </div>
            <p>
              Nous avons à coeur de proposer un service de qualité afin de
              répondre aux besoins personnalisés de nos clients. La recherche
              sur mesure est ce qui nous anime et la satisfaction client est
              notre priorité absolue. Que vous cherchiez une villa en bord de
              mer, un château au coeur des vignobles, ou un appartement de grand
              standing dans une capitale vibrante, notre agence vous offre une
              expérience de recherche et d'acquisition sans égale.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className={classes["title-container2"]}>
          <h2>Nos dernières découvertes</h2>
        </div>
        <ul className={classes.container}>
          {data.map((realEstate) => {
            return (
              <li key={realEstate.id} className={classes.item}>
                <Card data={realEstate} type="Home" />
              </li>
            );
          })}
        </ul>
      </section>
    </React.Fragment>
  );
};

export default Home;
