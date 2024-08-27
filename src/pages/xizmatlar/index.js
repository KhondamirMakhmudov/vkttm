import Wrapper from "@/layout/wrapper";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useGetQuery from "@/hooks/api/useGetQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get } from "lodash";
import { useRouter } from "next/router";
import Reveal from "@/components/reveal";
import Title from "@/components/title";
const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: services } = useGetQuery({
    key: KEYS.services,
    url: URLS.services,
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
              "col-span-3 bg-[#EFF8F9] font-poppins font-medium min-h-[432px]"
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
            <Reveal duration={0.3}>
              <Title>Xizmatlar</Title>

              <p className="text-xl font-mulish font-medium">
                👈 chap tarafdagi bo&apos;limdan o&apos;zingizga kerakli xizmat
                turini tanlang.
              </p>
            </Reveal>
          </motion.div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Index;
