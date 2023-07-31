import React from "react";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div class="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Envío gratis a partir de $100 y devoluciones gratis
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Linea directa:{" "}
                <a className="text-white" href="tel:+56 9264954234">
                  +56 9264954234
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">{/*26:04*/}</div>
        </div>
      </header>
    </>
  );
};

export default Header;
