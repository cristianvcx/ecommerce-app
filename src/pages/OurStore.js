import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Meta } from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";

const OurStore = () => {
    const [grid, setGrid] = useState(4);
    
    return (
    <>
        <Meta title={"Nuestra Tienda"}/>
        <BreadCrumb title="Nuestra Tienda"/>
        <div className="store-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Comprar por Categorias</h3>
                            <div>
                                <ul className="ps-0">
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptod</li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Filtrado Por</h3>
                            <div>
                                <h5 className="sub-title">Availablity</h5>
                                <div>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            value="" 
                                            id="" 
                                        />
                                        <label className="form-check-label" htmlfor="">
                                            In Stock (1)
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            value="" 
                                            id="" 
                                        />
                                        <label className="form-check-label" htmlfor="">
                                            Out of Stock (0)
                                        </label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Price</h5>
                                <div className="d-flex align-items-center gap-10">
                                    <div className="form-floating">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="floatingInput" 
                                            placeholder="From" 
                                        />
                                        <label htmlFor="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="floatingInput1" 
                                            placeholder="To" 
                                        />
                                        <label htmlFor="floatingInput1">To</label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Colors</h5>
                                <div>
                                    <ul className="colors ps-0">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h5 className="sub-title">Size</h5>
                                <div>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            value="" 
                                            id="color-1" 
                                        />
                                        <label className="form-check-label" htmlfor="color-1">
                                            S (2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            value="" 
                                            id="color-2" 
                                        />
                                        <label className="form-check-label" htmlfor="color-2">
                                            M (2)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Etiquetas de Productos</h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Headphone
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Laptod
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Mobile
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Wire
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Producto Aleatorio</h3>
                            <div>
                                <div className="random-products mb-3 d-flex">
                                    <div className="w-50">
                                        <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                                    </div>
                                    <div className="w-50">
                                        <h5>
                                            Kids headphone bulk 10 pack multi colored for students
                                        </h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>$ 300</b>
                                    </div>
                                </div>
                                <div className="random-products d-flex">
                                    <div className="w-50">
                                        <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                                    </div>
                                    <div className="w-50">
                                        <h5>
                                            Kids headphone bulk 10 pack multi colored for students
                                        </h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>$ 300</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block" style={{"width":"100px"}}>Ordenar por:</p>
                                    <select name="" className="form-control form-select" id="">
                                        <option value="manual">Presentado</option>
                                        <option value="best-selling" selected="selected">Más vendido</option>
                                        <option value="title-ascending">Alfabéticamente, A-Z</option>
                                        <option value="title-descending">Alfabéticamente, Z-A</option>
                                        <option value="price-ascending">Precio, menor a mayor</option>
                                        <option value="price-descending">Precio, mayor a menor</option>
                                        <option value="created-ascending">Fecha, antigua a nueva</option>
                                        <option value="created-descending">Fecha, nueva a antigua</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <p className="totalproducts mb-0">21 Productos</p>
                                    <div className="d-flex gap-10 align-items-center grid">
                                        <img onClick={()=>{setGrid(3);}} src="images/gr4.svg" className="d-block img-fluid" alt="grid" />
                                        <img onClick={()=>{setGrid(4);}} src="images/gr3.svg" className="d-block img-fluid" alt="grid" />
                                        <img onClick={()=>{setGrid(6);}} src="images/gr2.svg" className="d-block img-fluid" alt="grid" />
                                        <img onClick={()=>{setGrid(12);}} src="images/gr.svg" className="d-block img-fluid" alt="grid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-list pb-5">
                            <div className="d-flex gap-10 flex-wrap">
                                <ProductCard grid={grid}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </>
    );
};

export default OurStore;