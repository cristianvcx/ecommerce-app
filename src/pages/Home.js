import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

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
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Envio Gratis</h6>
                    <p className="mb-0">De todos los pedidos superiores a $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Ofertas sorpresa diarias</h6>
                    <p className="mb-0">Ahorre hasta un 25% de descuento</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Apoyo 24/7</h6>
                    <p className="mb-0">Comprar con un experto</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Precios asequibles</h6>
                    <p className="mb-0">
                      Obtener precio predeterminado de fabrica
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Pagos seguros</h6>
                    <p className="mb-0">100% Pago protegido</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="marquee-inner-wrapper bg-white card-wrapper">
                  <Marquee className="d-flex">
                      <div className="mx-4 w-25">
                        <img src="images/brand-01.png" alt="brand" />
                      </div>
                      <div className="mx-4 w-25">
                        <img src="images/brand-02.png" alt="brand" />
                      </div>
                      <div className="mx-4 w-25">
                        <img src="images/brand-03.png" alt="brand" />
                      </div>
                      <div className="mx-4 w-25">
                        <img src="images/brand-04.png" alt="brand" />
                      </div>
                      <div className="mx-4 w-25">
                        <img src="images/brand-05.png" alt="brand" />
                      </div>
                      <div className="mx-4 w-25">
                        <img src="images/brand-05.png" alt="brand" />
                      </div>
                      <div className="mx-4 w-25">
                        <img src="images/brand-06.png" alt="brand" />
                      </div>
                      <div className="mx-4 w-25">
                        <img src="images/brand-07.png" alt="brand" />
                      </div>
                      <div className="mx-4 w-25">
                        <img src="images/brand-08.png" alt="brand" />
                      </div>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        {/* 2:18:09 */}
      </section>
    </>
  );
};

export default Home;
