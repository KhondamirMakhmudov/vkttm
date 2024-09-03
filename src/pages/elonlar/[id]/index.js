import React from "react";
import Wrapper from "@/layout/wrapper";
import Link from "next/link";
import Image from "next/image";
import Title from "@/components/title";
import Announcement from "@/components/cards/announcement";
import { useRouter } from "next/router";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get, isNull } from "lodash";
import dayjs from "dayjs";
import parse from "html-react-parser";
import ContentLoader from "@/components/content-loader";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: announce,
    isLoading,
    isFetching,
  } = useGetQuery({
    key: [KEYS.announces, id],
    url: `${URLS.announces}${id}`,
    enabled: !!id,
  });

  if (isFetching || isLoading) {
    return (
      <Wrapper>
        <ContentLoader />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div
        className={
          "container mx-auto flex italic font-mulish gap-x-[10px] lg:text-sm md:text-xs text-[8px] text-[#494949] mt-[50px] px-[20px] md:px-[15px] lg:px-[10px] xl:px-0"
        }
      >
        <Link href={"/"}>
          <p>Bosh sahifa</p>
        </Link>
        <span>/</span>
        <Link href={"/elonlar"}>
          <p> Barcha e’lonlar</p>
        </Link>
        <span>/</span>
        <p className={"text-[#036874] max-w-[370px] line-clamp-1"}>
          {get(announce, "data.announce_title")}
        </p>
      </div>

      <div
        className={
          "grid grid-cols-12 gap-x-[30px] container mx-auto font-medium my-[50px] px-[20px] md:px-[15px] lg:px-[10px] xl:px-0"
        }
      >
        <h1
          className={
            "col-span-12 font-poppins xl:text-[32px] lg:text-[28px] md:text-[25px] text-[22px] mb-[16px]"
          }
        >
          {get(announce, "data.announce_title")}
        </h1>

        <div
          className={
            "col-span-12 flex items-center text-[#037582] gap-x-[50px] font-semibold font-mulish mb-[50px]"
          }
        >
          <p>E’lon</p>
          {/*how many times was seen*/}

          <p className={""}>
            {dayjs(get(announce, "data.date_time")).format("DD.MM.YYYY")}
          </p>

          <div className={"flex items-center gap-x-[15px]"}>
            <div className={"flex items-center gap-x-[4px]"}>
              <Image
                src={"/images/watch.png"}
                alt={"watch"}
                width={18}
                height={18}
              />
              <p>{get(announce, "data.views_count")}</p>
            </div>
            {/*when it is deployed*/}
            <div className={"flex items-center gap-x-[4px]"}>
              <Image
                src={"/images/time.png"}
                alt={"watch"}
                width={18}
                height={18}
              />
              <p>{dayjs(get(announce, "data.date_time")).format("HH:mm")}</p>
            </div>
          </div>
        </div>

        <div className={"col-span-8"}>
          <Image
            src={
              get(announce, "data.announce_image") || "/images/announce_id.png"
            }
            loader={() =>
              get(announce, "data.announce_image") || "/images/announce_id.png"
            }
            alt={"announce_id"}
            width={930}
            height={532}
            priority={true}
            quality={100}
          />

          <div className={"my-[30px] font-mulish !font-normal "}>
            {parse(get(announce, "data.announce_desc", ""))}
          </div>
        </div>

        <div className={"md:col-span-4 col-span-12"}>
          <div className={"bg-[#EFF8F9] p-[30px] mb-[30px]"}>
            <div className={"flex items-center justify-between"}>
              <h3
                className={
                  "font-poppins font-medium lg:text-[20px] md:text-lg text-base text-[#494949]"
                }
              >
                Sog‘lom bo‘lish uchun{" "}
              </h3>

              <Link
                href={"/salomatlik-blogi"}
                className={
                  "lg:text-sm md:text-xs text-[10px] font-poppins text-[#037582] font-normal flex hover:translate-x-[2px] transition-all duration-300"
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
              {get(announce, "data.last_recommendations", []).map(
                (recommend, index) => (
                  <li
                    key={get(recommend, "id")}
                    className={
                      "bg-white flex flex-row md:flex-col lg:flex-row gap-x-[10px] items-start rounded-[10px] p-[10px]"
                    }
                  >
                    <Image
                      src={
                        get(recommend, "recommendation_image") ||
                        `/images/health${index + 1}.png`
                      }
                      loader={() =>
                        get(recommend, "recommendation_image") ||
                        `/images/health${index + 1}.png`
                      }
                      alt={"health1"}
                      width={170}
                      height={120}
                      className="lg:w-[170px] lg:h-[120px] md:w-full w-[170px] h-[120px]"
                    />

                    <div>
                      <p
                        className={
                          "font-semibold font-mulish text-[12px] text-[#037582] mb-[14px]"
                        }
                      >
                        {dayjs(get(recommend, "date_time")).format(
                          "DD.MM.YYYY"
                        )}
                      </p>

                      <Link href={`/salomatlik-blogi/${get(recommend, "id")}`}>
                        <p
                          className={
                            "font-poppins text-sm font-normal hover:text-[#037582] hover:underline transition-all  line-clamp-3 duration-300"
                          }
                        >
                          {get(recommend, "recommendation_title")}
                        </p>
                      </Link>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className={"bg-[#EFF8F9] p-[30px]"}>
            <div className={"flex items-center justify-between"}>
              <h3
                className={
                  "font-poppins font-medium lg:text-[20px] md:text-lg text-base text-[20px] text-[#494949]"
                }
              >
                Yangiliklar
              </h3>

              <Link
                href={"/yangiliklar"}
                className={
                  "lg:text-sm md:text-xs text-sm font-poppins text-[#037582] font-normal flex hover:translate-x-[2px] transition-all duration-300"
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
              {get(announce, "data.last_news", []).map((news) => (
                <li
                  key={get(news, "id")}
                  className={
                    "bg-white flex flex-row md:flex-col lg:flex-row gap-x-[10px] items-start rounded-[10px] p-[10px]"
                  }
                >
                  {!isNull(get(news, "news_image")) ? (
                    <Image
                      src={get(news, "news_image")}
                      loader={() => get(news, "news_image")}
                      alt={"img3"}
                      width={170}
                      height={120}
                      className="rounded-[8px]"
                    />
                  ) : (
                    <Image
                      src="/images/img3.png"
                      alt={"img3"}
                      width={170}
                      height={120}
                    />
                  )}

                  <div>
                    <p
                      className={
                        "font-semibold font-mulish text-[12px] text-[#037582] mb-[14px]"
                      }
                    >
                      {dayjs(get(news, "date_time")).format("DD.MM.YYYY")}
                    </p>

                    <Link href={`/yangiliklar/${get(news, "id")}`}>
                      <p
                        className={
                          "font-poppins text-sm font-normal line-clamp-3 hover:text-[#037582] hover:underline transition-all duration-300"
                        }
                      >
                        {get(news, "news_title")}
                      </p>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={"col-span-12"}>
          <h2
            className={
              "text-[24px] font-semibold font-poppins mb-[30px] mt-[30px] md:mt-0"
            }
          >
            Boshqa e’lonlar
          </h2>
        </div>
        {get(announce, "data.last_announces", []).map((item) => (
          <div className={"lg:col-span-6 col-span-12"} key={(item, "id")}>
            <Announcement
              width={"690px"}
              template={"card"}
              title={get(item, "announce_title")}
              date={get(item, "date_time")}
              time={get(item, "date_time")}
              image={"/images/img3.png"}
              views={get(item, "views_count")}
              url={get(item, "id")}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Index;
