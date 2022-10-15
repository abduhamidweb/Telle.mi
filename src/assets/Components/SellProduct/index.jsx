import React from "react";

const index = ({ ProductImg, ItemString, Price, Reting, Stock }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12 sell-card mt-4">
        <div className="card">
          <div className="card-sell-block">
            <span>-{Stock}%</span>
          </div>
          <img src={ProductImg} alt="img" className="card-img" />
          <div className="card-body">
            <div className="d-flex align-items-center">
              <button className="btn btn-primary btn-roundet">${Price}</button>
              <button className="btn btn-sell">${Price}</button>
            </div>
            <div className="sell-card-description">
              <a href="#" className="active-sell-product">
                {ItemString}
              </a>
            </div>
            <div className="product-sell-reting">
              <i className="bi bi-star-fill"></i>
              <span>{Reting}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
