import React from "react";

const Measurement = ({ title, value }) => {
  return (
    <div className="measurement">
      <h1>{title}</h1>
      <h1>{value}</h1>
    </div>
  );
};

export default Measurement;
