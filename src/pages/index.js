import Image from "next/image";
import Brand from "@/components/brand";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import Title from "@/components/title";
import Announcement from "@/components/cards/announcement";
import AnnouncementCard from "@/components/cards/announcement";
import Department from "@/components/cards/department";
import Link from "next/link";
import News from "@/components/cards/news";
import { motion } from "framer-motion";
import Reveal from "@/components/reveal";
import RevealRight from "@/components/reveal/revealRight";
import RevealLeft from "@/components/reveal/revealLeft";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  return (
    <>
      <Header />
      <Menu />
      <main
        className={"w-full h-[650px] bg-no-repeat md:bg-cover bg-center"}
        style={{ backgroundImage: "url(/images/main-bg.png)" }}
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
              transition={{ duration: 0.7 }}
              className={
                "font-mulish font-bold md:text-base text-sm text-[#0D4866]"
              }
            >
              Xalqimizga xizmat - oliy ne’mat
            </motion.h3>

            <motion.h1
              initial={{ opacity: 0, translateX: "100px" }}
              animate={{ opacity: 100, translateX: "0px" }}
              transition={{ duration: 0.7 }}
              className={
                "text-[#0D4866] font-bold md:text-[48px] text-[30px] font-poppins mt-[30px] mb-[20px]"
              }
            >
              Zamonaviy tibbiyot xizmatlari markazi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, translateX: "-100px" }}
              animate={{ opacity: 100, translateX: "0px" }}
              transition={{ duration: 0.7 }}
              className={
                "font-mulish md:text-[20px] text-base mb-[30px] text-[#0D4866]"
              }
            >
              Markaz doim barcha uchun ochiq, birlamchi tibbiy yordam va
              zamonaviy tibbiyot xizmarlaridan foydalaning{" "}
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ duration: 0.7 }}
              className={
                "font-bold hover:bg-[#00CBDE] active:bg-[#009EAC] font-mulish bg-[#00AFC0] py-[9px] md:px-[55px] px-[40px] rounded-br-[10px] rounded-tl-[10px] text-white md:text-base text-sm transition-all duration-300"
              }
            >
              <Link href={"/about"}>Batafsil</Link>
            </motion.button>
          </div>
        </div>
      </main>
      <section className={"bg-[#EFF8F9] pb-[70px] md:pt-[240px] pt-[400px]"}>
        <div
          className={
            "grid grid-cols-12 gap-x-[30px] container mx-auto lg:px-0 px-[20px]  relative"
          }
        >
          <motion.ul
            initial={{ opacity: 0, translateY: "100px" }}
            animate={{ opacity: 100, translateY: "0px" }}
            transition={{ duration: 0.7 }}
            className={
              "absolute md:-top-[300px] -top-[550px] mx-[120px] bg-white flex md:flex-row flex-col gap-y-[30px] md:gap-y-0 gap-x-[30px] px-[30px] py-[50px] max-w-[1170px] rounded-bl-[50px] rounded-tr-[50px] "
            }
          >
            <motion.li
              className={
                "cursor-pointer flex items-start lg:gap-x-[20px] gap-x-[10px]"
              }
              initial={{ opacity: 0, translateY: "100px" }}
              animate={{ opacity: 100, translateY: "0px" }}
              transition={{ duration: 0.9 }}
            >
              <Image
                src={"/images/doctors.png"}
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
                transition={{ duration: 1.1 }}
              >
                <h3
                  className={
                    "xl:text-[24px] lg:text-[20px] md:text-[17px] text-base font-semibold font-poppins text-[#2C3E50] hover:text-[#00AFC0]"
                  }
                >
                  Shifokorlar
                </h3>

                <p
                  className={
                    "font-mulish xl:text-base lg:text-sm md:text-xs text-[10px] font-normal lg:my-[10px] my-[5px]"
                  }
                >
                  Tibbiyot markazidagi oliy toifali shifokorlarning tibbiy
                  xizmatlaridan foydalaning
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
            <motion.li
              initial={{ opacity: 0, translateY: "100px" }}
              animate={{ opacity: 100, translateY: "0px" }}
              transition={{ duration: 0.9 }}
              className={
                "cursor-pointer flex items-start lg:gap-x-[20px] gap-x-[10px]"
              }
            >
              <Image
                src={"/images/health-blog.png"}
                alt={"health-blog"}
                width={50}
                height={50}
                className={
                  "bg-[#00AFC0] lg:p-[10px] p-[5px] rounded-full lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]"
                }
              />

              <motion.div
                initial={{ opacity: 0, translateY: "100px" }}
                animate={{ opacity: 100, translateY: "0px" }}
                transition={{ duration: 1.1 }}
              >
                <h3
                  className={
                    "xl:text-[24px] lg:text-[20px] md:text-[17px] text-base font-semibold font-poppins text-[#2C3E50] hover:text-[#00AFC0]"
                  }
                >
                  Salomatlik blogi{" "}
                </h3>

                <p
                  className={
                    "font-mulish xl:text-base lg:text-sm md:text-xs text-[10px]  font-normal lg:my-[10px] my-[5px]"
                  }
                >
                  Sog’lom bo’lish uchun turli tavsiya, maqola, ilmiy ishlardan
                  namunalar bilan tanishing
                </p>

                <button
                  className={
                    "font-poppins font-medium border-b-[2px] xl:text-base lg:text-sm md:text-xs text-[10px] border-b-[#00AFC0]"
                  }
                >
                  <Link href={"/to-be-healthy"}>Barchasi</Link>
                </button>
              </motion.div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, translateY: "100px" }}
              animate={{ opacity: 100, translateY: "0px" }}
              transition={{ duration: 0.9 }}
              className={
                "cursor-pointer flex items-start lg:gap-x-[20px] gap-x-[10px]"
              }
            >
              <Image
                src={"/images/contact.png"}
                alt={"contacts"}
                width={50}
                height={50}
                className={
                  "bg-[#00AFC0] lg:p-[10px] p-[5px] rounded-full lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]"
                }
              />

              <motion.div
                initial={{ opacity: 0, translateY: "100px" }}
                animate={{ opacity: 100, translateY: "0px" }}
                transition={{ duration: 1.1 }}
              >
                <h3
                  className={
                    "xl:text-[24px] lg:text-[20px] md:text-[17px] text-base font-semibold font-poppins text-[#2C3E50] hover:text-[#00AFC0]"
                  }
                >
                  Biz bilan bog’laning
                </h3>

                <p
                  className={
                    "font-mulish xl:text-base lg:text-sm md:text-xs text-[10px]  font-normal my-[10px]"
                  }
                >
                  Savollar, murojaatlarni onlayn yuborish va va qo’shimcha
                  ma’lumotlar olish imkoniyati
                </p>

                <button
                  className={
                    "font-poppins font-medium border-b-[2px] xl:text-base lg:text-sm md:text-xs text-[10px] border-b-[#00AFC0]"
                  }
                >
                  <Link href={"/to-be-healty/id"}>Barchasi</Link>
                </button>
              </motion.div>
            </motion.li>
          </motion.ul>
          <div
            className={"xl:col-span-4 md:col-span-6 col-span-12 max-w-[570px] "}
          >
            <RevealLeft>
              {" "}
              <Image
                src={"/images/img1.png"}
                alt={"img1"}
                width={570}
                height={363}
              />
            </RevealLeft>
          </div>
          <div className={"md:col-span-6 col-span-12 md:mt-0 mt-[30px]"}>
            <RevealRight>
              <Title>Sog‘lig‘ingizni bizga ishoning!</Title>

              <p className={"mt-[20px] mb-[50px]"}>
                Bizning yuqori malakali mutaxassislarimiz jamoasi sizni
                og&apos;riqsiz sog&apos;lig&apos;ingizni tez va oson tiklash
                uchun eng yangi shifo texnologiyalaridan foydalanadi. Biz
                yaxshilab kasallikni aniqlab, tahlillar o‘tkazib, uning ildiz
                omillarini davolaymiz. Davolash jarayoni zamonaviy texnika va
                dori vositalari orqali amalga oshiriladi
              </p>

              <button
                className={
                  "font-bold hover:bg-[#00CBDE] active:bg-[#009EAC] font-mulish bg-[#00AFC0] py-[9px] px-[59px] rounded-br-[10px] rounded-tl-[10px] text-white transition-all duration-300"
                }
              >
                Biz bilan bog‘laning
              </button>
            </RevealRight>
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
            <Reveal duration={0.5}>
              <Swiper spaceBetween={300} slidesPerView={2.5}>
                <SwiperSlide>
                  <AnnouncementCard template={"card"} />
                </SwiperSlide>

                <SwiperSlide>
                  <AnnouncementCard template={"card"} />
                </SwiperSlide>
                <SwiperSlide>
                  <AnnouncementCard template={"card"} />
                </SwiperSlide>
                <SwiperSlide>
                  <AnnouncementCard template={"card"} />
                </SwiperSlide>
              </Swiper>
            </Reveal>
          </div>

          <div className={"col-span-12 mt-[50px] flex justify-between"}>
            <Reveal duration={0.7}>
              <button
                className={
                  "font-bold hover:bg-[#00CBDE] active:bg-[#009EAC] font-mulish bg-[#00AFC0] py-[9px] px-[27px] rounded-br-[10px] rounded-tl-[10px] text-white"
                }
              >
                <Link href={"/announcements"}>Barcha e’lonlar</Link>
              </button>
            </Reveal>

            <Reveal duration={0.7}>
              <div className="flex gap-x-[20px] mt-[20px]">
                <button className="bg-[#00AFC0] px-[9px] py-[6px] rounded-tl-[10px] rounded-br-[10px] hover:bg-[#00BFD0] active:bg-[#00D1E4]">
                  <Image
                    src={"/images/navigation.png"}
                    alt="navigation"
                    width={6}
                    height={12}
                    className="bg-[#00AFC0] "
                  />
                </button>
                <button className="bg-[#00AFC0] px-[9px] py-[6px] rounded-tr-[10px] rounded-bl-[10px] hover:bg-[#00BFD0] active:bg-[#00D1E4]">
                  <Image
                    src={"/images/navigation.png"}
                    alt="navigation"
                    width={6}
                    height={12}
                    className="bg-[#00AFC0] rotate-180"
                  />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={"bg-[white] py-[70px]"}>
        <Reveal classNames={0.5}>
          <div
            className={
              "grid grid-cols-12 gap-x-[30px] gap-y-[30px] container mx-auto md:px-0 px-[20px]"
            }
          >
            <div className={"col-span-12 mb-[50px]"}>
              <Reveal duration={0.7}>
                <Title>Bizning bo’limlar</Title>
              </Reveal>
            </div>

            <Department
              image={"department1"}
              title={"Lor"}
              desc={
                "Quloq, tomoq va burun kasalliklarini tashxislash va davolash bilan shug'ullanadi."
              }
              url={"#"}
            />

            <Department
              image={"department2"}
              title={"Fizioterapiya"}
              desc={
                "Tananing funktsiyasi va harakatchanligini tiklash va yaxshilash uchun jismoniy mashqlar, massaj va elektroterapiya kabi jismoniy usullardan foydalanishni o'z ichiga oladi."
              }
              url={"#"}
            />
            <Department
              image={"department3"}
              title={"Nevrologiya"}
              desc={
                "Nevrologiya asab tizimining kasalliklarini, shu jumladan miya va orqa miya, asab va mushak tizimini o'rganadi va davolaydi."
              }
              url={"#"}
            />

            <Department
              image={"department4"}
              title={"Psixoterapiya"}
              desc={
                "Bemorning hissiy holati va xatti-harakatlarini yaxshilashga qaratilgan nutq texnikasi va psixologik usullar orqali ruhiy va hissiy kasalliklarni davolash usuli."
              }
              url={"#"}
            />

            <Department
              image={"department5"}
              title={"Urologiya"}
              desc={
                "Urologiya erkaklar va ayollarda siydik tizimi kasalliklarini, shuningdek erkaklarning reproduktiv tizimini tashxislash va davolash bilan shug'ullanadi."
              }
              url={"#"}
            />

            <Department
              image={"department6"}
              title={"Reanimatsiya"}
              desc={
                "Tananing hayotiy funktsiyalarini, masalan, nafas olish va qon aylanishini, agar ular jiddiy buzilgan bo'lsa, tiklashga qaratilgan shoshilinch tibbiy choralar majmui."
              }
              url={"#"}
            />
            <div
              className={
                "col-span-12 flex justify-center items-center mt-[20px]"
              }
            >
              <button
                className={
                  "font-bold hover:bg-[#00CBDE] active:bg-[#009EAC] font-mulish bg-[#00AFC0] py-[9px] px-[72px] rounded-br-[10px] rounded-tl-[10px] text-white"
                }
              >
                <Link href={"/about?tab=Bo‘limlar"}>Barcha bo‘limlar</Link>
              </button>
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
            <Title>Sog‘lom bo‘lish uchun</Title>
          </div>

          <div className={"col-span-4 text-[#2C3E50]"}>
            <h2 className={"font-medium font-poppins text-[24px] mb-[20px]"}>
              Doimiy jismoniy mashqalar salomatlik garovidir
            </h2>
            <p>
              Muntazam jismoniy mashqlar jismoniy tayyorgarlikni saqlashga va
              yurak-qon tomir tizimini mustahkamlashga yordam beradi. Ular
              endorfin ishlab chiqarish orqali kayfiyatni yaxshilashga va stress
              darajasini pasaytirishga yordam beradi. Faol bo&apos;lish
              chidamlilik va moslashuvchanlikni oshiradi, bu esa kundalik
              vazifalarni osonlashtiradi.{" "}
            </p>
          </div>
          <div className={"col-span-4"}>
            <Image
              src={"/images/img2.png"}
              alt={"img2"}
              width={450}
              height={330}
            />{" "}
          </div>
          <div className={"col-span-12 mt-[50px]"}>
            <button
              className={
                "font-bold hover:bg-[#00CBDE] active:bg-[#009EAC] font-mulish bg-[#00AFC0] py-[9px] px-[45px] rounded-br-[10px] rounded-tl-[10px] text-white"
              }
            >
              <Link href={"/to-be-healthy"}>Barcha maqolalar</Link>
            </button>
          </div>
        </div>
        <div className={"col-span-12"}></div>
      </section>

      <section className={"medical-service py-[90px]"}>
        <Reveal>
          <div className={"container mx-auto grid grid-cols-12 gap-x-[30px]"}>
            <div className={"col-span-6 !text-white"}>
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
              <ul className={"col-span-6 text-white"}>
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

      <section className={"bg-white py-[70px] md:px-0 px-[20px]"}>
        <Reveal>
          <div className={"grid grid-cols-12 gap-x-[30px]  container mx-auto"}>
            <div className={"col-span-12 mb-[50px]"}>
              <Title>Yangiliklar</Title>
            </div>

            <div className={`md:col-span-4 col-span-12`}>
              <News template={"card"} />
            </div>

            <div className={`md:col-span-4 col-span-12 `}>
              <News template={"card"} />
            </div>

            <div className={`md:col-span-4 col-span-12 `}>
              <News template={"card"} />
            </div>

            <div className={"col-span-12 flex items-center justify-center"}>
              <button
                className={
                  "font-bold hover:bg-[#00CBDE] active:bg-[#009EAC] font-mulish bg-[#00AFC0] py-[9px] px-[65px] rounded-br-[10px] mt-[50px] rounded-tl-[10px] text-white"
                }
              >
                <Link href={"/news"}>Barcha yangiliklar</Link>
              </button>
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

          <Reveal
            classNames={"xl:col-span-4 lg:col-span-6 col-span-12"}
            duration={0.25}
          >
            <div
              className={
                "col-span-4 flex items-center gap-x-[24px] p-[18px] bg-[#EFF8F9] rounded-[20px]"
              }
            >
              <Image
                src={"/images/government1.png"}
                alt={"government"}
                width={44}
                height={44}
              />
              <p className={"font-medium text-lg"}>
                O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligi
              </p>
            </div>
          </Reveal>

          <Reveal
            classNames={"xl:col-span-4 lg:col-span-6 col-span-12"}
            duration={0.3}
          >
            <div
              className={
                "col-span-4 flex items-center gap-x-[24px] p-[18px] bg-[#EFF8F9] rounded-[20px]"
              }
            >
              <Image
                src={"/images/government1.png"}
                alt={"government"}
                width={44}
                height={44}
              />
              <p className={"font-medium text-lg"}>
                O‘zbekiston Respublikasi Prezidenti matbuot xizmati
              </p>
            </div>
          </Reveal>

          <Reveal
            classNames={"xl:col-span-4 lg:col-span-6 col-span-12"}
            duration={0.35}
          >
            <div
              className={
                "col-span-4 flex items-center gap-x-[24px] p-[18px] bg-[#EFF8F9] rounded-[20px]"
              }
            >
              <Image
                src={"/images/government2.png"}
                alt={"government"}
                width={44}
                height={44}
              />
              <p className={"font-medium text-lg"}>
                O‘zbekiston Respublikasi Hukumat portali
              </p>
            </div>
          </Reveal>

          <Reveal
            classNames={"xl:col-span-4 lg:col-span-6 col-span-12"}
            duration={0.4}
          >
            <div
              className={
                "col-span-4 flex items-center gap-x-[24px] p-[18px] bg-[#EFF8F9] rounded-[20px]"
              }
            >
              <Image
                src={"/images/government3.png"}
                alt={"government"}
                width={44}
                height={44}
              />
              <p className={"font-medium text-lg"}>
                O‘zbekiston Respublikasi Oliy majlisi Qonunchilik palatasi
              </p>
            </div>
          </Reveal>

          <Reveal
            classNames={"xl:col-span-4 lg:col-span-6 col-span-12"}
            duration={0.45}
          >
            <div
              className={
                "col-span-4 flex items-center gap-x-[24px] p-[18px] bg-[#EFF8F9] rounded-[20px]"
              }
            >
              <Image
                src={"/images/government4.png"}
                alt={"government"}
                width={44}
                height={44}
              />
              <p className={"font-medium text-lg"}>
                O‘zbekiston Respublikasi Oliy majlis Senati
              </p>
            </div>
          </Reveal>

          <Reveal
            classNames={"xl:col-span-4 lg:col-span-6 col-span-12"}
            duration={0.55}
          >
            <div
              className={
                "col-span-4 flex items-center gap-x-[24px] p-[18px] bg-[#EFF8F9] rounded-[20px]"
              }
            >
              <Image
                src={"/images/government5.png"}
                alt={"government"}
                width={44}
                height={44}
              />
              <p className={"font-medium text-lg"}>
                Milliy huquqiy internet portali
              </p>
            </div>
          </Reveal>

          <Reveal
            classNames={"xl:col-span-4 lg:col-span-6 col-span-12"}
            duration={0.65}
          >
            <div
              className={
                "col-span-4 flex items-center gap-x-[24px] p-[18px] bg-[#EFF8F9] rounded-[20px]"
              }
            >
              <Image
                src={"/images/government6.png"}
                alt={"government"}
                width={44}
                height={44}
              />
              <p className={"font-medium text-lg"}>
                O‘zbekiston Respublikasi Qonunchilik ma’lumotlari milliy bazasi
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </>
  );
}
