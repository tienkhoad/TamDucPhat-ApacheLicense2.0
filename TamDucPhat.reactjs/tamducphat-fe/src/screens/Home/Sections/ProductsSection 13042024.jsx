import React, { useRef, useEffect, useState } from "react";
import "../../../style/style.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel as ProductCarousel } from "antd";
import { Button } from "antd";
import Daubaochay from "../../../img/products/Đầu báo cháy nhiệt cố định địa chỉ không đế/Đầu báo cháy nhiệt cố định địa chỉ không đế.jpg";
import Daubaokhoilap from "../../../img/products/Đầu báo khói lắp trên đường ống địa chỉ Hochiki/Đầu báo khói lắp trên đường ống địa chỉ Hochiki.jpg";
import DauBaoKhoiNhiet from "../../../img/products/Đầu báo khói nhiệt kế hợp địa chỉ - ACC-V/Đầu báo khói nhiệt kế hợp địa chỉ - ACC-V.jpg";
import DauBaoKhoiQuang from "../../../img/products/Đầu báo khói quang địa chỉ kèm đế Hochiki ALN-V/Đầu báo khói quang địa chỉ kèm đế Hochiki ALN-V.jpg";
import DauDoGas from "../../../img/products/Đầu dò gas HORING AH-0822/Đầu dò gas HORING AH-0822.jpg";
import DauBaoKhoiNhietHSB from "../../../img/products/Đế đầu báo khói nhiệt địa chỉ Hochiki HSB-NSA-6/Đế đầu báo khói nhiệt địa chỉ Hochiki HSB-NSA-6.jpg";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;
  const displayedProducts = products.slice(
    currentIndex,
    currentIndex + itemsToShow,
  );

  const showNextProducts = () => {
    const newIndex = (currentIndex + 1) % products.length;
    setCurrentIndex(newIndex);
  };

  const showPreviousProducts = () => {
    const newIndex = (currentIndex - 1 + products.length) % products.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [products]);

  return (
    <div className="type-product">
      <div className="name-type-product">
        <h4>{typeName}</h4>
      </div>
      <ProductCarousel
        dots={false}
        autoplay={false}
        fade={true}
        initialSlide={0}
      >
        {displayedProducts.map((product, index) => (
          <div key={index} className="grid-slide grid-container">
            <Product {...product} />
          </div>
        ))}
      </ProductCarousel>
      <div className="row">
        <div className="col-md-2">
          {/* Nút Previous */}
          <Button className="btn btn-light" onClick={showPreviousProducts}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
        </div>
        <div className="col-md-8"></div>
        <div className="col-md-2">
          {/* Nút Next */}
          <Button className="btn btn-light" onClick={showNextProducts}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
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
  const carouselRef = useRef(null);
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
        {
          imageSrc: DauBaoKhoiNhietHSB,
          productName: "Product 6 ",
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

  useEffect(() => {
    //console.log('Carousel Ref:', carouselRef.current);
  }, [carouselRef]);

  return (
    <>
      <div id="products">
        <div className="container">
          <div className="best-selling-product"> DANH MỤC SẢN PHẨM </div>
          {productTypes.map((type, index) => (
            <ProductType key={index} {...type} />
          ))}
          <div className="type-product" id="type-product-2">
            <div className="name-type-product">
              <h4>BÁO CHÁY HORING LIH 1 </h4>
            </div>
            <div className="slider">
              <div className="grid-slide grid-container">
                <div className="grid-item">
                  <img
                    src="../../../img/products/Bình cầu chữa cháy tự động 6Kg/Bình cầu chữa cháy tự động 6Kg.jpg"
                    alt="Product Image"
                  />
                  <h3>Product 1</h3>
                  <p>$10.99</p>
                </div>
                <div className="grid-item">
                  <img
                    src="img/products/Bình cầu chữa cháy tự động 6Kg/Bình cầu chữa cháy tự động 6Kg.jpg"
                    alt="Product Image"
                  />
                  <h3>Product 2</h3>
                  <p>$15.99</p>
                </div>
                <div className="grid-item">
                  <img
                    src="img/products/Bình cầu chữa cháy tự động 6Kg/Bình cầu chữa cháy tự động 6Kg.jpg"
                    alt="Product Image"
                  />
                  <h3>Product 3</h3>
                  <p>$19.99</p>
                </div>
                <div className="grid-item">
                  <img
                    src="img/products/Bình cầu chữa cháy tự động 6Kg/Bình cầu chữa cháy tự động 6Kg.jpg"
                    alt="Product Image"
                  />
                  <h3>Product 4</h3>
                  <p>$12.99</p>
                </div>
                <div className="grid-item">
                  <img
                    src="img/products/Bình chữa cháy 3kg CO2 JSF MT3/"
                    alt="Product Image"
                  />
                  <h3>Product 5</h3>
                  <p>$10.99</p>
                </div>
                <div className="grid-item">
                  <img
                    src="img/products/Bình cầu chữa cháy tự động 6Kg/Bình cầu chữa cháy tự động 6Kg.jpg"
                    alt="Product Image"
                  />
                  <h3>Product 6</h3>
                  <p>$15.99</p>
                </div>
                <div className="grid-item">
                  <img
                    src="img/products/Bình cầu chữa cháy tự động 6Kg/Bình cầu chữa cháy tự động 6Kg.jpg"
                    alt="Product Image"
                  />
                  <h3>Product 7</h3>
                  <p>$19.99</p>
                </div>
                <div className="grid-item">
                  <img
                    src="img/products/Bình cầu chữa cháy tự động 6Kg/Bình cầu chữa cháy tự động 6Kg.jpg"
                    alt="Product Image"
                  />
                  <h3>Product 8</h3>
                  <p>$12.99</p>
                </div>
              </div>
              <div className="slider-controls">
                <button className="prev-arrow"></button>
                <button className="next-arrow"></button>
              </div>
            </div>
            <div className="see-more-type-product">
              <a href="">
                Xem thêm <i className="bi bi-three-dots"></i>
              </a>
            </div>
          </div>
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
