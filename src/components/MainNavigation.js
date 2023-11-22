import React, { Fragment, lazy } from "react";
import classes from "./MainNavigation.module.css";
// import LogoBanner from "./LogoBanner";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineRealEstateAgent } from "react-icons/md";

// /static/js/src_components_LogoBanner_js.chunk.js
const LogoBanner = lazy(() => import("./LogoBanner"));

const MainNavigation = () => {
  // console.log("MainNavigation");
  return (
    <Fragment>
      <Link to="" className={classes.link} data-testid="real-estate-agent-icon">
        <MdOutlineRealEstateAgent className={classes.logo} />
      </Link>
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
