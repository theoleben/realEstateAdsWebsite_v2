import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const Root = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [data, setData] = useState({});

  const visibilityHandler = (value) => {
    // console.log("visibilityHandler");
    // console.log(value);
    setCartIsShown(value);
  };

  return (
    <Fragment>
      {cartIsShown && <Modal data={data} isShown={visibilityHandler} />}
      <MainNavigation />
      <main>
        <Outlet context={[visibilityHandler, setData]} />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Root;
