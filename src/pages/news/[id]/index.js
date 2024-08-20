import React from "react";
import Wrapper from "@/layout/wrapper";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { useRouter } from "next/router";
import { URLS } from "@/constants/url";
import { get, isNull } from "lodash";
import dayjs from "dayjs";
import Reveal from "@/components/reveal";
import RevealRight from "@/components/reveal/revealRight";
import RevealLeft from "@/components/reveal/revealLeft";
const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: newsItem, isLoading } = useGetQuery({
    key: [KEYS.news, id],
    url: `${URLS.news}${id}/`,
    enabled: !!id,
  });
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
          <p>Barcha yangiliklar</p>
        </Link>
        <span>/</span>
        <p className={"text-[#036874] max-w-[370px] line-clamp-1"}>
          {get(newsItem, "data.news_title")}
        </p>
      </div>

      <div
        className={
          "grid grid-cols-12 gap-x-[30px] container mx-auto font-medium my-[50px]"
        }
      >
        <h1 className={"col-span-12 font-poppins text-[32px] mb-[16px]"}>
          {get(newsItem, "data.news_title")}
        </h1>

        <div
          className={
            "col-span-12 flex items-center text-[#037582] gap-x-[50px] font-mulish mb-[50px]"
          }
        >
          <p>Yangilik</p>
          {/*how many times was seen*/}

          <p className={""}>
            {dayjs(get(newsItem, "data.date_time")).format("DD.MM.YYYY")}
          </p>

          <div className={"flex items-center gap-x-[15px]"}>
            <div className={"flex items-center gap-x-[4px]"}>
              <Image
                src={"/images/watch.png"}
                alt={"watch"}
                width={18}
                height={18}
              />
              <p>{get(newsItem, "data.views_count")}</p>
            </div>
            {/*when it is deployed*/}
            <div className={"flex items-center gap-x-[4px]"}>
              <Image
                src={"/images/time.png"}
                alt={"watch"}
                width={18}
                height={18}
              />
              <p>{dayjs(get(newsItem, "data.date_time")).format("HH:mm")}</p>
            </div>
          </div>
        </div>

        <div className={"col-span-8"}>
          <RevealLeft>
            {isNull(get(newsItem, "news_image")) ? (
              <Image
                src={get(newsItem, "news_image")}
                loader={() => get(newsItem, "news_image")}
                alt={"img3"}
                width={170}
                height={120}
              />
            ) : (
              <Image
                src="/images/announce_id.png"
                alt={"announce_id"}
                width={930}
                height={532}
                priority={true}
              />
            )}

            <div className="!font-medium font-mulish my-[30px]">
              {parse(get(newsItem, "data.news_desc", ""))}
            </div>
          </RevealLeft>
        </div>

        <div className={"col-span-4"}>
          <RevealRight duration={0.3}>
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
                  href={"/to-be-healthy"}
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
                {get(newsItem, "data.last_recommendations", []).map(
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

                        <Link href={`/to-be-healthy/${get(recommend, "id")}`}>
                          <p
                            className={
                              "font-poppins text-sm font-normal hover:text-[#037582] hover:underline transition-all duration-300"
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
          </RevealRight>

          <RevealRight>
            <div className={"bg-[#EFF8F9] p-[30px]"}>
              <div className={"flex items-center justify-between"}>
                <h3
                  className={
                    "font-poppins font-medium text-[20px] text-[#494949]"
                  }
                >
                  E’lonlar
                </h3>

                <Link
                  href={"/announcements"}
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
                {get(newsItem, "data.last_announces", []).map((announce) => (
                  <li
                    key={get(announce, "id")}
                    className={
                      "bg-white flex gap-x-[10px] items-start rounded-[10px] p-[10px]"
                    }
                  >
                    {isNull(get(announce, "announce_image")) ? (
                      <Image
                        src={get(announce, "announce_image")}
                        loader={() => get(announce, "announce_image")}
                        alt={"img3"}
                        width={170}
                        height={120}
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
                        {dayjs(get(announce, "date_time")).format("DD.MM.YYYY")}
                      </p>

                      <p
                        className={
                          "font-poppins text-sm font-normal line-clamp-4"
                        }
                      >
                        {get(announce, "announce_title")}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </RevealRight>
        </div>

        <div className={"col-span-12"}>
          <Reveal duration={0.3}>
            <h2 className={"text-[24px] font-semibold font-poppins mb-[30px]"}>
              Boshqa yangiliklar
            </h2>
          </Reveal>
        </div>
        {get(newsItem, "data.last_news", []).map((news) => (
          <div key={get(news, "id")} className={`col-span-4 `}>
            <Reveal duration={0.3}>
              <div
                className={
                  " max-w-[450px]  flex-col max-h-[640px] shadow-lg p-[30px]  rounded-bl-[30px] rounded-tr-[30px]"
                }
              >
                <Reveal duration={0.32}>
                  <Image
                    src={`/images/img3.png`}
                    alt={"img3"}
                    width={390}
                    height={300}
                    objectFit={"cover"}
                    className={"object-cover  mb-[20px]"}
                  />
                </Reveal>
                <Reveal duration={0.35}>
                  <div
                    className={"text-sm text-[#037582] flex justify-between"}
                  >
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
                        <p>{get(news, "views_count")}</p>
                      </div>
                      <p className={"font-mulish text-sm  "}>
                        {dayjs(get(news, "date_time")).format("DD.MM.YYYY")}
                      </p>
                      {/*when it is deployed*/}
                      <div className={"flex gap-x-[4px]"}>
                        <Image
                          src={"/images/time.png"}
                          alt={"watch"}
                          width={18}
                          height={18}
                        />
                        <p>{dayjs(get(news, "date_time")).format("HH:mm")}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal duration={0.4}>
                  <Link href={`/news/${get(news, "id")}`}>
                    <h2
                      className={
                        "font-poppins text-[18px] hover:text-[#00AFC0] text-[#2C3E50] font-semibold mt-[20px] flex-1 line-clamp-2 transition-all duration-200"
                      }
                    >
                      {get(news, "news_title")}
                    </h2>
                  </Link>
                </Reveal>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Index;
