import Wrapper from "@/layout/wrapper";
import React from "react";

const Index = () => {
  return (
    <Wrapper>
      <section className="min-h-[50vh]">
        <div className={"container mx-auto flex justify-center items-center"}>
          <div className="text-center">
            <h1 className="text-[120px] font-mulish text-[#00B1BE]">404</h1>
            <p className="text-[40px]">Siz qidirgan sahifa topilmadi!</p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Index;
