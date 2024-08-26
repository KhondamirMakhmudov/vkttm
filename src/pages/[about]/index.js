import React, { useEffect, useState } from "react";
import Title from "@/components/title";
import Head from "next/head";
import Image from "next/image";
import { get, isNull } from "lodash";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/reveal";
import { useRouter } from "next/router";
import Wrapper from "@/layout/wrapper";
import ManagementCard from "@/components/cards/management";
import { sectionData } from "@/dummy-datas";
import PrideOfCenter from "@/components/cards/prideOfCenter";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import parse from "html-react-parser";
import ContentLoader from "@/components/content-loader";

const Index = () => {
  const [activeTab, setActiveTab] = useState("markaz-tuzilmasi");
  const [accordion, setAccordion] = useState(1);
  const [isOpen, setIsOpen] = useState("");
  const router = useRouter();
  const { about } = router.query;
  const {
    data: structureOfCenter,
    isLoading: isLoadingStructureOfCenter,
    isFetching: isFetchingStructureOfCenter,
  } = useGetQuery({
    key: KEYS.structureOfCenter,
    url: URLS.structureOfCenter,
  });
  const {
    data: aboutCenter,
    isLoadingAboutCenter,
    isFetchingAboutCenter,
  } = useGetQuery({ key: KEYS.aboutCenter, url: URLS.aboutCenter });

  const { data: managers, isLoading: isLoadingManagers } = useGetQuery({
    key: KEYS.managers,
    url: URLS.managers,
  });

  const { data: veterans, isLoading: isLoadingVeterans } = useGetQuery({
    key: KEYS.veterans,
    url: URLS.veterans,
  });

  const {
    data: positionResponsibilities,
    isLoading: isLoadingPositionResponsibilities,
  } = useGetQuery({
    key: KEYS.positionResponsibilities,
    url: URLS.positionResponsibilities,
  });

  const { data: departments, isLoading: isLoadingDepartments } = useGetQuery({
    key: KEYS.departments,
    url: URLS.departments,
  });

  const {
    data: etiquettesPage,
    isLoading: isLoadingEtiquettesPage,
    isFetching: isFetchingEtiquettesPage,
  } = useGetQuery({
    key: KEYS.etiquettesPage,
    url: URLS.etiquettesPage,
  });

  const { data: tradeUnionPage, isLoading: isLoadingTradeUnionPage } =
    useGetQuery({
      key: KEYS.tradeUnionPage,
      url: URLS.tradeUnionPage,
    });

  const handleTabClick = (tab) => {
    router.push(`/${tab}`);
  };

  useEffect(() => {
    if (about) {
      setActiveTab(about);
    }
  }, [about]);

  const selectAccordion = (item) => {
    setAccordion(item);
  };

  const toggleAccordion = (position) => {
    setIsOpen(position);
  };

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
              <li
                className={`cursor-pointer ${
                  activeTab === "markaz-tuzilmasi"
                    ? "text-[#00AFC0]"
                    : "text-[#2C3E50]"
                }`}
              >
                <button onClick={() => handleTabClick("markaz-tuzilmasi")}>
                  Markaz tuzilmasi
                </button>
              </li>

              <li
                className={`cursor-pointer ${
                  activeTab === "rahbariyat"
                    ? "text-[#00AFC0]"
                    : "text-[#2C3E50]"
                }`}
              >
                <button onClick={() => handleTabClick("rahbariyat")}>
                  Rahbariyat
                </button>
              </li>

              <li
                className={`cursor-pointer ${
                  activeTab === "bolimlar" ? "text-[#00AFC0]" : "text-[#2C3E50]"
                }`}
              >
                <button onClick={() => handleTabClick("bolimlar")}>
                  Bo‘limlar
                </button>
              </li>

              <li
                className={`cursor-pointer ${
                  activeTab === "lavozim-majburiyatlari"
                    ? "text-[#00AFC0]"
                    : "text-[#2C3E50]"
                }`}
              >
                <button
                  onClick={() => handleTabClick("lavozim-majburiyatlari")}
                >
                  Lavozim majburiyatlari
                </button>
              </li>

              <li
                className={`cursor-pointer ${
                  activeTab === "markaz-nizomi"
                    ? "text-[#00AFC0]"
                    : "text-[#2C3E50]"
                }`}
              >
                <button onClick={() => handleTabClick("markaz-nizomi")}>
                  Markaz nizomi
                </button>
              </li>

              <li
                className={`cursor-pointer ${
                  activeTab === "markaz-faxri"
                    ? "text-[#00AFC0]"
                    : "text-[#2C3E50]"
                }`}
              >
                <button onClick={() => handleTabClick("markaz-faxri")}>
                  Markaz faxri
                </button>
              </li>

              <li
                className={`cursor-pointer ${
                  activeTab === "odob-axloq-qoidalari"
                    ? "text-[#00AFC0]"
                    : "text-[##2C3E50]"
                }`}
              >
                <button onClick={() => handleTabClick("odob-axloq-qoidalari")}>
                  Odob-axloq qoidalari
                </button>
              </li>

              <li
                className={`cursor-pointer ${
                  activeTab === "kasaba-uyushmasi"
                    ? "text-[#00AFC0]"
                    : "text-[#2C3E50]"
                }`}
              >
                <button onClick={() => handleTabClick("kasaba-uyushmasi")}>
                  Kasaba uyushmasi
                </button>
              </li>
            </ul>
          </motion.div>

          {activeTab === "markaz-tuzilmasi" && (
            <div className={"col-span-9"}>
              <Reveal duration={0.4}>
                <Title>{get(structureOfCenter, "data.structure_title")}</Title>
              </Reveal>

              <Reveal duration={0.5}>
                <Image
                  src={get(structureOfCenter, "data.structure_image")}
                  loader={() => get(structureOfCenter, "data.structure_image")}
                  alt={"structure-center"}
                  width={1050}
                  height={645}
                />
              </Reveal>
            </div>
          )}
          {activeTab === "rahbariyat" && (
            <div className={"col-span-9"}>
              <Reveal duration={0.4}>
                <Title>Rahbariyat</Title>
              </Reveal>

              <div className={"flex flex-col gap-y-[50px]"}>
                <Reveal duration={0.5}>
                  {get(managers, "data.results", []).map((manager) => (
                    <ManagementCard
                      key={get(manager, "id")}
                      position={get(manager, "position.position_title")}
                      fullname={get(manager, "manager_fullname")}
                      managerDesc={get(manager, "position.position_text")}
                      receiptDays={get(manager, "receipt_days")}
                      receiptTime={get(manager, "receipt_time")}
                      instagram={get(manager, "instagram", "#")}
                      telegram={get(manager, "telegram", "#")}
                      facebook={get(manager, "facebook", "#")}
                      phone={get(manager, "phone")}
                      email={get(manager, "email")}
                      image={get(manager, "image")}
                      positionResponsibilities={get(manager, "")}
                    />
                  ))}
                </Reveal>
              </div>
            </div>
          )}

          {activeTab === "bolimlar" && (
            <div className={"col-span-9"}>
              <Reveal duration={0.4}>
                <Title>Bo‘limlar</Title>
              </Reveal>

              <Reveal duration={0.45}>
                <div
                  className={
                    "grid grid-cols-9 gap-x-[30px]  gap-y-[30px] mt-[50px]"
                  }
                >
                  {get(departments, "data.results", []).map((item) => (
                    <div
                      key={get(item, "id")}
                      className={
                        "col-span-3 announce-list-shadow rounded-bl-[30px] rounded-tr-[30px]"
                      }
                    >
                      <Link href={`/department/${get(item,'id')}`}>
                        <Image
                          src={get(item, "department_image")}
                          loader={() => get(item, "department_image")}
                          alt={"lor"}
                          width={330}
                          height={210}
                        />

                        <p
                          className={
                            "font-poppins font-medium text-center py-[20px]"
                          }
                        >
                          {get(item, "department_title")}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          )}

          {activeTab === "lavozim-majburiyatlari" && (
            <div className={"col-span-9"}>
              <Reveal duration={0.3}>
                <Title>Lavozim majburiyatlari</Title>
              </Reveal>
              <Reveal duration={0.3}>
                <div className={"mt-[30px]"}>
                  <ul className={"flex flex-col gap-y-[20px]"}>
                    {get(positionResponsibilities, "data.results", []).map(
                      (responsibility) => (
                        <li key={get(responsibility, "id")}>
                          <button
                            onClick={() =>
                              toggleAccordion(
                                get(responsibility, "position_title")
                              )
                            }
                            className={
                              "bg-[#EFF8F9] cursor-pointer w-full flex justify-between p-[10px] items-center"
                            }
                          >
                            <p
                              className={
                                "font-mulish font-semibold text-[20px]"
                              }
                            >
                              {get(responsibility, "position_title")}
                            </p>
                            <Image
                              src={"/images/up.png"}
                              alt={"up"}
                              width={24}
                              height={24}
                              className={`${
                                isOpen === get(responsibility, "position_title")
                                  ? "rotate-180"
                                  : "rotate-0"
                              } transition-transform duration-300`}
                            />
                          </button>

                          {isOpen === get(responsibility, "position_title") && (
                            <motion.div
                              initial={{ opacity: 0, translateY: "100px" }}
                              animate={{ opacity: 100, translateY: "0px" }}
                              transition={{ duration: 0.4 }}
                            >
                              <div>
                                <h4 className="font-mulish font-semibold text-[20px] my-[20px]">
                                  Tibbiyot markazi xodimlarining ish
                                  vazifalariga quyidagilar kiradi:
                                </h4>
                                {!isNull(
                                  get(
                                    responsibility,
                                    "position_responsibility",
                                    ""
                                  )
                                ) ? (
                                  parse(
                                    get(
                                      responsibility,
                                      "position_responsibility",
                                      ""
                                    )
                                  )
                                ) : (
                                  <p className="font-mulish mt-[10px] font-semibold">
                                    Tez orada bu yerga ma&apos;lumot joylanadi.
                                    :)
                                  </p>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </Reveal>
            </div>
          )}

          {activeTab === "markaz-nizomi" && (
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
                <Link
                  href={
                    isNull(get(aboutCenter, "data.company_regulation", "#"))
                      ? "#"
                      : get(aboutCenter, "data.company_regulation", "#")
                  }
                >
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
                </Link>
              </div>
            </div>
          )}

          {activeTab === "markaz-faxri" && (
            <div className={"col-span-9"}>
              <Reveal duration={0.3}>
                <Title>Markaz faxri</Title>
              </Reveal>

              <Reveal duration={0.3}>
                <div>
                  {get(veterans, "data.results", []).map((veteran) => (
                    <PrideOfCenter
                      key={get(veteran, "id")}
                      fullname={get(veteran, "veteran_fullname")}
                      position={get(
                        veteran,
                        "veteran_speciality.speciality_title"
                      )}
                      veteranDesc={get(veteran, "veteran_desc")}
                      veteranVideo={get(veteran, "veteran_video")}
                      image={get(veteran, "veteran_image")}
                    />
                  ))}
                </div>
              </Reveal>
            </div>
          )}

          {activeTab === "odob-axloq-qoidalari" && (
            <div className={"col-span-9"}>
              <Reveal duration={0.36}>
                <Title>Odob-axloq qoidalari</Title>
              </Reveal>

              <Reveal duration={0.4}>
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
                  {get(etiquettesPage, "data.results", []).map((item) => (
                    <li key={get(item, "id")}>{get(item, "etiquette_text")}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          )}

          {activeTab === "kasaba-uyushmasi" && (
            <div className={"col-span-9"}>
              <Reveal duration={0.3}>
                <Title>{get(tradeUnionPage, "data.department_title")}</Title>
              </Reveal>

              <Reveal duration={0.35}>
                <div className={"mt-[30px]"}>
                  <ManagementCard
                    key={get(tradeUnionPage, "data.department_chief.id")}
                    position={get(
                      tradeUnionPage,
                      "data.department_chief.position.position_title"
                    )}
                    fullname={get(
                      tradeUnionPage,
                      "data.department_chief.doctor_fullname"
                    )}
                    managerDesc={get(
                      tradeUnionPage,
                      "data.department_chief.position.position_text"
                    )}
                    receiptDays={get(tradeUnionPage, "data.receipt_days")}
                    receiptTime={get(tradeUnionPage, "data.receipt_time")}
                    instagram={get(tradeUnionPage, "data.instagram", "#")}
                    telegram={get(tradeUnionPage, "data.telegram", "#")}
                    facebook={get(tradeUnionPage, "data.facebook", "#")}
                    phone={get(tradeUnionPage, "data.phone")}
                    email={get(tradeUnionPage, "data.email")}
                    image={get(tradeUnionPage, "data.department_chief.image")}
                  />

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

                    <div>
                      {parse(get(tradeUnionPage, "data.department_text"))}
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </section>
    </Wrapper>
  );
};

export default Index;
