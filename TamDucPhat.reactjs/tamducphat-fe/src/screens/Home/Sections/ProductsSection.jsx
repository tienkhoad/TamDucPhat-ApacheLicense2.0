import React from "react";
import "../../../style/style.css";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Daubaochay from "../../../img/products/Đầu báo cháy nhiệt cố định địa chỉ không đế/Đầu báo cháy nhiệt cố định địa chỉ không đế.jpg";
import Daubaokhoilap from "../../../img/products/Đầu báo khói lắp trên đường ống địa chỉ Hochiki/Đầu báo khói lắp trên đường ống địa chỉ Hochiki.jpg";
import DauBaoKhoiNhiet from "../../../img/products/Đầu báo khói nhiệt kế hợp địa chỉ - ACC-V/Đầu báo khói nhiệt kế hợp địa chỉ - ACC-V.jpg";
import DauBaoKhoiQuang from "../../../img/products/Đầu báo khói quang địa chỉ kèm đế Hochiki ALN-V/Đầu báo khói quang địa chỉ kèm đế Hochiki ALN-V.jpg";
import DauDoGas from "../../../img/products/Đầu dò gas HORING AH-0822/Đầu dò gas HORING AH-0822.jpg";
// import DauBaoKhoiNhietHSB from "../../../img/products/Đế đầu báo khói nhiệt địa chỉ Hochiki HSB-NSA-6/Đế đầu báo khói nhiệt địa chỉ Hochiki HSB-NSA-6.jpg";
import DauBaoChayNhietCoDinh from "../../../img/products/Đầu báo cháy nhiệt cố định địa chỉ không đế/Đầu báo cháy nhiệt cố định địa chỉ không đế.jpg";

const Product = ({ imageSrc, productName, price }) => {
  return (
    <div className="grid-item">
      <img src={imageSrc} alt="Product Image" />
      <h3>{productName}</h3>
      <p>${price}</p>
    </div>
  );
};

const ProductType = ({ typeName, products }) => {
  return (
    <div className="type-product">
      <div className="name-type-product">
        <h4>{typeName}</h4>
      </div>
      <div className="slider">
        <div className="grid-slide grid-container">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="see-more-type-product">
        <a href="">
          Xem thêm <i className="bi bi-three-dots"></i>
        </a>
      </div>
    </div>
  );
};

const ProductsProperties = () => {
  const productTypes = [
    {
      typeName: "BÁO CHÁY HOCHIKI",
      products: [
        {
          imageSrc: Daubaochay,
          productName: "Product 1",
          price: 15.99,
        },
        {
          imageSrc: Daubaokhoilap,
          productName: "Product 2",
          price: 15.99,
        },
        {
          imageSrc: DauBaoKhoiNhiet,
          productName: "Product 3",
          price: 15.99,
        },
        {
          imageSrc: DauBaoKhoiQuang,
          productName: "Product 4",
          price: 15.99,
        },
        {
          imageSrc: DauDoGas,
          productName: "Product 5",
          price: 15.99,
        },
      ],
    },
    {
      typeName: "BÁO CHÁY HORING LIH",
      products: [
        {
          imageSrc: DauBaoChayNhietCoDinh,
          productName: "Product 2",
          price: 15.99,
        },
        {
          imageSrc: DauBaoChayNhietCoDinh,
          productName: "Product 2",
          price: 15.99,
        },
        {
          imageSrc: DauBaoChayNhietCoDinh,
          productName: "Product 2",
          price: 15.99,
        },
        {
          imageSrc: DauBaoChayNhietCoDinh,
          productName: "Product 2",
          price: 15.99,
        },
        {
          imageSrc: DauBaoChayNhietCoDinh,
          productName: "Product 2",
          price: 15.99,
        },
      ],
    },
  ];

  return (
    <>
      <div id="products">
        <div className="container">
          <div className="best-selling-product"> DANH MỤC SẢN PHẨM </div>
          {productTypes.map((type, index) => (
            <ProductType key={index} {...type} />
          ))}
        </div>
      </div>
    </>
  );
};

Product.propTypes = {
  imageSrc: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.number,
};

ProductType.propTypes = {
  typeName: PropTypes.string,
  products: PropTypes.array,
  dynamicSlidesToShow: PropTypes.number,
};

export default ProductsProperties;
