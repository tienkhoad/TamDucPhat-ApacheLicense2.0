"use client"
import React from 'react';
import PropTypes from 'prop-types';
import '../../public/css/global.css'
import "bootstrap/dist/css/bootstrap.min.css";
import '../../public/css/bootstrap.min.css'
import { useEffect } from "react";
import { GeoFill, TelephoneFill, Envelope } from 'react-bootstrap-icons';



// export const metadata = {
//   title: 'Trang chủ - TAM DUC PHAT PCCC COMPANY LIMITED',
//   description: 'Tâm Đức Phát PCCC Company Limited',
//   authors: [{ name: "tienkhoad", url: 'https://www.linkedin.com/in/%C4%91inh-ti%E1%BA%BFn-khoa-6a0402132/' }],
// }



var HomePage = () => {
  return <>
    <div>
      <div id="top-header">
        <div className="container">
          <div id="top-bar" className="row">
            <div id="left-topbar" className="col-md-8">
              <ul>
                <li>
                  <a title="Địa chỉ" href="#">
                    {/* <i className="bi bi-geo-fill"></i> */}
                    <GeoFill />
                    <span style={{ marginLeft: '4px' }}>CÔNG TY TNHH PCCC TÂM ĐỨC PHÁT</span>
                  </a>
                </li>
                <li>
                  <a title="Liên hệ" href="tel:+0908035270">
                    {/* <i className="bi bi-telephone-fill" /> */}
                    <TelephoneFill />
                     <span style={{ marginLeft: '4px' }} >0908035270</span>
                  </a>
                </li>
                <li>
                  <a title="Mail" href="#">
                    {/* <i className="bi bi-envelope" />  */}
                    <Envelope />
                    <span style={{ marginLeft: '4px' }}>tamducphat.pccc@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
            <div id="right-topbar" className="col-md-4">
              <ul>
                <li>
                  <a> ĐĂNG KÝ</a>
                </li>
                <li>|</li>
                <li>
                  <a>ĐĂNG NHẬP</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="main-content">
        <div className="container">
          <div id="background">
            <img id="img_background" src="img/pc1.jpg" />
          </div>
          <div id="logo">
            <img src="logo/logo_full.png" />
          </div>
          <nav id="menu" className="container">
            <ul>
              <li className="menu-content">
                <a href="Home.html" className="menu-link menu-trang-chu">TRANG CHỦ</a>
              </li>
              <li className="menu-content">
                <a href="AboutUs.html" className="menu-link menu-gioi-thieu">GIỚI THIỆU</a>
              </li>
              <li className="menu-content sub-menu">
                <a href="#" className="menu-link menu-san-pham">SẢN PHẨM</a>
                <ul className="submenu-content">
                  <li><a href="#">Sản phẩm A</a></li>
                  <li><a href="#">Sản phẩm B</a></li>
                  <li><a href="#">Sản phẩm C</a></li>
                </ul>
              </li>
              <li className="menu-content">
                <a href="#" className="menu-link menu-lien-he">LIÊN HỆ</a>
              </li>
              <li className="menu-content">
                <a href="#">
                  <i className="bi bi-search" style={{ fontSize: '300%' }} />
                </a>
              </li>
            </ul>
          </nav>
          <div id="title">
            <p>TẬN TÂM BẢO VỆ NGÔI NHÀ BẠN</p>
          </div>
          <div id="slogan" className="wrapper">
            <span id="typed-text" />
          </div>
          <button id="btn-buynow" type="button" className="btn btn-warning">MUA HÀNG</button>
          <div className="wrap-box">
            <div className="size-box-detail box-1" />
            <div className="title title-1 title-all-3">SẢN PHẨM CHẤT LƯỢNG</div>
            <a className="watch_more watch_more-1" href="#">Xem thêm &gt;</a>
            <div className="size-box-detail box-2" />
            <div className="title title-2 title-all-3">BẢO HÀNH CHÍNH HÃNG</div>
            <a className="watch_more watch_more-2" href="#">Xem thêm &gt;</a>
            <div className="size-box-detail box-3" />
            <div className="title title-3 title-all-3">CHÍNH SÁCH ƯU <br /> ĐÃI </div>
            <a className="watch_more watch_more-3" href="#">Xem thêm &gt;</a>
          </div>
          <img className="quality quality-img-1" src="img/Quality 75x75.png" />
          <img className="quality quality-img-2" src="img/Quality 75x75.png" />
          <img className="quality quality-img-3" src="img/Quality 75x75.png" />
        </div>
      </div>
      <div className="rich-text-container rich-text-wide">
        <div className="header-content">
          <h1>Bình chữa cháy tại Việt Nam</h1>
          <p className="header-description">Bình chữa cháy chất lượng từ Việt Nam có giá phải chăng và dễ dàng mua tại
            Tâm Đức Phát PCCC Company Limited. Chúng tôi cung cấp một loạt sản phẩm an toàn cháy nổ chất lượng để
            bảo vệ bạn khỏi nguy
            hiểm. Sản phẩm của chúng tôi được Cục PCCC &amp; TCVN chấp thuận, bao gồm bình chữa cháy bột khô, bình chữa
            cháy
            khí CO2 và bình chữa cháy hóa chất ướt. Chúng tôi hiểu rằng việc bảo vệ người thân của bạn và những
            người xung quanh bạn tại nhà hoặc văn phòng rất quan trọng.</p>
        </div>
      </div>
      <div id="promotion">
        <div className="container">
          <div className="promotion-grid">
            <img src="img/Fire_extinguishers_singapore_3_2250x750.webp" />
            <div className="promotion-content">
              <h2>Miễn phí giao hàng</h2>
              <p>Với đơn hàng tối thiểu $70</p>
            </div>
          </div>
          <div className="promotion-block">
            <div className="promotion-block-left">
              <img src="img/Singapore_fire_extinguishers_6_1200x600.png" />
              <div className="promotion-content-left">
                <h2>Cục PCCC &amp; TCVN phê duyệt</h2>
                <p>Dãy sản phẩm của chúng tôi bao gồm bình chữa cháy và thiết bị đã được chứng nhận chính thức
                </p>
              </div>
            </div>
            <div className="promotion-block-right">
              <img src="img/Singapore_fire_extinguishers_9_1200x600.webp" />
              <div className="promotion-content-right">
                <h2>Hàng luôn có sẵn</h2>
                <p>Đối với các đơn hàng cấp bách, kho của chúng tôi nằm tại địa chỉ Biên Hòa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="products">
        <div className="container">
          <div className="best-selling-product"> DANH MỤC SẢN PHẨM </div>
          <div className="type-product">
            <div className="name-type-product">
              <h4>BÁO CHÁY HOCHIKI </h4>
            </div>
            <div className="slider">
              <div className="grid-container">
                <div className="grid-item">
                  <img src="img/products/Đầu báo cháy nhiệt cố định địa chỉ không đế/Đầu báo cháy nhiệt cố định địa chỉ không đế.jpg" alt="Product Image" />
                  <h3>Product 2</h3>
                  <p>$15.99</p>
                </div>
                <div className="grid-item">
                  <img src="img/products/Đầu báo khói lắp trên đường ống địa chỉ Hochiki/Đầu báo khói lắp trên đường ống địa chỉ Hochiki.jpg" alt="Product Image" />
                  <h3>Product 3</h3>
                  <p>$19.99</p>
                </div>
                <div className="grid-item">
                  <img src="img/products/Đầu báo khói nhiệt kế hợp địa chỉ - ACC-V/Đầu báo khói nhiệt kế hợp địa chỉ - ACC-V.jpg" alt="Product Image" />
                  <h3>Product 4</h3>
                  <p>$12.99</p>
                </div>
                <div className="grid-item">
                  <img src="img/products/Đầu báo khói quang địa chỉ kèm đế Hochiki ALN-V/Đầu báo khói quang địa chỉ kèm đế Hochiki ALN-V.jpg" alt="Product Image" />
                  <h3>Product 5</h3>
                  <p>$10.99</p>
                </div>
                <div className="grid-item">
                  <img src="img/products/Đầu dò gas HORING AH-0822/Đầu dò gas HORING AH-0822.jpg" alt="Product Image" />
                  <h3>Product 6</h3>
                  <p>$15.99</p>
                </div>
                <div className="grid-item">
                  <img src="img/products/Đế đầu báo khói nhiệt địa chỉ Hochiki HSB-NSA-6/Đế đầu báo khói nhiệt địa chỉ Hochiki HSB-NSA-6.jpg" alt="Product Image" />
                  <h3>Product 8</h3>
                  <p>$12.99</p>
                </div>
              </div>
              <div className="slider-controls">
                <button className="prev-arrow" />
                <button className="next-arrow" />
              </div>
            </div>
            <div className="see-more-type-product">
              <a>Xem thêm <i className="bi bi-three-dots" />
              </a>
            </div>
          </div>
          <div className="type-product">
            <div className="name-type-product">
              <h4>BÁO CHÁY HORING LIH </h4>
            </div>
            <div className="slider">
              <div className="grid-container">
                <div className="grid-item">
                  <img src="img/products/Bình cầu chữa cháy tự động 6Kg/Bình cầu chữa cháy tự động 6Kg.jpg" alt="Product Image" />
                  <h3>Product 1</h3>
                  <p>$10.99</p>
                </div>
                <div className="grid-item">
                  <img src="img/products/Bình cầu chữa cháy tự động 6Kg/Bình cầu chữa cháy tự động 6Kg.jpg" alt="Product Image" />
                  <h3>Product 2</h3>
                  <p>$15.99</p>
                </div>
                <div className="grid-item">
                  <img src="img/products/Bình cầu chữa cháy tự động 6Kg/Bình cầu chữa cháy tự động 6Kg.jpg" alt="Product Image" />
                  <h3>Product 3</h3>
                  <p>$19.99</p>
                </div>
                <div className="grid-item">
                  <img src="img/products/Bình cầu chữa cháy tự động 6Kg/Bình cầu chữa cháy tự động 6Kg.jpg" alt="Product Image" />
                  <h3>Product 4</h3>
                  <p>$12.99</p>
                </div>
                <div className="grid-item">
                  <img src="img/products/Bình chữa cháy 3kg CO2 JSF MT3/" alt="Product Image" />
                  <h3>Product 5</h3>
                  <p>$10.99</p>
                </div>
                <div className="grid-item">
                  <img src="img/products/Bình cầu chữa cháy tự động 6Kg/Bình cầu chữa cháy tự động 6Kg.jpg" alt="Product Image" />
                  <h3>Product 6</h3>
                  <p>$15.99</p>
                </div>
                <div className="grid-item">
                  <img src="img/products/Bình cầu chữa cháy tự động 6Kg/Bình cầu chữa cháy tự động 6Kg.jpg" alt="Product Image" />
                  <h3>Product 7</h3>
                  <p>$19.99</p>
                </div>
                <div className="grid-item">
                  <img src="img/products/Bình cầu chữa cháy tự động 6Kg/Bình cầu chữa cháy tự động 6Kg.jpg" alt="Product Image" />
                  <h3>Product 8</h3>
                  <p>$12.99</p>
                </div>
              </div>
              <div className="slider-controls">
                <button className="prev-arrow" />
                <button className="next-arrow" />
              </div>
            </div>
            <div className="see-more-type-product">
              <a>Xem thêm <i className="bi bi-three-dots" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="cong-trinh-tieu-bieu">
        <div className="typical-project">
          <div className="typical-project-wrap-video container">
            <div className="container-fluid">
              <div className="row">
                <div className="title-typical-project col-12"> CÔNG TRÌNH TIÊU BIỂU </div>
              </div>
            </div>
            <div className="typical-project-content-wrap container">
              <div className="row">
                <div className="box-video-1 col-4">
                  <iframe src="https://www.youtube.com/embed/980aUbuoCos" frameBorder={0} allowFullScreen />
                </div>
                <div className="box-video-2 col-4">
                  <iframe src="https://www.youtube.com/embed/980aUbuoCos" frameBorder={0} allowFullScreen />
                </div>
                <div className="box-video-3 col-4">
                  <iframe src="https://www.youtube.com/embed/980aUbuoCos" frameBorder={0} allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-partner">
        <div className="our-partner-wrap container">
          <div className="container-fluid">
            <div className="row">
              <div className="title-our-partner col-12"> ĐỐI TÁC CHÚNG TÔI </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="title-slogan-our-partner col-12">
                <p>Chân thành cảm ơn các đối tác đã tin tưởng sử dụng sản
                  phẩm và
                  dịch vụ của chúng tôi trong suốt thời gian qua</p>
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row justify-content-center">
              <div className="circle">
                <img src="img/kisspng-peugeot-308-car-mitsubishi-i-miev-peugeot-508-peugeot-5abc3b90112305.2805594915222854560702.png" alt="Hình 1" />
              </div>
              <div className="circle">
                <img src="img/kisspng-peugeot-308-car-mitsubishi-i-miev-peugeot-508-peugeot-5abc3b90112305.2805594915222854560702.png" alt="Hình 2" />
              </div>
              <div className="circle">
                <img src="img/kisspng-peugeot-308-car-mitsubishi-i-miev-peugeot-508-peugeot-5abc3b90112305.2805594915222854560702.png" alt="Hình 3" />
              </div>
              <div className="circle">
                <img src="img/kisspng-peugeot-308-car-mitsubishi-i-miev-peugeot-508-peugeot-5abc3b90112305.2805594915222854560702.png" alt="Hình 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div id="footer">
        <footer className="footer">
          <div className="footer-columns container">
            <div className="footer-column">
              <div className="footer-logo">
                <img src="logo/1x/Asset 1.png" />
              </div>
              <div className="footer-name-company">
                <h2>CÔNG TY TNHH PCCC TÂM ĐỨC PHÁT</h2>
              </div>
              <div className="footer-content">
                <p>Luôn đặt mục tiêu chất lượng lên hàng đầu, bao gồm tổng thể từ thiết kế, sản xuất, chất lượng
                  sản phẩm, kỹ
                  thuật thi công lắp đặt và chất lượng dịch vụ sau bán hàng như bảo hành, bảo trì, bảo dưỡng.
                </p>
                <br />
                <p>Mọi ý kiến đóng góp xin gửi về hòm thư: tamducphat.pccc@gmail.com </p>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-content">
                <div className="info-company">
                  <ol>
                    <li>
                      <p>Địa chỉ: Vĩnh Cửu</p>
                    </li>
                    <li>
                      <p>Hotline:0908035270</p>
                    </li>
                    <li>
                      <p>Fanpage: </p>
                    </li>
                    <li>
                      <p>Email: tamducphat.pccc@gmail.com</p>
                    </li>
                    <li>
                      <h4>Phương thức thanh toán</h4>
                      <div className="mastercard">
                        <img src="logo/1x/Artboard 12.png" />
                        <img src="logo/1x/Artboard 1.png" />
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-content">
                <div className="services-company">
                  <ol>
                    <li>
                      <h4>DỊCH VỤ</h4>
                    </li>
                    <li>
                      <p>Mua bán thiết bị PCCC</p>
                    </li>
                    <li>
                      <p>Thi công công trình nhà cửa</p>
                    </li>
                    <li>
                      <p>Tư vấn lắp đặt trọn gói PCCC</p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </>
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body>
        <HomePage></HomePage>
      </body>
    </html>
  );
}
