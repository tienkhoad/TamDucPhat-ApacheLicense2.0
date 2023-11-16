import styled, { keyframes } from "styled-components";

export const MainContent = styled.div`
  width: 100%;
`;

export const Background = styled.div`
  position: relative;
  opacity: 60%;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export const Container = styled.div`
  position: relative;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 7%;
`;

export const LogoImage = styled.img`
  width: 35%;
`;

export const Menu = styled.div`
  position: absolute;
  top: 2%;
  right: 3%;
`;

export const MenuLink = styled.div`
  position: relative;
`;

export const MenuLinkBefore = styled.div`
  position: relative;

  &:before {
    content: "";
    width: 0;
    height: 2px;
    background-color: black;
    position: absolute;
    bottom: 0;
    transition: width 0.2s ease;
    transform-origin: left;
    margin-top: 20px;
  }
`;

export const MenuTrangChu = styled(MenuLinkBefore)`
  width: 85px;
`;

export const MenuGioiThieu = styled(MenuLinkBefore)`
  width: 80px;
`;

export const MenuLienHe = styled(MenuLinkBefore)`
  width: 60px;
`;

export const MenuSanPham = styled(MenuLinkBefore)`
  width: 118px;
`;

export const shake = keyframes`
  0%, 100% {
    transform: translateY(0);
  }

  10%, 30%, 50%, 70%, 90% {
    transform: translateY(-5px);
  }

  20%, 40%, 60%, 80% {
    transform: translateY(5px);
  }
`;

export const BuyNowButton = styled.button`
  &:hover {
    animation: ${shake} 0.5s ease-in-out infinite;
  }
`;

export const SizeBoxDetail1 = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
`;

export const BoxHover = styled.div`
  &:hover {
    transform: scale(1.1);
  }
`;

export const StickyMenu = styled.div`
  &.sticky {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const TamDucPhatFixedHeaderColImage = styled.img`
  width: 70%;
  margin: auto;
`;

export const TamDucPhatFixedHeaderInnerWrapper = styled.div`
  margin-left: 7%;
  display: flex;
  align-items: center;
`;

export const TamDucPhatFixedHeaderCol = styled.div`
  display: flex;
`;

export const SubmenuContent = styled.div`
  display: none;
  width: 116px;
  position: absolute;
  top: 80%;
  left: 73%;
  background-color: #ffffff;
  padding: 10px;
`;

export const SubmenuContentLi = styled.li`
  display: inline-block;
  margin-right: 10px;
  margin-top: 10%;
  margin-bottom: 5%;
  text-align: center;
`;

export const SubMenu = styled.div`
  &:hover ${SubmenuContent} {
    display: block;
  }
`;

export const ColLogo = styled.div`
  width: 30%;
`;

export const ColContact = styled.div`
  margin: auto;
  width: 22%;

  a {
    color: #c4a13d !important;
    font-size: 35px;
  }
`;

export const ColNav = styled.div`
  width: 50%;
`;

export const ColNavUlLi = styled.li`
  display: inline-block;
  margin-left: 20px;
`;

export const TamDucPhatFixedHeader = styled.div`
  &.show-fixed-header {
    top: 0;
    opacity: 1;
    pointer-events: auto;
    background-color: #dbd5d5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    left: 0;
    right: 0;
    z-index: 100;
    &.show {
      top: 0;
    }
  }
`;

export const MenuUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: right;
`;

export const MenuContent = styled.div`
  display: inline-block;
  margin-left: 3%;
`;

export const MenuUlLiA = styled.a`
  text-decoration: none;
  font-weight: bold;
`;

export const Slogan = styled.div`
  font-size: 600%;
  color: #ed14d7;
  position: absolute;
  top: 54%;
  left: 7%;
  font-family: "Gelasio";
  font-weight: bold;
`;

export const SloganSpan = styled.span`
  &:after {
    content: "";
    width: 2px;
    height: 100%;
    background-color: black;
    position: absolute;
    right: 0;
    top: 0;
    animation: blink 1s infinite steps(2, start);
  }
`;

export const BlinkKeyframes = styled.keyframes`
  to {
    visibility: hidden;
  }
`;

export const Title = styled.div`
  position: absolute;
  top: 49%;
  left: 7%;
  color: black;

  p {
    font-weight: bold;
    font-size: 15px !important;
    line-height: 1.7;
  }
`;

export const BtnBuyNow = styled.div`
  position: absolute;
  top: 71%;
  left: 7%;
`;

export const WrapBox = styled.div`
  position: absolute;
  width: 89%;
  height: 97px;
  top: 80%;
  left: 7%;
`;

export const SizeBoxDetail = styled.div`
  position: absolute;
  width: 250px;
  height: 97px;
  background-color: black;
  opacity: 0.3;
`;

export const QualityImg1 = styled.div`
  left: 7.5%;
`;

export const QualityImg2 = styled.div`
  left: 41.5%;
`;

export const QualityImg3 = styled.div`
  left: 75%;
`;

export const Quality = styled.div`
  position: absolute;
  top: 82%;
  width: 53px;
  height: 53px;
`;

export const Title1 = styled.div`
  left: 7%;
`;

export const Title2 = styled.div`
  left: 44%;
`;

export const Title3 = styled.div`
  left: 83%;
`;

export const TitleClass = styled.div`
  position: inherit;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  word-wrap: break-word;
  margin-top: 1%;
`;

export const TitleAll3 = styled.div`
  inline-size: 20%;
`;

export const WatchMore = styled.div`
  color: red;
  font-size: 15px;
  position: inherit;
  margin-top: 6%;
`;

export const WatchMore1 = styled.div`
  left: 7%;
`;

export const WatchMore2 = styled.div`
  left: 44%;
`;

export const WatchMore3 = styled.div`
  left: 83%;
`;
