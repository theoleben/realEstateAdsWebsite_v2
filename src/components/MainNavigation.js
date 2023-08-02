import React, { Fragment } from "react";
import classes from "./MainNavigation.module.css";
import LogoBanner from "./LogoBanner";
import { NavLink } from "react-router-dom";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const MainNavigation = () => {
  // console.log("MainNavigation");
  return (
    <Fragment>
      <MdOutlineRealEstateAgent className={classes.logo} />
      <LogoBanner />
      <header className={classes.header}>
        <div className={classes.brand}>
          <span>Théo LEBEN</span>
          <h1>Appartements et maisons de prestige</h1>
        </div>
        <nav className={classes.nav}>
          <ul>
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