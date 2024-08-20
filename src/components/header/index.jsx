import React from "react";
import Image from "next/image";
import Language from "@/components/language";
import Link from "next/link";
import { motion } from "framer-motion";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get } from "lodash";

const Index = () => {
  const { data: basicInfos, isLoading } = useGetQuery({
    key: KEYS.basicInfos,
    url: URLS.basicInfos,
  });
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: "-30px" }}
        animate={{ opacity: 100, translateY: "0px" }}
        transition={{ duration: 0.4 }}
        className={
          " hidden md:flex justify-between container mx-auto py-[12px]"
        }
      >
        <div
          className={
            "font-mulish xl:text-[14px] md:text-[10px] flex items-center gap-x-[50px]"
          }
        >
          <div className={"flex items-start xl:gap-x-[10px] md:gap-x-[4px] "}>
            <Image
              src={"/icons/address.svg"}
              alt={"address"}
              width={24}
              height={24}
            />
            <p className="md:max-w-[234px]">
              {get(basicInfos, "data.company_address")}
            </p>
          </div>

          <div className={"flex items-start gap-x-[10px]"}>
            <Image
              src={"/icons/schedule.svg"}
              alt={"schedule"}
              width={24}
              height={24}
            />
            <p>
              <span className={"font-bold"}>Qabulxona ish vaqti:</span> <br />
              08:00 - 20:00
            </p>

            <div>
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

        <div
          className={"font-mulish text-[14px] flex items-center gap-x-[50px]"}
        >
          <div className={"flex items-start gap-x-[6px]"}>
            <Image
              src={"/icons/message.svg"}
              alt={"address"}
              width={24}
              height={24}
            />
            <a href={`mailto:${get(basicInfos, "data.company_mail")}`}>
              {get(basicInfos, "data.company_mail")}
            </a>{" "}
          </div>

          <div className={"flex gap-x-[10px]"}>
            <Link
              href={`${get(basicInfos, "data.company_telegram")}`}
              className={"cursor-pointer"}
            >
              <Image
                src={"/icons/telegram.svg"}
                alt={"address"}
                width={24}
                height={24}
              />
            </Link>
            <Link
              href={`${get(basicInfos, "data.company_facebook")}`}
              className={"cursor-pointer"}
            >
              <Image
                src={"/icons/facebook.svg"}
                alt={"address"}
                width={24}
                height={24}
              />
            </Link>
            <Link
              href={`${get(basicInfos, "data.company_instagram")}`}
              className={"cursor-pointer"}
            >
              <Image
                src={"/icons/instagram.svg"}
                alt={"address"}
                width={24}
                height={24}
              />
            </Link>
          </div>

          <Language />
        </div>
      </motion.div>

      {/* mobile version */}

      <div
        className={
          " flex md:hidden justify-between text-[#2C3E50] container mx-auto py-[10px]"
        }
      >
        <div
          className={
            "font-mulish text-[12px] flex items-center justify-between gap-x-[30px]"
          }
        >
          <div className={"flex items-start gap-x-[4px] "}>
            <Image
              src={"/icons/address.svg"}
              alt={"address"}
              width={18}
              height={18}
            />
            <p>
              M.Ulugbek ko&apos;chasi 70, <br />
              Samarqand, Uzbekistan 140100
            </p>
          </div>

          <div className={"flex items-start gap-x-[4px]"}>
            <Image
              src={"/icons/schedule.svg"}
              alt={"schedule"}
              width={18}
              height={18}
            />
            <p>
              <span className={"font-bold"}>Qabulxona ish vaqti:</span> <br />
              08:00 - 20:00
            </p>
          </div>
        </div>

        <Language />
      </div>
    </>
  );
};

export default Index;
