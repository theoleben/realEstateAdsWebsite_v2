import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  // console.log(props);
  // console.log(props.data.price);
  return (
    <div className={classes.card}>
      <img src={props.data.photo.p1} alt="Description" />
      <div className={classes.details}>
        <p>{`${props.data.title}, ${props.data.location}`}</p>
        <span
          className={classes.details2}
        >{`${props.data.pieces} pièces, ${props.data.surface} m²`}</span>
        {/* <span className={classes.price}>{props.price} €</span> */}
        <span className={classes.price}>
          {props.data.transaction === "Achat"
            ? `${props.data.price} €`
            : `${props.data.price} € / mois`}
        </span>
        <button className={classes.detail}>Voir le détail</button>
      </div>
    </div>
  );
};

export default Card;
