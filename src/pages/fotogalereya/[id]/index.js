import React, { useState, useEffect } from "react";
import Wrapper from "@/layout/wrapper";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get } from "lodash";
import dayjs from "dayjs";
import ContentLoader from "@/components/content-loader";

const images = [
  "/images/gallery1.png",
  "/images/gallery2.png",
  "/images/gallery3.png",
  "/images/gallery4.png",
];

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedImage, setSelectedImage] = useState("");

  const {
    data: photo,
    isLoading,
    isFetching,
  } = useGetQuery({
    key: [KEYS.photo, id],
    url: `${URLS.photo}${id}`,
    enabled: !!id,
  });

  useEffect(() => {
    if (photo) {
      const initialImage = `${get(photo, "data.images[0].image.file", "")}`;
      setSelectedImage(initialImage);
    }
  }, [photo]);

  const handleClick = (image) => {
    setSelectedImage(image);
  };
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
        <Link href={"/fotogalereya"}>
          <p> Galleriya</p>
        </Link>
        <span>/</span>
        <p className={"text-[#036874]"}>{get(photo, "data.photo_title")}</p>
      </div>

      <div
        className={
          "grid grid-cols-12 gap-x-[30px] container mx-auto font-medium mb-[50px] mt-[30px] px-[20px] md:px-[15px] lg:px-[10px] xl:px-0"
        }
      >
        <h1
          className={
            "col-span-12 font-poppins xl:text-[32px] lg:text-[28px] md:text-[25px] text-[22px] mb-[16px]"
          }
        >
          {get(photo, "data.photo_title")}
        </h1>

        <div
          className={
            "col-span-12 flex items-center lg:text-base md:text-sm text-xs text-[#037582] gap-x-[50px] font-mulish lg:mb-[50px] md:mb-[40px] mb-[20px]"
          }
        >
          <p>Galereya</p>
          {/*how many times was seen*/}

          <p className={""}>
            {dayjs(get(photo, "data.date_time")).format("DD.MM.YYYY")}
          </p>

          <div className={"flex items-center gap-x-[15px]"}>
            <div className={"flex items-center gap-x-[4px]"}>
              <Image
                src={"/images/watch.png"}
                alt={"watch"}
                width={18}
                height={18}
              />
              <p>{get(photo, "data.views_count")}</p>
            </div>
            {/*when it is deployed*/}
            <div className={"flex items-center gap-x-[4px]"}>
              <Image
                src={"/images/time.png"}
                alt={"watch"}
                width={18}
                height={18}
              />
              <p>{dayjs(get(photo, "data.date_time")).format("HH:mm")}</p>
            </div>
          </div>
        </div>

        <div className={"md:col-span-8 col-span-12"}>
          {isLoading || isFetching ? (
            <ContentLoader />
          ) : (
            <Image
              src={`${selectedImage}`}
              loader={() => selectedImage}
              alt={`${selectedImage}`}
              width={930}
              height={540}
              className={"mb-[30px] max-h-[540px] w-[930px] shadow-lg"}
            />
          )}

          <div className={"flex gap-x-[20px] gap-y-[20px]  flex-wrap"}>
            {get(photo, "data.images", []).map((image) => (
              <Image
                key={get(image, "image.id")}
                src={`${get(image, "image.file")}`}
                loader={() => get(image, "image.file")}
                alt={`image`}
                width={200}
                height={147}
                className={
                  "cursor-pointer lg:w-[200px] lg:h-[147px] md:w-[170px] w-[150px] shadow-md"
                }
                onClick={() => handleClick(get(image, "image.file"))}
              />
            ))}
          </div>
        </div>
        <div className={"md:col-span-4 col-span-12"}>
          <div
            className={
              "bg-[#EFF8F9] lg:p-[30px] md:p-[20px] p-[10px] mb-[30px] mt-[30px] md:mt-0"
            }
          >
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
            {/* last_recommendations yo'q, o'rniga  */}
            <ul className={"mt-[16px] flex flex-col gap-y-[16px]"}>
              {get(photo, "data.last_recommendations", []).map(
                (item, index) => (
                  <li
                    key={get(item, "id")}
                    className={
                      "bg-white flex flex-col md:flex-col lg:flex-row gap-x-[10px] items-start rounded-[10px] p-[10px]"
                    }
                  >
                    <Image
                      src={
                        get(item, "recommendation_image") === null
                          ? `/images/health${index + 1}.png`
                          : get(item, "recommendation_image")
                      }
                      alt={"health1"}
                      width={170}
                      height={120}
                      className="lg:w-[170px] lg:h-[120px] md:w-full w-full object-cover rounded-[8px] h-[120px]"
                    />

                    <div>
                      <p
                        className={
                          "font-semibold font-mulish text-[12px] text-[#037582] mb-[14px]"
                        }
                      >
                        {dayjs(get(item, "date_time")).format("DD.MM.YYYY")}
                      </p>

                      <Link
                        href={`/salomatlik-blogi/${get(item, "id")}`}
                        className="hover:text-[#037582] hover:underline"
                      >
                        <p
                          className={
                            "font-poppins text-sm font-normal line-clamp-3 hover:text-[#037582] hover:underline"
                          }
                        >
                          {get(item, "recommendation_title")}
                        </p>
                      </Link>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className={"bg-[#EFF8F9] lg:p-[30px] md:p-[20px] p-[10px]"}>
            <div className={"flex items-center justify-between"}>
              <h3
                className={
                  "font-poppins font-medium lg:text-[20px] md:text-lg text-base text-[#494949]"
                }
              >
                Yangiliklar
              </h3>

              <Link
                href={"/yangiliklar"}
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
              {get(photo, "data.last_news", []).map((item) => (
                <li
                  key={get(item, "id")}
                  className={
                    "bg-white flex flex-col md:flex-col lg:flex-row gap-x-[10px] items-start rounded-[10px] p-[10px]"
                  }
                >
                  <Image
                    src={"/images/img3.png"}
                    alt={"img3"}
                    width={170}
                    height={120}
                    className="lg:w-[170px] lg:h-[120px] md:w-full w-full object-cover rounded-[8px] h-[120px]"
                  />

                  <div>
                    <p
                      className={
                        "font-semibold font-mulish text-[12px] text-[#037582] mb-[14px]"
                      }
                    >
                      {dayjs(get(item, "date_time")).format("DD.MM.YYYY")}
                    </p>
                    <Link href={`/yangiliklar/${get(item, "id")}`}>
                      <p
                        className={
                          "font-poppins text-sm font-normal line-clamp-3 hover:text-[#037582] hover:underline transition-all duration-300"
                        }
                      >
                        {get(item, "news_title")}
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
