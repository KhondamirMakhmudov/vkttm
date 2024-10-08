import React from "react";
import Image from "next/image";
import Brand from "@/components/brand";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { dropRight, get, isEmpty } from "lodash";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";

const Footer = () => {
  const { data: basicInfos, isLoadingBasicInfos } = useGetQuery({
    key: KEYS.basicInfos,
    url: URLS.basicInfos,
  });

  const {
    data: navMenu,
    isLoading,
    isFetching,
  } = useGetQuery({
    key: KEYS.menu,
    url: URLS.menu,
  });
  return (
    <footer className={"bg-[#048998] font-mulish"}>
      <Reveal duration={0.2}>
        <div
          className={
            "grid grid-cols-12 gap-x-[30px] md:gap-y-0 gap-y-[30px] container mx-auto md:px-0 px-[20px] py-[50px]"
          }
        >
          <div className={"md:col-span-3 col-span-12 text-white"}>
            <Brand textColor={"white"} image={"footer-brand"} />

            <p className={"mt-[30px] mb-[20px]"}>
              Ko&apos;p funktsiyali tibbiyot markazi bir joyda keng
              ko&apos;lamli tibbiy xizmatlarni taqdim etadi, bu esa tashxis
              qo&apos;yish va davolashni bemorlar uchun qulay va samarali
              qiladi.
            </p>

            <div className={"flex flex-wrap gap-x-[15px]"}>
              <p>Bizning ijtimoiy tarmoqlarimiz:</p>
              <ul className={"flex flex-wrap gap-x-[10px]"}>
                <li>
                  <Link href={"#"} className={"cursor-pointer"}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_175_286)">
                        <path
                          d="M15.8744 10L11.8744 14L17.8744 20L21.8744 4L3.87439 11L7.87439 13L9.87439 19L12.8744 15"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_175_286">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.87439)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className={"cursor-pointer"}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_175_283)">
                        <path
                          d="M7.87439 10V14H10.8744V21H14.8744V14H17.8744L18.8744 10H14.8744V8C14.8744 7.73478 14.9797 7.48043 15.1673 7.29289C15.3548 7.10536 15.6092 7 15.8744 7H18.8744V3H15.8744C14.5483 3 13.2765 3.52678 12.3389 4.46447C11.4012 5.40215 10.8744 6.67392 10.8744 8V10H7.87439Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_175_283">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.87439)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className={"cursor-pointer"}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_175_289)">
                        <path
                          d="M4.87439 8C4.87439 6.93913 5.29582 5.92172 6.04596 5.17157C6.79611 4.42143 7.81352 4 8.87439 4H16.8744C17.9353 4 18.9527 4.42143 19.7028 5.17157C20.453 5.92172 20.8744 6.93913 20.8744 8V16C20.8744 17.0609 20.453 18.0783 19.7028 18.8284C18.9527 19.5786 17.9353 20 16.8744 20H8.87439C7.81352 20 6.79611 19.5786 6.04596 18.8284C5.29582 18.0783 4.87439 17.0609 4.87439 16V8Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.87439 12C9.87439 12.7956 10.1905 13.5587 10.7531 14.1213C11.3157 14.6839 12.0787 15 12.8744 15C13.67 15 14.4331 14.6839 14.9957 14.1213C15.5583 13.5587 15.8744 12.7956 15.8744 12C15.8744 11.2044 15.5583 10.4413 14.9957 9.87868C14.4331 9.31607 13.67 9 12.8744 9C12.0787 9 11.3157 9.31607 10.7531 9.87868C10.1905 10.4413 9.87439 11.2044 9.87439 12Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17.3744 7.5V7.51"
                          stroke="#2C3E50"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_175_289">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.87439)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={"md:col-span-3 col-span-12 font-poppins text-white"}>
            <h3 className={"text-lg font-medium"}>Manzil</h3>
            <p className={"text-sm mt-[10px] mb-[20px]"}>
              {get(basicInfos, "data.company_address")}
            </p>
            <h3 className={"text-lg font-medium"}>Aloqa</h3>
            <div className={"text-sm mt-[10px] mb-[6px]"}>
              <a href={`tel:${get(basicInfos, "data.company_phone")}`}>
                {get(basicInfos, "data.company_phone")}
              </a>{" "}
              <br />
              <a href={`tel:${get(basicInfos, "data.company_phones")}`}>
                {get(basicInfos, "data.company_phones")}
              </a>{" "}
              <br />
              <a
                href={`mailto:${get(basicInfos, "data.company_mail")}`}
                className="mt-[6px]"
              >
                {get(basicInfos, "data.company_mail")}
              </a>{" "}
            </div>
          </div>

          <div className={"md:col-span-2 col-span-12 font-poppins text-white"}>
            <h3 className={"text-lg font-medium mb-[10px]"}>Menyu</h3>

            <ul className={"flex flex-col gap-y-[8px] text-sm"}>
              {dropRight(
                get(navMenu, "data", []).map((menu) => (
                  <li key={get(menu, "id")}>
                    <Link
                      href={
                        !isEmpty(get(menu, "submenus", []))
                          ? "#"
                          : `/${get(menu, "title")
                              .toLowerCase()
                              .replace(" ", "-")
                              .replace("'", "")}`
                      }
                    >
                      {get(menu, "title")}
                    </Link>
                  </li>
                )),
                2
              )}
            </ul>
          </div>

          <div className={"md:col-span-2 col-span-12font-poppins text-white"}>
            <h3 className={"text-lg font-medium mb-[10px]"}>Qo’shimcha</h3>

            <ul className={"flex flex-col gap-y-[8px] text-sm"}>
              <li>
                <Link href={"/doctors"}>Shifokorlar</Link>
              </li>
              <li>
                <Link href={"/salomatlik-blogi"}>Salomatlik blogi</Link>
              </li>
              <li>
                <Link href={"/yangiliklar"}>Yangiliklar</Link>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>

      <div className={"!bg-[#037582] text-center py-[8px] text-white"}>
        <p className={"font-mulish text-[13px] font-normal"}>
          Copyright © 2024 Samarqand viloyati ko’p tarmoqli tibbiyot markazi.
          Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
