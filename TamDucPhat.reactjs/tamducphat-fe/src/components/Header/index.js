import React from "react";

const Header = () => {
  return (
    <div id="top-header">
      <div className="container">
        <div id="top-bar" className="row">
          <div id="left-topbar" className="col-md-8">
            <ul>
              <li>
                <a title="Địa chỉ" href="#">
                  <i className="bi bi-geo-fill"></i> CÔNG TY TNHH PCCC TÂM ĐỨC
                  PHÁT
                </a>
              </li>
              <li>
                <a title="Liên hệ" href="tel:+0908035270">
                  <i className="bi bi-telephone-fill"></i> 0908035270
                </a>
              </li>
              <li>
                <a title="Mail" href="#">
                  <i className="bi bi-envelope"></i> tamducphat.pccc@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div id="right-topbar" className="col-md-4">
            <ul>
              <li>
                <a href=""> ĐĂNG KÝ</a>
              </li>
              <li>|</li>
              <li>
                <a href="/Login.html">ĐĂNG NHẬP</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
