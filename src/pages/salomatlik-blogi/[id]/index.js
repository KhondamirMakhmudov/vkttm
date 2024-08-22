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
import ContentLoader from "@/components/content-loader";
import HealthyCard from "@/components/cards/healthyCard";
const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: recommends,
    isLoading,
    isFetching,
  } = useGetQuery({
    key: [KEYS.recommends, id],
    url: `${URLS.recommends}${id}/`,
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
      <div
        className={
          "container mx-auto flex italic font-mulish gap-x-[10px] text-[#494949] mt-[50px]"
        }
      >
        <Link href={"/"}>
          <p>Bosh sahifa</p>
        </Link>
        <span>/</span>
        <Link href={"/salomatlik-blogi"}>
          <p>Sog‘lom bo‘lish uchun </p>
        </Link>
        <span>/</span>
        <p className={"text-[#036874] max-w-[370px] line-clamp-1"}>
          {get(recommends, "data.recommendation_title")}
        </p>
      </div>

      <div
        className={
          "grid grid-cols-12 gap-x-[30px] container mx-auto font-medium my-[50px]"
        }
      >
        <h1 className={"col-span-12 font-poppins text-[32px] mb-[16px]"}>
          {get(recommends, "data.recommendation_title")}
        </h1>

        <div
          className={
            "col-span-12 flex items-center text-[#037582] gap-x-[50px] font-mulish mb-[50px]"
          }
        >
          <p>Sog‘lom bo‘lish uchun </p>
          {/*how many times was seen*/}

          <p className={""}>
            {dayjs(get(recommends, "data.date_time")).format("DD.MM.YYYY")}
          </p>

          <div className={"flex items-center gap-x-[15px]"}>
            <div className={"flex items-center gap-x-[4px]"}>
              <Image
                src={"/images/watch.png"}
                alt={"watch"}
                width={18}
                height={18}
              />
              <p>{get(recommends, "data.views_count")}</p>
            </div>
            {/*when it is deployed*/}
            <div className={"flex items-center gap-x-[4px]"}>
              <Image
                src={"/images/time.png"}
                alt={"watch"}
                width={18}
                height={18}
              />
              <p>{dayjs(get(recommends, "data.date_time")).format("HH:mm")}</p>
            </div>
          </div>
        </div>

        <div className={"col-span-8"}>
          <RevealLeft>
            {isNull(get(recommends, "recommendation_image", "img")) ? (
              <Image
                src={get(recommends, "data.recommendation_image", "img")}
                loader={() =>
                  get(recommends, "data.recommendation_image", "img")
                }
                alt={"img3"}
                width={930}
                height={532}
                priority={true}
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
              {parse(get(recommends, "data.recommendation_desc", ""))}
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
                  Yangiliklar
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
                {get(recommends, "data.last_news", []).map((news, index) => (
                  <li
                    key={get(news, "id")}
                    className={
                      "bg-white flex flex-row md:flex-col lg:flex-row gap-x-[10px] items-start rounded-[10px] p-[10px]"
                    }
                  >
                    <Image
                      src={
                        get(news, "news_image") ||
                        `/images/health${index + 1}.png`
                      }
                      loader={() =>
                        get(news, "news_image") ||
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
                        {dayjs(get(news, "date_time")).format("DD.MM.YYYY")}
                      </p>

                      <Link href={`/yangiliklar/${get(news, "id")}`}>
                        <p
                          className={
                            "font-poppins text-sm font-normal hover:text-[#037582] hover:underline transition-all duration-300"
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
                  href={"/elonlar"}
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
                {get(recommends, "data.last_announces", []).map((announce) => (
                  <li
                    key={get(announce, "id")}
                    className={
                      "bg-white flex gap-x-[10px] items-start rounded-[10px] p-[10px]"
                    }
                  >
                    {!isNull(get(announce, "announce_image")) ? (
                      <Image
                        src={get(announce, "announce_image")}
                        loader={() => get(announce, "announce_image")}
                        alt={"img3"}
                        width={170}
                        height={120}
                        className="w-[170px] h-[120px]"
                      />
                    ) : (
                      <Image
                        src="/images/brand.png"
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

                      <Link
                        href={`/elonlar/${get(announce, "id")}`}
                        className="hover:text-[#037582] hover:underline transition-all duration-300"
                      >
                        <p
                          className={
                            "font-poppins text-sm font-normal line-clamp-4"
                          }
                        >
                          {get(announce, "announce_title")}
                        </p>
                      </Link>
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
              Boshqa maqolalar
            </h2>
          </Reveal>
        </div>
        {get(recommends, "data.last_recommendations", []).map((recommend) => (
          <div key={get(recommend, "id")} className="col-span-6">
            <Reveal duration={0.3}>
              <HealthyCard
                title={get(recommend, "recommendation_title")}
                template={"card"}
                width={"690px"}
                image={
                  !isNull(
                    get(recommend, "recommendation_image", "/images/img3.png")
                  )
                    ? get(recommend, "recommendation_image", "")
                    : "/images/img3.png"
                }
                url={get(recommend, "id")}
                date={get(recommend, "date_time")}
                time={get(recommend, "date_time")}
                viewsCount={get(recommend, "views_count")}
              />
            </Reveal>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Index;
