import Wrapper from "@/layout/wrapper";
import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <>
      <div className="flex items-center text-center justify-center min-h-screen">
        <div>
          <h1 className="text-[120px] font-mulish text-[#00B1BE]">404</h1>
          <p className="text-[40px] mb-[20px]">
            Siz qidirgan sahifa topilmadi!
          </p>

          <Link
            href={"/"}
            className="border text-[#00B1BE] hover:text-white border-[#00B1BE] bg-white hover:bg-[#00B1BE] px-[35px] py-[10px] rounded-md text-xl"
          >
            Bosh sahifa
          </Link>
        </div>
      </div>
    </>
  );
};

export default Index;
