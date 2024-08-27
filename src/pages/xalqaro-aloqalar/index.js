import React from "react";
import Wrapper from "@/layout/wrapper";
import Reveal from "@/components/reveal";
import Title from "@/components/title";
import ManagementCard from "@/components/cards/management";
import Link from "next/link";
import Image from "next/image";
import { internatiolSectionData } from "@/dummy-datas";
import { get } from "lodash";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import parse from "html-react-parser";
import ContentLoader from "@/components/content-loader";

const Index = () => {
  const { data, isLoading, isFetching } = useGetQuery({
    key: KEYS.interRelationPage,
    url: URLS.interRelationPage,
  });

  if (isLoading || isFetching) {
    return (
      <Wrapper>
        <ContentLoader />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <section>
        <div className={"grid grid-cols-12 gap-x-[30px] container mx-auto"}>
          <div className={"col-span-12 my-[50px]"}>
            <Reveal>
              <Title>{get(data, "data.department_title")}</Title>
            </Reveal>
          </div>

          <div className={"col-span-8"}>
            <ManagementCard
              key={get(data, "data.department_chief.id")}
              position={get(
                data,
                "data.department_chief.position.position_title"
              )}
              fullname={get(data, "data.department_chief.doctor_fullname")}
              managerDesc={get(
                data,
                "data.department_chief.position.position_text"
              )}
              receiptDays={get(data, "data.receipt_days")}
              receiptTime={get(data, "data.receipt_time")}
              instagram={get(data, "data.instagram", "#")}
              telegram={get(data, "data.telegram", "#")}
              facebook={get(data, "data.facebook", "#")}
              phone={get(data, "data.phone")}
              email={get(data, "data.email")}
              image={get(data, "data.image")}
              positionResponsibilities={"/lavozim-majburiyatlari"}
            />
            <h4 className={"font-mulish font-semibold text-[24px] my-[30px]"}>
              Bo‘lim haqida
            </h4>

            <div className={"font-mulish font-medium mb-[30px]"}>
              {parse(get(data, "data.department_text", ""))}
            </div>

            <h4 className={"font-mulish font-semibold text-[24px] my-[30px]"}>
              Xalqaro hamkor davlatlar
            </h4>

            <div className={"flex gap-x-[15px] gap-y-[15px]  flex-wrap"}>
              {get(data, "data.partner_countries", []).map((country) => (
                <div
                  className={
                    "announce-list-shadow max-w-[174px] rounded-bl-[30px] rounded-tr-[30px]"
                  }
                  key={get(country, "id")}
                >
                  <Link href={`/xalqaro-aloqalar/${get(country, "id")}`}>
                    <Image
                      src={`${get(country, "country_flag")}`}
                      loader={() => get(country, "country_flag")}
                      alt={`${get(country, "country_flag")}`}
                      width={174}
                      height={104}
                    />
                    <p
                      className={
                        "text-[14px] font-poppins font-medium text-center py-[10px] px-[15px] hover:underline"
                      }
                    >
                      {get(country, "country_title")}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* <div className={"col-span-4"}>
            <div className={"bg-[#EFF8F9] p-[30px] mb-[30px]"}>
              <div className={"flex items-center justify-between"}>
                <h3
                  className={
                    "font-poppins font-medium text-[20px] text-[#494949]"
                  }
                >
                  Xalqaro bo‘lim yangiliklari
                </h3>

                <Link
                  href={"/yangiliklar"}
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
                    className={"rounded-[8px]"}
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
          </div> */}

          <div className={"col-span-12 mt-[50px]"}>
            <h4 className={"font-poppins font-medium text-[24px] mb-[30px]"}>
              Boshqa hamkor tashkilotlar
            </h4>

            <ul className="grid grid-cols-12 gap-x-[30px] list-disc text-[#2C3E50] hover:text-[#00AFC0] mb-[50px] transition-all duration-300">
              {get(data, "data.partner_organisations", []).map((item) => (
                <li
                  key={get(item, "id")}
                  className="col-span-4 font-mulish font-bold text-lg ml-[30px]"
                >
                  <Link href={`${get(item, "org_url")}`}>
                    <p>{get(item, "org_title")}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Index;
