import Wrapper from "@/layout/wrapper";
import React from "react";

const Index = () => {
  return (
    <Wrapper>
      {/* <section className={"bg-white py-[50px]"}>
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
                  activeTab === "Bo‘limlar"
                    ? "text-[#00AFC0]"
                    : "text-[#2C3E50]"
                }`}
              >
                <button onClick={() => handleTabClick("Bo‘limlar")}>
                  Bo‘limlar
                </button>
              </li>

              <li
                className={`cursor-pointer ${
                  activeTab === "Lavozim majburiyatlari"
                    ? "text-[#00AFC0]"
                    : "text-[#2C3E50]"
                }`}
              >
                <button
                  onClick={() => handleTabClick("Lavozim majburiyatlari")}
                >
                  Lavozim majburiyatlari
                </button>
              </li>

              <li
                className={`cursor-pointer ${
                  activeTab === "Markaz nizomi"
                    ? "text-[#00AFC0]"
                    : "text-[#2C3E50]"
                }`}
              >
                <button onClick={() => handleTabClick("Markaz nizomi")}>
                  Markaz nizomi
                </button>
              </li>

              <li
                className={`cursor-pointer ${
                  activeTab === "Markaz faxri"
                    ? "text-[#00AFC0]"
                    : "text-[#2C3E50]"
                }`}
              >
                <button onClick={() => handleTabClick("Markaz faxri")}>
                  Markaz faxri
                </button>
              </li>

              <li
                className={`cursor-pointer ${
                  activeTab === "Odob-axloq qoidalari"
                    ? "text-[#00AFC0]"
                    : "text-[##2C3E50]"
                }`}
              >
                <button onClick={() => handleTabClick("Odob-axloq qoidalari")}>
                  Odob-axloq qoidalari
                </button>
              </li>

              <li
                className={`cursor-pointer ${
                  activeTab === "Kasaba uyushmasi"
                    ? "text-[#00AFC0]"
                    : "text-[#2C3E50]"
                }`}
              >
                <button onClick={() => handleTabClick("Kasaba uyushmasi")}>
                  Kasaba uyushmasi
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
    </Wrapper>
  );
};

export default Index;
