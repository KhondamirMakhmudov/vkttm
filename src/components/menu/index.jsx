import React, { useState } from "react";
import Brand from "@/components/brand";
import { get } from "lodash/object";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "../reveal";
import RevealRight from "../reveal/revealRight";

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
  const [openMenu, setOpenMenu] = useState(false);

  const burgerMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: "30px" }}
        animate={{ opacity: 100, translateY: "0px" }}
        transition={{ duration: 0.8 }}
        className={
          "hidden md:flex container mx-auto  items-center gap-x-[63px] py-[20px]"
        }
      >
        <Brand />
        <div className={"flex items-center "}>
          <ul
            className={
              "flex gap-x-[26px] font-poppins xl:text-base md:text-xs  font-medium"
            }
          >
            {menuData.map((item) => (
              <li key={get(item, "id")}>
                <Link href={get(item, "url")}>{get(item, "title")}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={
            "flex items-center xl:text-base md:text-xs font-poppins font-medium gap-x-[30px]"
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

      {/* mobile version */}
      <div className="relative text-[#2C3E50]">
        <div
          className={
            "flex md:hidden container  justify-between items-center gap-x-[63px] py-[20px]"
          }
        >
          <Brand />

          <div
            className={
              "flex items-center xl:text-base md:text-xs font-poppins font-medium gap-x-[30px]"
            }
          >
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

            <button onClick={burgerMenu} className="flex flex-col gap-y-[4px]">
              <div className="burger h-[1px] w-[20px] bg-black"></div>
              <div className="burger h-[1px] w-[20px] bg-black"></div>
              <div className="burger h-[1px] w-[20px] bg-black"></div>
            </button>
          </div>
        </div>

        {openMenu && (
          <div
            className={
              "md:hidden absolute z-10 w-1/2 min-h-[300px] flex flex-col py-[10px] justify-end items-end bg-white right-0"
            }
          >
            <ul
              className={
                " gap-y-[26px] pr-[20px] flex flex-col font-poppins xl:text-base md:text-xs   font-medium"
              }
            >
              {menuData.map((item) => (
                <li key={get(item, "id")}>
                  <RevealRight>
                    <Link href={get(item, "url")}>{get(item, "title")}</Link>
                  </RevealRight>
                </li>
              ))}
            </ul>

            <Reveal>
              <div className="mt-[30px]">
                <Link
                  href={"#"}
                  className="font-poppins font-medium  pr-[20px]"
                >
                  Qabulga yozilish
                </Link>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
