import React from "react";
import Wrapper from "@/layout/wrapper";
import Link from "next/link";
import Image from "next/image";

import News from "@/components/cards/news";
const Index = () => {
  return (
    <Wrapper>
      <div
        className={
          "container mx-auto flex italic font-mulish gap-x-[10px] text-[#494949] mt-[50px]"
        }
      >
        <Link href={"/"}>
          <p>Bosh sahifa</p>
        </Link>
        <span>/</span>
        <Link href={"/announcements"}>
          <p>Barcha yangiliklar</p>
        </Link>
        <span>/</span>
        <p className={"text-[#036874]"}>
          Samarqand viloyat ko’p tarmoqli tibbiyot markazi{" "}
        </p>
      </div>

      <div
        className={
          "grid grid-cols-12 gap-x-[30px] container mx-auto font-medium my-[50px]"
        }
      >
        <h1 className={"col-span-12 font-poppins text-[32px] mb-[16px]"}>
          Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belorusiya
          hamkorligi tibbiyot markazi va Belorusiya hamkorligi Samarqand viloyat
          ko’p tarmoqli tibbiyot markazi va Belorusiya hamkorligi tibbiyot
          markazi va Belorusiya hamkorligi
        </h1>

        <div
          className={
            "col-span-12 flex items-center text-[#037582] gap-x-[50px] font-mulish mb-[50px]"
          }
        >
          <p>Yangilik</p>
          {/*how many times was seen*/}

          <p className={""}>20.06.2024</p>

          <div className={"flex items-center gap-x-[15px]"}>
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
          <Image
            src={"/images/announce_id.png"}
            alt={"announce_id"}
            width={930}
            height={532}
            priority={true}
          />

          <p className={"my-[30px] !font-medium text-[#2C3E50]"}>
            Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belarus
            Respublikasi o’rtasidagi hamkorlik so’nggi yillarda yangi bosqichga
            ko’tarilib, ikki davlatning tibbiyot sohasidagi aloqalarini
            mustahkamlashga xizmat qilmoqda. Ushbu hamkorlikning asosiy
            jihatlari va yutuqlari quyidagilardan iborat:
          </p>

          <div className={"mb-[30px]"}>
            <h5 className={"font-mulish font-bold"}>Hamkorlik yo’nalishlari</h5>
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
          </div>
          <div className={"mb-[50px]"}>
            <h5 className={"font-mulish font-bold"}>
              Hamkorlikning Natijalari
            </h5>
            <ul className={"font-mulish font-normal list-decimal ml-[30px]"}>
              <li>
                Sifatli Tibbiy Xizmatlarning Oshishi Samarqand viloyat ko’p
                tarmoqli tibbiyot markazi Belarus bilan hamkorlik natijasida
                zamonaviy uskunalar va texnologiyalarni joriy qildi. Bu esa
                aholiga ko’rsatilayotgan tibbiy xizmatlar sifatini oshirdi va
                davolash samaradorligini yaxshiladi.
              </li>
              <li>
                Tibbiy Kadrlarning Malakasini Oshirish Samarqand viloyati
                tibbiyot xodimlari Belarusda malaka oshirib, zamonaviy tibbiyot
                yutuqlarini o’rganish imkoniyatiga ega bo’ldilar. Bu esa, o’z
                navbatida, ular tomonidan ko’rsatiladigan tibbiy xizmatlarning
                sifatini oshirishga xizmat qildi.
              </li>
              <li>
                Farmatsevtika Bozorining Kengayishi Belarus farmatsevtika
                kompaniyalari bilan hamkorlik qilish natijasida Samarqand
                viloyati aholisi uchun dori-darmonlar arzon va keng ko’lamda
                mavjud bo’ldi. Bu, aholi sog’lig’ini yaxshilashga yordam berdi.
              </li>
              <li>
                Yangi Loyihalar va Kelishuvlar Ikki davlat o’rtasidagi hamkorlik
                doirasida yangi loyihalar va kelishuvlar amalga oshirilib,
                tibbiyot sohasidagi hamkorlik yanada mustahkamlanmoqda. Bu,
                kelajakda tibbiyot markazining yanada rivojlanishiga zamin
                yaratadi.
              </li>
            </ul>
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
                Sog‘lom bo‘lish uchun{" "}
              </h3>

              <Link
                href={"/to-be-healthy"}
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
                  src={"/images/health1.png"}
                  alt={"health1"}
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
                    Boshi tez-tez ogʼrib turadigan insonlarga tavsiya
                  </p>
                </div>
              </li>
              <li
                className={
                  "bg-white flex gap-x-[10px] items-start rounded-[10px] p-[10px]"
                }
              >
                <Image
                  src={"/images/health2.png"}
                  alt={"health2"}
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
                    Boshi tez-tez ogʼrib turadigan insonlarga tavsiya
                  </p>
                </div>
              </li>
              <li
                className={
                  "bg-white flex gap-x-[10px] items-start rounded-[10px] p-[10px]"
                }
              >
                <Image
                  src={"/images/health3.png"}
                  alt={"health3"}
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
                    Boshi tez-tez ogʼrib turadigan insonlarga tavsiya
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className={"bg-[#EFF8F9] p-[30px]"}>
            <div className={"flex items-center justify-between"}>
              <h3
                className={
                  "font-poppins font-medium text-[20px] text-[#494949]"
                }
              >
                E’lonlar
              </h3>

              <Link
                href={"/announcements"}
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

        <div className={"col-span-12"}>
          <h2 className={"text-[24px] font-semibold font-poppins mb-[30px]"}>
            Boshqa yangiliklar
          </h2>
        </div>
        <div className={`col-span-4 `}>
          <div
            className={
              " max-w-[450px]  flex-col max-h-[640px] shadow-lg p-[30px]  rounded-bl-[30px] rounded-tr-[30px]"
            }
          >
            <Image
              src={`/images/img3.png`}
              alt={"img3"}
              width={390}
              height={300}
              objectFit={"cover"}
              className={"object-cover  mb-[20px]"}
            />
            <div className={"text-sm text-[#037582] flex justify-between"}>
              <p className={"font-mulish text-sm  "}>Yangilik</p>
              <div className={"flex gap-x-[10px]"}>
                {/*how many times was seen*/}
                <div className={"flex gap-x-[4px]"}>
                  <Image
                    src={"/images/watch.png"}
                    alt={"watch"}
                    width={18}
                    height={18}
                  />
                  <p>128</p>
                </div>
                <p className={"font-mulish text-sm  "}>20.06.2024</p>
                {/*when it is deployed*/}
                <div className={"flex gap-x-[4px]"}>
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

            <Link href={"/news/id2"}>
              <h2
                className={
                  "font-poppins text-[18px] hover:text-[#00AFC0] text-[#2C3E50] font-semibold mt-[20px] flex-1 line-clamp-2 transition-all duration-200"
                }
              >
                Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belorusiya
                hamkorligi
              </h2>
            </Link>
          </div>
        </div>
        <div className={`col-span-4 `}>
          <div
            className={
              " max-w-[450px]  flex-col max-h-[640px] shadow-lg p-[30px]  rounded-bl-[30px] rounded-tr-[30px]"
            }
          >
            <Image
              src={`/images/img3.png`}
              alt={"img3"}
              width={390}
              height={300}
              objectFit={"cover"}
              className={"object-cover  mb-[20px]"}
            />
            <div className={"text-sm text-[#037582] flex justify-between"}>
              <p className={"font-mulish text-sm  "}>Yangilik</p>
              <div className={"flex gap-x-[10px]"}>
                {/*how many times was seen*/}
                <div className={"flex gap-x-[4px]"}>
                  <Image
                    src={"/images/watch.png"}
                    alt={"watch"}
                    width={18}
                    height={18}
                  />
                  <p>128</p>
                </div>
                <p className={"font-mulish text-sm  "}>20.06.2024</p>
                {/*when it is deployed*/}
                <div className={"flex gap-x-[4px]"}>
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

            <Link href={"/news/id2"}>
              <h2
                className={
                  "font-poppins text-[18px] hover:text-[#00AFC0] text-[#2C3E50] font-semibold mt-[20px] flex-1 line-clamp-2 transition-all duration-200"
                }
              >
                Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belorusiya
                hamkorligi
              </h2>
            </Link>
          </div>
        </div>
        <div className={`col-span-4 `}>
          <div
            className={
              " max-w-[450px]  flex-col max-h-[640px] shadow-lg p-[30px]  rounded-bl-[30px] rounded-tr-[30px]"
            }
          >
            <Image
              src={`/images/img3.png`}
              alt={"img3"}
              width={390}
              height={300}
              objectFit={"cover"}
              className={"object-cover  mb-[20px]"}
            />
            <div className={"text-sm text-[#037582] flex justify-between"}>
              <p className={"font-mulish text-sm  "}>Yangilik</p>
              <div className={"flex gap-x-[10px]"}>
                {/*how many times was seen*/}
                <div className={"flex gap-x-[4px]"}>
                  <Image
                    src={"/images/watch.png"}
                    alt={"watch"}
                    width={18}
                    height={18}
                  />
                  <p>128</p>
                </div>
                <p className={"font-mulish text-sm  "}>20.06.2024</p>
                {/*when it is deployed*/}
                <div className={"flex gap-x-[4px]"}>
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

            <Link href={"/news/id2"}>
              <h2
                className={
                  "font-poppins text-[18px] hover:text-[#00AFC0] text-[#2C3E50] font-semibold mt-[20px] flex-1 line-clamp-2 transition-all duration-200"
                }
              >
                Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belorusiya
                hamkorligi
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
