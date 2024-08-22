import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";

const GalleryCard = ({ views, date, time, title, image, url }) => {
  const formattedDate = dayjs(date).format("DD.MM.YYYY");
  const formattedTime = dayjs(time).format("HH:mm");
  return (
    <div className={"col-span-4"}>
      <div
        className={
          "text-[#037582] flex justify-between text-sm font-mulish font-semibold"
        }
      >
        <p>Galereya</p>

        <div className={"flex items-center gap-x-[15px]"}>
          <div className={"flex items-center gap-x-[4px]"}>
            <Image
              src={"/images/watch.png"}
              alt={"watch"}
              width={18}
              height={18}
            />
            <p>{views}</p>
          </div>

          <p>{formattedDate}</p>

          <div className={"flex items-center gap-x-[4px]"}>
            <Image
              src={"/images/time.png"}
              alt={"watch"}
              width={18}
              height={18}
            />
            <p>{formattedTime}</p>
          </div>
        </div>
      </div>

      <Image
        src={image}
        loader={() => image}
        alt={"gallery1"}
        width={450}
        height={300}
        className={"my-[20px] w-[450px] h-[300px]"}
      />

      <Link href={`fotogalereya/${url}`}>
        <h3
          className={
            "font-poppins text-lg font-semibold hover:text-[#037582] hover:underline transition-all duration-400"
          }
        >
          {title}
        </h3>
      </Link>
    </div>
  );
};

export default GalleryCard;
