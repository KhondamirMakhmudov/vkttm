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
    <div className="flex flex-col md:flex-row">
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
          className="md:w-[280px] md:h-[320px] w-full"
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
            "text-[#2C3E50] lg:text-[24px] md:text-[20px] text-lg font-poppins font-semibold mt-[20px] mb-[10px]"
          }
        >
          {fullname}
        </h3>

        <p className="mb-[10px] font-mulish lg:text-base md:text-sm text-xs font-normal">
          {veteranDesc}
        </p>

        <Link
          href={`${veteranVideo}`}
          className="underline text-[#037582] font-mulish lg:text-base md:text-sm text-xs font-medium"
        >
          Videoga havola
        </Link>
      </div>
    </div>
  );
};

export default PrideOfCenter;
