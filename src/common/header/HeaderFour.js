import React, { useState } from 'react';
import NavMenu from './NavMenu';
import Sidebar from './sidebar';
import Link from 'next/link';

const HeaderFour = () => {
    
    const [isActive, setIsActive] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <header>
                <div id="header-sticky" className="header-4">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-12 col-xl-12 col-lg-12">
                                <div className="header__main-content-wrapper d-flex align-items-center justify-content-between p-relative">
                                    <div className="header__main-left">
                                        <div className="header__logo">
                                            <Link href="/" className="logo-dark">
                                                <img src="/assets/img/logo/logo.png" alt="logo-img" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="main-menu d-none d-xl-block text-center">
                                        <nav id="mobile-menu">
                                            <NavMenu />
                                        </nav>
                                    </div>
                                    <div className="header__main-right">
                                        <button onClick={() => setIsActive(true)} className="side-toggle">
                                            <span className="menu__bar">
                                                <span className="bar-icon">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Sidebar isActive={isActive} setIsActive={setIsActive} />

            <div className="body-overlay"></div>
        </>
    )
}

export default HeaderFour;