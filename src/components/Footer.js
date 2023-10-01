import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">
                  Regístrate para recibir el boletín
                </h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Tu dirección de correo electrónico..."
                  aria-label="Tu dirección de correo electrónico..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Registrate
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contactenos</h4>
              <div>
                <address className="text-white fs-6">
                  Hno: 277 Near Vill chopal,
                  <br /> Sonipat, Haryana <br />
                  PinCode: 131103
                </address>
                <a
                  href="tel:+56 9826495423"
                  className="mt-3 d-block mb-2 text-white"
                >
                  +56 9826495423
                </a>
                <a
                  href="mailto:navdeepdahiya753@gmail.com"
                  className="mt-2 d-block mb-1 text-white">
                  navdeepdahiya753@gmail.com
                </a>
              </div>
              <div className="social_icons d-flex align-items-center gap-30 mt-4">
                <a className="text-white" href="#">
                  <BsLinkedin className="fs-4" />
                </a>
                <a className="text-white" href="#">
                  <BsInstagram className="fs-4" />
                </a>
                <a className="text-white" href="#">
                  <BsGithub className="fs-4" />
                </a>
                <a className="text-white" href="#">
                  <BsYoutube className="fs-4" />
                </a>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Informaciones</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">
                  Politica de Privacidad
                </Link>
                <Link className="text-white py-2 mb-1">Politica Reembolso</Link>
                <Link className="text-white py-2 mb-1">Politica de Envios</Link>
                <Link className="text-white py-2 mb-1">
                  Terminos & Condiciones
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Cuenta</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Sobre Nostros</Link>
                <Link className="text-white py-2 mb-1">
                  Pregunta mas Frecuentes
                </Link>
                <Link className="text-white py-2 mb-1">Contacto</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Enlaces rapidos</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptods</Link>
                <Link className="text-white py-2 mb-1">Audifonos</Link>
                <Link className="text-white py-2 mb-1">Tablet</Link>
                <Link className="text-white py-2 mb-1">Reloj</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Desarrollado por Cristian A
                Villalobos
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
