import "./App.css";
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Root from "./pages/Root";
// import Home from "./pages/Home";
// import RealEstate from "./pages/RealEstate";
// import Offices from "./pages/Offices";
// import Contact from "./pages/Contact";
// import RealEstateDetails from "./components/RealEstateDetails";
// import RealEstateLayout from "./pages/RealEstateLayout";
// import { RealEstateProvider } from "./store/real-estate-context";

// /static/js/src_pages_Root_js.chunk.js
const Root = lazy(() => import("./pages/Root"));
// /static/js/src_pages_Home_js.chunk.js
const Home = lazy(() => import("./pages/Home"));
// /static/js/src_components_Card_js.chunk.js
const RealEstate = lazy(() => import("./pages/RealEstate"));
// /static/js/src_pages_Offices_js.chunk.js
const Offices = lazy(() => import("./pages/Offices"));
// /static/js/src_pages_Contact_js.chunk.js
const Contact = lazy(() => import("./pages/Contact"));
// /static/js/src_components_RealEstateDetails_js.chunk.js
const RealEstateDetails = lazy(() => import("./components/RealEstateDetails"));
// /static/js/src_pages_RealEstateLayout_js.chunk.js
const RealEstateLayout = lazy(() => import("./pages/RealEstateLayout"));
// /static/js/src_store_real-estate-context_js.chunk.js
const RealEstateProvider = lazy(() =>
  import("./store/real-estate-context").then((module) => ({
    default: module.RealEstateProvider,
  }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "real-estate",
        element: <RealEstateLayout />,
        children: [
          {
            index: true,
            element: <RealEstate />,
          },
          {
            path: "transaction/:transaction?",
            element: <RealEstate />,
          },
          {
            path: "detail/:realEstateId",
            element: <RealEstateDetails />,
            // loader: () => {
            //   console.log("loader");
            //   return { name: "hello" };
            // },
          },
        ],
      },
      {
        path: "offices",
        element: <Offices />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<span className="loader" />}>
      <RealEstateProvider>
        <RouterProvider router={router} />;
      </RealEstateProvider>
    </Suspense>
  );
}

export default App;
