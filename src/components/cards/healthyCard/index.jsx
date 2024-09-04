import React from "react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

const HealthyCard = ({
  template = "card",
  width = "630px",
  title,
  url,
  date,
  time,
  image,
  viewsCount,
}) => {
  const formattedDate = dayjs(date).format("DD.MM.YYYY");
  const formattedTime = dayjs(time).format("HH:mm");
  return (
    <>
      {template === "card" && (
        <div
          className={`flex justify-between  cursor-pointer hover:shadow-2xl  gap-x-[30px] bg-white p-[20px] rounded-[10px] announce-list-shadow max-w-[${width}] transition-all duration-300`}
        >
          <div
            className={"flex flex-col justify-between gap-y-[10px] w-[414px]"}
          >
            <h4 className={"font-mulish text-sm  text-[#037582]"}>
              Sog‘lom bo‘lish uchun
            </h4>
            {/* desc of announcement */}

            <p className={"font-medium flex-grow "}>{title}</p>

            <Link href={`/salomatlik-blogi/${url}`}>
              <button
                className={
                  "font-poppins  font-medium border-b-[2px] border-b-[#00AFC0] "
                }
              >
                Batafsil
              </button>
            </Link>

            <div className={"text-sm text-[#037582] flex justify-between"}>
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
                  <p>{viewsCount}</p>
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

          <Image
            src={`${image}`}
            loader={() => image}
            alt={"recommendation"}
            width={220}
            height={164}
            className={
              "rounded-[10px] lg:w-[220px] lg:h-[164px] md:w-[190px] md:h-[134px] w-[140px] h-full"
            }
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
              src={`${image}`}
              loader={() => image}
              alt={"recommendation"}
              width={156}
              height={120}
              className={"w-[156px] h-[120px]"}
            />
          </div>

          <div className="flex-1">
            <div className={" flex justify-between items-center"}>
              <h4 className={"font-mulish text-sm text-[#037582] "}>
                Sog‘lom bo‘lish uchun
              </h4>

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
                    <p>{viewsCount}</p>
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
                </div>
              </div>
            </div>
            <Link href={`/salomatlik-blogi/${url}`}>
              <p className={"my-[20px] font-medium text-lg   flex-1"}>
                {title}
              </p>
            </Link>

            <button
              className={
                "font-poppins font-medium border-b-[2px] border-b-[#00AFC0]"
              }
            >
              <Link href={`/salomatlik-blogi/${url}`}>Batafsil</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HealthyCard;
