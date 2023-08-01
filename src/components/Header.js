import React from "react";
import { NavLink, Link } from "react-router-dom";
import {BsSearch} from 'react-icons/bs';
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
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
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Digitic.</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input 
                  type="text"
                  className="form-control py-2"
                  placeholder="Buscar tu producto aquí..."
                  aria-label="Buscar tu producto aquí..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6"/>
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Comparar <br/> Productos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Lista de Deseo <br /> Favorito
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/user.svg" alt="user" />
                    <p className="mb-0">
                      Iniciar Sesion <br /> Mi Cuenta
                    </p>
                  </Link >
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="images/menu.svg" alt=""/><span className="me-5 d-inline-block">Categorías de la tienda</span>
                  </button>
                  <ul className="dropdown-menu">
                    {/* 1:00:24 */}
                    <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                    <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                    <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                  </ul>
                </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="/">Nuestra Tienda</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/contact">Contacto</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
