import React from "react";

import classes from "./Office.module.css";
import { AiOutlinePhone } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

const Office = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img
          src={props.data.thumbnail.photo}
          alt={props.data.thumbnail.description}
        />
        <span>
          Crédits: {props.data.thumbnail.author} -{" "}
          <a
            href={props.data.thumbnail.license.url}
            target="_blank"
            rel="noreferrer"
          >
            {props.data.thumbnail.license.name}
          </a>
        </span>
      </div>
      <div className={classes.info}>
        <h3>{props.data.name}</h3>
        <p>{props.data.description}</p>

        <div className={classes["container-infos"]}>
          <div className={classes["container-info"]}>
            <div className={classes["container-icon"]}>
              <GrLocation className={classes["icon-phone"]} />
            </div>
            <span>{props.data.address}, </span>
            <span>{props.data.location}</span>
          </div>

          <div className={classes["container-info"]}>
            <div className={classes["container-icon"]}>
              <AiOutlinePhone className={classes["icon-phone"]} />
            </div>
            <span>{props.data.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
