import React, { useContext } from "react";
import classes from "./Offices.module.css";
import Office from "../components/Office";
import RealEstateContext from "../store/real-estate-context";

const Offices = () => {
  // console.log("Offices");
  const ctx = useContext(RealEstateContext);
  // console.log(ctx);
  const officesData = ctx.offices;
  // console.log(officesData);

  return (
    <>
      <h2>Nos agences immoblières</h2>
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
