import React, { useState } from "react";
import Wrapper from "@/layout/wrapper";
import Reveal from "@/components/reveal";
import Title from "@/components/title";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RevealLeft from "@/components/reveal/revealLeft";
import RevealRight from "@/components/reveal/revealRight";
import usePostQuery from "@/hooks/api/usePostQuery";
import useGetQuery from "@/hooks/api/useGetQuery";
import { get } from "lodash";
import { KEYS } from "@/constants/key";
import { useForm } from "react-hook-form";
import { URLS } from "@/constants/url";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();
  const [contact, setContact] = useState({});
  const {
    data: aboutCenter,
    isLoadingAboutCenter,
    isFetchingAboutCenter,
  } = useGetQuery({ key: KEYS.aboutCenter, url: URLS.aboutCenter });
  const {
    data: basicInfos,
    isLoading,
    isFetching,
  } = useGetQuery({
    key: KEYS.basicInfos,
    url: URLS.basicInfos,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ values: contact });

  const {
    mutate: contacts,
    isLoading: isLoadingContacts,
    isFetching: isFetchingContacts,
  } = usePostQuery({
    listKeyId: KEYS.contacts,
  });

  const onSubmit = ({
    appeal_fullname,
    appeal_email,
    appeal_theme,
    appeal_text,
  }) => {
    let formData = new FormData();
    formData.append("appeal_fullname", appeal_fullname);
    formData.append("appeal_email", appeal_email);
    formData.append("appeal_theme", appeal_theme);
    formData.append("appeal_text", appeal_text);
    contacts(
      {
        url: URLS.contacts,
        attributes: formData,
      },
      {
        onSuccess: () => {
          toast.success(
            "Muvaqqiyatli",
            { position: "top-right" },
            router.push("/")
          );
        },
        onError: (error) => {
          toast.error(`Error is ${error}`, { position: "top-right" });
        },
      }
    );
  };
  return (
    <Wrapper>
      <section className={"my-[50px]"}>
        <div className={"grid grid-cols-12 container mx-auto"}>
          <div className={"col-span-12 mb-[30px]"}>
            <Reveal duration={0.2}>
              <Title>Aloqa</Title>
            </Reveal>
          </div>

          <RevealLeft classNameTop={"col-span-6 "} duration={0.3}>
            <div className={"p-[30px] flex flex-col gap-y-[30px]"}>
              <div>
                <h3
                  className={"font-mulish text-[20px] font-semibold mb-[20px]"}
                >
                  Manzil:
                </h3>
                <div className={"flex gap-x-[10px]"}>
                  <Image
                    src={"/icons/address.svg"}
                    alt={"address"}
                    width={24}
                    height={24}
                  />
                  <p className={"font-mulish font-medium"}>
                    {get(basicInfos, "data.company_address")}
                  </p>
                </div>
              </div>

              <div>
                <h3
                  className={"font-mulish text-[20px] font-semibold mb-[20px]"}
                >
                  Qo’ng’iroq uchun:
                </h3>
                <div className={"flex items-start gap-x-[10px]"}>
                  <Image
                    src={"/icons/schedule.svg"}
                    alt={"schedule"}
                    width={24}
                    height={24}
                  />
                  <p className={"font-mulish font-semibold w-[200px]"}>
                    <span className={"font-bold"}>Qabulxona ish vaqti:</span>{" "}
                    <br />
                    08:00 - 20:00
                  </p>

                  <div className={"font-mulish font-medium"}>
                    <a href={`tel:${get(basicInfos, "data.company_phone")}`}>
                      {get(basicInfos, "data.company_phone")}
                    </a>{" "}
                    <br />
                    <a href={`tel:${get(basicInfos, "data.company_phones")}`}>
                      {get(basicInfos, "data.company_phones")}
                    </a>{" "}
                  </div>
                </div>
              </div>

              <div>
                <h3
                  className={"font-mulish text-[20px] font-semibold mb-[20px]"}
                >
                  Elektron pochta:
                </h3>

                <div className={"flex items-center gap-x-[6px]"}>
                  <Image
                    src={"/icons/message.svg"}
                    alt={"address"}
                    width={24}
                    height={24}
                  />
                  <a
                    className={"font-mulish font-medium"}
                    href={`mailto:${get(basicInfos, "data.company_mail")}`}
                  >
                    {get(basicInfos, "data.company_mail")}
                  </a>{" "}
                </div>
              </div>

              <div>
                <h3
                  className={"font-mulish text-[20px] font-semibold mb-[20px]"}
                >
                  Ijtimoiy tarmoqlar:
                </h3>

                <ul className={"flex gap-x-[10px] mt-[10px]"}>
                  <li>
                    <Link
                      href={`${get(basicInfos, "data.company_telegram")}`}
                      className={"cursor-pointer"}
                    >
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_175_286)">
                          <path
                            d="M15.8744 10L11.8744 14L17.8744 20L21.8744 4L3.87439 11L7.87439 13L9.87439 19L12.8744 15"
                            stroke="#00ADBE"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_175_286">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0.87439)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${get(basicInfos, "data.company_facebook")}`}
                      className={"cursor-pointer"}
                    >
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_175_283)">
                          <path
                            d="M7.87439 10V14H10.8744V21H14.8744V14H17.8744L18.8744 10H14.8744V8C14.8744 7.73478 14.9797 7.48043 15.1673 7.29289C15.3548 7.10536 15.6092 7 15.8744 7H18.8744V3H15.8744C14.5483 3 13.2765 3.52678 12.3389 4.46447C11.4012 5.40215 10.8744 6.67392 10.8744 8V10H7.87439Z"
                            stroke="#00ADBE"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_175_283">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0.87439)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${get(basicInfos, "data.company_instagram")}`}
                      className={"cursor-pointer"}
                    >
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_175_289)">
                          <path
                            d="M4.87439 8C4.87439 6.93913 5.29582 5.92172 6.04596 5.17157C6.79611 4.42143 7.81352 4 8.87439 4H16.8744C17.9353 4 18.9527 4.42143 19.7028 5.17157C20.453 5.92172 20.8744 6.93913 20.8744 8V16C20.8744 17.0609 20.453 18.0783 19.7028 18.8284C18.9527 19.5786 17.9353 20 16.8744 20H8.87439C7.81352 20 6.79611 19.5786 6.04596 18.8284C5.29582 18.0783 4.87439 17.0609 4.87439 16V8Z"
                            stroke="#00ADBE"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.87439 12C9.87439 12.7956 10.1905 13.5587 10.7531 14.1213C11.3157 14.6839 12.0787 15 12.8744 15C13.67 15 14.4331 14.6839 14.9957 14.1213C15.5583 13.5587 15.8744 12.7956 15.8744 12C15.8744 11.2044 15.5583 10.4413 14.9957 9.87868C14.4331 9.31607 13.67 9 12.8744 9C12.0787 9 11.3157 9.31607 10.7531 9.87868C10.1905 10.4413 9.87439 11.2044 9.87439 12Z"
                            stroke="#00ADBE"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.3744 7.5V7.51"
                            stroke="#2C3E50"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_175_289">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0.87439)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`${get(basicInfos, "data.company_youtube")}`}
                      className={"cursor-pointer"}
                    >
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_850_242)">
                          <path
                            d="M3 12C3 10.4087 3.63214 8.88258 4.75736 7.75736C5.88258 6.63214 7.4087 6 9 6H27C28.5913 6 30.1174 6.63214 31.2426 7.75736C32.3679 8.88258 33 10.4087 33 12V24C33 25.5913 32.3679 27.1174 31.2426 28.2426C30.1174 29.3679 28.5913 30 27 30H9C7.4087 30 5.88258 29.3679 4.75736 28.2426C3.63214 27.1174 3 25.5913 3 24V12Z"
                            stroke="#00AFC0"
                            stroke-width="2.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15 13.5L22.5 18L15 22.5V13.5Z"
                            stroke="#00AFC0"
                            stroke-width="2.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_850_242">
                            <rect width="36" height="36" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`${get(basicInfos, "data.company_linkedin")}`}
                      className={"cursor-pointer"}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_850_247)">
                          <path
                            d="M6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6H27C27.7956 6 28.5587 6.31607 29.1213 6.87868C29.6839 7.44129 30 8.20435 30 9V27C30 27.7956 29.6839 28.5587 29.1213 29.1213C28.5587 29.6839 27.7956 30 27 30H9C8.20435 30 7.44129 29.6839 6.87868 29.1213C6.31607 28.5587 6 27.7956 6 27V9Z"
                            stroke="#00AFC0"
                            stroke-width="2.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 16.5V24"
                            stroke="#00AFC0"
                            stroke-width="2.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 12V12.015"
                            stroke="#00AFC0"
                            stroke-width="2.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18 24V16.5"
                            stroke="#00AFC0"
                            stroke-width="2.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M24 24V19.5C24 18.7044 23.6839 17.9413 23.1213 17.3787C22.5587 16.8161 21.7956 16.5 21 16.5C20.2044 16.5 19.4413 16.8161 18.8787 17.3787C18.3161 17.9413 18 18.7044 18 19.5"
                            stroke="#00AFC0"
                            stroke-width="2.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_850_247">
                            <rect width="36" height="36" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </RevealLeft>
          <RevealRight classNameTop={"col-span-6"} duration={0.3}>
            <div className={" p-[30px] flex flex-col gap-y-[20px]"}>
              <h3 className={"font-mulish text-[20px] font-semibold "}>
                Murojaat qoldiring
              </h3>

              <p className={"font-mulish font-medium"}>
                Maslahat olish, taklif yuborish uchun o‘z murojaatingizni
                batafsil yozib yuboring. Tez orada siz bilan bog‘lanishadi.
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={
                  "flex flex-col gap-y-[20px] font-mulish placeholder:font-medium placeholder:text-[#494949]"
                }
              >
                <input
                  type={"text"}
                  placeholder={"F.I.SH"}
                  {...register("appeal_fullname", { required: true })}
                  className={
                    "py-[12px] px-[30px] w-full announce-list-shadow rounded-[10px]"
                  }
                />
                <input
                  type={"email"}
                  {...register("appeal_email", { required: true })}
                  placeholder={"Email"}
                  className={
                    "py-[12px] px-[30px] w-full announce-list-shadow rounded-[10px]"
                  }
                />
                <input
                  type={"text"}
                  {...register("appeal_theme", { required: true })}
                  placeholder={"Murojaat mavzusi"}
                  className={
                    "py-[12px] px-[30px] w-full announce-list-shadow rounded-[10px]"
                  }
                />
                <textarea
                  {...register("appeal_text", { required: true })}
                  placeholder={"Murojaat mavzusi"}
                  className={
                    "py-[12px] px-[30px] w-full announce-list-shadow rounded-[10px]"
                  }
                  rows={8}
                ></textarea>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 100 }}
                  transition={{ duration: 0.7 }}
                  className={
                    "font-bold max-w-[170px]  hover:bg-[#00CBDE] active:bg-[#009EAC] font-mulish bg-[#00AFC0] py-[10px] px-[52px] rounded-br-[10px] rounded-tl-[10px] text-white transition-all duration-300"
                  }
                >
                  Yuborish
                </motion.button>
              </form>
            </div>
          </RevealRight>
        </div>

        <div className={"grid grid-cols-12 container mx-auto mt-[30px]"}>
          <RevealLeft classNameTop={"col-span-6 "} duration={0.3}>
            <div className={"col-span-6 p-[30px]"}>
              <h3 className={"font-mulish text-[20px] font-semibold mb-[20px]"}>
                Asosiy bino lokatsiyasi:
              </h3>
              <div className={"w-[630px] h-[430px] bg-[#C5C5C5]"}>
                <iframe
                  src={`${get(aboutCenter, "data.company_location")}`}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={"w-full lg:h-full h-[400px] border shadow-2xl"}
                ></iframe>
              </div>
            </div>
          </RevealLeft>
        </div>
      </section>
    </Wrapper>
  );
};

export default Index;
