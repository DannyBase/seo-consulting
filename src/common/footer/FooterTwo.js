import React from 'react';
import Link from 'next/link';

const FooterTwo = () => {
    return (
        <>
            <footer>
                <div className="footer-style-2">
                    <div className="container">
                        <div className="footer-top mt-120 pt-40 pb-40">
                            <div className="row align-items-center">
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="footer__widget footer-col-1">
                                        <div className="footer-widget__column footer-widget__about">
                                            <div className="footer-widget__about-logo">
                                                <Link href="/"><img src="/assets/img/logo/logo-white.png" alt="Logo" /></Link>
                                            </div>
                                            <p className="footer-widget__about-text">Morbi pharetra, eros sed euismod pellentesque, nulla risus lobortis purus, quis maximus.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="footer__widget position-relative">
                                        <h2><Link href="/contact">Get In Touch</Link></h2>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="footer__widget footer-col-4">
                                        <h3 className="footer-widget__title">Social Share</h3>
                                        <div className="social-hvr">
                                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="row">
                                <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                    <div className="copyright">
                                        <p>© 2024 SEOQ All Rights Reserved.</p>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                    <div className="footer-menu text-center">
                                        <ul>
                                            <li><Link href="/">Home</Link></li>
                                            <li><Link href="/">About us</Link></li>
                                            <li><Link href="/">Services</Link></li>
                                            <li><Link href="/">Solutions</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                    <div className="footer-bottom-menu">
                                        <ul>
                                            <li><Link href="/">Privacy Policy</Link></li>
                                            <li><Link href="/">Term of Service</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterTwo;