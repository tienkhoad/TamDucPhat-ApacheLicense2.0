import React from "react";
import "../../../style/style.css";
import imgBackground from "../../../img/pc1.jpg";
import logoFull from "../../../logo/logo_full.png";
import imgQuality75x75 from "../../../img/Quality 75x75.png";

const MainContentProperties = () => {
  const iStyle = {
    fontSize: "300%",
  };
  return (
    <>
      <div id="main-content">
        <div className="container">
          <div id="background">
            <img id="img_background" src={imgBackground} />
          </div>
          <div id="logo">
            <img src={logoFull} />
          </div>
          <nav id="menu" className="container">
            <ul>
              <li className="menu-content">
                <a href="/index.html" className="menu-link menu-trang-chu">
                  TRANG CHỦ
                </a>
              </li>
              <li className="menu-content">
                <a href="/AboutUs.html" className="menu-link menu-gioi-thieu">
                  GIỚI THIỆU
                </a>
              </li>
              <li className="menu-content sub-menu">
                <a href="#" className="menu-link menu-san-pham">
                  LOẠI SẢN PHẨM
                </a>
                <ul className="submenu-content">
                  <li>
                    <a href="#">Báo cháy GST</a>
                  </li>
                  <li>
                    <a href="#">Báo cháy HOCHIKI</a>
                  </li>
                  <li>
                    <a href="#">Báo cháy HORING LIH</a>
                  </li>
                  <li>
                    <a href="#">Bình chữa cháy</a>
                  </li>
                  <li>
                    <a href="#">Đèn exit & Đèn sự cố</a>
                  </li>
                </ul>
              </li>
              <li className="menu-content">
                <a href="#" className="menu-link menu-lien-he">
                  LIÊN HỆ
                </a>
              </li>
              <li className="menu-content">
                <a href="#">
                  <i className="bi bi-search" style={iStyle}></i>
                </a>
              </li>
            </ul>
          </nav>

          <div id="title">
            <p>TẬN TÂM BẢO VỆ NGÔI NHÀ BẠN</p>
          </div>
          <div id="slogan" className="wrapper">
            <span id="typed-text"></span>
          </div>
          <button id="btn-buynow" type="button" className="btn btn-warning">
            MUA HÀNG
          </button>
          <div className="wrap-box">
            <div className="size-box-detail box-1"></div>
            <div className="title title-1 title-all-3">SẢN PHẨM CHẤT LƯỢNG</div>
            <a className="watch_more watch_more-1" href="#">
              Xem thêm{" "}
            </a>
            <div className="size-box-detail box-2"></div>
            <div className="title title-2 title-all-3">BẢO HÀNH CHÍNH HÃNG</div>
            <a className="watch_more watch_more-2" href="#">
              Xem thêm{" "}
            </a>
            <div className="size-box-detail box-3"></div>
            <div className="title title-3 title-all-3">
              CHÍNH SÁCH ƯU <br /> ĐÃI{" "}
            </div>
            <a className="watch_more watch_more-3" href="#">
              Xem thêm{" "}
            </a>
          </div>
          <img className="quality quality-img-1" src={imgQuality75x75} />
          <img className="quality quality-img-2" src={imgQuality75x75} />
          <img className="quality quality-img-3" src={imgQuality75x75} />
        </div>
      </div>
    </>
  );
};

export default MainContentProperties;
