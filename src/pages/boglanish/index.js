import React from "react";
import Wrapper from "@/layout/wrapper";
import Reveal from "@/components/reveal";
import Title from "@/components/title";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RevealLeft from "@/components/reveal/revealLeft";
import RevealRight from "@/components/reveal/revealRight";

const Index = () => {
  return (
    <Wrapper>
      <section className={"my-[50px]"}>
        <div className={"grid grid-cols-12 container mx-auto"}>
          <div className={"col-span-12 mb-[30px]"}>
            <Reveal duration={0.2}>
              <Title>Aloqa</Title>
            </Reveal>
          </div>

          <RevealLeft classNameTop={"col-span-6 "} duration={0.3}>
            <div className={"p-[30px] flex flex-col gap-y-[30px]"}>
              <div>
                <h3
                  className={"font-mulish text-[20px] font-semibold mb-[20px]"}
                >
                  Manzil:
                </h3>
                <div className={"flex gap-x-[10px]"}>
                  <Image
                    src={"/icons/address.svg"}
                    alt={"address"}
                    width={24}
                    height={24}
                  />
                  <p className={"font-mulish font-medium"}>
                    M.Ulugbek ko&apos;chasi 70, Samarqand, Uzbekistan 140100
                  </p>
                </div>
              </div>

              <div>
                <h3
                  className={"font-mulish text-[20px] font-semibold mb-[20px]"}
                >
                  Qo’ng’iroq uchun:
                </h3>
                <div className={"flex items-start gap-x-[10px]"}>
                  <Image
                    src={"/icons/schedule.svg"}
                    alt={"schedule"}
                    width={24}
                    height={24}
                  />
                  <p className={"font-mulish font-semibold w-[200px]"}>
                    <span className={"font-bold"}>Qabulxona ish vaqti:</span>{" "}
                    <br />
                    08:00 - 20:00
                  </p>

                  <div className={"font-mulish font-medium"}>
                    <a href={"tel:+998 78 210 00 81"}>+998 78 210 00 81</a>{" "}
                    <br />
                    <a href={"tel:+998 78 000 00 00"}>+998 78 000 00 00</a>
                  </div>
                </div>
              </div>

              <div>
                <h3
                  className={"font-mulish text-[20px] font-semibold mb-[20px]"}
                >
                  Elektron pochta:
                </h3>

                <div className={"flex items-center gap-x-[6px]"}>
                  <Image
                    src={"/icons/message.svg"}
                    alt={"address"}
                    width={24}
                    height={24}
                  />
                  <a
                    className={"font-mulish font-medium"}
                    href={"mailto:vkttm.uz@gmail.com"}
                  >
                    vkttm.uz@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <h3
                  className={"font-mulish text-[20px] font-semibold mb-[20px]"}
                >
                  Ijtimoiy tarmoqlar:
                </h3>

                <ul className={"flex gap-x-[10px] mt-[10px]"}>
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
                            stroke="#00ADBE"
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
                            stroke="#00ADBE"
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
                            stroke="#00ADBE"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.87439 12C9.87439 12.7956 10.1905 13.5587 10.7531 14.1213C11.3157 14.6839 12.0787 15 12.8744 15C13.67 15 14.4331 14.6839 14.9957 14.1213C15.5583 13.5587 15.8744 12.7956 15.8744 12C15.8744 11.2044 15.5583 10.4413 14.9957 9.87868C14.4331 9.31607 13.67 9 12.8744 9C12.0787 9 11.3157 9.31607 10.7531 9.87868C10.1905 10.4413 9.87439 11.2044 9.87439 12Z"
                            stroke="#00ADBE"
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
          </RevealLeft>
          <RevealRight classNameTop={"col-span-6"} duration={0.3}>
            <div className={" p-[30px] flex flex-col gap-y-[20px]"}>
              <h3 className={"font-mulish text-[20px] font-semibold "}>
                Murojaat qoldiring
              </h3>

              <p className={"font-mulish font-medium"}>
                Maslahat olish, taklif yuborish uchun o‘z murojaatingizni
                batafsil yozib yuboring. Tez orada siz bilan bog‘lanishadi.
              </p>
              <form
                className={
                  "flex flex-col gap-y-[20px] font-mulish placeholder:font-medium placeholder:text-[#494949]"
                }
              >
                <input
                  type={"text"}
                  placeholder={"F.I.SH"}
                  className={
                    "py-[12px] px-[30px] w-full announce-list-shadow rounded-[10px]"
                  }
                />
                <input
                  type={"email"}
                  placeholder={"Email"}
                  className={
                    "py-[12px] px-[30px] w-full announce-list-shadow rounded-[10px]"
                  }
                />
                <input
                  type={"text"}
                  placeholder={"Murojaat mavzusi"}
                  className={
                    "py-[12px] px-[30px] w-full announce-list-shadow rounded-[10px]"
                  }
                />
                <textarea
                  placeholder={"Murojaat mavzusi"}
                  className={
                    "py-[12px] px-[30px] w-full announce-list-shadow rounded-[10px]"
                  }
                  rows={8}
                ></textarea>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 100 }}
                  transition={{ duration: 0.7 }}
                  className={
                    "font-bold max-w-[170px]  hover:bg-[#00CBDE] active:bg-[#009EAC] font-mulish bg-[#00AFC0] py-[10px] px-[52px] rounded-br-[10px] rounded-tl-[10px] text-white transition-all duration-300"
                  }
                >
                  Yuborish
                </motion.button>
              </form>
            </div>
          </RevealRight>
        </div>

        <div className={"grid grid-cols-12 container mx-auto mt-[30px]"}>
          <RevealLeft classNameTop={"col-span-6 "} duration={0.3}>
            <div className={"col-span-6 p-[30px]"}>
              <h3 className={"font-mulish text-[20px] font-semibold mb-[20px]"}>
                Asosiy bino lokatsiyasi:
              </h3>
              <div className={"w-[630px] h-[430px] bg-[#C5C5C5]"}></div>
            </div>
          </RevealLeft>

          <RevealRight classNameTop={"col-span-6"} duration={0.3}>
            <div className={"col-span-6 p-[30px]"}>
              <h3 className={"font-mulish text-[20px] font-semibold mb-[20px]"}>
                Bo’limlar joylashuvi
              </h3>
              <ul className={"flex flex-col gap-y-[20px]"}>
                <li className={"flex gap-x-[30px] items-start"}>
                  <div className={"min-w-[180px] h-[130px] bg-[#C5C5C5]"}></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Volutpat vitae nulla
                    lacus est amet nullam phasellus sed libero. Enim gravida in
                    ultrices tortor. Placerat proin duis gravida venenatis a
                    suscipit volutpat.
                  </p>
                </li>
                <li className={"flex gap-x-[30px] items-start"}>
                  <div className={"min-w-[180px] h-[130px] bg-[#C5C5C5]"}></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Volutpat vitae nulla
                    lacus est amet nullam phasellus sed libero. Enim gravida in
                    ultrices tortor. Placerat proin duis gravida venenatis a
                    suscipit volutpat.
                  </p>
                </li>
                <li className={"flex gap-x-[30px] items-start"}>
                  <div className={"min-w-[180px] h-[130px] bg-[#C5C5C5]"}></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Volutpat vitae nulla
                    lacus est amet nullam phasellus sed libero. Enim gravida in
                    ultrices tortor. Placerat proin duis gravida venenatis a
                    suscipit volutpat.
                  </p>
                </li>
              </ul>
            </div>
          </RevealRight>
        </div>
      </section>
    </Wrapper>
  );
};

export default Index;