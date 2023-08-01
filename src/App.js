import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import RealEstate from "./pages/RealEstate";
import Offices from "./pages/Offices";
import Contact from "./pages/Contact";
import RealEstateDetails from "./components/RealEstateDetails";
import RealEstateLayout from "./pages/RealEstateLayout";

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
  return <RouterProvider router={router} />;
}

export default App;
