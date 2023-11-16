import { useEffect, useState } from "react";
import { ScrollToTopButton, ScrollToTopWrapper } from "../style/ScrollToTop";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <ScrollToTopWrapper>
      <ScrollToTopButton opacity={isVisible ? 1 : 0} onClick={scrollToTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4335 4335"
          width="43px"
          height="43px"
          fillRule="evenodd"
          clipRule="evenodd"
          imageRendering="optimizeQuality"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
        >
          <path
            fill="#1abc9c"
            d="M2167 34 C3345 34 4301 989 4301 2168 C4301 3346 3346 4302 2167 4302 C989 4302 33 3347 33 2168 C33 990 988 34 2167 34 z"
          />
          <path
            fill="#fff"
            d="M2345 1852 L2345 2972 C2345 3069 2265 3149 2168 3149 L2168 3149 C2071 3149 1991 3069 1991 2972 L1991 1849 L1735 2154 C1672 2229 1560 2239 1485 2176 L1485 2176 C1410 2113 1400 2001 1463 1926 L2032 1248 C2054 1221 2083 1203 2114 1193 C2130 1188 2147 1185 2165 1185 L2165 1185 L2167 1185 L2167 1185 L2168 1185 L2169 1185 L2171 1185 C2210 1186 2249 1199 2281 1226 L2281 1226 C2297 1239 2310 1255 2320 1272 L2872 1930 C2935 2005 2925 2117 2850 2180 L2850 2180 C2775 2243 2663 2233 2600 2158 L2344 1853 L2344 1853 z"
          />
        </svg>
      </ScrollToTopButton>
    </ScrollToTopWrapper>
  );
};
export default ScrollToTop;
