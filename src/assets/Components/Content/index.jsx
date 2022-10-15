import React from 'react';

const Index = () => {
    return (
      <>
        <section className="contents-card">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-8 col-md-12 mt-3 big-col-card">
                <div className="row" id="col-bg">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-text p-5">
                    <h2>Lorem ipsum dolor sit amet consect</h2>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Iste iusto adipisci vero a
                    </p>
                    <div className="col-btn">
                      <a href="#" className="btn-redmore">
                        Read more
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mt-4 col-img">
                    <img
                      src="https:picsum.photos/200/102"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mt-3 col-sm-card">
                <h4>Free delivery</h4>
                <p>
                  I like to say that content designers give Meta a voice, and we
                  do that by designing through words.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mt-3 col-sm-card">
                <h4>Free delivery</h4>
                <p>
                  I like to say that content designers give Meta a voice, and we
                  do that by designing through words.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mt-3 col-sm-card">
                <h4>Free delivery</h4>
                <p>
                  I like to say that content designers give Meta a voice, and we
                  do that by designing through words.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mt-3 col-sm-card">
                <h4>Free delivery</h4>
                <p>
                  I like to say that content designers give Meta a voice, and we
                  do that by designing through words.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default Index;