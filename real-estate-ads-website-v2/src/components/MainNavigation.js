import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  console.log("MainNavigation");
  return (
    <header className={classes.header}>
      <div className={classes.brand}>
        <span>Théo LEBEN</span>
        <span>Appartements et maisons de prestige</span>
      </div>
      <nav className={classes.nav}>
        <ul>
          {/* <li>Accueil</li>
          <li>Rechercher</li>
          <li>Nos bureaux</li>
          <li>Nous contacter</li> */}
          <li>
            <NavLink to="">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="real-estate">Rechercher</NavLink>
          </li>
          <li>
            <NavLink to="offices">Nos bureaux</NavLink>
          </li>
          <li>
            <NavLink to="contact">Nous contacter</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
