import React from "react";
import "../../../style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoPartner from "../../../img/kisspng-peugeot-308-car-mitsubishi-i-miev-peugeot-508-peugeot-5abc3b90112305.2805594915222854560702.png";

const PartnerProperties = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="title-our-partner col-12">ĐỐI TÁC CHÚNG TÔI </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="title-slogan-our-partner col-12">
            <p>
              Chân thành cảm ơn các đối tác đã tin tưởng sử dụng sản phẩm và
              dịch vụ của chúng tôi trong suốt thời gian qua
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="circle">
              <img src={LogoPartner} alt="Hình 1" />
            </div>
            <div className="circle">
              <img src={LogoPartner} alt="Hình 2" />
            </div>
            <div className="circle">
              <img src={LogoPartner} alt="Hình 3" />
            </div>
            <div className="circle">
              <img src={LogoPartner} alt="Hình 4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerProperties;
