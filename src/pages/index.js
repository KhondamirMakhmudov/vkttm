import Image from "next/image";
import Brand from "@/components/brand";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import Title from "@/components/title";
import Department from "@/components/cards/department";
import Link from "next/link";
import News from "@/components/cards/news";
import { motion } from "framer-motion";
import Reveal from "@/components/reveal";
import RevealRight from "@/components/reveal/revealRight";
import RevealLeft from "@/components/reveal/revealLeft";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Head from "next/head";
import SlideNextButton from "@/components/slideButtons/next";
import SlidePreviousButton from "@/components/slideButtons/previous";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get, isNull } from "lodash";
import dayjs from "dayjs";
import ContentLoader from "@/components/content-loader";
import Wrapper from "@/layout/wrapper";

export default function Home() {
  const {
    data: mainInformations,
    isLoading: isLoadingMainPage,
    isFetching: isFetchingMainPage,
  } = useGetQuery({
    key: KEYS.mainPage,
    url: URLS.mainPage,
  });

  if (isLoadingMainPage || isFetchingMainPage) {
    return (
      <>
        <ContentLoader />
      </>
    );
  }

  return (
    <Wrapper>
      <Head>
        <title>vkttm</title>
      </Head>

      {get(mainInformations, "data.banners", []).map((item, index) => (
        <main
          key={index}
          className={"w-full  h-[650px] bg-no-repeat md:bg-cover bg-center"}
          style={{
            backgroundImage: `url(${
              isNull(get(item, "banner_image"))
                ? "/images/main-bg.png"
                : get(item, "banner_image")
            })`,
          }}
        >
          <div
            className={
              "grid grid-cols-12 gap-x-[30px] container mx-auto lg:px-0 px-[20px]"
            }
          >
            <div
              className={
                "xl:col-span-5 md:col-span-10 col-span-12 translate-y-1/2 text-center md:text-start"
              }
            >
              <motion.h3
                initial={{ opacity: 0, translateX: "-100px" }}
                animate={{ opacity: 100, translateX: "0px" }}
                transition={{ duration: 0.4 }}
                className={
                  "font-mulish font-bold md:text-base text-sm text-[#0D4866]"
                }
              >
                {get(item, "banner_header")}
              </motion.h3>

              <motion.h1
                initial={{ opacity: 0, translateX: "100px" }}
                animate={{ opacity: 100, translateX: "0px" }}
                transition={{ duration: 0.4 }}
                className={
                  "text-[#0D4866] font-bold md:text-[48px] text-[30px] font-poppins mt-[30px] mb-[20px]"
                }
              >
                {get(item, "banner_title")}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, translateX: "-100px" }}
                animate={{ opacity: 100, translateX: "0px" }}
                transition={{ duration: 0.4 }}
                className={
                  "font-mulish md:text-[20px] text-base mb-[30px] text-[#0D4866]"
                }
              >
                {get(item, "banner_desc")}
              </motion.p>
              <Link
                href={"/markaz-tuzilmasi"}
                className={
                  "font-bold hover:bg-[#00CBDE] active:bg-[#009EAC] font-mulish bg-[#00AFC0] py-[9px] md:px-[55px] px-[40px] rounded-br-[10px] rounded-tl-[10px] text-white md:text-base text-sm transition-all duration-300"
                }
              >
                <motion.button
                  initial={{ opacity: 0, translateX: "-100px" }}
                  animate={{ opacity: 100, translateX: "0px" }}
                  transition={{ duration: 0.4 }}
                >
                  Batafsil
                </motion.button>
              </Link>
            </div>
          </div>
        </main>
      ))}
      {/* MOBILE VERSION */}
      <section className="md:hidden block bg-white">
        <motion.ul
          initial={{ opacity: 0, translateY: "100px" }}
          animate={{ opacity: 100, translateY: "0px" }}
          transition={{ duration: 0.4 }}
          className={
            "bg-white mx-[50px] py-[50px] flex flex-col gap-y-[20px] text-[#0D4866]"
          }
        >
          {get(mainInformations, "data.fast_links", []).map((item, index) => (
            <motion.li
              key={get(item, "id")}
              className={
                "cursor-pointer border flex flex-col gap-y-[20px] py-[30px] px-[20px] justify-center items-center text-center w-full lg:gap-x-[20px] gap-x-[10px] rounded-bl-[50px] rounded-tr-[50px] announce-list-shadow"
              }
              initial={{ opacity: 0, translateX: "-100px" }}
              animate={{ opacity: 100, translateX: "0px" }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={`/images/fastLink${index + 1}.png`}
                alt={"doctors"}
                width={50}
                height={50}
                className={
                  "bg-[#00AFC0] p-[10px] rounded-full ] w-[50px] h-[50px] "
                }
              />

              <motion.div
                initial={{ opacity: 0, translateY: "100px" }}
                animate={{ opacity: 100, translateY: "0px" }}
                transition={{ duration: 0.6 }}
              >
                <h3
                  className={
                    "!text-[18px] text-base font-semibold font-poppins text-[#2C3E50] hover:text-[#00AFC0]"
                  }
                >
                  {get(item, "title")}
                </h3>

                <p
                  className={
                    "font-mulish xl:text-base lg:text-sm md:text-xs text-[10px] font-normal lg:my-[10px] my-[5px]"
                  }
                >
                  {get(item, "description")}
                </p>

                <button
                  className={
                    "font-poppins xl:text-base lg:text-sm md:text-xs text-[10px] font-medium border-b-[2px] border-b-[#00AFC0]"
                  }
                >
                  <Link href={"/to-be-healty/id"}>Barchasi</Link>
                </button>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </section>
      <section className={"bg-[#EFF8F9] pb-[70px] md:pt-[240px] pt-[70px]"}>
        <div
          className={
            "grid grid-cols-12 gap-x-[30px] container mx-auto lg:px-0 px-[20px]  relative"
          }
        >
          {/* DESKTOP VERSION */}
          <motion.ul
            initial={{ opacity: 0, translateY: "100px" }}
            animate={{ opacity: 100, translateY: "0px" }}
            transition={{ duration: 0.4 }}
            className={
              "absolute hidden md:-top-[300px] -top-[550px] mx-[120px] bg-white md:flex md:flex-row flex-col gap-y-[30px] md:gap-y-0 gap-x-[30px] px-[30px] py-[50px] max-w-[1170px] rounded-bl-[50px] rounded-tr-[50px] "
            }
          >
            {get(mainInformations, "data.fast_links", []).map((item, index) => (
              <motion.li
                key={index}
                className={
                  "cursor-pointer flex items-start lg:gap-x-[20px] gap-x-[10px]"
                }
                initial={{ opacity: 0, translateY: "100px" }}
                animate={{ opacity: 100, translateY: "0px" }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={`/images/fastLink${index + 1}.png`}
                  alt={"doctors"}
                  width={50}
                  height={50}
                  className={
                    "bg-[#00AFC0] lg:p-[10px] p-[5px] rounded-full lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] "
                  }
                />

                <motion.div
                  initial={{ opacity: 0, translateY: "100px" }}
                  animate={{ opacity: 100, translateY: "0px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h3
                    className={
                      "xl:text-[24px] lg:text-[20px] md:text-[17px] text-base font-semibold font-poppins text-[#2C3E50] hover:text-[#00AFC0]"
                    }
                  >
                    {get(item, "title")}
                  </h3>

                  <p
                    className={
                      "font-mulish xl:text-base lg:text-sm md:text-xs text-[10px] font-normal lg:my-[10px] my-[5px]"
                    }
                  >
                    {get(item, "description")}
                  </p>

                  <button
                    className={
                      "font-poppins xl:text-base lg:text-sm md:text-xs text-[10px] font-medium border-b-[2px] border-b-[#00AFC0]"
                    }
                  >
                    <Link
                      href={`${
                        get(item, "title") === "Shifokorlar"
                          ? "/doctors/1"
                          : get(item, "title") === "Salomatlik blogi"
                          ? "/salomatlik-blogi"
                          : get(item, "title") === "Biz bilan bog’laning"
                          ? "/boglanish"
                          : ""
                      }`}
                    >
                      {get(item, "link_title")}
                    </Link>
                  </button>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
          <div
            className={"xl:col-span-5 md:col-span-6 col-span-12 max-w-[570px] "}
          >
            <Reveal>
              <Image
                src={"/images/img1.png"}
                alt={"img1"}
                width={570}
                height={363}
              />
            </Reveal>
          </div>
          <div className={"md:col-span-6 col-span-12 md:mt-0 mt-[30px]"}>
            {get(mainInformations, "data.main_page_texts", []).map(
              (item, index) => (
                <Reveal key={index}>
                  <Title>{get(item, "title")}</Title>

                  <p
                    className={
                      "mt-[20px] font-mulish text-[#2C3E50] lg:text-lg md:text-base text-sm mb-[50px]"
                    }
                  >
                    {get(item, "description")}
                  </p>

                  <Link href={"/boglanish"}>
                    <button
                      className={
                        "font-bold hover:bg-[#00CBDE] active:bg-[#009EAC] font-mulish bg-[#00AFC0] py-[9px] lg:px-[59px] px-[47px] rounded-br-[10px] rounded-tl-[10px] lg:text-base text-sm text-white transition-all duration-300"
                      }
                    >
                      {get(item, "button_text")}
                    </button>
                  </Link>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>

      <section className={"bg-announcement py-[70px]"}>
        <div
          className={
            "grid grid-cols-12 gap-x-[30px] container mx-auto md:px-0 px-[20px]"
          }
        >
          <div className={"col-span-12 mb-[50px]"}>
            <Reveal duration={0.3}>
              <Title>E’lonlar</Title>
            </Reveal>
          </div>

          <div className={"col-span-12"}>
            <Reveal duration={0.3}>
              <Swiper
                slidesPerView={2.5}
                breakpoints={{
                  200: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 50,
                  },
                }}
              >
                {get(mainInformations, "data.announces", []).map(
                  (item, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex  bg-white max-w-[630px] p-[20px] gap-x-[16px] announce-list-shadow rounded-[20px]">
                        <div className="flex flex-col justify-between gap-y-[15px]">
                          <h4 className="text-[#037582] font-mulish font-semibold text-sm ">
                            E’lon
                          </h4>

                          <Link
                            href={`/elonlar/${get(item, "id")}`}
                            className="font-poppins font-medium text-sm text-[#2C3E50] flex-grow hover:text-[#037582] hover:underline line-clamp-3"
                          >
                            {get(item, "announce_title")}
                          </Link>

                          <div
                            className={
                              "text-sm text-[#037582] flex justify-between"
                            }
                          >
                            {/*date*/}
                            <p className={"font-mulish text-sm  "}>
                              {dayjs(get(item, "date_time")).format(
                                "DD.MM.YYYY"
                              )}
                            </p>
                            <div className={"flex gap-x-[10px]"}>
                              {/*how many times was seen*/}
                              <div className={"flex items-center gap-x-[4px]"}>
                                <Image
                                  src={"/images/watch.png"}
                                  alt={"watch"}
                                  width={18}
                                  height={18}
                                />
                                <p>{get(item, "views_count")}</p>
                              </div>
                              {/*when it is deployed*/}
                              <div className={"flex items-center gap-x-[4px]"}>
                                <Image
                                  src={"/images/time.png"}
                                  alt={"watch"}
                                  width={18}
                                  height={18}
                                />
                                <p>
                                  {" "}
                                  {dayjs(get(item, "date_time")).format(
                                    "HH:mm"
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Image
                          src={"/images/img3.png"}
                          alt="announce_id"
                          width={220}
                          height={164}
                          className="xl:w-[220px] xl:h-[164px] lg:w-[200px] lg:h-[144px] md:w-[150px] h-[90px] md:block hidden object-center rounded-[10px]"
                        />
                      </div>
                    </SwiperSlide>
                  )
                )}
                <div className={"col-span-12 mt-[50px] flex justify-between"}>
                  <Reveal duration={0.3}>
                    <Link href={"/elonlar"}>
                      <button
                        className={
                          "font-bold hover:bg-[#00CBDE] active:bg-[#009EAC] font-mulish bg-[#00AFC0] py-[9px] px-[27px] rounded-br-[10px] rounded-tl-[10px] text-white"
                        }
                      >
                        Barcha e’lonlar
                      </button>
                    </Link>
                  </Reveal>

                  <Reveal duration={0.3}>
                    <div className="flex gap-x-[20px]">
                      <SlidePreviousButton />
                      <SlideNextButton />
                    </div>
                  </Reveal>
                </div>
                <div></div>
              </Swiper>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={"bg-[white] py-[70px]"}>
        <Reveal classNames={0.3}>
          <div
            className={
              "grid grid-cols-12 gap-x-[30px] gap-y-[30px] container mx-auto md:px-0 px-[20px]"
            }
          >
            <div className={"col-span-12 mb-[50px]"}>
              <Reveal duration={0.3}>
                <Title>Bizning bo’limlar</Title>
              </Reveal>
            </div>

            {get(mainInformations, "data.departments", []).map((item) => (
              <Department
                key={get(item, "id")}
                image={get(item, "department_image")}
                title={get(item, "department_title")}
                classNames={"xl:col-span-4 md:col-span-6  col-span-12"}
                desc={get(item, "department_desc")}
                url={`/department/${get(item, "id")}`}
              />
            ))}

            <div
              className={
                "col-span-12 flex justify-center items-center mt-[20px]"
              }
            >
              <Link href={"/bolimlar"}>
                <button
                  className={
                    "font-bold hover:bg-[#00CBDE] active:bg-[#009EAC] font-mulish bg-[#00AFC0] py-[9px] px-[72px] rounded-br-[10px] rounded-tl-[10px] text-white"
                  }
                >
                  Barcha bo‘limlar
                </button>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={"bg-[#EFF8F9] py-[70px]"}>
        <div
          className={
            "grid grid-cols-12 gap-x-[30px]  container mx-auto md:px-0 px-[20px]"
          }
        >
          <div className={"col-span-12 mb-[50px]"}>
            <Reveal duration={0.3}>
              <Title>Sog‘lom bo‘lish uchun</Title>
            </Reveal>
          </div>

          <div className={"md:col-span-4 col-span-12 text-[#2C3E50]"}>
            <Reveal duration={0.35}>
              <h2 className={"font-medium font-poppins text-[24px] mb-[20px]"}>
                Doimiy jismoniy mashqalar salomatlik garovidir
              </h2>
              <p className="font-mulish">
                Muntazam jismoniy mashqlar jismoniy tayyorgarlikni saqlashga va
                yurak-qon tomir tizimini mustahkamlashga yordam beradi. Ular
                endorfin ishlab chiqarish orqali kayfiyatni yaxshilashga va
                stress darajasini pasaytirishga yordam beradi. Faol bo&apos;lish
                chidamlilik va moslashuvchanlikni oshiradi, bu esa kundalik
                vazifalarni osonlashtiradi.{" "}
              </p>
            </Reveal>
          </div>

          <div className={"md:col-span-4 col-span-12 md:mt-0 mt-[30px]"}>
            <Reveal duration={0.55}>
              <Image
                src={"/images/img2.png"}
                alt={"img2"}
                width={450}
                height={330}
              />{" "}
            </Reveal>
          </div>

          <div className="md:col-span-4 col-span-12 md:mt-0 mt-[30px]">
            <Reveal duration={0.65}>
              {get(mainInformations, "data.recommendations", []).map(
                (recommendation) => (
                  <div key={get(recommendation, "id")} className={""}>
                    <div>
                      <Link
                        href={`/salomatlik-blogi/${get(recommendation, "id")}`}
                        className="font-medium font-poppins hover:underline text-[#2C3E50]"
                      >
                        <h5>{get(recommendation, "recommendation_title")}</h5>
                      </Link>

                      <p className="text-sm font-medium font-poppins text-[#037582]">
                        {dayjs(get(recommendation, "date_time")).format(
                          "DD.MM.YYYY"
                        )}
                      </p>
                    </div>
                    <div className="my-[20px] w-full h-[1px] bg-[#78D7DF]"></div>
                  </div>
                )
              )}
            </Reveal>
          </div>

          <div className={"col-span-12 mt-[50px]"}>
            <Link href={"/salomatlik-blogi"}>
              <button
                className={
                  "font-bold hover:bg-[#00CBDE] active:bg-[#009EAC] font-mulish bg-[#00AFC0] py-[9px] px-[45px] rounded-br-[10px] rounded-tl-[10px] text-white"
                }
              >
                Barcha maqolalar
              </button>
            </Link>
          </div>
        </div>
        <div className={"col-span-12"}></div>
      </section>
      {/* Desktop version */}
      <section
        className={
          " w-full h-[520px] relative md:block hidden  py-[90px] bg-no-repeat bg-cover bg-center z-10"
        }
        style={{ backgroundImage: "url(/images/Pluses.png)" }}
      >
        <div className="absolute inset-0 medical-service bg-opacity-50 before:absolute after:inset-0 after:medical-service before:opacity-10 -z-10"></div>
        <Reveal duration={0.4}>
          <div
            className={"container mx-auto grid grid-cols-12 gap-x-[30px] z-50"}
          >
            <div className={"lg:col-span-6 col-span-12 !text-white"}>
              <Title textColor={"#fff"}>Yuqori malakali tibbiy xizmat</Title>

              <p className={"mt-[30px] font-mulish text-[20px] font-semibold"}>
                Bizning markazimiz shifokorlari yuqori malakali mutaxassislar
                bo&apos;lib, ularning kasbiy bilimlari va tajribalari bemorlarga
                eng yuqori darajadagi tibbiy yordam ko&apos;rsatishga imkon
                beradi. Ularning fidoyiligi, har bir bemorga ehtiyotkorlik bilan
                munosabatda bo&apos;lishi va mukammallikka tinimsiz intilishidi.
                Ularning sa&apos;y-harakatlari tufayli bemorlar o&apos;z
                sog&apos;lig&apos;ini tiklash va hayot sifatini yaxshilash
                orqali o&apos;z vaqtida va samarali davolanadilar.
              </p>
            </div>

            <div className={"col-span-6 flex gap-x-[30px]"}>
              <ul className={"text-white flex flex-col"}>
                <li className={"flex gap-x-[20px] items-start "}>
                  <Image
                    src={"/images/checked.png"}
                    alt={"checked"}
                    width={30}
                    height={30}
                  />

                  <p className={"text-[22px] font-semibold font-mulish"}>
                    20 + yil tibbiy tajriba
                  </p>
                </li>

                <li className={"flex gap-x-[20px] items-start"}>
                  <Image
                    src={"/images/checked.png"}
                    alt={"checked"}
                    width={30}
                    height={30}
                  />

                  <p className={"text-[22px] font-semibold font-mulish"}>
                    Bir joyda tibbiy keng doiradagi xizmatlar joylashuvi
                  </p>
                </li>

                <li className={"flex gap-x-[20px] items-start "}>
                  <Image
                    src={"/images/checked.png"}
                    alt={"checked"}
                    width={30}
                    height={30}
                  />

                  <p className={"text-[22px] font-semibold font-mulish"}>
                    Zamonaviy uskunalar va jihozlar
                  </p>
                </li>

                <li className={"flex gap-x-[20px] items-start"}>
                  <Image
                    src={"/images/checked.png"}
                    alt={"checked"}
                    width={30}
                    height={30}
                  />

                  <p className={"text-[22px] font-semibold font-mulish"}>
                    Kasalliklarning oldini olish va erta aniqlash
                  </p>
                </li>
              </ul>
              <ul className={" text-white"}>
                <li className={"flex gap-x-[20px] items-start"}>
                  <Image
                    src={"/images/checked.png"}
                    alt={"checked"}
                    width={30}
                    height={30}
                  />

                  <p className={"text-[22px] font-semibold font-mulish"}>
                    Yuqori malakali mutaxassislar
                  </p>
                </li>

                <li className={"flex gap-x-[20px] items-start"}>
                  <Image
                    src={"/images/checked.png"}
                    alt={"checked"}
                    width={30}
                    height={30}
                  />

                  <p className={"text-[22px] font-semibold font-mulish"}>
                    Diagnostika vaqti qisqaligi
                  </p>
                </li>

                <li className={"flex gap-x-[20px] items-start"}>
                  <Image
                    src={"/images/checked.png"}
                    alt={"checked"}
                    width={30}
                    height={30}
                  />

                  <p className={"text-[22px] font-semibold font-mulish"}>
                    Turli xil tibbiy yo’nalish mutaxassislarining mavjudligi
                  </p>
                </li>

                <li className={"flex gap-x-[20px] items-start"}>
                  <Image
                    src={"/images/checked.png"}
                    alt={"checked"}
                    width={30}
                    height={30}
                  />

                  <p className={"text-[22px] font-semibold font-mulish"}>
                    Reabilitatsiya xizmatlari
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        className={
          " w-full  relative md:hidden block  py-[90px] bg-no-repeat bg-cover bg-center z-10 px-[20px]"
        }
        style={{ backgroundImage: "url(/images/Pluses.png)" }}
      >
        <div className="absolute inset-0 medical-service bg-opacity-50 before:absolute after:inset-0 after:medical-service before:opacity-10 -z-10"></div>
        <Reveal duration={0.4}>
          <div
            className={"container mx-auto grid grid-cols-12 gap-x-[30px] z-50"}
          >
            <div className={"lg:col-span-12 col-span-12 !text-white"}>
              <Title textColor={"#fff"}>Yuqori malakali tibbiy xizmat</Title>

              <p className={"mt-[30px] font-mulish text-[20px] font-semibold"}>
                Bizning markazimiz shifokorlari yuqori malakali mutaxassislar
                bo&apos;lib, ularning kasbiy bilimlari va tajribalari bemorlarga
                eng yuqori darajadagi tibbiy yordam ko&apos;rsatishga imkon
                beradi. Ularning fidoyiligi, har bir bemorga ehtiyotkorlik bilan
                munosabatda bo&apos;lishi va mukammallikka tinimsiz intilishidi.
                Ularning sa&apos;y-harakatlari tufayli bemorlar o&apos;z
                sog&apos;lig&apos;ini tiklash va hayot sifatini yaxshilash
                orqali o&apos;z vaqtida va samarali davolanadilar.
              </p>
            </div>

            <div className={"col-span-12 flex flex-col gap-x-[30px] mt-[30px]"}>
              <ul className={"text-white flex flex-col"}>
                <li className={"flex gap-x-[20px] items-start "}>
                  <Image
                    src={"/images/checked.png"}
                    alt={"checked"}
                    width={30}
                    height={30}
                    className={"w-[30px] h-[30px]"}
                  />

                  <p className={"text-[22px] font-semibold font-mulish"}>
                    20 + yil tibbiy tajriba
                  </p>
                </li>

                <li className={"flex gap-x-[20px] items-start"}>
                  <Image
                    src={"/images/checked.png"}
                    alt={"checked"}
                    width={30}
                    height={30}
                    className={"w-[30px] h-[30px]"}
                  />

                  <p className={"text-[22px] font-semibold font-mulish"}>
                    Bir joyda tibbiy keng doiradagi xizmatlar joylashuvi
                  </p>
                </li>

                <li className={"flex gap-x-[20px] items-start "}>
                  <Image
                    src={"/images/checked.png"}
                    alt={"checked"}
                    width={30}
                    height={30}
                    className={"w-[30px] h-[30px]"}
                  />

                  <p className={"text-[22px] font-semibold font-mulish"}>
                    Zamonaviy uskunalar va jihozlar
                  </p>
                </li>

                <li className={"flex gap-x-[20px] items-start"}>
                  <Image
                    src={"/images/checked.png"}
                    alt={"checked"}
                    width={30}
                    height={30}
                    className={"w-[30px] h-[30px]"}
                  />

                  <p className={"text-[22px] font-semibold font-mulish"}>
                    Kasalliklarning oldini olish va erta aniqlash
                  </p>
                </li>
              </ul>
              <ul className={" text-white"}>
                <li className={"flex gap-x-[20px] items-start"}>
                  <Image
                    src={"/images/checked.png"}
                    alt={"checked"}
                    width={30}
                    height={30}
                    className={"w-[30px] h-[30px]"}
                  />

                  <p className={"text-[22px] font-semibold font-mulish"}>
                    Yuqori malakali mutaxassislar
                  </p>
                </li>

                <li className={"flex gap-x-[20px] items-start"}>
                  <Image
                    src={"/images/checked.png"}
                    alt={"checked"}
                    width={30}
                    height={30}
                    className={"w-[30px] h-[30px]"}
                  />

                  <p className={"text-[22px] font-semibold font-mulish"}>
                    Diagnostika vaqti qisqaligi
                  </p>
                </li>

                <li className={"flex gap-x-[20px] items-start"}>
                  <Image
                    src={"/images/checked.png"}
                    alt={"checked"}
                    width={30}
                    height={30}
                    className={"w-[30px] h-[30px]"}
                  />

                  <p className={"text-[22px] font-semibold font-mulish"}>
                    Turli xil tibbiy yo’nalish mutaxassislarining mavjudligi
                  </p>
                </li>

                <li className={"flex gap-x-[20px] items-start"}>
                  <Image
                    src={"/images/checked.png"}
                    alt={"checked"}
                    width={30}
                    height={30}
                    className={"w-[30px] h-[30px]"}
                  />

                  <p className={"text-[22px] font-semibold font-mulish"}>
                    Reabilitatsiya xizmatlari
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={"bg-white py-[70px] md:px-0 px-[20px]"}>
        <Reveal duration={0.4}>
          <div className={"grid grid-cols-12 gap-x-[30px]  container mx-auto"}>
            <div className={"col-span-12 mb-[50px]"}>
              <Title>Yangiliklar</Title>
            </div>

            {get(mainInformations, "data.news", []).map((item) => (
              <div
                key={get(item, "id")}
                className={`md:col-span-4 col-span-12`}
              >
                <News
                  template={"card"}
                  title={get(item, "news_title")}
                  date={get(item, "date_time")}
                  time={get(item, "date_time")}
                  views={get(item, "views_count")}
                  desc={get(item, "news_desc")}
                  image={get(item, "news_image")}
                  url={get(item, "id")}
                />
              </div>
            ))}

            <div className={"col-span-12 flex items-center justify-center"}>
              <Link href={"/yangiliklar"}>
                <button
                  className={
                    "font-bold hover:bg-[#00CBDE] active:bg-[#009EAC] font-mulish bg-[#00AFC0] py-[9px] px-[65px] rounded-br-[10px] mt-[50px] rounded-tl-[10px] text-white"
                  }
                >
                  Barcha yangiliklar
                </button>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={"bg-white py-[70px] px-[20px]"}>
        <div
          className={
            "grid grid-cols-12 gap-x-[30px] gap-y-[30px]  container mx-auto"
          }
        >
          <div className={"col-span-12 mb-[20px]"}>
            <Reveal duration={0.2}>
              <Title>Hukumat manbalari</Title>
            </Reveal>
          </div>
          {get(mainInformations, "data.government_links", []).map((item) => (
            <Reveal
              classNames={"xl:col-span-4 lg:col-span-6 col-span-12"}
              duration={0.25}
              key={get(item, "id")}
            >
              <Link href={get(item, "link")} className="">
                <div
                  className={
                    "col-span-4 flex items-center gap-x-[24px] p-[18px] bg-[#EFF8F9] rounded-[20px] flex-grow flex-1"
                  }
                >
                  <Image
                    src={get(item, "image")}
                    loader={() => get(item, "image")}
                    alt={"government"}
                    width={44}
                    height={44}
                  />
                  <p className={"font-medium text-lg  text-[#2C3E50]  "}>
                    {get(item, "title")}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
