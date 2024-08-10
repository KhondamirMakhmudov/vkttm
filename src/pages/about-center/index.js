import React from "react";
import Wrapper from "@/layout/wrapper";
import Title from "@/components/title";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Reveal from "@/components/reveal";
import RevealLeft from "@/components/reveal/revealLeft";
import RevealRight from "@/components/reveal/revealRight";
import Link from "next/link";

const Index = () => {
  return (
    <Wrapper>
      <section className={"bg-[#EFF8F9] py-[70px]"}>
        <div className={"grid grid-cols-12 gap-x-[30px] container mx-auto"}>
          <div className={"col-span-6"}>
            <RevealLeft>
              <Title>Markaz haqida</Title>

              <p
                className={
                  "font-mulish xl:text-[20px] lg:text-[18px] font-normal my-[30px]"
                }
              >
                Ko&apos;p funktsiyali tibbiyot markazi bir joyda keng
                ko&apos;lamli tibbiy xizmatlarni taqdim etadi, bu esa tashxis
                qo&apos;yish va davolashni bemorlar uchun qulay va samarali
                qiladi. Turli xil profillar va zamonaviy uskunalar bo&apos;yicha
                mutaxassislarning mavjudligi keng qamrovli tekshiruvlarni
                o&apos;tkazishga va davolanishga har tomonlama yondashuvni
                ta&apos;minlashga imkon beradi. Bundan tashqari, bunday
                markazlar ko&apos;pincha turli sohalardagi mutaxassislar
                o&apos;rtasida doimiy bilim va tajriba almashinuvi tufayli
                yuqori sifatli tibbiy yordamni taklif qilishadi.
              </p>
            </RevealLeft>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ duration: 0.7 }}
              className={
                "font-bold hover:bg-[#00CBDE] active:bg-[#009EAC] font-mulish bg-[#00AFC0] py-[9px] px-[58px] rounded-br-[10px] rounded-tl-[10px] text-white transition-all duration-300"
              }
            >
              <Link href={"/about"}>To‘liq o‘qish</Link>
            </motion.button>
          </div>

          <div className={"col-span-6"}>
            <RevealRight>
              <Image
                src={"/images/about-center.png"}
                alt={"about-center"}
                width={690}
                height={380}
              />
            </RevealRight>
          </div>
        </div>
      </section>

      <section className={"bg-white py-[50px]"}>
        <Reveal>
          <div className={"grid grid-cols-12 gap-x-[30px] container mx-auto"}>
            <div className={"col-span-12 text-center"}>
              <Title>Raqamlar</Title>

              <div
                className={
                  "flex gap-x-[30px] about-center-shadow rounded-bl-[50px] rounded-tr-[50px] py-[50px] mt-[30px]"
                }
              >
                <div
                  className={
                    "flex flex-col gap-y-[10px] justify-center items-center p-[30px]"
                  }
                >
                  <h2
                    className={
                      "text-[64px] font-semibold font-poppins flex gap-x-[10px] text-[#037582]"
                    }
                  >
                    <CountUp end={130} duration={5} />
                    <span className={"!text-[#00AFC0]"}>+</span>
                  </h2>

                  <h4 className={"font-mulish font-semibold text-[24px] "}>
                    Jamoa a’zolari
                  </h4>

                  <p className={"text-center font-mulish flex-1"}>
                    O‘z ishini fidoyi va katta yutuqlarga erishgan malakali
                    shifokor va xodimlar faoliyat yuritadi
                  </p>
                </div>

                <div
                  className={
                    "flex flex-col gap-y-[10px] justify-center items-center p-[30px]"
                  }
                >
                  <h2
                    className={
                      "text-[64px] font-semibold font-poppins flex gap-x-[10px] text-[#037582]"
                    }
                  >
                    <CountUp end={90} duration={5} />
                    <span className={"!text-[#00AFC0]"}>+</span>
                  </h2>

                  <h4 className={"font-mulish font-semibold text-[24px] "}>
                    Ilmiy darajali xodimlar
                  </h4>

                  <p className={"text-center font-mulish flex-1"}>
                    Markazlar yuqori ilmiy darajalarga ega, tibbiyot fanlari
                    doktorlari va nomzodlari, tibbiyot va sog&apos;liqni saqlash
                    magistr darajalari
                  </p>
                </div>

                <div
                  className={
                    "flex flex-col gap-y-[10px] justify-center items-center p-[30px]"
                  }
                >
                  <h2
                    className={
                      "text-[64px] font-semibold font-poppins flex gap-x-[10px] text-[#037582]"
                    }
                  >
                    <CountUp end={20} duration={5} />
                    <span className={"!text-[#00AFC0]"}>+</span>
                  </h2>

                  <h4 className={"font-mulish font-semibold text-[24px] "}>
                    Bo‘limlar
                  </h4>

                  <p className={"text-center font-mulish flex-1"}>
                    Har bir bo&apos;lim zamonaviy uskunalar va yuqori malakali
                    mutaxassislar bilan jihozlangan bo&apos;lib, bemorlarga
                    sifatli tibbiy yordam ko&apos;rsatishga imkon beradi.
                  </p>
                </div>

                <div
                  className={
                    "flex flex-col gap-y-[10px] justify-center items-center p-[30px]"
                  }
                >
                  <h2
                    className={
                      "text-[64px] font-semibold font-poppins flex gap-x-[10px] text-[#037582]"
                    }
                  >
                    <CountUp end={2400} duration={3} />
                    <span className={"!text-[#00AFC0]"}>+</span>
                  </h2>

                  <h4 className={"font-mulish font-semibold text-[24px] "}>
                    Markaz quvvat
                  </h4>

                  <p className={"text-center font-mulish flex-1"}>
                    Bir vaqtda bemorlarni tashxislash, davolash va
                    reabilitatsiya qilishni o&apos;z ichiga olgan yuqori sifatli
                    va keng qamrovli tibbiy yordam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={"bg-white py-[50px]"}>
        <div className={"grid grid-cols-12 gap-x-[30px] container mx-auto"}>
          <Reveal classNames={"col-span-12"}>
            <Title>Muvaffaqiyatlar</Title>
          </Reveal>
        </div>

        <div
          className={
            "grid grid-cols-12 gap-x-[30px] container mx-auto my-[50px]"
          }
        >
          <div className={"col-span-4"}>
            <RevealLeft>
              <Image
                src={"/images/about-center1.png"}
                alt={"about-center1"}
                width={450}
                height={330}
              />
            </RevealLeft>
          </div>

          <div className={"col-span-8"}>
            <RevealRight>
              <h3 className={"font-poppins font-medium text-[24px] mb-[20px]"}>
                Bizning ko&apos;p funktsiyali tibbiyot markazimiz sog&apos;liqni
                saqlash sohasida katta yutuqlarga erishdi, bu bizning
                mutaxassislarimizning professionalligi va zamonaviy
                texnologiyalari tufayli bemorlarga yuqori sifatli davolanish va
                tez tiklanish imkonini beradi.
              </h3>

              <p className={"font-mulish font-normal"}>
                Bizning ko&apos;p funktsiyali tibbiyot markazimiz yuqori
                malakali mutaxassislar jamoasi va ilg&apos;or uskunalardan
                foydalanish orqali tibbiyotning turli sohalarida katta
                yutuqlarga erishdi. Biz ko&apos;plab murakkab operatsiyalar va
                protseduralarni muvaffaqiyatli o&apos;tkazdik, bemorlarga tez
                tiklanish va tiklanish ehtimoli yuqori. Bizning innovatsion
                diagnostika va davolash dasturlarimiz kasalliklarni dastlabki
                bosqichlarida aniqlash va davolash imkonini beradi, bu esa
                bemorlarning prognozlarini sezilarli darajada yaxshilaydi.
                Shuningdek, biz bemorlarga to&apos;liq hayotga qaytishda
                jarohatlar va operatsiyalardan xalos bo&apos;lishga yordam
                beradigan keng qamrovli reabilitatsiya dasturlarini amalga
                oshirdik. Bemorlarimizning yuqori darajadagi qoniqishi, ishonchi
                va ijobiy sharhlari sifatli va samarali sog&apos;liqni saqlash
                xizmatlarini ko&apos;rsatadigan etakchi sog&apos;liqni saqlash
                markazlaridan biri sifatida obro&paos; - e&apos;tiborimizni
                qo&apos;llab-quvvatlaydi.
              </p>
            </RevealRight>
          </div>
        </div>
        <div
          className={
            "grid grid-cols-12 gap-x-[30px] container mx-auto my-[50px]"
          }
        >
          <RevealLeft classNameTop={"col-span-8"}>
            <ul
              className={
                "col-span-8 list-disc ml-[30px] font-medium font-mulish"
              }
            >
              <li>
                Tez tiklanish va bemorlarning tiklanish ehtimoli yuqori
                bo&apos;lgan ko&apos;plab murakkab operatsiyalar va
                protseduralarni muvaffaqiyatli amalga oshirish.
              </li>
              <li>
                Kasalliklarni dastlabki bosqichlarida aniqlash va davolash
                imkonini beruvchi innovatsion diagnostika va davolash
                dasturlarini joriy etish.
              </li>
              <li>
                Jarohatlar va operatsiyalardan keyin bemorlarni samarali
                tiklashga yordam beradigan keng qamrovli reabilitatsiya
                dasturlarini ishlab chiqish va qo&apos;llash.
              </li>
              <li>
                Ijobiy sharhlar va markazga bo&apos;lgan ishonch bilan
                tasdiqlangan bemorlarning yuqori qoniqish darajasi.
              </li>
              <li>
                Tibbiy yordam sifatini yaxshilash uchun ilg&apos;or tibbiy
                asbob-uskunalar va zamonaviy texnologiyalardan foydalanish.
              </li>
              <li>
                Sog&apos;liqni saqlashning yuqori standartlarini
                ta&apos;minlaydigan mutaxassislar guruhini doimiy ravishda
                kasbiy rivojlantirish va o&apos;qitish.
              </li>
              <li>
                Markazning sog&apos;liqni saqlash sohasidagi etakchiligini
                tasdiqlovchi tibbiyot hamjamiyati va sheriklarining tan olinishi
                va ishonchi.
              </li>
            </ul>
          </RevealLeft>

          <div className={"col-span-4"}>
            <RevealRight>
              <Image
                src={"/images/about-center2.png"}
                alt={"about-center1"}
                width={450}
                height={330}
              />
            </RevealRight>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Index;
