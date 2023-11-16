import React, { useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";
import PropTypes from "prop-types";

const AnimationSection = ({ children, scrollIntertia }) => {
  const [{ scrollTranslateY }, setScrollTranslateY] = useSpring(() => ({
    scrollTranslateY: 0,
    config: {
      mass: 1,
      tension: 200,
      friction: scrollIntertia,
      precision: 0.00001,
      velocity: 0,
      clamp: true,
    },
  }));

  useEffect(() => {
    const handleScroll = () =>
      setScrollTranslateY({ scrollTranslateY: -window.scrollY });
    window.addEventListener("scroll", handleScroll);
    const scrollToTop = () => {
      window.requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    };

    scrollToTop();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollTranslateY]);

  return (
    <>
      <animated.div
        style={{
          transform: scrollTranslateY.to(
            (value) => `translate3d(0, ${value}px, 0)`,
          ),
        }}
        className="scroll-container"
      >
        {children}
      </animated.div>
    </>
  );
};

AnimationSection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  scrollIntertia: PropTypes.number.isRequired,
};

export default AnimationSection;
