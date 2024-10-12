import React from "react";
import Image from "next/image";
import Link from "next/link";

const ManagementCard = ({
  position,
  fullname,
  managerDesc,
  receiptDays = "#",
  receiptTime = "#",
  phone = "#",
  email = "#",
  telegram = "#",
  instagram = "#",
  facebook = "#",
  image = "#",
  positionResponsibilities,
}) => {
  return (
    <div
      className={"flex flex-col md:flex-row items-start gap-x-[30px] mb-[30px]"}
    >
      <Image
        src={image}
        loader={() => image}
        alt={"management"}
        width={280}
        height={320}
        className={"md:min-w-[280px] md:min-h-[320px] w-full md:w-auto"}
      />

      <div>
        {/*Lavozim*/}
        <p
          className={
            "px-[24px] py-[4px] md:text-start  text-xs font-poppins bg-[#00ADBE] text-white rounded-[30px] inline"
          }
        >
          {position}
        </p>

        <h3
          className={
            "text-[#2C3E50] lg:text-[24px] md:text-[20px]  text-lg font-poppins mt-[20px] mb-[10px]"
          }
        >
          {fullname}
        </h3>

        <p
          className={
            "font-mulish font-normal mb-[10px] lg:text-base text-[#2C3E50] md:text-sm text-xs md:w-full w-[300px]"
          }
        >
          {managerDesc}
        </p>

        <Link
          href={positionResponsibilities}
          className={
            "underline text-[#00ADBE] font-mulish font-medium lg:text-base md:text-sm text-xs"
          }
        >
          Lavozim yo’riqnomasi
        </Link>

        <div
          className={
            "flex md:flex-row flex-col gap-y-[20px] gap-x-[50px] mt-[30px]"
          }
        >
          <div className="text-[#2C3E50]">
            <h4
              className={
                "font-poppins font-medium lg:text-base md:text-sm text-xs"
              }
            >
              Bog’lanish:
            </h4>

            <div
              className={
                "flex gap-x-[10px] my-[10px] lg:text-sm md:text-xs text-[10px] font-medium font-mulish"
              }
            >
              <Image
                src={"/images/phone.png"}
                alt={"phone"}
                width={24}
                height={24}
                className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] w-[16px] h-[16px]"
              />
              <Link href={`tel:${phone}`}>{phone}</Link>
            </div>

            <div
              className={
                "flex gap-x-[10px] lg:text-sm md:text-xs text-[10px] font-medium font-mulish"
              }
            >
              <Image
                src={"/icons/message.svg"}
                alt={"phone"}
                width={24}
                height={24}
                className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] w-[16px] h-[16px]"
              />
              <Link href={`mailto:${email}`}>{email}</Link>
            </div>
          </div>

          <div>
            <h4
              className={
                "font-poppins font-medium lg:text-base md:text-sm text-xs"
              }
            >
              Qabul kunlari:
            </h4>

            <p
              className={
                "flex gap-x-[10px] my-[10px] lg:text-sm md:text-xs text-[10px] font-medium font-mulish"
              }
            >
              {receiptDays}
            </p>

            <p
              className={
                "flex gap-x-[10px] lg:text-sm md:text-xs text-[10px] font-medium font-mulish"
              }
            >
              {receiptTime}
            </p>
          </div>

          <div>
            <h4
              className={
                "font-poppins font-medium lg:text-base md:text-sm text-xs"
              }
            >
              {" "}
              Ijtimoiy tarmoqlar:
            </h4>

            <ul className={"flex gap-x-[10px] mt-[10px]"}>
              <li>
                <Link href={`${telegram}`} className={"cursor-pointer"}>
                  <svg
                    width="25"
                    height="24"
                    className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] w-[16px] h-[16px]"
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
                <Link href={`${facebook}`} className={"cursor-pointer"}>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] w-[16px] h-[16px]"
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
                <Link href={`${instagram}`} className={"cursor-pointer"}>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    className="lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px] w-[16px] h-[16px]"
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
                        stroke="#00ADBE"
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementCard;
