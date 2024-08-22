import React, { useState } from "react";
import Wrapper from "@/layout/wrapper";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get } from "lodash";
import dayjs from "dayjs";

const images = [
  "/images/gallery1.png",
  "/images/gallery2.png",
  "/images/gallery3.png",
  "/images/gallery4.png",
];

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: photo, isLoading } = useGetQuery({
    key: [KEYS.photo, id],
    url: `${URLS.photo}${id}`,
    enabled: !!id,
  });

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleClick = (image) => {
    setSelectedImage(image);
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
        <Link href={"/fotogalereya"}>
          <p> Galleriya</p>
        </Link>
        <span>/</span>
        <p className={"text-[#036874]"}>{get(photo, "data.photo_title")}</p>
      </div>

      <div
        className={
          "grid grid-cols-12 gap-x-[30px] container mx-auto font-medium mb-[50px] mt-[30px]"
        }
      >
        <h1 className={"col-span-12 font-poppins text-[32px] mb-[16px]"}>
          {get(photo, "data.photo_title")}
        </h1>

        <div
          className={
            "col-span-12 flex items-center text-[#037582] gap-x-[50px] font-mulish mb-[50px]"
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

        <div className={"col-span-8"}>
          <Image
            src={selectedImage}
            alt={`${selectedImage}`}
            width={930}
            height={540}
            className={"mb-[30px] max-h-[540px]"}
          />

          <div className={"flex gap-x-[20px]"}>
            {get(photo, "data.images", []).map((image) => (
              <Image
                key={get(image, "image.id")}
                src={get(image, "image.file")}
                loader={() => get(image, "image.file")}
                alt={`image`}
                width={200}
                height={147}
                className={"cursor-pointer"}
                onClick={() => handleClick(get(image, "image.file"))}
              />
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
            {/* last_recommendations yo'q, o'rniga  */}
            <ul className={"mt-[16px] flex flex-col gap-y-[16px]"}>
              {get(photo, "data.last_recommendations", []).map(
                (item, index) => (
                  <li
                    key={get(item, "id")}
                    className={
                      "bg-white flex gap-x-[10px] items-start rounded-[10px] p-[10px]"
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
                      className="w-[170px] h-[120px]"
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
                        <p className={"font-poppins text-sm font-normal"}>
                          {get(item, "recommendation_title")}
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
              {get(photo, "data.last_news", []).map((item) => (
                <li
                  key={get(item, "id")}
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
                      {dayjs(get(item, "date_time")).format("DD.MM.YYYY")}
                    </p>
                    <Link href={`/yangiliklar/${get(item, "id")}`}>
                      <p
                        className={
                          "font-poppins text-sm font-normal line-clamp-3 hover:text-[#037582] hover:underline"
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
