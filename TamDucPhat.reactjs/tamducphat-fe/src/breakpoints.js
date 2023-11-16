import { useState, useEffect } from "react";
import { useSpring } from "@react-spring/web";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1280px",
  desktop: "1366px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

export function useWindowWidth() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
}

export function ScrollNavbar(minScrollY) {
  const [scrolling, setScrolling] = useState(false);

  const scrollFunction = () => {
    if (window.scrollY > minScrollY) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);
  return scrolling;
}

export function ScrollPosition(elementId, threshold) {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const element = document.getElementById(elementId);

    if (!element) return;

    const handleScroll = () => {
      const elementPosition = element.getBoundingClientRect().top;
      setIsScroll(elementPosition < threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementId, threshold]);

  return isScroll;
}

export function SectionAnimation(isScroll) {
  const [animation, setAnimation] = useState({
    opacity: 0,
    transform: "translateY(-100%)",
  });

  useEffect(() => {
    setAnimation({
      opacity: isScroll ? 1 : 0,
      transition: `0.7s`,
      transform: isScroll ? "translateY(0%)" : "translateY(-100%)",
      willChange: "transform",
      config: { duration: 1000 },
    });
  }, [isScroll]);

  return useSpring(animation);
}

export function TextAnimation(isScroll, timeDuration = 1000) {
  const [animation, setAnimation] = useState({
    opacity: 0,
    transform: "translateY(-100%)",
  });

  useEffect(() => {
    setAnimation({
      opacity: isScroll ? 1 : 0,
      transition: "1s",
      transform: isScroll ? "translateY(0%)" : "translateY(-100%)",
      willChange: "transform",
      config: { duration: timeDuration },
    });
  }, [isScroll]);

  return useSpring(animation);
}

export function TextAnimationOnClick(key) {
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    setAnimation({
      opacity: 0,
      transform: "translateY(10%)",
      willChange: "transform",
      config: { duration: 0 },
    });

    setTimeout(() => {
      const updatedAnimation = {
        opacity: 1,
        transform: "translateY(0%)",
        willChange: "transform",
        config: { duration: 800 },
      };
      setAnimation(updatedAnimation);
    }, 800);
  }, [key]);

  return useSpring(animation);
}

export function DescriptionAnimation(isScroll, timeDuration = 1000) {
  const [animation, setAnimation] = useState({
    opacity: 0,
    transform: "translateX(-50%)",
  });
  useEffect(() => {
    setAnimation({
      opacity: isScroll ? 1 : 0,
      transition: "1s",
      transform: isScroll ? "translateX(0%)" : "translateX(-50%)",
      willChange: "transform",
      config: { duration: timeDuration },
    });
  }, [isScroll]);

  return useSpring(animation);
}
