import React from "react";
import Wrapper from "@/layout/wrapper";
import Link from "next/link";
import Image from "next/image";

const Index = () => {
  return (
    <Wrapper>
      <div className={"my-[50px]"}>
        <div
          className={
            "container mx-auto flex italic font-mulish gap-x-[10px] text-[#494949] "
          }
        >
          <Link href={"/"}>
            <p>Bosh sahifa</p>
          </Link>
          <span>/</span>
          <Link href={"/vacancies"}>
            <p> Vakansiyalar</p>
          </Link>
          <span>/</span>
          <p className={"text-[#036874]"}>Lavozim nomi</p>
        </div>

        <div
          className={
            "grid grid-cols-12 gap-x-[30px] container mx-auto font-medium my-[50px]"
          }
        >
          <h1 className={"col-span-12 font-medium text-[32px] font-poppins"}>
            SMM menejer
          </h1>

          <div
            className={
              "col-span-12 flex items-center text-[#037582] gap-x-[30px] font-mulish mb-[50px]"
            }
          >
            <p>Vakansiya</p>
            {/*how many times was seen*/}

            <p className={""}>20.06.2024</p>

            <div className={"flex items-center gap-x-[30px]"}>
              <div className={"flex items-center gap-x-[4px]"}>
                <Image
                  src={"/images/watch.png"}
                  alt={"watch"}
                  width={18}
                  height={18}
                />
                <p>128</p>
              </div>
              {/*when it is deployed*/}
              <div className={"flex items-center gap-x-[4px]"}>
                <Image
                  src={"/images/time.png"}
                  alt={"watch"}
                  width={18}
                  height={18}
                />
                <p>18:24</p>
              </div>
            </div>
          </div>

          <div className={"col-span-8"}>
            <p className={"font-mulish font-medium text-[#494949]"}>
              Ijtimoiy tarmoqlarda e’lon qilish uchun matnli kontent, jumladan,
              postlar, maqolalar, e’lonlar va boshqa materiallarni yaratish,
              Videoroliklar va audio materiallar uchun kreativ g‘oyalar va
              mavzularni tayyorlash, Kontent taqvimini ishlab chiqish va uning
              jadvalini rejalashtirish uchun smm menejer kerak
            </p>

            <div className={"my-[30px]"}>
              <p className={"font-bold font-mulish"}>
                Oylik maosh:{" "}
                <span className={"font-medium"}>6 000 000 so&apos;mdan</span>
              </p>

              <p className={"font-bold font-mulish"}>
                Ish tajribasi: <span className={"font-medium"}>1–3 yil</span>
              </p>

              <p className={"font-bold font-mulish"}>
                To‘liq ish, 1 stavka, 2 ta ish o‘rni
              </p>
            </div>

            <div>
              <div>
                <h2>Vazifalar</h2>
                <ul className={"font-mulish font-medium list-disc ml-[30px]"}>
                  <li>
                    Ijtimoiy uchun kontent strategiyasini ishlab chiqish.
                    tarmoqlar.
                  </li>
                  <li>Tarkibni yaratish, rejalashtirish va nashr etish.</li>
                  <li>
                    Tomoshabinlar bilan o&apos;zaro munosabatlar: sharhlarga
                    javoblar, munozaralarda ishtirok etish. .
                  </li>
                  <li>
                    SMM kampaniyalarining samaradorligini tahlil qilish va
                    olingan ma&apos;lumotlarga asoslangan strategiyani sozlash.
                  </li>
                  <li>
                    Tomoshabinlarning faolligini oshirish uchun tanlovlar,
                    aktsiyalar va boshqa tadbirlarni o&apos;tkazish.
                  </li>
                </ul>
              </div>

              <div className={"my-[30px]"}>
                <h2>Talablar</h2>
                <ul className={"font-mulish font-medium list-disc ml-[30px]"}>
                  <li>SMM tajribasi 1 yildan.</li>
                  <li>Tarkibni yaratish, rejalashtirish va nashr etish.</li>
                  <li>
                    Ajoyib muloqot qobiliyatlari va turli xil ijtimoiy
                    platformalar (Instagram, Facebook, TikTok va boshqalar)
                    bilan ishlash qobiliyati.
                  </li>
                  <li>
                    Tashabbuskorlik, ijodkorlik va rivojlanishga intilish.
                  </li>
                  <li>
                    Tarkibni yaratish va rejalashtirish dasturlarini bilish
                    (masalan, Tuval, Hootsuite).
                  </li>
                  <li>O&apos;zbek va rus tillarini bilish.</li>
                </ul>
              </div>

              <div>
                <h2>Shartlar</h2>
                <ul className={"font-mulish font-medium list-disc ml-[30px]"}>
                  <li>
                    O&apos;zR TK bo&apos;yicha rasmiy ish bilan ta&apos;minlash.
                  </li>
                  <li>Kechiktirmasdan ish haqi.</li>
                  <li>Ish jadvali 5/2.</li>
                  <li>
                    Ish haqi suhbat natijalari bo&apos;yicha muhokama qilinadi.
                  </li>
                  <li>Do&apos;stona va yosh jamoa. .</li>
                  <li>Toshkent shahar markazidagi ofis.</li>
                </ul>
              </div>

              <div className={"mt-[30px]"}>
                <h2>Aloqa</h2>
                <ul className={"list-disc ml-[30px] text-[#00AFC0] "}>
                  <li>
                    <Link
                      href={"#"}
                      className={"text-[#00AFC0] font-medium underline"}
                    >
                      Aloqa uchun
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={"col-span-4"}>
            <div className={"bg-[#EFF8F9] p-[30px] mb-[30px]"}>
              <div className={"flex items-center justify-between"}>
                <h3
                  className={
                    "font-poppins font-medium text-[20px] text-[#494949]"
                  }
                >
                  Boshqa vakansiyalar{" "}
                </h3>

                <Link
                  href={"/vacancies"}
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
                    "bg-white flex flex-col gap-y-[14px] items-start rounded-[10px] p-[10px]"
                  }
                >
                  <div
                    className={
                      "gap-x-[20px] flex font-mulish font-semibold text-[12px] text-[#037582] "
                    }
                  >
                    <p>To’liq ish</p>

                    <p>1 stavka</p>

                    <p>2 ta ish o‘rni</p>
                  </div>

                  <h3 className={"text-sm font-medium font-poppins"}>
                    Lavozim nomi
                  </h3>

                  <div
                    className={
                      "flex items-center float-end gap-x-[10px] text-[#037582] text-[12px] "
                    }
                  >
                    <div className={"flex items-center gap-x-[4px]"}>
                      <Image
                        src={"/images/watch.png"}
                        alt={"watch"}
                        width={18}
                        height={18}
                      />
                      <p>128</p>
                    </div>
                    {/*when it is deployed*/}
                    <div className={"flex items-center gap-x-[4px]"}>
                      <Image
                        src={"/images/time.png"}
                        alt={"watch"}
                        width={18}
                        height={18}
                      />
                      <p>18:24</p>
                    </div>
                    <p>Faol</p>
                  </div>
                </li>

                <li
                  className={
                    "bg-white flex flex-col gap-y-[14px] items-start rounded-[10px] p-[10px]"
                  }
                >
                  <div
                    className={
                      "gap-x-[20px] flex font-mulish font-semibold text-[12px] text-[#037582] "
                    }
                  >
                    <p>To’liq ish</p>

                    <p>1 stavka</p>

                    <p>2 ta ish o‘rni</p>
                  </div>

                  <h3 className={"text-sm font-medium font-poppins"}>
                    Lavozim nomi
                  </h3>

                  <div
                    className={
                      "flex items-center gap-x-[10px] text-[#037582] text-[12px] justify-center"
                    }
                  >
                    <div className={"flex items-center gap-x-[4px]"}>
                      <Image
                        src={"/images/watch.png"}
                        alt={"watch"}
                        width={18}
                        height={18}
                      />
                      <p>128</p>
                    </div>
                    {/*when it is deployed*/}
                    <div className={"flex items-center gap-x-[4px]"}>
                      <Image
                        src={"/images/time.png"}
                        alt={"watch"}
                        width={18}
                        height={18}
                      />
                      <p>18:24</p>
                    </div>
                    <p>Faol</p>
                  </div>
                </li>

                <li
                  className={
                    "bg-white flex flex-col gap-y-[14px] items-start rounded-[10px] p-[10px]"
                  }
                >
                  <div
                    className={
                      "gap-x-[20px] flex font-mulish font-semibold text-[12px] text-[#037582] "
                    }
                  >
                    <p>To’liq ish</p>

                    <p>1 stavka</p>

                    <p>2 ta ish o‘rni</p>
                  </div>

                  <h3 className={"text-sm font-medium font-poppins"}>
                    Lavozim nomi
                  </h3>

                  <div
                    className={
                      "flex items-center gap-x-[10px] text-[#037582] text-[12px] justify-center"
                    }
                  >
                    <div className={"flex items-center gap-x-[4px]"}>
                      <Image
                        src={"/images/watch.png"}
                        alt={"watch"}
                        width={18}
                        height={18}
                      />
                      <p>128</p>
                    </div>
                    {/*when it is deployed*/}
                    <div className={"flex items-center gap-x-[4px]"}>
                      <Image
                        src={"/images/time.png"}
                        alt={"watch"}
                        width={18}
                        height={18}
                      />
                      <p>18:24</p>
                    </div>
                    <p>Faol</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
