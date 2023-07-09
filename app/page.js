"use client";

import React from "react";
import "../styles/app.css";
import { BrowserRouter, Route } from "react-router-dom";
import pathway from "@/data/pathway";
import CustomRoutes from "@/routes";

const page = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <BrowserRouter>
      <CustomRoutes>
        {pathway.map(({ path, Component }, key) => (
          <Route
            exact
            path={path}
            key={key}
            element={
              <Component
                navbarOpen={navbarOpen}
                setNavbarOpen={setNavbarOpen}
              />
            }
          />
        ))}
      </CustomRoutes>
    </BrowserRouter>
  );
};

export default page;
