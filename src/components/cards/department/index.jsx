import React from "react";
import Image from "next/image";
import Link from "next/link";

const Department = ({ image, title, desc, url }) => {
  return (
    <div
      className={
        "xl:col-span-4 md:col-span-6  col-span-12 bg-[#F7FBFC] hover:border-[#00AFC0] border-[1px] border-transparent cursor-pointer transition-all duration-300 flex items-center justify-center flex-col py-[30px] px-[40px] rounded-bl-[30px] rounded-tr-[30px]"
      }
    >
      <Image
        src={`/images/${image}.png`}
        alt={`${image}`}
        width={58}
        height={58}
        className={
          "bg-[#00AFC0]  border-[2px] border-white rounded-full drop-shadow mb-[15px] p-[10px]"
        }
      />
      <h3 className={"font-poppins text-[24px] font-semibold text-[#2C3E50]"}>
        {title}
      </h3>
      <p className={"font-normal  font-mulish text-center my-[7px] flex-1"}>
        {desc}
      </p>

      <button
        className={"font-poppins font-medium border-b-[2px] border-b-[#00AFC0]"}
      >
        <Link href={url}>Batafsil</Link>
      </button>
    </div>
  );
};

export default Department;
