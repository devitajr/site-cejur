import React, { useState } from "react";
import "./Navbar.css";

import LogoCejur from "./Logo_cejur.svg";

import { Link } from "react-router-dom";    

const Navbar = () => {
    // const [opened, setOpened] = useState(false)

    // const toogleMenu = () => {
    //     if(opened){
    //         setOpened(false)
    //     } else {
    //         setOpened(true)
    //     }
    //     console.log(opened)
    // }

    return (
        <nav className=" navbar navbar-expand-lg" id="main-nav">
            <div className="container-fluid">
                {/* LOGO DA CEJUR */}
                <a href="#" className="navbar-brand">
                    <img className="logo" src={LogoCejur} alt="Logo Cejur" />
                </a>


                <button
                    className={`navbar-toggler`}
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => toogleMenu()}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="navbarNav"
                    aria-labelledby="navbarNavLabel"
                >
                    <div className="offcanvas-header">
                        <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="navbar-nav t-font-semibold navbar">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a>
                            <a className="nav-link" href="/#servicos">
                                Serviços
                            </a>
                            <a className="nav-link" href="/#sobre">
                                Sobre
                            </a>
                            <a className="nav-link" href="/#resultados">
                                Resultados
                            </a>
                            <a className="nav-link" href="/#contato">
                                Contato
                            </a>
                            <div className="social">
                                <a
                                    href="https://www.linkedin.com/company/centro-de-estudos-jur-dicos-j-nior/"
                                    target="_blank"
                                    className="nav-icon"
                                >
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </a>
                                <a
                                    href="https://www.facebook.com/cejurFGV/"
                                    target="_blank"
                                    className="nav-icon"
                                >
                                    <i className="fab fa-facebook fa-2x"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/cejur_fgv/"
                                    target="_blank"
                                    className="nav-icon"
                                >
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
