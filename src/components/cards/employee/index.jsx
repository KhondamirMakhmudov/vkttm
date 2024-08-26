import { get } from "lodash";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EmployeeCard = ({ position, fullname, id }) => {
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

      <Link href={`/doctors/${id}`}>
        <h3 className={"text-[#2C3E50] font-semibold font-poppins "}>
          {fullname}
        </h3>
      </Link>
    </div>
  );
};

export default EmployeeCard;
