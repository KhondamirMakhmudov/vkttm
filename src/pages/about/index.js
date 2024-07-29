import React, { useEffect, useState } from "react";
import Title from "@/components/title";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Image from "next/image";
import { get } from "lodash";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/reveal";
import { useRouter } from "next/router";
import Wrapper from "@/layout/wrapper";
import ManagementCard from "@/components/cards/management";
import { sectionData } from "@/dummy-datas";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Fanlararo hamkorlik",
    description:
      "Sakson ilmiy aloqasi turli xil ilmiy fanlar o'rtasidagi o'zaro ta'sirga yordam beradi, bu esa keng qamrovli tadqiqotlar olib borish va murakkab muammolar uchun innovatsion echimlarni topish imkonini beradi.",
  },
  {
    id: 2,
    title: "Yosh olimlarni qo'llab-quvvatlash",
    description:
      "Tashabbus rivojlanayotgan tadqiqotchilarni grantlar, stipendiyalar va amaliyot imkoniyatlari orqali faol qo'llab-quvvatlaydi, bu esa yangi iste'dodlarni rivojlantirishga va mintaqaning ilmiy salohiyatini oshirishga yordam beradi.",
  },
  {
    id: 3,
    title: "Tadqiqot infratuzilmasini rivojlantirish",
    description:
      "Tashabbus laboratoriyalarni modernizatsiya qilish va yangi tadqiqot markazlarini tashkil etishni o'z ichiga oladi, bu esa olib borilayotgan tadqiqotlar sifati va hajmini oshirishga yordam beradi.",
  },
  {
    id: 4,
    title: "Xalqaro hamkorlik",
    description:
      "Saksoniya ilmiy aloqasi xalqaro ilmiy loyihalar va sherikliklarni rivojlantiradi, bu esa ilmiy nashrlarning sifati va sonini oshirish orqali global darajada bilim va tajriba almashishga yordam beradi.",
  },
  {
    id: 5,
    title: "Sanoat bilan o'zaro aloqalar",
    description:
      "Sakson ilmiy aloqasi universitetlar va sanoat korxonalari o'rtasidagi hamkorlikni rag'batlantiradi, bu esa amaliy tadqiqotlarni rivojlantirishga va ishlab chiqarishda innovatsiyalarni tezlashtirishga yordam beradi.",
  },
  {
    id: 6,
    title: "Ta'lim faoliyati va fanni ommalashtirish",
    description:
      "Dastur ilm-fan va texnologiya yutuqlari to'g'risida jamoatchilik xabardorligini oshirishga qaratilgan ommaviy ma'ruzalar, ilmiy festivallar va boshqa tadbirlarni o'tkazadi, bu esa jamiyatda ilm-fanning ijobiy imidjini shakllantirishga yordam beradi.",
  },
];

