import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import Brand from "../brand";

const ContentLoader = ({ classNames = "" }) => {
  return (
    <div
      className={clsx(
        "flex min-h-[75vh] bg-[#F4F8FA] justify-center items-center",
        classNames
      )}
    >
      <motion.div
        transition={{ repeat: Infinity, repeatDelay: 0.15 }}
        animate={{
          scale: [1, 1.2, 1.4, 1.2, 1],
        }}
        className="flex gap-x-[10px] items-center"
      >
        <Image src={"/images/brand.png"} alt={"brand"} width={70} height={70} />
        <h2 className="font-semibold font-poppins xl:text-lg lg:text-base md:text-sm text-xs text-black max-w-[220px] uppercase">
          Samarqand Viloyati Ko&apos;p tarmoqli tibbiyot markazi
        </h2>
      </motion.div>
    </div>
  );
};

export default ContentLoader;
