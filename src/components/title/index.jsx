import React from "react";

const Title = ({ textColor = "#2C3E50", children }) => {
  return (
    <h2
      className={`font-poppins text-[${textColor}] xl:text-[32px] lg:text-[28px] text-[20px] font-semibold`}
    >
      {children}
    </h2>
  );
};

export default Title;
