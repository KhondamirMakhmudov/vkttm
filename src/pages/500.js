import Wrapper from "@/layout/wrapper";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center text-center justify-center min-h-screen">
        <div>
          <h1 className="text-[120px] font-mulish text-[#00B1BE]">500 </h1>
          <p className="text-[40px] font-medium">{t("errorInServer")}</p>
          <p className="mb-[30px]">
            Serverning ichki xatoligi, iltimos keyinroq qayta urinib
            ko&apos;ring!
          </p>

          <Link
            href={"/"}
            className="border text-[#00B1BE] hover:text-white border-[#00B1BE] bg-white hover:bg-[#00B1BE] px-[35px] py-[10px] mt-[30px] rounded-md text-xl"
          >
            Bosh sahifa
          </Link>
        </div>
      </div>
    </>
  );
};

export default Index;
