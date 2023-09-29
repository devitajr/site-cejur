import React, { useState } from "react";
import "./Navbar.css";


import { Link } from "react-router-dom";

const Navbar_Cases = () => {
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
                {/* LOGO DA JR */}
                <Link to="/" className="navbar-brand" href="#">
                    <img className="logo" src="./svg/Logo Superior.svg" alt="Ita Junior" />
                </Link>


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
                        <div className="navbar-nav t-flex t-items-center t-font-semibold">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                            <Link className="nav-link" to="/#servicos">
                                Serviços
                            </Link>
                            <Link className="nav-link" to="/#sobre">
                                Sobre
                            </Link>
                            <Link className="nav-link" to="/#resultados">
                                Resultados
                            </Link>
                            <Link className="nav-link" to="/#contato">
                                Contato
                            </Link>
                            <div className="social">
                                <a
                                    href="https://br.linkedin.com/company/itajunior/"
                                    target="_blank"
                                >
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </a>
                                <a
                                    href="https://www.facebook.com/itajunior.ej/"
                                    target="_blank"
                                >
                                    <i className="fab fa-facebook fa-2x"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/itajunior.ej/"
                                    target="_blank"
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
export default Navbar_Cases;
