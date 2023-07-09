"use client";

import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed, text } = props;

  
  const fillerStyles = {
    height: `${completed}%`,
    width: '100%',
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    position: 'absolute',
    bottom: '0',
    boxSizing: 'border-box',
    transition: 'height 1s ease-in-out'
  };

  const labelStyles = {
    padding: 5,
    color: "#fff",
    fontWeight: "bold",
  };

  return (
    <div className="process__bar">
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};

export default ProgressBar;
