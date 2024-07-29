import React from "react";
import Image from "next/image";
import Link from "next/link";

const News = ({ image, title, desc, url }) => {
  return (
    <div
      className={
        "lg:col-span-4 md:col-span-6 col-span-12 max-w-[450px]  flex-col max-h-[640px] shadow-lg p-[30px]  rounded-bl-[30px] rounded-tr-[30px]"
      }
    >
      <Image
        src={`/images/${image}.png`}
        alt={"img3"}
        width={390}
        height={300}
        objectFit={"cover"}
        className={"object-cover  mb-[20px]"}
      />
      <div className={"text-sm text-[#037582] flex justify-between"}>
        <p className={"font-mulish text-sm  "}>Yangilik</p>
        <div className={"flex gap-x-[10px]"}>
          {/*how many times was seen*/}
          <div className={"flex gap-x-[4px]"}>
            <Image
              src={"/images/watch.png"}
              alt={"watch"}
              width={18}
              height={18}
            />
            <p>128</p>
          </div>
          <p className={"font-mulish text-sm  "}>20.06.2024</p>
          {/*when it is deployed*/}
          <div className={"flex gap-x-[4px]"}>
            <Image
              src={"/images/time.png"}
              alt={"watch"}
              width={18}
              height={18}
            />
            <p>18:24</p>
          </div>
        </div>
      </div>

      <h2
        className={
          "font-poppins text-[18px]  text-[#2C3E50] font-semibold mt-[20px] flex-1 line-clamp-2"
        }
      >
        {title}
      </h2>
      <p className={"mt-[10px] font-mulish text-[#2C3E50]"}>{desc}</p>
      <button
        className={
          "font-poppins font-medium border-b-[2px] border-b-[#00AFC0] mt-[20px] line-clamp-4"
        }
      >
        <Link href={url}>Batafsil</Link>
      </button>
    </div>
  );
};

export default News;
