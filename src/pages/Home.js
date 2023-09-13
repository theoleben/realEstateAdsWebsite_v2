import React, { useContext, useEffect, useMemo, useState } from "react";
import classes from "./Home.module.css";
import Card from "../components/Card";
import RealEstateContext from "../store/real-estate-context";
import picturesHome from "../data/homePictures";

const Home = () => {
  // console.log("Home");
  const ctx = useContext(RealEstateContext);
  const [latest, setLatest] = useState([]);
  const [homePictures, setHomePictures] = useState([]);
  // console.log(ctx);
  // console.log(homePictures);

  const latests_location = useMemo(
    () => [
      "Megève",
      "Dinard",
      "Porto-Vecchio",
      "Nancy",
      "Paris 16ème",
      "Bayeux",
    ],
    []
  );

  const { realEstate: data, pictures } = ctx;
  // console.log(data);
  // console.log(pictures);

  useEffect(() => {
    // console.log("useEffect pictures");
    if (pictures.length !== 0) {
      // console.log("treatment pictures");
      const banner = pictures.find(
        (element) => element.name === picturesHome[0].name
      );
      const house = pictures.find(
        (element) => element.name === picturesHome[1].name
      );
      const pool = pictures.find(
        (element) => element.name === picturesHome[2].name
      );
      setHomePictures([banner, house, pool]);
    }
  }, [pictures]);

  useEffect(() => {
    // console.log("useEffect data");
    if (data.length !== 0) {
      // console.log("treatment data");
      const temp = [];
      data.forEach((element) => {
        if (latests_location.includes(element.location)) {
          temp.push(element);
        }
      });
      // console.log(temp);
      setLatest(temp);
    }
  }, [data, latests_location]);

  // console.log("here");
  return (
    <React.Fragment>
      {latest.length > 0 && homePictures.length > 0 && (
        <>
          <img
            src={homePictures[0].image}
            alt="Terrasse ensoleillée"
            className={classes.banner}
          />
          <section>
            <div className={classes.agence}>
              <div>
                <div className={classes["title-container"]}>
                  <h2>Notre agence</h2>
                </div>
                <p>
                  Notre équipe dévouée de professionnels de l'immobilier vous
                  propose un accès privilégié aux plus prestigieuses propriétés
                  à travers tout le territoire français. Chaque propriété
                  présentée est soigneusement sélectionnée. En effet, nous nous
                  efforçons de proposer des biens immobiliers qui se distinguent
                  par leur unicité, leur élégance et leur rareté. Notre réseau
                  d'agences dans toute la France nous permet également d'être au
                  plus proche des clients souhaitant acquérir un bien
                  d'exception.
                </p>
              </div>
              <div className={classes["img-container"]}>
                <img
                  src={homePictures[1].image}
                  alt="Paire de clés accrochée à un arbre"
                />
              </div>
            </div>
          </section>
          <section>
            <div className={classes.excellence}>
              <div className={classes["img-container"]}>
                <img
                  src={homePictures[2].image}
                  alt="Grande piscine avec vue dégagée"
                />
              </div>
              <div>
                <div className={classes["title-container"]}>
                  <h2>Plonger dans l'excellence</h2>
                </div>
                <p>
                  Nous avons à coeur de proposer un service de qualité afin de
                  répondre aux besoins personnalisés de nos clients. La
                  recherche sur mesure est ce qui nous anime et la satisfaction
                  client est notre priorité absolue. Que vous cherchiez une
                  villa en bord de mer, un château au coeur des vignobles, ou un
                  appartement de grand standing dans une capitale vibrante,
                  notre agence vous offre une expérience de recherche et
                  d'acquisition sans égale.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className={classes["title-container2"]}>
              <h2>Nos dernières découvertes</h2>
            </div>
            <ul className={classes.container}>
              {latest.map((realEstate) => {
                return (
                  <li key={realEstate.id} className={classes.item}>
                    <Card data={realEstate} type="Home" />
                  </li>
                );
              })}
            </ul>
          </section>
        </>
      )}
    </React.Fragment>
  );
};

export default Home;
