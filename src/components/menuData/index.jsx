import React, { useState } from "react";
import clsx from "clsx";
import Brand from "../brand";
import Image from "next/image";
import Link from "next/link";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { dropRight, get, isEmpty } from "lodash";

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
        url: "/markaz-faxri",
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

const MenuComponent = ({ activeMenu }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const {
    data: navMenu,
    isLoading,
    isFetching,
  } = useGetQuery({
    key: KEYS.menu,
    url: URLS.menu,
  });

  const handleMenuClick = (menu) => {
    if (openMenu === menu) {
      setOpenMenu(null); // Close if the same menu is clicked
    } else {
      setOpenMenu(menu);
    }
  };

  return (
    <div className="relative  flex justify-between container py-[20px] px-[20px] md:px-[15px] lg:px-0">
      <Brand />
      {/* desktop version */}
      <ul className="hidden md:flex  xl:text-base md:text-xs font-poppins font-medium gap-4 bg-white  p-4 rounded-md">
        {isLoading || isFetching
          ? menuData.map((menu) => (
              <li
                key={menu.id}
                className="relative"
                onClick={() => handleMenuClick(menu.title)}
              >
                <Link
                  href={
                    !isEmpty(get(menu, "subMenu", []))
                      ? "#"
                      : `/${get(menu, "title")
                          .toLowerCase()
                          .replace(" ", "-")
                          .replace("'", "")}`
                  }
                  className="hover:text-[#00AFC0] transition-all duration-300"
                >
                  {menu.title}
                </Link>

                {menu.subMenu && openMenu === menu.title && (
                  <ul
                    className={clsx(
                      "absolute left-0 mt-2 bg-white border rounded-md shadow-lg w-48",
                      { hidden: openMenu !== menu.title }
                    )}
                    style={{ zIndex: 1000 }}
                  >
                    {menu.subMenu.map((subMenu) => (
                      <li
                        key={subMenu.id}
                        className="p-2 hover:bg-gray-100 transition-all duration-300"
                      >
                        <a
                          href={`/${subMenu.title
                            .toLowerCase()
                            .replace(" ", "-")
                            .replace("'", "")}`}
                          className={clsx({
                            "text-[#1890FF] font-medium":
                              activeMenu === subMenu.id,
                          })}
                        >
                          {subMenu.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))
          : dropRight(get(navMenu, "data"), 2).map((menu) => (
              <li
                key={menu.id}
                className="relative"
                onClick={() => handleMenuClick(menu.title)}
              >
                <Link
                  href={
                    !isEmpty(get(menu, "submenus", []))
                      ? "#"
                      : `/${get(menu, "title")
                          .toLowerCase()
                          .replace(" ", "-")
                          .replace("'", "")}`
                  }
                  className="hover:text-[#00AFC0] transition-all duration-300"
                >
                  {menu.title}
                </Link>

                {menu.submenus && openMenu === menu.title && (
                  <ul
                    className={clsx(
                      "absolute left-0 mt-2 bg-white border rounded-md shadow-lg w-48",
                      { hidden: openMenu !== menu.title }
                    )}
                    style={{ zIndex: 1000 }}
                  >
                    {menu?.submenus?.map((subMenu) => (
                      <li
                        key={subMenu.id}
                        className="p-2 hover:bg-gray-100 transition-all duration-300"
                      >
                        <a
                          href={`/${subMenu.title
                            .toLowerCase()
                            .replace(" ", "-")
                            .replace("'", "")}`}
                          className={clsx({
                            "text-[#1890FF] font-medium":
                              activeMenu === subMenu.id,
                          })}
                        >
                          {subMenu.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
      </ul>

      <div
        className={
          "flex items-center xl:text-base md:text-xs font-poppins font-medium gap-x-[30px]"
        }
      >
        <Link href={"#"}>Qabulga yozilish</Link>

        <Link href={"/auth/login"} className={"flex items-center "}>
          <Image
            src={"/images/login.png"}
            alt={"login"}
            width={24}
            height={24}
          />
          <p>Kirish</p>
        </Link>

        <button>
          <Image
            src={"/images/search.png"}
            alt={"search"}
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default MenuComponent;
