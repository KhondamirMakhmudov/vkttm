import Wrapper from "@/layout/wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PrideOfCenter = ({ position }) => {
  return (
    <div className="flex">
      <Image
        src={"/images/management1.png"}
        alt="pride of center"
        width={280}
        height={320}
      />

      <div>
        <p
          className={
            "px-[24px] py-[4px] text-xs font-poppins bg-[#00ADBE] text-white rounded-[30px] inline"
          }
        >
          {position}
        </p>

        <h3
          className={
            "text-[#2C3E50] text-[24px] font-poppins mt-[20px] mb-[10px]"
          }
        >
          Familiya Ism Sharif
        </h3>

        <p className="mb-[10px] font-mulish font-normal">
          Tibbiyot markazining faxriysi sog&apos;liqni saqlash sohasida
          ko&apos;p yillik tajribaga ega bo&apos;lgan tajribali va obro&apos;li
          mutaxassis. U o&apos;zining ixtisosligi bo&apos;yicha chuqur bilim va
          tajribaga ega bo&apos;lib, unga eng qiyin tibbiy muammolarni
          muvaffaqiyatli hal qilishga imkon beradi. Veteran hamkasblari va
          bemorlari tomonidan kasbiy mahorati va g&apos;amxo&apos;r munosabati
          uchun qadrlanadi. U o&apos;z tajribasini yosh mutaxassislarga faol
          ravishda topshiradi, jamoada murabbiy va usta bo&apos;ladi. Tibbiyot
          markazi faxriysi yuqori darajadagi tibbiy amaliyotni saqlab qolish va
          bemorlarga sifatli xizmat ko&apos;rsatishning uzluksizligini
          ta&apos;minlashda muhim rol o&apos;ynaydi.
        </p>

        <Link href={"#"} className="underline text-[#037582] font-medium">
          Videoga havola
        </Link>
      </div>
    </div>
  );
};

export default PrideOfCenter;
