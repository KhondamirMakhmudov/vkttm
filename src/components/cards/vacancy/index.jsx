import React from "react";
import Image from "next/image";
import Link from "next/link";

const VacancyCard = () => {
  return (
    <div
      className={
        "col-span-6 flex flex-col gap-y-[10px] vacancies-card-shadow p-[20px]"
      }
    >
      <Link href={"/vacancies/id"}>
        <h3 className={"text-sm font-medium font-poppins mb-[10px]"}>
          Lavozim nomi
        </h3>

        <p className={"text-sm"}>
          Muntazam jismoniy mashqlar jismoniy tayyorgarlikni saqlashga va
          yurak-qon tomir tizimini mustahkamlashga yordam beradi. Ular endorfin
          ishlab Muntazam jismoniy mashqlar jismoniy tayyorgarlikni saqlashga va
          yurak-qon tomir tizimini mustahkamlashga yordam beradi. Ular endorfin
          ishlab{" "}
        </p>

        <div
          className={
            "pt-[20px] flex items-center text-[#037582] justify-between"
          }
        >
          <div
            className={"gap-x-[20px] flex font-mulish font-semibold text-sm "}
          >
            <p>To’liq ish</p>

            <p>1 stavka</p>

            <p>2 ta ish o‘rni</p>
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
                <p>128</p>
              </div>

              {/*when it is deployed*/}
              <div className={"flex items-center gap-x-[4px]"}>
                <Image
                  src={"/images/time.png"}
                  alt={"watch"}
                  width={18}
                  height={18}
                />
                <p>18:24</p>
              </div>
              {/*  active or not */}
              <p>Faol</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VacancyCard;
