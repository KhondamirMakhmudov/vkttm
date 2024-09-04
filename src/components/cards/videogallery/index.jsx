import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";
import ReactPlayer from "react-player/youtube";

const VideoGallery = ({ views, date, time, title, videoUrl, url }) => {
  const formattedDate = dayjs(date).format("DD.MM.YYYY");
  const formattedTime = dayjs(time).format("HH:mm");
  return (
    <div className={"xl:col-span-4 md:col-span-6 col-span-12"}>
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

      <div
        className={
          "my-[20px] xl:w-[450px] xl:h-[300px] lg:w-full lg:h-[250px] md:w-full md:h-[200px]"
        }
      >
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          playing={false}
          controls={true}
        />
      </div>

      <Link href={`videolavhalar/${url}`}>
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

export default VideoGallery;
