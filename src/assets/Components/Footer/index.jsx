import React from "react";
import LogoImg from "../Image/logo.png";
const index = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-12 col-sm-12 mx-auto  mt-5 ">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 mx-auto mt-3">
                  <div className="footer-description">
                    <a href="#" className="mb-5">
                      <img src={LogoImg} alt="" />
                    </a>
                    <p className="mt-5">
                      2015 Online store asakhiy.uz: Home appliances, etc.
                      Delivery of products is carried out in all regions. All
                      rights .
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mx-auto mt-3">
                  <ul className="footer-link">
                    <li className="footer-link-name">About company</li>
                  </ul>
                  <ul className="footer-link">
                    <li className="footer-item">
                      <a href="#">About Us</a>
                    </li>
                    <li className="footer-item">
                      <a href="#">Processing policy</a>
                    </li>
                    <li className="footer-item">
                      <a href="#">Public offer</a>
                    </li>
                    <li className="footer-item">
                      <a href="#">Processing policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mx-auto  mt-5 ">
              <div className="row ">
                <div className="col-lg-6 col-md-6 col-sm-12 mx-auto mt-3">
                  <ul className="footer-link">
                    <li className="footer-link-name">Why choose us</li>
                  </ul>
                  <ul className="footer-link">
                    <li className="footer-item">
                      <a href="#">Payment and delivery</a>
                    </li>
                    <li className="footer-item">
                      <a href="#">Stock</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mx-auto mt-3">
                  <ul className="footer-link">
                    <li className="footer-link-name">Payment</li>
                  </ul>
                  <ul className="footer-link">
                    <li className="footer-item">
                      <a href="https://Click.uz">Click.uz</a>
                    </li>
                    <li className="footer-item">
                      <a href="https://Payme.com">Payme</a>
                    </li>
                    <li className="footer-item">
                      <a href="https://Apelsin.uz">Apelsin</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12    mt-5">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12  mt-3">
                  <ul className="footer-link">
                    <li className="footer-link-name">Socially media</li>
                  </ul>
                  <ul className="footer-link">
                    <li className="footer-item">
                      <a href="#">
                        <i className="bi bi-telegram "></i>Telegram
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#">
                        <i className="bi bi-instagram "></i>Tnstagram
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12  mt-3">
                  <ul className="footer-link">
                    <li className="footer-link-name">Contact us</li>
                  </ul>
                  <ul className="footer-link">
                    <li className="footer-item">
                      <a href="https://your@gmail.com">your@gmail.com</a>
                    </li>
                    <li className="footer-item">
                      <a href="#" className="text-primary">
                        +998 99 506 69 00
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#" className="text-decoration-underline">
                        Mirzo Ulg’ubek tumani S blog 7 uy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="container">
          <div className="footer-copi-rigth">
            <p>2022 Naturality Digital. All rights reseved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
