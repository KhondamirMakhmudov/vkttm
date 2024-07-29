import React from "react";

const Icon = ({ pathData, strokeColor, width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        {pathData.map((d, index) => (
          <path
            key={index}
            d={d}
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="matrix(-1 0 0 1 24 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Icon;
