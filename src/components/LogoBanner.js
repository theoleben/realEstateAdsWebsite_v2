import React from "react";
import { Link } from "react-router-dom";
import classes from "./LogoBanner.module.css";
import Twitter from "../logo/Twitter";
import Facebook from "../logo/Facebook";
import Instagram from "../logo/Instagram";
import LinkedIn from "../logo/LinkedIn";

const LogoBanner = () => {
  return (
    <ul className={classes.container}>
      <li>
        <Link to="https://twitter.com/" target="_blank" rel="noreferrer">
          <Twitter className={classes.icon} />
        </Link>
      </li>
      <li>
        <Link to="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <Facebook className={classes.icon} />
        </Link>
      </li>
      <li>
        <Link to="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <Instagram className={classes.icon} />
        </Link>
      </li>
      <li>
        <Link
          to="https://fr.linkedin.com/in/theo-leben"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn className={classes.icon} />
        </Link>
      </li>
    </ul>
  );
};

export default LogoBanner;
