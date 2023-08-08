import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCARGADO PARA PROS.</h4>
                  <h5>iPad s13+ Pro.</h5>
                  <p>Desde $999.00 o $41.62/mes.</p>
                  <Link className="button">COMPRAR AHORA</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Mejor Sake</h4>
                    <h5>iPad s13+ Pro.</h5>
                    <p>
                      Desde $999.00 <br /> o $41.62/mes.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NUEVA LLEGADA</h4>
                    <h5>But Ipad Air</h5>
                    <p>
                      Desde $999.00 <br /> o $41.62/mes.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NUEVA LLEGADA</h4>
                    <h5>But Ipad Air</h5>
                    <p>
                      Desde $999.00 <br /> o $41.62/mes.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NUEVA LLEGADA</h4>
                    <h5>But Ipad Air</h5>
                    <p>
                      Desde $999.00 <br /> o $41.62/mes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div class="row">
            <div className="col-12">{/* 1:48:38 */}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
