import React, { Fragment } from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <div className={classes.border} />
      <footer className={classes.footer}>
        <ul>
          <li>Services</li>
          <li>
            <Link to="real-estate/transaction/buy">Achat</Link>
          </li>
          <li>
            <Link to="real-estate/transaction/rent">Location</Link>
          </li>
        </ul>
        <ul>
          <li>A notre propos</li>
          <li>
            <Link to="offices">Nos agences</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        <ul>
          <li>Légal</li>
          <li>
            <Link to="">Mentions légales</Link>
          </li>
          <li>
            <Link to="">Honoraires d'agence</Link>
          </li>
          <li>
            <Link to="">Confidentialités</Link>
          </li>
          <li>
            <Link to="">Politique de cookies</Link>
          </li>
        </ul>
      </footer>
    </Fragment>
  );
};

export default Footer;
