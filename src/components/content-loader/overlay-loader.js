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
      >
        <Image
          width={125}
          height={125}
          src={"/images/brand.png"}
          alt={"loader"}
        />
      </motion.div>
    </div>
  );
};

export default OverlayLoader;
