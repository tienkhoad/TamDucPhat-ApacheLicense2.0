import React from "react";
import "../../../style/style.css";
import imgFireExtinguishers from "../../../img/Fire_extinguishers_singapore_3_2250x750.webp";
import imgFireExtinguishers1200x600 from "../../../img/Singapore_fire_extinguishers_6_1200x600.png";
import imgSingaporeFireExtinguishers1200x600 from "../../../img/Singapore_fire_extinguishers_9_1200x600.webp";

const PromotionProperties = () => {
  return (
    <>
      <div id="promotion">
        <div className="container">
          <div className="promotion-grid">
            <img src={imgFireExtinguishers} />
            <div className="promotion-content">
              <h2>Miễn phí giao hàng</h2>
              <p>Với đơn hàng tối thiểu $70</p>
            </div>
          </div>
          <div className="promotion-block">
            <div className="promotion-block-left">
              <img src={imgFireExtinguishers1200x600} />
              <div className="promotion-content-left">
                <h2>Cục PCCC & TCVN phê duyệt</h2>
                <p>
                  Dãy sản phẩm của chúng tôi bao gồm bình chữa cháy và thiết bị
                  đã được chứng nhận chính thức
                </p>
              </div>
            </div>
            <div className="promotion-block-right">
              <img src={imgSingaporeFireExtinguishers1200x600} />
              <div className="promotion-content-right">
                <h2>Hàng luôn có sẵn</h2>
                <p>
                  Đối với các đơn hàng cấp bách, kho của chúng tôi nằm tại địa
                  chỉ Biên Hòa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionProperties;
