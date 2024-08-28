import { useRouter } from "next/router";
import React from "react";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import Wrapper from "@/layout/wrapper";
import { motion } from "framer-motion";
import { get } from "lodash";
import useGetQuery from "@/hooks/api/useGetQuery";
import Link from "next/link";
import Title from "@/components/title";
import ManagementCard from "@/components/cards/management";
const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: doctors } = useGetQuery({
    key: KEYS.doctors,
    url: URLS.doctors,
  });
  const { data: doctor } = useGetQuery({
    key: [KEYS.doctors, id],
    url: `${URLS.doctors}${id}`,
    enabled: !!id,
  });
  return (
    <Wrapper>
      <div className={"grid grid-cols-12 gap-x-[30px] container mx-auto"}>
        <motion.div
          initial={{ opacity: 0, translateX: "-100px" }}
          animate={{ opacity: 100, translateX: "0px" }}
          transition={{ duration: 0.5 }}
          className={
            "col-span-3 bg-[#EFF8F9] font-poppins font-medium max-h-[432px]"
          }
        >
          <ul className={"flex flex-col gap-y-[20px] p-[50px] text-[#494949]"}>
            {get(doctors, "data.results", []).map((item) => (
              <li
                key={get(item, "id")}
                className={`cursor-pointer ${
                  id == get(item, "id") ? "text-[#00AFC0]" : "text-[#2C3E50]"
                }`}
              >
                <Link href={`/doctors/${get(item, "id")}`}>
                  {get(item, "doctor_fullname")}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className={"col-span-9"}>
          <Title>
            {get(doctor, "data.speciality.speciality_title", "")} bo&apos;limi
            shifokori
          </Title>

          <ManagementCard
            fullname={get(doctor, "data.doctor_fullname")}
            position={get(doctor, "data.position.position_title")}
            managerDesc={get(doctor, "data.doctor_desc")}
            phone={get(doctor, "data.phone", "+998 78 210 00 81")}
            email={get(doctor, "data.email", "vkttm.uz@gmail.com")}
            receiptDays={get(doctor, "data.receipt_days")}
            receiptTime={get(doctor, "data.receipt_time")}
            telegram={get(doctor, "data.telegram", "#")}
            instagram={get(doctor, "data.instagram", "#")}
            facebook={get(doctor, "data.facebook", "#")}
            positionResponsibilities={"/lavozim-majburiyatlari"}
            image={get(doctor, "data.image")}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
