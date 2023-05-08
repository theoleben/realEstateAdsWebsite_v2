import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.photo} alt="Description" />
      <div className={classes.details}>
        <p>{`${props.title}, ${props.location}`}</p>
        <span
          class={classes.details2}
        >{`${props.pieces} pièces, ${props.surface} m²`}</span>
        <span class={classes.price}>{props.price}</span>
        <button className={classes.detail}>Voir le détail</button>
      </div>
    </div>
  );
};

export default Card;
