import React from "react";
import Image from "next/image";

const GalleryCard = () => {
  return (
    <div className={"col-span-4"}>
      <div
        className={"text-[#037582] flex justify-between text-sm font-mulish"}
      >
        <p>Galereya</p>
        {/*how many times was seen*/}

        <div className={"flex items-center gap-x-[15px]"}>
          <div className={"flex items-center gap-x-[4px]"}>
            <Image
              src={"/images/watch.png"}
              alt={"watch"}
              width={18}
              height={18}
            />
            <p>128</p>
          </div>

          <p className={""}>20.06.2024</p>
          {/*when it is deployed*/}
          <div className={"flex items-center gap-x-[4px]"}>
            <Image
              src={"/images/time.png"}
              alt={"watch"}
              width={18}
              height={18}
            />
            <p>18:24</p>
          </div>
        </div>
      </div>

      <Image
        src={"/images/gallery1.png"}
        alt={"gallery1"}
        width={450}
        height={300}
        className={"my-[20px]"}
      />

      <h3 className={"font-poppins text-lg font-semibold"}>
        Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belorusiya
        hamkorligi
      </h3>
    </div>
  );
};

export default GalleryCard;
