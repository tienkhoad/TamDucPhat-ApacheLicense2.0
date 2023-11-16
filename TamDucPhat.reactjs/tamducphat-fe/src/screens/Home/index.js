import React, { useState } from "react";
import "../../style/style.css";
import DesktopLayout from "../../components/DesktopLayout";
import * as Sections from "./Sections";
import { useWindowWidth } from "../../breakpoints";

const HomeScreen = () => {
  const screenWidth = useWindowWidth();
  const [totalHeight, setTotalHeight] = useState(0);

  const handleHeightChange = (height) => {
    setTotalHeight(height);
  };

  return (
    <>
      {screenWidth >= 1280 ? (
        <DesktopLayout height={`${totalHeight}px`}>
          <Sections.MainContentSection onHeightChange={handleHeightChange} />
          <Sections.RichTextSection onHeightChange={handleHeightChange} />
          <Sections.PromotionSection onHeightChange={handleHeightChange} />
          <Sections.ProductsSection onHeightChange={handleHeightChange} />
          <Sections.ProductsSection onHeightChange={handleHeightChange} />
          <Sections.TypicalProjectsSection
            onHeightChange={handleHeightChange}
          />
        </DesktopLayout>
      ) : (
        <>
          {/* <DesktopLayout height={"auto"}>
                        <MobileSections.HeroMobile />
                        <MobileSections.OverviewMobile />
                        <MobileSections.ConceptMobile />
                        <MobileSections.LocationMobile />
                    </DesktopLayout> */}
        </>
      )}
    </>
  );
};

export default HomeScreen;
