import React, { useState } from "react";
import Wrapper from "@/layout/wrapper";
import Link from "next/link";
import Image from "next/image";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { useRouter } from "next/router";
import { URLS } from "@/constants/url";
import ContentLoader from "@/components/content-loader";
import { get } from "lodash";
import dayjs from "dayjs";
import ReactPlayer from "react-player";

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState("");
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
        <Link href={"/video-gallery"}>
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

          <div className={"flex gap-x-[20px]"}>
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
      </div>
    </Wrapper>
  );
};

export default Index;
