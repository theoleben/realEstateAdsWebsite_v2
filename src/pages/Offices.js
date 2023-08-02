import React from "react";
import officesData from "../data/offices";
import classes from "./Offices.module.css";
import Office from "../components/Office";

const Offices = () => {
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
