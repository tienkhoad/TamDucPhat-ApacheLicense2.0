import React from "react";
import "../../style/style.css";

const Footer = () => {
  return (
    <>
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
                <p>
                  Luôn đặt mục tiêu chất lượng lên hàng đầu, bao gồm tổng thể từ
                  thiết kế, sản xuất, chất lượng sản phẩm, kỹ thuật thi công lắp
                  đặt và chất lượng dịch vụ sau bán hàng như bảo hành, bảo trì,
                  bảo dưỡng.
                </p>
                <br />
                <p>
                  Mọi ý kiến đóng góp xin gửi về hòm thư:
                  tamducphat.pccc@gmail.com{" "}
                </p>
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
    </>
  );
};

export default Footer;
