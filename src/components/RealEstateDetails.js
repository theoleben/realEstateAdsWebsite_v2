import React from "react";
import classes from "./RealEstateDetails.module.css";
import { Link, useParams } from "react-router-dom";
import data from "../data/realEstate";

const RealEstateDetail = () => {
  const params = useParams();
  //   console.log(params);
  const { realEstateId } = params;
  // console.log(typeof realEstateId);

  const found = data.find((realEstate) => realEstate.id === realEstateId);
  // console.log(found);

  return (
    <div className={classes.container}>
      <h2>{found.title}</h2>
      <div className={classes.subcontainer}>
        <div className={classes["img-container"]}>
          <img src={found.photo.p1} alt="Description" />
        </div>
        <div>
          <div className={classes["details-container"]}>
            <span>Localisation: {found.location}</span>
            <span>Région: {found.region}</span>
            <span>Nombre de pièces: {found.pieces}</span>
            <span>Superficie: {found.surface} m²</span>
            <span className={classes.price}>
              {found.transaction === "Achat"
                ? `Prix: ${found.price} €`
                : `Prix: ${found.price} € / mois`}
            </span>
          </div>
        </div>
      </div>
      <span>Description de l'offre:</span>
      <p>{found.description}</p>
      <div className={classes["button-container"]}>
        <Link className={classes.contact}>Nous contacter pour ce bien</Link>
      </div>
    </div>
  );
};

export default RealEstateDetail;
