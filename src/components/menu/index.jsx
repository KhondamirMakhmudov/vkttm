import React, { useState } from "react";
import Brand from "@/components/brand";
import { dropRight, get, isEmpty, isEqual } from "lodash";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "../reveal";
import RevealRight from "../reveal/revealRight";
import clsx from "clsx";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";

const menuData = [
  {
    id: 1,
    title: "Markaz haqida",
    url: "#",
    subMenu: [
      {
        id: 1,
        title: "Markaz tuzilmasi",
        url: "/markaz-tuzilmasi",
      },
      {
        id: 2,
        title: "Rahbariyat",
        url: "/rahbariyat",
      },
      {
        id: 3,
        title: "Bo'limlar",
        url: "/bolimlar",
      },
      {
        id: 4,
        title: "Lavozim majburiyatlari",
        url: "/lavozim-majburiyatlari",
      },
      {
        id: 5,
        title: "Markaz nizomi",
        url: "markaz-nizomi",
      },
      {
        id: 6,
        title: "Markaz faxriylari",
        url: "/markaz-faxriylari",
      },
      {
        id: 7,
        title: "Odob-ahloq qoidalari",
        url: "/odob-ahloq-qoidalari",
      },
      {
        id: 8,
        title: "Kasaba uyushmasi",
        url: "/kasaba-uyushmasi",
      },
      {
        id: 15,
        title: "Biz haqimizda",
        url: "/biz-haqimizda",
      },
    ],
  },
  {
    id: 2,
    title: "Xizmatlar",
    url: "/xizmatlar",
  },
  {
    id: 3,
    title: "Xalqaro bo’lim",
    url: "#",
    subMenu: [
      {
        id: 16,
        title: "Xalqaro aloqalar",
        url: "/xalqaro-aloqalar",
      },
      {
        id: 17,
        title: "Memorandumlar",
        url: "/memorandumlar",
      },
    ],
  },

  {
    id: 4,
    title: "Me’yoriy hujjatlar",
    url: "/meyoriy-hujjatlar",
  },

  {
    id: 5,
    title: "Matbuot xizmati",
    url: "#",
    subMenu: [
      {
        id: 9,
        title: "Yangiliklar",
        url: "/yangiliklar",
      },
      {
        id: 10,
        title: "E'lonlar",
        url: "/elonlar",
      },
      {
        id: 11,
        title: "Fotogalereya",
        url: "/fotogalereya",
      },
      {
        id: 12,
        title: "Videolavhalar",
        url: "/videolavhalar",
      },
      {
        id: 13,
        title: "vakansiyalar",
        url: "/vakansiyalar",
      },
      {
        id: 14,
        title: "Salomatlik blogi",
        url: "/salomatlik-blogi",
      },
    ],
  },
  {
    id: 6,
    title: "Bog'lanish",
    url: "/boglanish",
  },
];

const Index = ({ active = 0 }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [open, setOpen] = useState(true);
  const [isOpen, setIsOpen] = useState("");

  const {
    data: navMenu,
    isLoading,
    isFetching,
  } = useGetQuery({
    key: KEYS.menu,
    url: URLS.menu,
  });

  const toggleDropdown = (menu) => {
    setIsOpen(menu);
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  const burgerMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: "30px" }}
        animate={{ opacity: 100, translateY: "0px" }}
        transition={{ duration: 0.4 }}
        className={
          "hidden md:flex container mx-auto  items-center gap-x-[63px] z-50 py-[20px]"
        }
      >
        <Brand />
        <div className={"flex items-center "}>
          <ul
            className={
              "flex gap-x-[20px] font-poppins xl:text-base md:text-xs  font-medium"
            }
          >
            {isLoading || isFetching
              ? menuData.map((item) => (
                  <li
                    key={get(item, "id")}
                    className="dropdown relative "
                    onClick={() => toggleDropdown(get(item, "title"))}
                  >
                    <Link
                      className="hover:text-[#00AFC0] transition-all duration-300"
                      href={
                        !isEmpty(get(item, "submenus", []))
                          ? "#"
                          : `/${get(item, "title")
                              .toLowerCase()
                              .replace(" ", "-")
                              .replace("'", "")}`
                      }
                    >
                      {get(item, "title")}
                    </Link>

                    {isEmpty(get(item, "subMenu", []))
                      ? ""
                      : isOpen === get(item, "title") && (
                          <ul
                            className={
                              "block bg-gray-50  absolute lg:w-[180px] w-[100px] text-start shadow-xl  rounded-[5px]"
                            }
                          >
                            {get(item, "subMenu", []).map((subItem) => (
                              <Link
                                key={get(subItem, "id")}
                                className={clsx(
                                  "hover:text-[#00AFC0] transition-all  text-[14px] border-b-transparent font-medium ",
                                  {
                                    "!border-b-[#1890FF] text-[#001A57]":
                                      isEqual(get(subItem, "id"), active),
                                  }
                                )}
                                href={`${get(subItem, "title")
                                  .toLowerCase()
                                  .replace(" ", "-")
                                  .replace("'", "")}`}
                              >
                                <li
                                  className={
                                    "p-[10px] border-b-[1px] border-b-[#D6E0F5] "
                                  }
                                >
                                  {get(subItem, "title")}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        )}
                  </li>
                ))
              : dropRight(get(navMenu, "data", []), 2).map((item) => (
                  <li
                    key={get(item, "id")}
                    className="  "
                    onClick={() => toggleDropdown(get(item, "title"))}
                  >
                    <Link
                      className="hover:text-[#00AFC0] transition-all duration-300"
                      href={
                        !isEmpty(get(item, "submenus", []))
                          ? "#"
                          : `/${get(item, "title")
                              .toLowerCase()
                              .replace(" ", "-")
                              .replace("'", "")}`
                      }
                    >
                      {get(item, "title")}
                    </Link>

                    {isEmpty(get(item, "submenus", []))
                      ? ""
                      : isOpen === get(item, "title") && (
                          <ul
                            className={
                              " bg-gray-50  absolute lg:w-[180px] w-[100px] text-start z-30 shadow-xl  rounded-[5px]"
                            }
                          >
                            {get(item, "submenus", []).map((subItem) => (
                              <li
                                className={
                                  "p-[10px] z-30 border-b-[1px] border-b-[#D6E0F5] "
                                }
                                key={get(subItem, "id")}
                              >
                                <Link
                                  className={clsx(
                                    "hover:text-[#00AFC0] transition-all  text-[14px] border-b-transparent font-medium ",
                                    {
                                      "!border-b-[#1890FF] text-[#001A57]":
                                        isEqual(get(subItem, "id"), active),
                                    }
                                  )}
                                  href={`${get(subItem, "title")
                                    .toLowerCase()
                                    .replace(" ", "-")
                                    .replace("'", "")}`}
                                >
                                  {get(subItem, "title")}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
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
