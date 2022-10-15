import React from 'react';
import LogoImg from "../Image/logo.png"
const Index = () => {
    return (
      <>
        <header>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img src={LogoImg} alt="img" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <select
                    className="form-select w-25"
                    aria-label="Default select example"
                  >
                    <option selected>Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0  w-100 justify-content-end px-5">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Collection
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        News
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Discounts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Shop
                      </a>
                    </li>
                  </ul>
                  <form className="d-flex align-items-center">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="btn-login-and-shop d-flex ">
                      <a href="#" className="person mx-3 fs-3 text-dark">
                        <i className="bi bi-person"></i>
                      </a>
                      <a href="#" className="fs-3 text-dark">
                        <i className="bi bi-cart-dash-fill"></i>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </>
    );
};

export default Index;