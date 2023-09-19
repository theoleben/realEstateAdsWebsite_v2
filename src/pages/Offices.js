import React, { lazy, useContext } from "react";
import classes from "./Offices.module.css";
// import Office from "../components/Office";
import RealEstateContext from "../store/real-estate-context";

// /static/js/src_components_Office_js.chunk.js
const Office = lazy(() => import("../components/Office"));

const Offices = () => {
  // console.log("Offices");
  const ctx = useContext(RealEstateContext);
  // console.log(ctx);
  const officesData = ctx.offices;
  // console.log(officesData);

  return (
    <>
      <h2>Nos agences immobilières</h2>
      <ul className={classes.container}>
        {officesData.map((office) => {
          // console.log(office);
          return (
            <li key={office.id}>
              <Office data={office} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Offices;
