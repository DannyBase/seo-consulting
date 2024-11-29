import React, { useState } from 'react';
import NavMenu from './NavMenu';
import Sidebar from './sidebar';
import Link from 'next/link';

const HeaderTwo = () => {
    const [isActive, setIsActive] = useState(false);
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <header>
                <div id="header-sticky" className="header-3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-12 col-xl-12 col-lg-12">
                                <div className="header__main-content-wrapper d-flex align-items-center justify-content-between p-relative">
                                    <div className="header__main-left">
                                        <div className="header__logo">
                                            <Link href="/" className="logo-dark"><img src="/assets/img/logo/logo-white.png" alt="logo-img" /></Link>
                                            <Link href="/" className="logo-light"><img src="/assets/img/logo/logo.png" alt="logo-img" /></Link>
                                        </div>
                                    </div>
                                    <div className="main-menu d-none d-xl-block">
                                        <nav id="mobile-menu">
                                            <NavMenu />
                                        </nav>
                                    </div>
                                    <div className="header__main-right">
                                        <Link href="/contact" className="header-btn-3 rr-bounce-up d-xxl-block d-xxl-block d-lg-block d-md-block d-none">
                                            Get in touch
                                        </Link>
                                        <button onClick={() => setIsActive(true)} className="side-toggle d-lg-block d-xl-none">
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
            {/* header start */}

            <Sidebar isActive={isActive} setIsActive={setIsActive} />

            <div className="body-overlay"></div>
        </>
    )
}

export default HeaderTwo;