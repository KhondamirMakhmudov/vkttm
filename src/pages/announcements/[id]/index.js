import React from "react";
import Wrapper from "@/layout/wrapper";
import Link from "next/link";
import Image from "next/image";
import Title from "@/components/title";
import Announcement from "@/components/cards/announcement";

const Index = () => {
  return (
    <Wrapper>
      <div
        className={
          "container mx-auto flex italic font-mulish gap-x-[10px] text-[#494949] mt-[50px]"
        }
      >
        <Link href={"/"}>
          <p>Bosh sahifa</p>
        </Link>
        <span>/</span>
        <Link href={"/announcements"}>
          <p> Barcha e’lonlar</p>
        </Link>
        <span>/</span>
        <p className={"text-[#036874]"}>
          Samarqand viloyat ko’p tarmoqli tibbiyot markazi{" "}
        </p>
      </div>

      <div
        className={
          "grid grid-cols-12 gap-x-[30px] container mx-auto font-medium my-[50px]"
        }
      >
        <h1 className={"col-span-12 font-poppins text-[32px] mb-[16px]"}>
          Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belorusiya
          hamkorligi tibbiyot markazi va Belorusiya hamkorligi Samarqand viloyat
          ko’p tarmoqli tibbiyot markazi va Belorusiya hamkorligi tibbiyot
          markazi va Belorusiya hamkorligi
        </h1>

        <div
          className={
            "col-span-12 flex items-center text-[#037582] gap-x-[50px] font-mulish mb-[50px]"
          }
        >
          <p>Yangilik</p>
          {/*how many times was seen*/}

          <p className={""}>20.06.2024</p>

          <div className={"flex items-center gap-x-[15px]"}>
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
          </div>
        </div>

        <div className={"col-span-8"}>
          <Image
            src={"/images/announce_id.png"}
            alt={"announce_id"}
            width={930}
            height={532}
            priority={true}
          />

          <p className={"my-[30px]"}>
            Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belarus
            Respublikasi o’rtasidagi hamkorlik so’nggi yillarda yangi bosqichga
            ko’tarilib, ikki davlatning tibbiyot sohasidagi aloqalarini
            mustahkamlashga xizmat qilmoqda. Ushbu hamkorlikning asosiy
            jihatlari va yutuqlari quyidagilardan iborat:
          </p>
        </div>

        <div className={"col-span-4"}>
          <div className={"bg-[#EFF8F9] p-[30px] mb-[30px]"}>
            <div className={"flex items-center justify-between"}>
              <h3
                className={
                  "font-poppins font-medium text-[20px] text-[#494949]"
                }
              >
                Sog‘lom bo‘lish uchun{" "}
              </h3>

              <Link
                href={"#"}
                className={
                  "text-sm font-poppins text-[#037582] font-normal flex hover:translate-x-[2px] transition-all duration-300"
                }
              >
                Barchasi
                <Image
                  src={"/images/arrow-right.png"}
                  alt={"arrow-right"}
                  width={18}
                  height={18}
                />
              </Link>
            </div>

            <ul className={"mt-[16px] flex flex-col gap-y-[16px]"}>
              <li
                className={
                  "bg-white flex gap-x-[10px] items-start rounded-[10px] p-[10px]"
                }
              >
                <Image
                  src={"/images/health1.png"}
                  alt={"health1"}
                  width={170}
                  height={120}
                />

                <div>
                  <p
                    className={
                      "font-semibold font-mulish text-[12px] text-[#037582] mb-[14px]"
                    }
                  >
                    20.06.2024
                  </p>

                  <p className={"font-poppins text-sm font-normal"}>
                    Boshi tez-tez ogʼrib turadigan insonlarga tavsiya
                  </p>
                </div>
              </li>
              <li
                className={
                  "bg-white flex gap-x-[10px] items-start rounded-[10px] p-[10px]"
                }
              >
                <Image
                  src={"/images/health2.png"}
                  alt={"health2"}
                  width={170}
                  height={120}
                />

                <div>
                  <p
                    className={
                      "font-semibold font-mulish text-[12px] text-[#037582] mb-[14px]"
                    }
                  >
                    20.06.2024
                  </p>

                  <p className={"font-poppins text-sm font-normal"}>
                    Boshi tez-tez ogʼrib turadigan insonlarga tavsiya
                  </p>
                </div>
              </li>
              <li
                className={
                  "bg-white flex gap-x-[10px] items-start rounded-[10px] p-[10px]"
                }
              >
                <Image
                  src={"/images/health3.png"}
                  alt={"health3"}
                  width={170}
                  height={120}
                />

                <div>
                  <p
                    className={
                      "font-semibold font-mulish text-[12px] text-[#037582] mb-[14px]"
                    }
                  >
                    20.06.2024
                  </p>

                  <p className={"font-poppins text-sm font-normal"}>
                    Boshi tez-tez ogʼrib turadigan insonlarga tavsiya
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className={"bg-[#EFF8F9] p-[30px]"}>
            <div className={"flex items-center justify-between"}>
              <h3
                className={
                  "font-poppins font-medium text-[20px] text-[#494949]"
                }
              >
                Yangiliklar
              </h3>

              <Link
                href={"/news"}
                className={
                  "text-sm font-poppins text-[#037582] font-normal flex hover:translate-x-[2px] transition-all duration-300"
                }
              >
                Barchasi
                <Image
                  src={"/images/arrow-right.png"}
                  alt={"arrow-right"}
                  width={18}
                  height={18}
                />
              </Link>
            </div>

            <ul className={"mt-[16px] flex flex-col gap-y-[16px]"}>
              <li
                className={
                  "bg-white flex gap-x-[10px] items-start rounded-[10px] p-[10px]"
                }
              >
                <Image
                  src={"/images/img3.png"}
                  alt={"img3"}
                  width={170}
                  height={120}
                />

                <div>
                  <p
                    className={
                      "font-semibold font-mulish text-[12px] text-[#037582] mb-[14px]"
                    }
                  >
                    20.06.2024
                  </p>

                  <p className={"font-poppins text-sm font-normal"}>
                    Samarqand viloyat ko’p tarmoqli tibbiyot markazi va
                    Belorusiya hamkorligi...
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={"col-span-12"}>
          <h2 className={"text-[24px] font-semibold font-poppins mb-[30px]"}>
            Boshqa e’lonlar
          </h2>
        </div>
        <div className={"col-span-6"}>
          <Announcement width={"690px"} template={"card"} />
        </div>
        <div className={"col-span-6"}>
          <Announcement width={"690px"} template={"card"} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
