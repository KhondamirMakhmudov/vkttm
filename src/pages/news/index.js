import React, { useState } from "react";
import Wrapper from "@/layout/wrapper";
import News from "@/components/cards/news";
import Image from "next/image";
import Title from "@/components/title";

const Index = () => {
  const [tab, setTab] = useState("card");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("barchasi");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <section>
        <div className={"container mx-auto mb-[30px] mt-[50px]"}>
          <Title>Barcha yangiliklar</Title>
        </div>
        <div
          className={
            "container mx-auto flex items-center gap-x-[90px] mb-[30px]"
          }
        >
          <div className={"flex gap-x-[10px]"}>
            <button
              className={
                "p-[7px] border-[#00AFC0] border-[1px] rounded-tl-[10px] rounded-br-[10px]"
              }
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_182_2024)">
                  <path
                    d="M4 5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5V9C10 9.26522 9.89464 9.51957 9.70711 9.70711C9.51957 9.89464 9.26522 10 9 10H5C4.73478 10 4.48043 9.89464 4.29289 9.70711C4.10536 9.51957 4 9.26522 4 9V5Z"
                    stroke="#494949"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 5C14 4.73478 14.1054 4.48043 14.2929 4.29289C14.4804 4.10536 14.7348 4 15 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V9C20 9.26522 19.8946 9.51957 19.7071 9.70711C19.5196 9.89464 19.2652 10 19 10H15C14.7348 10 14.4804 9.89464 14.2929 9.70711C14.1054 9.51957 14 9.26522 14 9V5Z"
                    stroke="#494949"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 15C4 14.7348 4.10536 14.4804 4.29289 14.2929C4.48043 14.1054 4.73478 14 5 14H9C9.26522 14 9.51957 14.1054 9.70711 14.2929C9.89464 14.4804 10 14.7348 10 15V19C10 19.2652 9.89464 19.5196 9.70711 19.7071C9.51957 19.8946 9.26522 20 9 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V15Z"
                    stroke="#494949"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 15C14 14.7348 14.1054 14.4804 14.2929 14.2929C14.4804 14.1054 14.7348 14 15 14H19C19.2652 14 19.5196 14.1054 19.7071 14.2929C19.8946 14.4804 20 14.7348 20 15V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H15C14.7348 20 14.4804 19.8946 14.2929 19.7071C14.1054 19.5196 14 19.2652 14 19V15Z"
                    stroke="#494949"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_182_2024">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>

            <button
              className={
                "p-[7px] border-[#00AFC0] border-[1px] rounded-tr-[10px] rounded-bl-[10px] bg-[#00AFC0]"
              }
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_182_2127)">
                  <path
                    d="M20 6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V8C4 8.53043 4.21071 9.03914 4.58579 9.41421C4.96086 9.78929 5.46957 10 6 10H18C18.5304 10 19.0391 9.78929 19.4142 9.41421C19.7893 9.03914 20 8.53043 20 8V6Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 16C20 15.4696 19.7893 14.9609 19.4142 14.5858C19.0391 14.2107 18.5304 14 18 14H6C5.46957 14 4.96086 14.2107 4.58579 14.5858C4.21071 14.9609 4 15.4696 4 16V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V16Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_182_2127">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(-1 0 0 1 24 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-x-[20px] font-mulish ">
            <label className="text-gray-700">Filtr</label>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex  w-[170px] bg-white text-[#494949]  hover:border-gray-400 p-[10px] justify-between rounded-[10px] shadow leading-tight focus:outline-none focus:shadow-outline items-center"
              >
                {selectedOption}
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_175_296)">
                    <path
                      d="M5.87439 7.5L10.8744 12.5L15.8744 7.5"
                      stroke="#494949"
                      strokeWidth="1.3"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_175_296">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.87439)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              {isOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionClick("barchasi")}
                  >
                    barchasi
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionClick("Option 1")}
                  >
                    Option 1
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionClick("Option 2")}
                  >
                    Option 2
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div className="flex items-center gap-x-[20px] font-mulish ">
            <label className="text-gray-700">Kategoriya</label>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex  w-[170px] bg-white   hover:border-gray-400 p-[10px] justify-between rounded-[10px] shadow leading-tight focus:outline-none focus:shadow-outline items-center"
              >
                {selectedOption}
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_175_296)">
                    <path
                      d="M5.87439 7.5L10.8744 12.5L15.8744 7.5"
                      stroke="#494949"
                      strokeWidth="1.3"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_175_296">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.87439)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              {isOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionClick("barchasi")}
                  >
                    barchasi
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionClick("Option 1")}
                  >
                    Option 1
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionClick("Option 2")}
                  >
                    Option 2
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div></div>
        </div>
        <div
          className={
            "grid grid-cols-12 gap-x-[30px] gap-y-[30px] container mx-auto mb-[30px]"
          }
        >
          <News
            image={"img3"}
            url={"#"}
            title={
              "Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belorusiya hamkorligi"
            }
            desc={
              "Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belarus Respublikasi o’rtasidagi hamkorlik so’nggi yillarda yangi bosqichga ko’tarilib, ikki davlatning tibbiyot sohasidagi..."
            }
          />

          <News
            image={"img3"}
            url={"#"}
            title={
              "Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belorusiya hamkorligi"
            }
            desc={
              "Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belarus Respublikasi o’rtasidagi hamkorlik so’nggi yillarda yangi bosqichga ko’tarilib, ikki davlatning tibbiyot sohasidagi..."
            }
          />
          <News
            image={"img3"}
            url={"#"}
            title={
              "Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belorusiya hamkorligi"
            }
            desc={
              "Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belarus Respublikasi o’rtasidagi hamkorlik so’nggi yillarda yangi bosqichga ko’tarilib, ikki davlatning tibbiyot sohasidagi..."
            }
          />

          <News
            image={"img3"}
            url={"#"}
            title={
              "Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belorusiya hamkorligi"
            }
            desc={
              "Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belarus Respublikasi o’rtasidagi hamkorlik so’nggi yillarda yangi bosqichga ko’tarilib, ikki davlatning tibbiyot sohasidagi..."
            }
          />

          <News
            image={"img3"}
            url={"#"}
            title={
              "Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belorusiya hamkorligi"
            }
            desc={
              "Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belarus Respublikasi o’rtasidagi hamkorlik so’nggi yillarda yangi bosqichga ko’tarilib, ikki davlatning tibbiyot sohasidagi..."
            }
          />

          <News
            image={"img3"}
            url={"#"}
            title={
              "Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belorusiya hamkorligi"
            }
            desc={
              "Samarqand viloyat ko’p tarmoqli tibbiyot markazi va Belarus Respublikasi o’rtasidagi hamkorlik so’nggi yillarda yangi bosqichga ko’tarilib, ikki davlatning tibbiyot sohasidagi..."
            }
          />
        </div>
      </section>
    </Wrapper>
  );
};

export default Index;
