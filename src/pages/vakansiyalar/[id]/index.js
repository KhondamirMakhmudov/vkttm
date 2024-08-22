import React from "react";
import Wrapper from "@/layout/wrapper";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get } from "lodash";
import dayjs from "dayjs";
import parse from "html-react-parser";
import { NumericFormat } from "react-number-format";
import ContentLoader from "@/components/content-loader";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: vacancy,
    isLoading,
    isFetching,
  } = useGetQuery({
    key: [KEYS.vacancies, id],
    url: `${URLS.vacancies}${id}/`,
    enabled: !!id,
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
      <div className={"my-[50px]"}>
        <div
          className={
            "container mx-auto flex italic font-mulish gap-x-[10px] lg:text-base md:text-sm text-xs text-[#494949] px-[20px] lg:px-0"
          }
        >
          <Link href={"/"}>
            <p>Bosh sahifa</p>
          </Link>
          <span>/</span>
          <Link href={"/vakansiyalar"}>
            <p>Vakansiyalar</p>
          </Link>
          <span>/</span>
          <p className={"text-[#036874]"}>{get(vacancy, "data.job_title")}</p>
        </div>

        <div
          className={
            "grid grid-cols-12 gap-x-[30px] container mx-auto font-medium my-[50px] px-[20px] lg:px-0"
          }
        >
          <h1
            className={
              "col-span-12 font-medium xl:text-[32px] lg:text-[28px] md:text-[24px] text-[20px] font-poppins"
            }
          >
            {get(vacancy, "data.job_title")}
          </h1>

          <div
            className={
              "col-span-12 flex items-center text-[#037582] gap-x-[30px] lg:text-base md:text-sm text-xs font-mulish mb-[50px]"
            }
          >
            <p>Vakansiya</p>
            {/*how many times was seen*/}

            <p className={""}>
              {dayjs(get(vacancy, "data.date_time")).format("DD.MM.YYYY")}
            </p>

            <div className={"flex items-center gap-x-[30px]"}>
              <div className={"flex items-center gap-x-[4px]"}>
                <Image
                  src={"/images/watch.png"}
                  alt={"watch"}
                  width={18}
                  height={18}
                />
                <p>{get(vacancy, "data.views_count")}</p>
              </div>
              {/*when it is deployed*/}
              <div className={"flex items-center gap-x-[4px]"}>
                <Image
                  src={"/images/time.png"}
                  alt={"watch"}
                  width={18}
                  height={18}
                />
                <p>{dayjs(get(vacancy, "data.date_time")).format("HH:mm")}</p>
              </div>
            </div>
          </div>

          <div className={"lg:col-span-8 col-span-12"}>
            <div
              className={
                "font-mulish font-medium text-[#494949] lg:text-base md:text-sm text-xs"
              }
            >
              {parse(get(vacancy, "data.job_desc", ""))}
            </div>

            <div className={"my-[30px] lg:text-base md:text-sm text-xs"}>
              <p className={"font-bold font-mulish"}>
                Oylik maosh:{" "}
                <span className={"font-medium"}>
                  <NumericFormat
                    value={get(vacancy, "data.job_salary")}
                    thousandSeparator={" "}
                    suffix=" so'mdan"
                  />
                </span>
              </p>

              <p className={"font-bold font-mulish"}>
                Ish tajribasi:{" "}
                <span className={"font-medium"}>
                  {get(vacancy, "data.job_experience")} yil
                </span>
              </p>

              <p className={"font-bold font-mulish"}>
                {get(vacancy, "data.job_time.job_time")} ish,{" "}
                {get(vacancy, "data.job_type.job_type")},{" "}
                {get(vacancy, "data.job_count")} ta ish o‘rni
              </p>
            </div>

            <div className="font-mulish font-normal lg:text-base md:text-sm text-xs">
              {parse(get(vacancy, "data.job_text", ""))}
            </div>
          </div>

          <div className={"lg:col-span-4 col-span-12 mt-[30px] lg:mt-0"}>
            <div className={"bg-[#EFF8F9] p-[30px] mb-[30px]"}>
              <div className={"flex items-center justify-between"}>
                <h3
                  className={
                    "font-poppins font-medium lg:text-[20px] md:text-base text-sm  text-[#494949]"
                  }
                >
                  Boshqa vakansiyalar{" "}
                </h3>

                <Link
                  href={"/vakansiyalar"}
                  className={
                    "lg:text-sm md:text-xs text-[10px] font-poppins text-[#037582] font-normal flex items-center hover:translate-x-[2px] transition-all duration-300"
                  }
                >
                  <p>Barchasi</p>
                  <Image
                    src={"/images/arrow-right.png"}
                    alt={"arrow-right"}
                    width={18}
                    height={18}
                    className="lg:w-[18px] lg:h-[18px] md:w-[15px] md:h-[15px] w-[12px] h-[12px]"
                  />
                </Link>
              </div>

              <ul className={"mt-[16px] flex flex-col gap-y-[16px]"}>
                {get(vacancy, "data.last_jobs", []).map((item, index) => (
                  <li
                    key={get(item, "id")}
                    className={
                      "bg-white flex flex-col gap-y-[14px] items-start rounded-[10px] p-[10px]"
                    }
                  >
                    <div
                      className={
                        "gap-x-[20px] flex font-mulish font-semibold text-[12px] text-[#037582] "
                      }
                    >
                      <p>{get(item, "job_time.job_time")}</p>

                      <p>{get(item, "job_type.job_type")}</p>

                      <p>{get(item, "job_count")} ta ish o‘rni</p>
                    </div>

                    <Link href={`${get(item, "id")}`}>
                      <h3 className={"text-sm font-medium font-poppins"}>
                        {get(item, "job_title")}
                      </h3>
                    </Link>

                    <div
                      className={
                        "flex items-center float-end gap-x-[10px] text-[#037582] text-[12px] "
                      }
                    >
                      <div className={"flex items-center gap-x-[4px]"}>
                        <Image
                          src={"/images/watch.png"}
                          alt={"watch"}
                          width={18}
                          height={18}
                        />
                        <p>{get(item, "views_count")}</p>
                      </div>
                      {/*when it is deployed*/}
                      <div className={"flex items-center gap-x-[4px]"}>
                        <Image
                          src={"/images/time.png"}
                          alt={"watch"}
                          width={18}
                          height={18}
                        />
                        <p>
                          {dayjs(get(vacancy, "date_time")).format("HH:mm")}
                        </p>
                      </div>
                      <p>Faol</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
