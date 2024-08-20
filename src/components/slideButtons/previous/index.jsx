import { React } from "react";
import { useSwiper } from "swiper/react";
import Image from "next/image";

export default function SlidePreviousButton() {
  const swiper = useSwiper();

  return (
    <button
      className="bg-[#00AFC0] px-[9px] py-[6px] rounded-tl-[10px] rounded-br-[10px] hover:bg-[#00BFD0] active:bg-[#00D1E4]"
      onClick={() => swiper.slidePrev()}
    >
      <Image
        src={"/images/navigation.png"}
        alt="navigation"
        width={6}
        height={12}
        className="bg-[#00AFC0] "
      />
    </button>
  );
}
