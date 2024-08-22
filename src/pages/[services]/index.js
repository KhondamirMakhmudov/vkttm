import React, { useEffect, useState } from "react";
import Wrapper from "@/layout/wrapper";
import { useRouter } from "next/router";
import Title from "@/components/title";
import Reveal from "@/components/reveal";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import EmployeeCard from "@/components/cards/employee";

const Index = () => {
  const router = useRouter();
  const { services } = router.query;
  const [activeTab, setActiveTab] = useState("konsultatsiya");

  const handleTabClick = (tab) => {
    router.push(`/${tab}`);
  };
  useEffect(() => {
    if (services) {
      setActiveTab(services);
    }
  }, [services]);

  return (
    <Wrapper>
      <section>
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
                className={`cursor-pointer ${
                  activeTab === "Konsultatsiya"
                    ? "text-[#00AFC0]"
                    : "text-[#2C3E50]"
                }`}
              >
                <button onClick={() => handleTabClick("konsultatsiya")}>
                  Konsultatsiya
                </button>
              </li>

              <li
                className={`cursor-pointer ${
                  activeTab === "Diagnostika"
                    ? "text-[#00AFC0]"
                    : "text-[#2C3E50]"
                }`}
              >
                <button onClick={() => handleTabClick("diagnostika")}>
                  Diagnostika
                </button>
              </li>

              <li
                className={`cursor-pointer ${
                  activeTab === "Xizmat turi"
                    ? "text-[#00AFC0]"
                    : "text-[#2C3E50]"
                }`}
              >
                <button onClick={() => handleTabClick("xizmat-turi")}>
                  Xizmat turi
                </button>
              </li>
            </ul>
          </div>

          {activeTab === "Konsultatsiya" && (
            <div className={"col-span-9"}>
              <Reveal duration={0.5}>
                <Title>Xizmatlar</Title>
              </Reveal>

              <Reveal duration={0.7}>
                <h4
                  className={"font-mulish font-semibold text-[24px] mt-[30px]"}
                >
                  Konsultatsiya
                </h4>
              </Reveal>
              <Reveal duration={0.8}>
                <section className={"flex gap-x-[30px] my-[20px] "}>
                  <p className={"font-mulish font-normal"}>
                    Bizning ko&apos;p funktsiyali tibbiyot markazimiz yuqori
                    malakali mutaxassislar jamoasi va ilg&apos;or uskunalardan
                    foydalanish orqali tibbiyotning turli sohalarida katta
                    yutuqlarga erishdi. Biz ko&apos;plab murakkab operatsiyalar
                    va protseduralarni muvaffaqiyatli o&apos;tkazdik, bemorlarga
                    tez tiklanish va tiklanish ehtimoli yuqori. Bizning
                    innovatsion diagnostika va davolash dasturlarimiz
                    kasalliklarni dastlabki bosqichlarida aniqlash va davolash
                    imkonini beradi, bu esa bemorlarning prognozlarini sezilarli
                    darajada yaxshilaydi. Shuningdek, biz bemorlarga to&apos;liq
                    hayotga qaytishda jarohatlar va operatsiyalardan xalos
                    bo&apos;lishga yordam beradigan keng qamrovli reabilitatsiya
                    dasturlarini amalga oshirdik.
                  </p>

                  <Image
                    src={"/images/fizioterapiya.png"}
                    alt={"Fizioterapiya"}
                    width={329}
                    height={241}
                  />
                </section>
              </Reveal>
              <Reveal>
                <section className={"bg-[#EFF8F9] p-[20px] mb-[20px]"}>
                  <h4
                    className={
                      "text-[20px] font-mulish font-semibold mb-[20px]"
                    }
                  >
                    Xizmat preskuranti
                  </h4>
                  <ul
                    className={
                      "grid grid-cols-12 gap-x-[30px] p-[10px] list-disc gap-y-[10px]"
                    }
                  >
                    <li
                      className={"col-span-6 flex justify-between font-mulish"}
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur, ipsum dolor sit
                        amet consectetur:
                      </p>
                      <span className={"text-[#037582]"}>100000 so‘m;</span>
                    </li>

                    <li
                      className={"col-span-6 flex justify-between font-mulish"}
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur, ipsum dolor sit
                        amet consectetur:
                      </p>
                      <span className={"text-[#037582]"}>100000 so‘m;</span>
                    </li>

                    <li
                      className={"col-span-6 flex justify-between font-mulish"}
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur, ipsum dolor sit
                        amet consectetur:
                      </p>
                      <span className={"text-[#037582]"}>100000 so‘m;</span>
                    </li>

                    <li
                      className={"col-span-6 flex justify-between font-mulish"}
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur, ipsum dolor sit
                        amet consectetur:
                      </p>
                      <span className={"text-[#037582]"}>100000 so‘m;</span>
                    </li>

                    <li
                      className={"col-span-6 flex justify-between font-mulish"}
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur, ipsum dolor sit
                        amet consectetur:
                      </p>
                      <span className={"text-[#037582]"}>100000 so‘m;</span>
                    </li>
                  </ul>
                </section>
              </Reveal>

              <section className="mb-[50px]">
                <Reveal>
                  <h4
                    className={
                      "text-[20px] font-mulish font-semibold mb-[20px]"
                    }
                  >
                    Xizmat bo‘yicha shifokor va xodimlar
                  </h4>
                </Reveal>

                <Reveal>
                  <Swiper slidesPerView={4.5}>
                    <SwiperSlide>
                      <EmployeeCard position={"Bosh shifokor"} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <EmployeeCard position={"Bosh shifokor"} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <EmployeeCard position={"Bosh shifokor"} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <EmployeeCard position={"Bosh shifokor"} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <EmployeeCard position={"Bosh shifokor"} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <EmployeeCard position={"Bosh shifokor"} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <EmployeeCard position={"Bosh shifokor"} />
                    </SwiperSlide>
                  </Swiper>
                </Reveal>

                <Reveal>
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
              </section>
            </div>
          )}
        </div>
      </section>
    </Wrapper>
  );
};

export default Index;
