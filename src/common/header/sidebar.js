import Link from 'next/link';
import React from 'react';
import MobileMenus from './mobile-menus';

const Sidebar = ({isActive, setIsActive}) => {

    return (
        <>
    <div className="tt-offcanvas-wrapper">
        <div className={`tt-offcanvas ${isActive ? "opened" : ""}`}>
            <div className="tt-offcanvas-close" onClick={() => setIsActive(false)}>
                <span><i className="fas fa-times"></i></span>
            </div>

                <div className="logo-box">
                    <Link href="/" aria-label="logo image"><img src="/assets/img/logo/logo-white.png"
                            width="155" alt="" /></Link>
                </div>
                <div className="mobile-nav__container"></div>

                
                <div className={`tt-mobile-menu mean-container d-xl-none`}> 
                    <div className="mean-bar">
                        <MobileMenus />
                    </div>
                </div>

                <div className="mobile-nav__container"></div>

                <div class="offset__widget offset__support">
                    <ul class="mobile-nav__contact list-unstyled">
                        <li>
                            <i class="fa fa-envelope"></i>
                            <a href="mailto:needhelp@seoq.com">needhelp@seoq.com</a>
                        </li>
                        <li>
                            <i class="fa fa-phone-alt"></i>
                            <a href="tel:+6668880000">666 888 0000</a>
                        </li>
                        <li>
                            <i class="fas fa-map-marker-alt"></i> 24/21, 2nd Rangpur, Sapla </li>
                    </ul>
                    <div class="mobile-nav__top">
                        <div class="mobile-nav__social">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                            <a href="#"><i class="fab fa-pinterest-p"></i></a>
                            <a href="#"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
        </div>
    </div>    

<div className={`body-overlay ${isActive ? "opened"  : ""}`} onClick={() => setIsActive(false)}></div>
        </>
    );
};

export default Sidebar;