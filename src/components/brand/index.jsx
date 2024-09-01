import React from "react";
import Image from "next/image";
import Link from "next/link";

const Brand = ({ image = "brand-img", textColor = "[#2C3E50]" }) => {
  return (
    <div className={" flex items-center"}>
      <Link href={"/"}>
        <Image
          src={`/images/${image}.png`}
          alt={"brand"}
          width={232}
          height={60}
          className="md:w-[232px] w-[170px]"
        />
      </Link>

      {/*<p*/}
      {/*  className={` uppercase font-poppins text-${textColor} text-base font-semibold`}*/}
      {/*>*/}
      {/*  Samarqand viloyati <br /> ko’p tarmoqli <br /> tibbiyot markazi*/}
      {/*</p>*/}
    </div>
  );
};

export default Brand;
