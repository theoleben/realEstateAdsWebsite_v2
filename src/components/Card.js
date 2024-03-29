import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  // console.log(props);

  const cardStyle = props.type === "Home" ? classes["card-home"] : classes.card;

  return (
    <div className={cardStyle}>
      <img src={props.data.photo.p1} alt={props.data.photo.description} />
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
          target="_blank"
          rel="noreferrer"
          className={classes.detail}
        >
          Voir le détail
        </Link>
      </div>
    </div>
  );
};

export default Card;
