import React, { useEffect, useState } from "react";
import { Routes, useLocation } from "react-router-dom";

const CustomRoutes = ({ children }) => {
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPrevLoc(location.pathname);
    if (location.pathname === prevLoc) {
      setPrevLoc("");
    }
  }, [location]);

  return (
    <>
      <Routes>{children}</Routes>
    </>
  );
};

export default CustomRoutes;
