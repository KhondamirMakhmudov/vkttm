import React from "react";
import Brand from "@/components/brand";
import { get } from "lodash/object";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const menuData = [
  {
    id: 1,
    title: "Markaz haqida",
    url: "/about-center",
  },
  {
    id: 2,
    title: "Xizmatlar",
    url: "/services",
  },
  {
    id: 3,
    title: "Xalqaro bo’lim",
    url: "/international-section",
  },

  {
    id: 4,
    title: "Me’yoriy hujjatlar",
    url: "/documents",
  },

  {
    id: 5,
    title: "Matbuot xizmati",
    url: "/matbuot-xizmati",
  },
  {
    id: 6,
    title: "Aloqa",
    url: "/contacts",
  },
];

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "30px" }}
      animate={{ opacity: 100, translateY: "0px" }}
      transition={{ duration: 0.8 }}
      className={"flex container mx-auto  items-center gap-x-[63px] py-[20px]"}
    >
      <Brand />
      <div className={"flex items-center "}>
        <ul className={"flex gap-x-[26px] font-poppins font-medium"}>
          {menuData.map((item) => (
            <li key={get(item, "id")}>
              <Link href={get(item, "url")}>{get(item, "title")}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={
          "flex items-center text-base font-poppins font-medium gap-x-[30px]"
        }
      >
        <Link href={"#"}>Qabulga yozilish</Link>

        <Link href={"#"} className={"flex items-center"}>
          <Image
            src={"/images/login.png"}
            alt={"login"}
            width={24}
            height={24}
          />
          <p>Kirish</p>
        </Link>

        <Image
          src={"/images/search.png"}
          alt={"search"}
          width={24}
          height={24}
        />
      </div>
    </motion.div>
  );
};

export default Index;
