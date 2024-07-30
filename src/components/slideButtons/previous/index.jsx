import { React } from "react";
import { useSwiper } from "swiper/react";

export default function SlidePreviousButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>Slide to the next slide</button>
  );
}
