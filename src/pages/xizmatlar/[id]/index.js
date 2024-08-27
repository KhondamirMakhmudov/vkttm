import Wrapper from "@/layout/wrapper";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import useGetQuery from "@/hooks/api/useGetQuery";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import parse from "html-react-parser";
import SlideNextButton from "@/components/slideButtons/next";
import SlidePreviousButton from "@/components/slideButtons/previous";
import EmployeeCard from "@/components/cards/employee";
import { get, isEmpty } from "lodash";
import Title from "@/components/title";
import Image from "next/image";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: services } = useGetQuery({
    key: KEYS.services,
    url: URLS.services,
  });
  const { data: service } = useGetQuery({
    key: [KEYS.services, id],
    url: `${URLS.services}${id}`,
    enabled: !!id,
  });

  return (
    <Wrapper>
      <section className={"bg-white py-[50px]"}>
        <div className={"grid grid-cols-12 gap-x-[30px] container mx-auto"}>
          <motion.div
            initial={{ opacity: 0, translateX: "-100px" }}
            animate={{ opacity: 100, translateX: "0px" }}
            transition={{ duration: 0.5 }}
            className={
              "col-span-3 bg-[#EFF8F9] font-poppins font-medium max-h-[432px]"
            }
          >
            <ul
              className={"flex flex-col gap-y-[20px] p-[50px] text-[#494949]"}
            >
              {get(services, "data.results", []).map((item) => (
                <li
                  key={get(item, "id")}
                  className={`cursor-pointer ${
                    id == get(item, "id") ? "text-[#00AFC0]" : "text-[#2C3E50]"
                  }`}
                >
                  <Link href={`/xizmatlar/${get(item, "id")}`}>
                    {get(item, "service_title")}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: "-100px" }}
            animate={{ opacity: 100, translateX: "0px" }}
            transition={{ duration: 0.5 }}
            className="col-span-9"
          >
            <div className={"col-span-9"}>
              <Reveal duration={0.5}>
                <Title>Xizmatlar</Title>
              </Reveal>

              <Reveal duration={0.7}>
                <h4
                  className={"font-mulish font-semibold text-[24px] mt-[30px]"}
                >
                  {get(service, "data.service_title")}
                </h4>
              </Reveal>
              <Reveal duration={0.8}>
                <section className={"flex gap-x-[30px] my-[20px] "}>
                  <p className={"font-mulish font-normal"}>
                    {get(service, "data.service_text")}
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
                  <div className="font-mulish p-[20px]">
                    {parse(
                      get(
                        service,
                        "data.service_price",
                        "here will be information soon!"
                      )
                    )}
                  </div>
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
                    {isEmpty(get(service, "data.department_doctors", [])) ? (
                      <p className="bg-[#EFF8F9] py-2 px-2 font-mulish font-medium text-lg">
                        Bu yerga ma&apos;lumot tez orada joylanadi. 😉
                      </p>
                    ) : (
                      get(department, "data.department_doctors", []).map(
                        (item) => (
                          <SwiperSlide key={get(item, "id")}>
                            <EmployeeCard
                              id={get(item, "id")}
                              position={get(item, "position.position_title")}
                              fullname={get(item, "doctor_fullname")}
                            />
                          </SwiperSlide>
                        )
                      )
                    )}

                    <Reveal duration={0.3}>
                      <div className="flex gap-x-[20px] mt-[20px]">
                        <SlidePreviousButton />
                        <SlideNextButton />
                      </div>
                    </Reveal>
                  </Swiper>
                </Reveal>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Index;
