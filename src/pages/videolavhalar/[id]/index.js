import React, { useState } from "react";
import Wrapper from "@/layout/wrapper";
import Link from "next/link";
import Image from "next/image";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { useRouter } from "next/router";
import { URLS } from "@/constants/url";
import ContentLoader from "@/components/content-loader";
import { get, isNull } from "lodash";
import dayjs from "dayjs";
import ReactPlayer from "react-player";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: video,
    isLoading,
    isFetching,
  } = useGetQuery({
    key: [KEYS.video, id],
    url: `${URLS.video}${id}`,
    enabled: !!id,
  });

  const [selectedVideo, setSelectedVideo] = useState(
    video?.data?.video_links[0]
  );

  if (isLoading || isFetching) {
    return (
      <Wrapper>
        <ContentLoader />
      </Wrapper>
    );
  }

  const handleClick = (image) => {
    setSelectedVideo(image);
  };
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
        <Link href={"/videolavhalar"}>
          <p> Videolavhalar</p>
        </Link>
        <span>/</span>
        <p className={"text-[#036874]"}>{get(video, "data.video_title")}</p>
      </div>

      <div
        className={
          "grid grid-cols-12 gap-x-[30px] container mx-auto font-medium mb-[50px] mt-[30px]"
        }
      >
        <h1 className={"col-span-12 font-poppins text-[32px] mb-[16px]"}>
          {get(video, "data.video_title")}
        </h1>

        <div
          className={
            "col-span-12 flex items-center text-[#037582] gap-x-[50px] font-mulish mb-[50px]"
          }
        >
          <p>Galereya</p>
          {/*how many times was seen*/}

          <p className={""}>
            {dayjs(get(video, "data.date_time")).format("DD.MM.YYYY")}
          </p>

          <div className={"flex items-center gap-x-[15px]"}>
            <div className={"flex items-center gap-x-[4px]"}>
              <Image
                src={"/images/watch.png"}
                alt={"watch"}
                width={18}
                height={18}
              />
              <p>{get(video, "data.views_count")}</p>
            </div>
            {/*when it is deployed*/}
            <div className={"flex items-center gap-x-[4px]"}>
              <Image
                src={"/images/time.png"}
                alt={"watch"}
                width={18}
                height={18}
              />
              <p>{dayjs(get(video, "data.date_time")).format("HH:mm")}</p>
            </div>
          </div>
        </div>

        <div className={"col-span-8"}>
          <ReactPlayer
            url={selectedVideo}
            width={930}
            height={540}
            playIcon={
              <Image
                src={"/icons/playIcon.svg"}
                alt="playIcon"
                width={48}
                height={48}
              />
            }
          />

          <div className={"flex gap-x-[20px] mt-[30px]"}>
            {get(video, "data.video_links").map((item, index) => (
              <div key={index} onClick={() => handleClick(item)}>
                <ReactPlayer
                  url={item}
                  key={index}
                  width={200}
                  height={157}
                  pip={true}
                  playIcon={
                    <Image
                      src={"/icons/playIcon.svg"}
                      alt="playIcon"
                      width={48}
                      height={48}
                    />
                  }
                />
              </div>
            ))}
          </div>
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
                href={"/salomatlik-blogi"}
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
              {get(video, "data.last_recommendations", []).map(
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
              {get(video, "data.last_news", []).map((news) => (
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
      </div>
    </Wrapper>
  );
};

export default Index;
