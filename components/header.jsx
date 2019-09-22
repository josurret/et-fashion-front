import React from 'react'

export default class AppHeader extends React.Component {
    render() {
        return (
            <header className="main_menu home_menu">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-11">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="index.html"/> <img src="/static/assets/template/winter/img/logo.png" alt="logo"/>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="menu_icon"><i className="fas fa-bars"></i></span>
                                </button>

                                <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="index">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="about">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="login">Login</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contactus">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="hearer_icon d-flex">
                                    <div className="dropdown cart">
                                        <a className="dropdown-toggle" href="#" id="navbarDropdown3" role="button"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="ti-bag"></i>
                                        </a>
                                    </div>
                                    <a id="search_1" href=""><i className="ti-search"></i></a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}