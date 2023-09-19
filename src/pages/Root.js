import React, { Fragment, lazy, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
// import MainNavigation from "../components/MainNavigation";
// import Footer from "../components/Footer";
// import Modal from "../components/Modal";

// static/js/src_components_MainNavigation_js.chunk.js
const MainNavigation = lazy(() => import("../components/MainNavigation"));
// /static/js/src_components_Footer_js.chunk.js
const Footer = lazy(() => import("../components/Footer"));
// /static/js/src_components_Modal_js.chunk.js
const Modal = lazy(() => import("../components/Modal"));

const Root = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [data, setData] = useState({});

  const visibilityHandler = (value) => {
    // console.log("visibilityHandler");
    // console.log(value);
    setCartIsShown(value);
  };

  const location = useLocation();
  //   console.log(location);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
