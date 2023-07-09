import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";

const DisplayFooter = () => {
  return (
    <>
      <div className="contact">
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default DisplayFooter;
