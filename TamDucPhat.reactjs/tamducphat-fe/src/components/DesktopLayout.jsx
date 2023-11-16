import PropTypes from "prop-types";
import "../style/style.css";
import Footer from "../components/Footer";
import ScrollToHashElement from "./ScrollToHashElement";
import { PageWrapper, PageWrapperContent } from "../style/Page";
import AnimationSection from "../components/AnimationSection";
import ScrollToTop from "./ScrollToTop";
import { CSSTransition } from "react-transition-group";
import "../style/style.css";
import React, { useEffect, useState } from "react";

let width = 0;
const DesktopLayout = ({ children, screenWidth, screenHeight }) => {
  const scrollIntertia = 70;
  const [showHero, setShowHero] = useState(false);
  width = screenWidth;
  useEffect(() => {
    setTimeout(() => {
      setShowHero(true);
    }, 200);
  }, []);
  return (
    <CSSTransition in={showHero} timeout={2000} classNames="fade" unmountOnExit>
      <PageWrapper className="page-wrapper">
        <PageWrapperContent className="div" height={screenHeight}>
          <ScrollToHashElement />
          {screenWidth < 1280 ? (
            <>{children}</>
          ) : (
            <AnimationSection scrollIntertia={scrollIntertia}>
              {children}
            </AnimationSection>
          )}
          <Footer screenWidth={screenWidth} />
        </PageWrapperContent>
        <ScrollToTop />
      </PageWrapper>
    </CSSTransition>
  );
};

DesktopLayout.propTypes = {
  scrollIntertia: PropTypes.number,
  children:
    width < 1280 ? PropTypes.arrayOf(PropTypes.element) : PropTypes.object,
  screenWidth: PropTypes.number,
  screenHeight: PropTypes.string.isRequired,
};

export default DesktopLayout;
