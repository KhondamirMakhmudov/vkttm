import React from "react";
import Wrapper from "@/layout/wrapper";
import Reveal from "@/components/reveal";

import Link from "next/link";
import Image from "next/image";

const Index = () => {
  return (
    <Wrapper>
      <section>
        <div className={"grid grid-cols-12 gap-x-[30px] container mx-auto"}>
          <div className={"col-span-12 my-[50px]"}>
            <Reveal>
              <h2 className={"font-poppins font-medium text-[32px] "}>
                Amerika qo’shma shtatlari
              </h2>
            </Reveal>
          </div>

          <div className={"col-span-8"}>
            <h4 className={"font-mulish font-semibold text-[24px] mb-[30px]"}>
              Hamkorlik haqida
            </h4>

            <p className={"font-mulish font-medium mb-[30px]"}>
              Ko&apos;p funktsiyali tibbiyot markazining xalqaro bo&apos;limi
              chet ellik bemorlarga ixtisoslashtirilgan xizmat va yordam
              ko&apos;rsatadi. U turli mamlakatlardan kelgan bemorlar uchun
              diagnostika, davolash va reabilitatsiyani tashkil etish orqali
              tibbiy turizmni muvofiqlashtirish bilan shug&apos;ullanadi.
              Bo&apos;lim bemorlar va tibbiyot xodimlari o&apos;rtasida qulay
              yashash va samarali muloqotni ta&apos;minlash uchun tarjima va
              madaniy moslashuv xizmatlarini taqdim etadi. Bo&apos;lim xodimlari
              tibbiy hujjatlarni rasmiylashtirish, vizalarni
              qo&apos;llab-quvvatlash va logistika, shu jumladan bemorlarni
              kutib olish va qo&apos;llab-quvvatlashda yordam berishadi. Xalqaro
              bo&apos;lim, shuningdek, tajriba almashish va ilg&apos;or tibbiy
              texnologiyalar va amaliyotlarni joriy etish imkonini beruvchi
              xorijiy tibbiyot muassasalari bilan hamkorlikni yo&apos;lga
              qo&apos;yish bilan shug&apos;ullanadi.
            </p>

            <h5 className={"font-mulish font-bold mb-[30px]"}>
              Hamkorlik yo’nalishlari
            </h5>
            <ul className={"font-mulish font-normal list-decimal ml-[30px]"}>
              <li>
                Texnologik Yordam va Innovatsiyalar Belarus Respublikasi
                tibbiyot sohasida ilg’or texnologiyalar va innovatsiyalarni
                joriy etgan mamlakatlardan biridir. Samarqand viloyat ko’p
                tarmoqli tibbiyot markazi Belarusning ilg’or tibbiy uskunalarini
                sotib olish va ulardan foydalanish imkoniyatiga ega bo’ldi. Bu
                orqali markazda ko’plab yangi diagnostika va davolash usullari
                joriy qilindi.
              </li>
              <li>
                Mutaxassislar Almashinuvi va Malaka Oshirish Ikki davlat
                o’rtasida mutaxassislar almashinuvi yo’lga qo’yilgan. Belarusdan
                kelgan mutaxassislar Samarqandda zamonaviy tibbiyot yutuqlarini
                o’rgatishdi va amaliy mashg’ulotlar o’tkazishdi. Shuningdek,
                Samarqand viloyatining malakali tibbiyot xodimlari Belorusda
                tajriba orttirish va malaka oshirish imkoniyatiga ega bo’ldilar.
              </li>
              <li>
                Farmatsevtika Sohasida Hamkorlik Samarqand viloyat ko’p tarmoqli
                tibbiyot markazi va Belarus farmatsevtika kompaniyalari
                o’rtasida dori-darmon ta’minoti bo’yicha kelishuvlar imzolangan.
                Bu, O’zbekistonda yuqori sifatli va arzon dori-darmonlarning
                mavjudligini oshirishga yordam berdi.
              </li>
              <li>
                Davolash va Diagnostika Belarus Respublikasi bilan hamkorlik
                doirasida Samarqand viloyat ko’p tarmoqli tibbiyot markazida
                yangi davolash va diagnostika markazlari tashkil etildi. Ushbu
                markazlar zamonaviy tibbiy uskunalar bilan jihozlangan bo’lib,
                aholiga yuqori sifatli tibbiy xizmat ko’rsatmoqda.
              </li>
            </ul>

            <h5 className={"font-mulish font-bold my-[30px]"}>Memorandumlar</h5>

            <ul className={"flex gap-x-[30px] mb-[50px]"}>
              <li>
                <Image
                  src={"/images/memorendum1.png"}
                  alt={"memorendum1"}
                  width={290}
                  height={370}
                />
              </li>

              <li>
                <Image
                  src={"/images/memorendum2.png"}
                  alt={"memorendum1"}
                  width={290}
                  height={370}
                />
              </li>

              <li>
                <Image
                  src={"/images/memorendum3.png"}
                  alt={"memorendum1"}
                  width={290}
                  height={370}
                />
              </li>
            </ul>
          </div>

          <div className={"col-span-4"}>
            <div className={"bg-[#EFF8F9] p-[30px] mb-[30px]"}>
              <div className={"flex items-center justify-between"}>
                <h3
                  className={
                    "font-poppins font-medium text-[20px] text-[#494949]"
                  }
                >
                  Xalqaro bo‘lim yangiliklari
                </h3>

                <Link
                  href={"#"}
                  className={
                    "text-sm font-poppins text-[#037582] font-normal flex hover:translate-x-[2px] transition-all duration-300"
                  }
                >
                  Barchasi
                  <Image
                    src={"/images/arrow-right.png"}
                    alt={"arrow-right"}
                    width={18}
                    height={18}
                  />
                </Link>
              </div>

              <ul className={"mt-[16px] flex flex-col gap-y-[16px]"}>
                <li
                  className={
                    "bg-white flex gap-x-[10px] items-start rounded-[10px] p-[10px]"
                  }
                >
                  <Image
                    src={"/images/img3.png"}
                    alt={"img3"}
                    width={170}
                    height={120}
                    className={"rounded-[8px]"}
                  />

                  <div>
                    <p
                      className={
                        "font-semibold font-mulish text-[12px] text-[#037582] mb-[14px]"
                      }
                    >
                      20.06.2024
                    </p>

                    <p className={"font-poppins text-sm font-normal"}>
                      Samarqand viloyat ko’p tarmoqli tibbiyot markazi va
                      Belorusiya hamkorligi...
                    </p>
                  </div>
                </li>
                <li
                  className={
                    "bg-white flex gap-x-[10px] items-start rounded-[10px] p-[10px]"
                  }
                >
                  <Image
                    src={"/images/img3.png"}
                    alt={"img3"}
                    width={170}
                    height={120}
                    className={"rounded-[8px]"}
                  />

                  <div>
                    <p
                      className={
                        "font-semibold font-mulish text-[12px] text-[#037582] mb-[14px]"
                      }
                    >
                      20.06.2024
                    </p>

                    <p className={"font-poppins text-sm font-normal"}>
                      Samarqand viloyat ko’p tarmoqli tibbiyot markazi va
                      Belorusiya hamkorligi...
                    </p>
                  </div>
                </li>
                <li
                  className={
                    "bg-white flex gap-x-[10px] items-start rounded-[10px] p-[10px]"
                  }
                >
                  <Image
                    src={"/images/img3.png"}
                    alt={"img3"}
                    width={170}
                    height={120}
                    className={"rounded-[8px]"}
                  />

                  <div>
                    <p
                      className={
                        "font-semibold font-mulish text-[12px] text-[#037582] mb-[14px]"
                      }
                    >
                      20.06.2024
                    </p>

                    <p className={"font-poppins text-sm font-normal"}>
                      Samarqand viloyat ko’p tarmoqli tibbiyot markazi va
                      Belorusiya hamkorligi...
                    </p>
                  </div>
                </li>
                <li
                  className={
                    "bg-white flex gap-x-[10px] items-start rounded-[10px] p-[10px]"
                  }
                >
                  <Image
                    src={"/images/img3.png"}
                    alt={"img3"}
                    width={170}
                    height={120}
                  />

                  <div>
                    <p
                      className={
                        "font-semibold font-mulish text-[12px] text-[#037582] mb-[14px]"
                      }
                    >
                      20.06.2024
                    </p>

                    <p className={"font-poppins text-sm font-normal"}>
                      Samarqand viloyat ko’p tarmoqli tibbiyot markazi va
                      Belorusiya hamkorligi...
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Index;
