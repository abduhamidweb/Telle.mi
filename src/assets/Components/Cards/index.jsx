import React from "react";

const Index = ({ ProductImg, ItemString, Price, Reting }) => {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mx-auto card-wrap">
        <div className="card product-card">
          <img src={ProductImg} alt="img" className="card-img img-fluid" />
          <div className="card-body">
            <button className="btn bg-primary text-light  card-btn fw-bold">
              $ {Price}
            </button>
            <div className="desription">
              <a href="#" className="product-active-text">
                {ItemString}
              </a>
              <p className="mb-0 reting-block">
                <i className="bi bi-star-fill mx-1"></i>
                <span className="reting">{Reting}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
