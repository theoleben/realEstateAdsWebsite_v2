import React, { useState } from "react";

import classes from "./Office.module.css";
import { AiOutlinePhone } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

const Office = (props) => {
  const [show, setShow] = useState(false);

  const readMoreHandler = () => {
    // console.log("readMoreHandler");
    setShow((value) => !value);
  };

  const CSSDescription = !show
    ? `${classes.origin} ${classes.hide}`
    : `${classes.origin} ${classes.show}`;

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
        <p className={CSSDescription}>{props.data.description}</p>
        <button onClick={readMoreHandler}>
          {show ? "Voir moins" : "Voir plus"}
        </button>

        <div className={classes["container-infos"]}>
          <div className={classes["container-info"]}>
            <div className={classes["container-icon"]}>
              <GrLocation className={classes["icon-phone"]} />
            </div>
            <span>
              {props.data.address}, {props.data.location}
            </span>
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
