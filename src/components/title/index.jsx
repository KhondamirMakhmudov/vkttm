import React from "react";

const Title = ({ textColor = "#2C3E50", children }) => {
  return (
    <h2
      className={`font-poppins text-[${textColor}] text-[32px] font-semibold`}
    >
      {children}
    </h2>
  );
};

export default Title;
