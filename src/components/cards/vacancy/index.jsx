import React from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import dayjs from "dayjs";

const VacancyCard = ({
  jobTitle,
  jobDescription = "",
  jobType,
  jobCount,
  views,
  time,
  url,
}) => {
  const formattedTime = dayjs(time).format("HH:mm");
  return (
    <div
      className={
        "md:col-span-6 col-span-12 flex flex-col gap-y-[10px] vacancies-card-shadow p-[20px]"
      }
    >
      <Link href={url}>
        <h3
          className={
            "text-sm font-medium font-poppins  hover:text-[#00AFC0] transition-all"
          }
        >
          {jobTitle}
        </h3>
      </Link>

      <div className={"text-sm flex-grow font-mulish"}>
        {parse(jobDescription) || ""}
      </div>

      <div
        className={"pt-[20px] flex items-center text-[#037582] justify-between"}
      >
        <div className={"gap-x-[20px] flex font-mulish font-semibold text-sm "}>
          <p>To’liq ish</p>

          <p>{jobType}</p>

          <p>{jobCount} ta ish o‘rni</p>
        </div>

        <div
          className={"text-sm text-[#037582] font-semibold gap-x-[10px] flex"}
        >
          <div className={"flex gap-x-[10px]"}>
            {/*how many times was seen*/}
            <div className={"flex items-center gap-x-[4px]"}>
              <Image
                src={"/images/watch.png"}
                alt={"watch"}
                width={18}
                height={18}
              />
              <p>{views}</p>
            </div>

            {/*when it is deployed*/}
            <div className={"flex items-center gap-x-[4px]"}>
              <Image
                src={"/images/time.png"}
                alt={"watch"}
                width={18}
                height={18}
              />
              <p>{formattedTime}</p>
            </div>
            {/*  active or not */}
            <p>Faol</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacancyCard;
