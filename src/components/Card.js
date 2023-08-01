import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  // console.log(props);
  return (
    <div className={classes.card}>
      <img src={props.data.photo.p1} alt="Description" />
      <div className={classes.details}>
        <p>{`${props.data.title}, ${props.data.location}`}</p>
        <span
          className={classes.details2}
        >{`${props.data.pieces} pièces, ${props.data.surface} m²`}</span>
        <span className={classes.price}>
          {props.data.transaction === "Achat"
            ? `${props.data.price} €`
            : `${props.data.price} € / mois`}
        </span>
        <Link
          to={`/real-estate/detail/${props.data.id}`}
          className={classes.detail}
        >
          Voir le détail
        </Link>
      </div>
    </div>
  );
};

export default Card;
