import React from "react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import { isNull } from "lodash";

const AnnouncementCard = ({
  template = "card",
  width = "630px",
  title,
  date,
  views,
  time,
  image,
  url,
}) => {
  const formattedDate = dayjs(date).format("DD.MM.YYYY");
  const formattedTime = dayjs(time).format("HH:mm");

  return (
    <>
      {template === "card" && (
        <div
          className={`flex cursor-pointer hover:shadow-2xl  gap-x-[30px] bg-white p-[20px] rounded-[10px] announce-list-shadow lg:w-[${width}] w-auto transition-all duration-300`}
        >
          <div className={"flex flex-col "}>
            <h4
              className={
                "font-mulish text-sm text-[#037582] font-semibold mb-[15px]"
              }
            >
              E’lon
            </h4>
            {/* desc of announcement */}
            <Link href={`/elonlar/${url}`} className="flex-grow  flex-1">
              <p
                className={
                  "my-[15px] text font-medium text-[#2C3E50] hover:text-[#00AFC0] hover:underline font-poppins line-clamp-3"
                }
              >
                {title}
              </p>
            </Link>

            <div
              className={
                "text-sm text-[#037582] font-semibold flex justify-between"
              }
            >
              {/*date*/}
              <p className={"font-mulish text-sm  "}>{formattedDate}</p>
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

          {!isNull(image) ? (
            <Image
              src={image}
              loader={() => image}
              alt={"announcement"}
              width={220}
              height={164}
              className={
                "rounded-[10px] lg:w-[220px] lg:h-[164px] md:w-[190px] md:h-[134px] w-[140px] h-full"
              }
            />
          ) : (
            <Image
              src={"/images/img3.png"}
              alt={"announcement"}
              width={220}
              height={164}
              className={
                "rounded-[10px] lg:w-[220px] lg:h-[164px] md:w-[190px] md:h-[134px] w-[140px] h-full"
              }
            />
          )}
        </div>
      )}

      {template === "list" && (
        <div
          className={
            "flex  gap-x-[20px] announce-list-shadow p-[30px] rounded-bl-[30px] hover:shadow-2xl rounded-tr-[30px] transition-all duration-300"
          }
        >
          <div className={"min-w-[156px] max-h-[120px]"}>
            {!isNull(image) ? (
              <Image
                src={image}
                loader={() => image}
                alt={"announcement"}
                width={156}
                height={120}
                className={"rounded-[10px] "}
              />
            ) : (
              <Image
                src={"/images/img3.png"}
                alt={"announcement"}
                width={156}
                height={120}
                className={"rounded-[10px] "}
              />
            )}
          </div>

          <div className="flex-grow">
            <div
              className={" flex-grow flex-1 flex justify-between  items-center"}
            >
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
                    <p>{views}</p>
                  </div>

                  <p className={"font-mulish text-sm  "}>{formattedDate}</p>
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

            <Link href={`/elonlar/${url}`}>
              <p
                className={
                  "my-[20px] font-medium text-lg text-[#2C3E50]  flex-1"
                }
              >
                {title}
              </p>
            </Link>

            <button
              className={
                "font-poppins text-[#2C3E50] font-medium border-b-[2px] border-b-[#00AFC0]"
              }
            >
              <Link href={`/elonlar/${url}`}>Batafsil</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AnnouncementCard;
