import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolled down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: "100px",
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`bg-teal-500 p-[8px] rounded-tl-[20px] rounded-br-[20px]  shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-110 
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            } 
            ease-in-out`}
          style={{ transitionProperty: "transform, opacity" }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_888_275)">
              <path
                d="M22 9.1665V34.8332"
                stroke="white"
                stroke-width="2.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M33 20.1665L22 9.1665"
                stroke="white"
                stroke-width="2.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 20.1665L22 9.1665"
                stroke="white"
                stroke-width="2.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_888_275">
                <rect width="44" height="44" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