const Index = () => {
  const router = useRouter();
  const { tab } = router.query;

  const [activeTab, setActiveTab] = useState("markaz-tuzilmasi");
  const [accordion, setAccordion] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (tab) => {
    router.push(`/about?tab=${tab}`);
  };

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);

  const selectAccordion = (item) => {
    setAccordion(item);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <section className={"bg-white py-[50px]"}>
        <div className={"grid grid-cols-12 gap-x-[30px] container mx-auto"}>
          <div
            className={
              "col-span-3 bg-[#EFF8F9] font-poppins font-medium max-h-[432px]"
            }
          >
            <ul
              className={"flex flex-col gap-y-[20px] p-[50px] text-[#494949]"}
            >
              <li
                className={`cursor-pointer ${activeTab === "markaz-tuzilmasi" ? "text-[#00AFC0]" : "text-[#2C3E50]"}`}
              >
                <button onClick={() => handleTabClick("markaz-tuzilmasi")}>
                  Markaz tuzilmasi
                </button>
              </li>

              <li
                className={`cursor-pointer ${activeTab === "rahbariyat" ? "text-[#00AFC0]" : "text-[#2C3E50]"}`}
              >
                <button onClick={() => handleTabClick("rahbariyat")}>
                  Rahbariyat
                </button>
              </li>

              <li
                className={`cursor-pointer ${activeTab === "Bo‘limlar" ? "text-[#00AFC0]" : "text-[#2C3E50]"}`}
              >
                <button onClick={() => handleTabClick("Bo‘limlar")}>
                  Bo‘limlar
                </button>
              </li>

              <li
                className={`cursor-pointer ${activeTab === "Lavozim majburiyatlari" ? "text-[#00AFC0]" : "text-[#2C3E50]"}`}
              >
                <button
                  onClick={() => handleTabClick("Lavozim majburiyatlari")}
                >
                  Lavozim majburiyatlari
                </button>
              </li>

              <li
                className={`cursor-pointer ${activeTab === "Markaz nizomi" ? "text-[#00AFC0]" : "text-[#2C3E50]"}`}
              >
                <button onClick={() => handleTabClick("Markaz nizomi")}>
                  Markaz nizomi
                </button>
              </li>

              <li
                className={`cursor-pointer ${activeTab === "Markaz faxri" ? "text-[#00AFC0]" : "text-[#2C3E50]"}`}
              >
                <button onClick={() => handleTabClick("Markaz faxri")}>
                  Markaz faxri
                </button>
              </li>

              <li
                className={`cursor-pointer ${activeTab === "Odob-axloq qoidalari" ? "text-[#00AFC0]" : "text-[##2C3E50]"}`}
              >
                <button onClick={() => handleTabClick("Odob-axloq qoidalari")}>
                  Odob-axloq qoidalari
                </button>
              </li>

              <li
                className={`cursor-pointer ${activeTab === "Kasaba uyushmasi" ? "text-[#00AFC0]" : "text-[#2C3E50]"}`}
              >
                <button onClick={() => handleTabClick("Kasaba uyushmasi")}>
                  Kasaba uyushmasi
                </button>
              </li>
            </ul>
          </div>

          {activeTab === "markaz-tuzilmasi" && (
            <div className={"col-span-9"}>
              <Title>Markaz tuzilmasi</Title>

              <Image
                src={"/icons/structure-center.svg"}
                alt={"structure-center"}
                width={1050}
                height={645}
              />
            </div>
          )}
          {activeTab === "rahbariyat" && (
            <div className={"col-span-9"}>
              <Title>Rahbariyat</Title>

              <div className={"flex flex-col gap-y-[50px]"}>
                <ManagementCard position={"Bosh vrach"} />
                <ManagementCard position={"Bosh vrach o‘rinbosari"} />
                <ManagementCard position={"Bo‘lim boshlig‘i"} />
              </div>
            </div>
          )}

          {activeTab === "Bo‘limlar" && (
            <div className={"col-span-9"}>
              <Title>Bo‘limlar</Title>

              <div
                className={
                  "grid grid-cols-9 gap-x-[30px]  gap-y-[30px] mt-[50px]"
                }
              >
                {sectionData.map((item) => (
                  <div
                    key={get(item, "id")}
                    className={
                      "col-span-3 announce-list-shadow rounded-bl-[30px] rounded-tr-[30px]"
                    }
                  >
                    <Image
                      src={`/images/${get(item, "image")}`}
                      alt={"lor"}
                      width={330}
                      height={210}
                    />

                    <p
                      className={
                        "font-poppins font-medium text-center py-[20px]"
                      }
                    >
                      {get(item, "title")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Lavozim majburiyatlari" && (
            <div className={"col-span-9"}>
              <Reveal>
                <Title>Lavozim majburiyatlari</Title>
              </Reveal>

              <motion.div className={"mt-[30px]"}>
                <ul className={"flex flex-col gap-y-[20px]"}>
                  <li>
                    <button
                      onClick={toggleAccordion}
                      className={
                        "bg-[#EFF8F9] cursor-pointer w-full flex justify-between p-[10px] items-center"
                      }
                    >
                      <p className={"font-mulish font-semibold text-[20px]"}>
                        Lavozim nomi
                      </p>
                      <Image
                        src={"/images/up.png"}
                        alt={"up"}
                        width={24}
                        height={24}
                        className={`${!isOpen ? "rotate-180" : "rotate-0"} transition-transform duration-300`}
                      />
                    </button>

                    {!isOpen && (
                      <motion.div
                        initial={{ opacity: 0, translateY: "100px" }}
                        animate={{ opacity: 100, translateY: "0px" }}
                        transition={{ duration: 0.7 }}
                      >
                        <h4
                          className={
                            "font-mulish text-[20px] my-[20px] font-semibold"
                          }
                        >
                          Tibbiyot markazi xodimlarining ish vazifalariga
                          quyidagilar kiradi:
                        </h4>

                        <ul
                          className={
                            "list-disc ml-[30px] font-mulish font-normal"
                          }
                        >
                          <li>
                            Belgilangan davolash standartlari va protokollariga
                            muvofiq bemorlarga malakali tibbiy yordam
                            ko&apos;rsatish.
                          </li>
                          <li>
                            Aniq tashxis qo&apos;yish uchun diagnostika
                            protseduralari, testlar va tibbiy tadqiqotlar
                            o&apos;tkazish.
                          </li>
                          <li>
                            Bemorlarning tibbiy tarixi va xususiyatlarini
                            hisobga olgan holda individual davolash va
                            reabilitatsiya rejalarini ishlab chiqish va amalga
                            oshirish.
                          </li>
                          <li>
                            Davolashning butun davri davomida bemorlarning
                            holatini kuzatish, shuningdek qo&apos;llaniladigan
                            usullar va terapiyalarning samaradorligini baholash.
                          </li>
                          <li>
                            In&apos;ektsiya, kiyinish, manipulyatsiya va boshqa
                            tibbiy manipulyatsiyalarni o&apos;z ichiga olgan
                            tibbiy muolajalarni o&apos;tkazish.
                          </li>
                          <li>
                            Bemorlarni sog&apos;lom turmush tarzi bo&apos;yicha
                            zarur tibbiy maslahatlar va tavsiyalar bilan
                            ta&apos;minlash.
                          </li>
                          <li>
                            Tibbiy yozuvlar va hisobotlarni, shu jumladan
                            bemorlarning ahvoli, protseduralari va
                            tayinlanishlari to&apos;g&apos;risidagi yozuvlarni
                            yuritish.
                          </li>

                          <li>
                            Tibbiy asboblar, dorilar va chiqindilar bilan
                            ishlashda barcha belgilangan xavfsizlik qoidalari va
                            qoidalariga rioya qilish.
                          </li>

                          <li>
                            Tegishli tibbiy mavzular bo&apos;yicha o&apos;quv
                            dasturlari, seminarlar va konferentsiyalarda
                            qatnashish orqali kasbiy rivojlanishda ishtirok
                            etish.
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </li>
                  <li>
                    <button
                      onClick={toggleAccordion}
                      className={
                        "bg-[#EFF8F9] cursor-pointer w-full flex justify-between p-[10px] items-center"
                      }
                    >
                      <p className={"font-mulish font-semibold text-[20px]"}>
                        Lavozim nomi
                      </p>
                      <Image
                        src={"/images/up.png"}
                        alt={"up"}
                        width={24}
                        height={24}
                        className={`${!isOpen ? "rotate-180" : "rotate-0"} transition-transform duration-300`}
                      />
                    </button>

                    {!isOpen && (
                      <motion.div
                        initial={{ opacity: 0, translateY: "100px" }}
                        animate={{ opacity: 100, translateY: "0px" }}
                        transition={{ duration: 0.7 }}
                      >
                        <h4
                          className={
                            "font-mulish text-[20px] my-[20px] font-semibold"
                          }
                        >
                          Tibbiyot markazi xodimlarining ish vazifalariga
                          quyidagilar kiradi:
                        </h4>

                        <ul
                          className={
                            "list-disc ml-[30px] font-mulish font-normal"
                          }
                        >
                          <li>
                            Belgilangan davolash standartlari va protokollariga
                            muvofiq bemorlarga malakali tibbiy yordam
                            ko&apos;rsatish.
                          </li>
                          <li>
                            Aniq tashxis qo&apos;yish uchun diagnostika
                            protseduralari, testlar va tibbiy tadqiqotlar
                            o&apos;tkazish.
                          </li>
                          <li>
                            Bemorlarning tibbiy tarixi va xususiyatlarini
                            hisobga olgan holda individual davolash va
                            reabilitatsiya rejalarini ishlab chiqish va amalga
                            oshirish.
                          </li>
                          <li>
                            Davolashning butun davri davomida bemorlarning
                            holatini kuzatish, shuningdek qo&apos;llaniladigan
                            usullar va terapiyalarning samaradorligini baholash.
                          </li>
                          <li>
                            In&apos;ektsiya, kiyinish, manipulyatsiya va boshqa
                            tibbiy manipulyatsiyalarni o&apos;z ichiga olgan
                            tibbiy muolajalarni o&apos;tkazish.
                          </li>
                          <li>
                            Bemorlarni sog&apos;lom turmush tarzi bo&apos;yicha
                            zarur tibbiy maslahatlar va tavsiyalar bilan
                            ta&apos;minlash.
                          </li>
                          <li>
                            Tibbiy yozuvlar va hisobotlarni, shu jumladan
                            bemorlarning ahvoli, protseduralari va
                            tayinlanishlari to&apos;g&apos;risidagi yozuvlarni
                            yuritish.
                          </li>

                          <li>
                            Tibbiy asboblar, dorilar va chiqindilar bilan
                            ishlashda barcha belgilangan xavfsizlik qoidalari va
                            qoidalariga rioya qilish.
                          </li>

                          <li>
                            Tegishli tibbiy mavzular bo&apos;yicha o&apos;quv
                            dasturlari, seminarlar va konferentsiyalarda
                            qatnashish orqali kasbiy rivojlanishda ishtirok
                            etish.
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </li>
                </ul>
              </motion.div>
            </div>
          )}

          {activeTab === "Markaz nizomi" && (
            <div className={"col-span-9"}>
              <Title>Markaz nizomi</Title>

              <div className={"mt-[30px] flex items-start gap-x-[30px]"}>
                <div
                  className={
                    "bg-[#EFF8F9] w-[570px] h-[630px] flex justify-center items-center"
                  }
                >
                  <p className={"font-mulish font-semibold text-[20px]"}>
                    Nizom PDF
                  </p>
                </div>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 100 }}
                  transition={{ duration: 0.7 }}
                  className={
                    "font-bold hover:bg-[#00CBDE] active:bg-[#009EAC] font-mulish bg-[#00AFC0] py-[9px] px-[18px] rounded-br-[10px] rounded-tl-[10px] text-white transition-all duration-300"
                  }
                >
                  PDF shaklda yuklab olish
                </motion.button>
              </div>
            </div>
          )}

          {activeTab === "Markaz faxri" && (
            <div className={"col-span-9"}>
              <Title>Markaz faxri</Title>
            </div>
          )}

          {activeTab === "Odob-axloq qoidalari" && (
            <div className={"col-span-9"}>
              <Reveal duration={0.46}>
                <Title>Odob-axloq qoidalari</Title>
              </Reveal>

              <Reveal duration={0.5}>
                <h3
                  className={
                    "text-[20px] font-mulish font-semibold mt-[30px] mb-[20px]"
                  }
                >
                  Tibbiyot markazi xodimlari uchun odob-axloq qoidalariga
                  quyidagilar kiradi:
                </h3>
              </Reveal>

              <Reveal duration={0.7}>
                <ul className={"list-disc font-mulish font-normal ml-[30px]"}>
                  <li>
                    Professionallik va hurmat: xodimlar bemorlar, hamkasblar va
                    markazga tashrif buyuruvchilar bilan muloqot qilishda yuqori
                    darajadagi professionallikni namoyish etishlari kerak.
                  </li>
                  <li>
                    Maxfiylik: xodimlar bemorlarning tibbiy
                    ma&apos;lumotlarining qat&apos;iy maxfiyligiga rioya
                    qilishlari va tibbiy zaruratdan tashqari holatlar
                    tafsilotlarini muhokama qilishdan bosh tortishlari shart.
                  </li>
                  <li>
                    Bemorlarga ehtiyotkorlik bilan munosabatda bo&apos;lish: har
                    bir bemorga ularning individual ehtiyojlari va
                    xususiyatlarini hisobga olgan holda ehtiyotkorlik va
                    ehtiyotkorlik bilan munosabatda bo&apos;lish kerak.
                  </li>
                  <li>
                    Axloqiy muvofiqlik: xodimlarning barcha harakatlari
                    bemorlarning ishonchini va ularning huquqlarini buzmasdan
                    yuqori axloqiy me&apos;yorlarga javob berishi kerak.
                  </li>
                  <li>
                    Gigiena standartlari: barcha sog&apos;liqni saqlash
                    xodimlari qat&apos;iy gigiena standartlariga rioya
                    qilishlari kerak, shu jumladan qo&apos;llarni muntazam
                    ravishda dezinfektsiya qilish va kerak bo&apos;lganda himoya
                    vositalaridan foydalanish.
                  </li>

                  <li>
                    Aniqlik va javobgarlik: xodimlar tibbiy amaliyotda xato va
                    tushunmovchiliklardan qochib, o&apos;z vazifalarini aniq va
                    mas&apos;uliyat bilan bajarishlari shart.
                  </li>

                  <li>
                    Aloqa va hamkorlik: muvofiqlashtirishni va yuqori darajadagi
                    tibbiy yordamni ta&apos;minlash uchun hamkasblar bilan ochiq
                    va samarali aloqani saqlash muhimdir.
                  </li>

                  <li>
                    Xilma-xillikni hurmat qilish: xodimlar bemorlarning madaniy
                    va etnik farqlarini, shuningdek, ularning e&apos;tiqodi va
                    shaxsiy e&apos;tiqodlarini hurmat qilishlari kerak.
                  </li>

                  <li>
                    O&apos;z-o&apos;zini rivojlantirish va kasbiy o&apos;sish:
                    xodimlar doimiy kasbiy rivojlanishga, o&apos;quv dasturlari
                    va seminarlarda qatnashishga intilishlari kerak.
                  </li>

                  <li>
                    Hamkasblarni qo&apos;llab-quvvatlash: kollegial ruhni saqlab
                    qolish va qiyin vaziyatlarni hal qilishda va professional
                    qiyinchiliklarni engishda bir-birlariga yordam berishga
                    tayyor bo&apos;lish muhimdir.
                  </li>
                </ul>
              </Reveal>
            </div>
          )}

          {activeTab === "Kasaba uyushmasi" && (
            <div className={"col-span-9"}>
              <Title>Kasaba uyushmasi</Title>

              <div className={"mt-[30px]"}>
                <ManagementCard position={"Direktor"} />

                <motion.div
                  initial={{ opacity: 0, translateY: "100px" }}
                  animate={{ opacity: 100, translateY: "0px" }}
                  transition={{ duration: 0.7 }}
                >
                  <h4
                    className={
                      "font-mulish text-[20px] mb-[20px] mt-[30px] font-semibold"
                    }
                  >
                    Tibbiyot markazidagi kasaba uyushma funktsiyalariga
                    quyidagilar kiradi:
                  </h4>

                  <ul className={"list-disc ml-[30px] font-mulish font-normal"}>
                    <li>
                      Mehnat huquqlarini himoya qilish: kasaba uyushmasi
                      adolatli mehnat sharoitlarini ta&apos;minlash, kamsitish
                      va noqonuniy ishdan bo&apos;shatishdan himoya qilish
                      orqali xodimlarning mehnat qonunchiligi manfaatlarini
                      himoya qiladi.
                    </li>
                    <li>
                      Ijtimoiy kafolatlar va imtiyozlar: u ijtimoiy
                      standartlarni oshirish va tibbiyot markazi xodimlarini
                      turli xil ijtimoiy imtiyozlar bilan ta&apos;minlash uchun
                      ishlaydi, masalan, tibbiy sug&apos;urta, pensiya
                      to&apos;lovlari va boshqa qo&apos;llab-quvvatlash
                      vositalarini taqdim etish.
                    </li>
                    <li>
                      Ish haqini oshirish: kasaba uyushmasi tibbiyot
                      xodimlarining adolatli ish haqini qo&apos;llab-quvvatlaydi
                      va ish haqi va boshqa mukofotlarni oshirish uchun markaz
                      ma&apos;muriyati bilan muzokaralar olib boradi.
                    </li>
                    <li>
                      Kasb-hunar ta&apos;limi va rivojlanishi: u tibbiyot
                      amaliyotining dolzarb mavzularida malaka oshirish kurslari
                      va treninglar o&apos;tkazish orqali xodimlarning kasbiy
                      tayyorgarligi va rivojlanishini tashkil qiladi va
                      qo&apos;llab-quvvatlaydi.
                    </li>
                    <li>
                      Kollektiv vakillik: kasaba uyushmasi o&apos;z
                      a&apos;zolarining manfaatlarini tibbiyot markazi
                      ma&apos;muriyati oldida ifodalaydi, ish sharoitlari va
                      mehnat munosabatlari bilan bog&apos;liq muhim masalalarni
                      hal qilishda jamoaviy ovoz sifatida ishlaydi.
                    </li>
                    <li>
                      Ijtimoiy qo&apos;llab-quvvatlash va yordam: u kasallik
                      yoki baxtsiz hodisa yuz berganda moliyaviy yordam
                      ko&apos;rsatish kabi qiyin hayotiy vaziyatlarda o&apos;z
                      a&apos;zolariga ijtimoiy yordam ko&apos;rsatadi.
                    </li>
                    <li>
                      Qulay ish muhitini yaratishga ko&apos;maklashish: kasaba
                      uyushmasi tibbiyot markazining barcha xodimlarining
                      ehtiyojlari va manfaatlarini hisobga oladigan, jamoaning
                      ma&apos;naviyati va kasbiy ish darajasini oshirishga
                      yordam beradigan qulay ish muhitini yaratishga yordam
                      beradi.
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Wrapper>
  );
};

export default Index;
