import React, { lazy } from "react";
import { Link } from "react-router-dom";
import classes from "./LogoBanner.module.css";
// import Twitter from "../logo/Twitter";
// import Facebook from "../logo/Facebook";
// import Instagram from "../logo/Instagram";
// import LinkedIn from "../logo/LinkedIn";
// import GitHub from "../logo/GitHub";

// /static/js/src_logo_Twitter_js.chunk.js
const Twitter = lazy(() => import("../logo/Twitter"));
// /static/js/src_logo_Facebook_js.chunk.js
const Facebook = lazy(() => import("../logo/Facebook"));
// /static/js/src_logo_Instagram_js.chunk.js
const Instagram = lazy(() => import("../logo/Instagram"));
// /static/js/src_logo_LinkedIn_js.chunk.js
const LinkedIn = lazy(() => import("../logo/LinkedIn"));
// /static/js/src_logo_GitHub_js.chunk.js
const GitHub = lazy(() => import("../logo/GitHub"));

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
      <li>
        <Link
          to="https://github.com/theoleben/realEstateAdsWebsite_v2"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub className={classes.icon} />
        </Link>
      </li>
    </ul>
  );
};

export default LogoBanner;
