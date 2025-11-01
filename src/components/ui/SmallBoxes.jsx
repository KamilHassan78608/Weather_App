import React from "react";

const SmallBoxes = ({ title, subtitle }) => {
  return (
    <div className="box-background hover:scale-105 transition-transform duration-300">
      <h1 className="box-subtitle">{subtitle}</h1>
      <h1 className="box-title text-lg md:text-2xl font-semibold text-white mt-2">
        {title}
      </h1>
    </div>
  );
};

export default SmallBoxes;
