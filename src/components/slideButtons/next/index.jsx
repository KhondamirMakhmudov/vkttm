import { React } from "react";
import { useSwiper } from "swiper/react";
import Image from "next/image";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      className="bg-[#00AFC0] px-[9px] py-[6px] rounded-tr-[10px] rounded-bl-[10px] hover:bg-[#00BFD0] active:bg-[#00D1E4]"
      onClick={() => swiper.slideNext()}
    >
      <Image
        src={"/images/navigation.png"}
        alt="navigation"
        width={6}
        height={12}
        className="bg-[#00AFC0] rotate-180"
      />
    </button>
  );
}
