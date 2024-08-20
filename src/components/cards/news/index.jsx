import React from "react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import parse from "html-react-parser";

const News = ({
  template = "card",
  image,
  title = "Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belorusiya hamkorligi",
  desc = "Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belarus Respublikasi o’rtasidagi hamkorlik so’nggi yillarda yangi bosqichga ko’tarilib, ikki davlatning tibbiyot sohasidagi...",
  views,
  date,
  time,
  url,
}) => {
  const formattedDate = dayjs(date).format("DD.MM.YYYY");
  const formattedTime = dayjs(time).format("HH:mm");
  return (
    <>
      {template === "card" && (
        <div
          className={
            " max-w-[450px]  flex-col max-h-[640px] shadow-lg p-[30px]  rounded-bl-[30px] rounded-tr-[30px]"
          }
        >
          <Image
            src={`${image}`}
            loader={() => image}
            alt={"img3"}
            width={390}
            height={300}
            objectFit={"cover"}
            className={
              "object-cover w-[390px] h-[300px] rounded-tr-[20px] rounded-bl-[20px] mb-[20px]"
            }
          />
          <div className={"text-sm text-[#037582] flex justify-between"}>
            <p className={"font-mulish text-sm  "}>Yangilik</p>
            <div className={"flex gap-x-[10px]"}>
              {/*how many times was seen*/}
              <div className={"flex gap-x-[4px] items-center"}>
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
              <div className={"flex gap-x-[4px] items-center"}>
                <Image
                  src={"/images/time.png"}
                  alt={"watch"}
                  width={18}
                  height={18}
                />
                <p>{formattedTime}</p>
              </div>
            </div>
          </div>

          <Link href={`/news/${parseInt(url)}`}>
            <h2
              className={
                "font-poppins text-[18px] hover:text-[#00AFC0] hover:underline  text-[#2C3E50] font-semibold mt-[20px] flex-1 line-clamp-2 transition-all duration-300"
              }
            >
              {title}
            </h2>
          </Link>
          <div className={"mt-[10px] font-mulish text-[#2C3E50] line-clamp-4"}>
            {parse(desc)}
          </div>
          <button
            className={
              "font-poppins font-medium border-b-[2px] border-b-[#00AFC0] hover:border-b-[#00D1E4] mt-[20px] line-clamp-4 transition-all duration-300"
            }
          >
            <Link href={`/news/${parseInt(url)}`}>Batafsil</Link>
          </button>
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
              alt={"announcement"}
              width={156}
              height={120}
              className={"w-[156px] h-[120px]"}
            />
          </div>

          <div>
            <div className={" flex justify-between items-center"}>
              <p
                className={"font-mulish text-sm  text-[#037582] font-semibold"}
              >
                Yangilik
              </p>

              <div className={"text-sm text-[#037582] flex font-semibold"}>
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
                </div>
              </div>
            </div>

            <Link href={`/news/${url.toString}`}>
              <p
                className={
                  " font-semibold text-lg hover:text-[#00AFC0] hover:underline font-poppins  my-[10px] flex-1"
                }
              >
                {title}
              </p>
            </Link>

            <div className={"font-mulish font-normal text-[#2C3E50] mb-[10px]"}>
              {parse(desc)}
            </div>

            <button
              className={
                "font-poppins font-medium border-b-[2px] border-b-[#00AFC0]"
              }
            >
              <Link href={`/news/${url.toString}`}>Batafsil</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default News;
