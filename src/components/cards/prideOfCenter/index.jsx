import Wrapper from "@/layout/wrapper";
import { isNull } from "lodash";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PrideOfCenter = ({
  position,
  fullname,
  veteranDesc,
  veteranVideo,
  image,
}) => {
  return (
    <div className="flex">
      {isNull(image) ? (
        <Image
          src={"/images/management1.png"}
          alt="pride of center"
          width={280}
          height={320}
        />
      ) : (
        <Image
          src={image}
          loader={() => image}
          alt="pride of center"
          width={280}
          height={320}
          className="w-[280px] h-[320px]"
        />
      )}

      <div>
        <p
          className={
            "px-[24px] py-[4px] text-xs font-poppins bg-[#00ADBE] text-white  rounded-[30px] inline"
          }
        >
          {position}
        </p>

        <h3
          className={
            "text-[#2C3E50] text-[24px] font-poppins font-semibold mt-[20px] mb-[10px]"
          }
        >
          {fullname}
        </h3>

        <p className="mb-[10px] font-mulish font-normal">{veteranDesc}</p>

        <Link
          href={`${veteranVideo}`}
          className="underline text-[#037582] font-mulish font-medium"
        >
          Videoga havola
        </Link>
      </div>
    </div>
  );
};

export default PrideOfCenter;
