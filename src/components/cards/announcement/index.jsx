import React from "react";
import Image from "next/image";
import Link from "next/link";

const AnnouncementCard = ({ template = "card", width = "630px" }) => {
  return (
    <>
      {template === "card" && (
        <div
          className={`flex cursor-pointer hover:shadow-2xl  gap-x-[30px] bg-white p-[20px] rounded-[10px] announce-list-shadow w-[${width}] transition-all duration-300`}
        >
          <div className={"flex flex-col "}>
            <h4 className={"font-mulish text-sm text-[#037582] mb-[15px]"}>
              E’lon
            </h4>
            {/* desc of announcement */}
            <p className={"my-[15px] font-medium  flex-1"}>
              Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belorusiya
              hamkorligi Samarqand viloyat ko’p tarmoqli tibbiyot markazi va
              Belorusiya hamkorligi
            </p>

            <div className={"text-sm text-[#037582] flex justify-between"}>
              {/*date*/}
              <p className={"font-mulish text-sm  "}>20.06.2024</p>
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

          <Image
            src={"/images/img3.png"}
            alt={"announcement"}
            width={220}
            height={164}
            className={"rounded-[10px] "}
          />
        </div>
      )}

      {template === "list" && (
        <div
          className={
            "flex gap-x-[20px] announce-list-shadow p-[30px] rounded-bl-[30px] hover:shadow-2xl rounded-tr-[30px] transition-all duration-300"
          }
        >
          <div className={"min-w-[156px] max-h-[120px]"}>
            <Image
              src={"/images/img3.png"}
              alt={"announcement"}
              width={156}
              height={120}
              className={"w-[156px] h-[120px]"}
            />
          </div>

          <div>
            <div className={" flex justify-between items-center"}>
              <h4 className={"font-mulish text-sm text-[#037582] "}>E’lon</h4>

              <div className={"text-sm text-[#037582] flex"}>
                {/*date*/}

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

                  <p className={"font-mulish text-sm  "}>20.06.2024</p>
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

            <p className={"my-[20px] font-medium text-lg   flex-1"}>
              Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belorusiya
              hamkorligi Samarqand viloyat ko’p tarmoqli tibbiyot markazi va
              Belorusiya hamkorligi
            </p>

            <button
              className={
                "font-poppins font-medium border-b-[2px] border-b-[#00AFC0]"
              }
            >
              <Link href={"/announcements/id"}>Batafsil</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AnnouncementCard;
