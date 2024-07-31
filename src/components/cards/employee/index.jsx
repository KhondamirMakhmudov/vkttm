import Image from "next/image";
import React from "react";

const EmployeeCard = ({ position }) => {
  return (
    <div>
      <Image
        src={"/images/management.png"}
        alt="employee"
        width={210}
        height={240}
      />
      <p className="text-sm font-semibold text-[#037582] my-[10px]">
        {position}
      </p>

      <h3 className={"text-[#2C3E50] font-semibold font-poppins "}>
        Familiya Ism Sharif
      </h3>
    </div>
  );
};

export default EmployeeCard;
