import React from "react";
import Image from "next/image";
import Link from "next/link";

const News = ({
  template = "card",
  image = "img3",
  title = "Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belorusiya hamkorligi",
  desc = "Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belarus Respublikasi o’rtasidagi hamkorlik so’nggi yillarda yangi bosqichga ko’tarilib, ikki davlatning tibbiyot sohasidagi...",
  url = "#",
}) => {
  return (
    <>
      {template === "card" && (
        <div
          className={
            " max-w-[450px]  flex-col max-h-[640px] shadow-lg p-[30px]  rounded-bl-[30px] rounded-tr-[30px]"
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
                </div>
              </div>
            </div>

            <p className={" font-semibold text-lg  my-[10px] flex-1"}>
              {title}
            </p>

            <p className={"font-mulish font-normal text-[#2C3E50] mb-[10px]"}>
              {desc}
            </p>

            <button
              className={
                "font-poppins font-medium border-b-[2px] border-b-[#00AFC0]"
              }
            >
              <Link href={"/news/id"}>Batafsil</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default News;
