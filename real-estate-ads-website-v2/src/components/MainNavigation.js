import React, { Fragment } from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import LogoComponent from "../img/Icon";

const MainNavigation = () => {
  console.log("MainNavigation");
  return (
    <Fragment>
      <LogoComponent />
      <header className={classes.header}>
        {/* <img src={logo} alt="Website logo" /> */}

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
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="real-estate"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Rechercher
              </NavLink>
            </li>
            <li>
              <NavLink
                to="offices"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Nos bureaux
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Nous contacter
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default MainNavigation;
