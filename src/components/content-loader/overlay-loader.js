import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OverlayLoader = () => {
  return (
    <div
      className={
        "flex h-screen bg-[#F4F8FA] justify-center items-center fixed top-0 left-0 w-full z-10 bg-opacity-75"
      }
    >
      <motion.div
        transition={{ repeat: Infinity, repeatDelay: 0.15 }}
        animate={{
          scale: [1, 1.2, 1.4, 1.2, 1],
        }}
        className="flex items-center gap-x-[6px]"
      >
        <Image
          width={125}
          height={125}
          src={"/images/brand.png"}
          alt={"loader"}
          className="xl:w-[125px] xl:h-[125px] lg:w-[110px] lg:h-[110px] md:w-[80px] md:h-[80px] w-[70px] h-[70px]"
        />
        <h2 className="font-semibold font-poppins xl:text-lg lg:text-base md:text-sm text-xs max-w-[220px] uppercase text-black">
          Samarqand Viloyati Ko&apos;p tarmoqli tibbiyot markazi
        </h2>
      </motion.div>
    </div>
  );
};

export default OverlayLoader;
