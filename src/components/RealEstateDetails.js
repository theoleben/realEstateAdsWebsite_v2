import React from "react";
import classes from "./RealEstateDetails.module.css";
import { Link, useParams } from "react-router-dom";
import data from "../data/realEstate";
import { BiArea } from "react-icons/bi";
import { PiPuzzlePieceBold } from "react-icons/pi";
import { MdOutlineEuro } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegMap } from "react-icons/fa6";

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
      <img src={found.photo.p1} alt="Description" />
      <ul>
        <li>
          <IoLocationOutline />
          <span>{found.location}</span>
        </li>
        <li>
          <FaRegMap />
          <span>{found.region}</span>
        </li>
        <li>
          <PiPuzzlePieceBold />
          <span>{found.pieces} pièces</span>
        </li>
        <li>
          <BiArea />
          <span>{found.surface} m²</span>
        </li>
        <li>
          <MdOutlineEuro />
          <span>
            {found.transaction === "Achat"
              ? `${found.price} €`
              : `${found.price} € / mois`}
          </span>
        </li>
      </ul>
      <div>
        <span>Description de l'offre:</span>
        <p>{found.description}</p>
      </div>
      <div className={classes["button-container"]}>
        <Link to="/contact" className={classes.contact}>
          Nous contacter pour ce bien
        </Link>
      </div>
    </div>
  );
};

export default RealEstateDetail;
