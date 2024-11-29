import React, { useEffect } from "react";
import Link from "next/link";

const HeroTwo = () => {
    return (
        <>
            {/* hero two start */}
            <div className="hero-style-two d-flex align-items-end">
                <div className="hero-style-two__img-1">
                    <img src="/assets/img/shape/4.svg" alt="shape img" />
                </div>
                <div className="hero-style-two__img-2">
                    <img src="/assets/img/shape/2.svg" alt="shape img" />
                </div>
                <div className="hero-style-two__img-3">
                    <img src="/assets/img/shape/3.svg" alt="shape img" />
                </div>
                <div className="hero-style-two__img-4">
                    <img src="/assets/img/shape/1.svg" alt="shape img" />
                </div>
                <div className="hero-style-two__img-5">
                    <img src="/assets/img/shape/10.svg" alt="shape img" />
                </div>
                <div className="hero-style-two__img-6">
                    <img src="/assets/img/shape/9.svg" alt="shape img" />
                </div>
                <div className="hero-style-two__img-7">
                    <img src="/assets/img/shape/arrow-circle-line.png" alt="shape img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="hero-style-two__content mb-30">
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">Holistic Framework for Your <br />
                                    <span className="hero-highlighter-2">
                                    Online Business
                                    <svg xmlns="http://www.w3.org/2000/svg" width="323" height="19" viewBox="0 0 323 19" fill="none">
                                        <path d="M0.235266 0.259697C0.36753 0.122473 0.543476 0.0336098 0.734079 0.00779267C0.924682 -0.0180245 1.11855 0.0207378 1.28371 0.117677C31.0522 17.2159 91.3701 14.4253 125.484 12.0537C170.314 8.93659 289.851 -11.7474 322.808 17.9259C322.896 18.0079 322.958 18.1137 322.985 18.2299C323.012 18.3462 323.003 18.4677 322.96 18.5792C322.923 18.6736 322.865 18.7584 322.789 18.8269C322.713 18.8954 322.623 18.9458 322.524 18.974C322.425 19.0022 322.321 19.0076 322.22 18.9896C322.118 18.9716 322.023 18.9307 321.94 18.8703C297.472 1.49519 214.631 11.7697 182.122 12.3662C136.157 15.6821 89.4684 21.0289 43.5322 14.5815C28.9192 12.2739 12.9178 9.68215 0.372647 1.51649C0.27059 1.4495 0.184751 1.36133 0.12119 1.25819C0.0576282 1.15506 0.0178932 1.03949 0.00479111 0.919634C-0.00831098 0.799773 0.00553889 0.678549 0.0453624 0.564519C0.085186 0.450489 0.150013 0.346434 0.235266 0.259697Z" fill="url(#paint0_linear_1_3699)"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_1_3699" x1="0" y1="9.5" x2="323" y2="9.5" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stop-color="#FF3007"/>
                                        <stop offset="1" stop-color="#FF9700"/>
                                        </linearGradient>
                                        </defs>
                                        </svg>
                                    </span>.
                                </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 wow fadeInLeft" data-wow-delay=".5s">
                                <div className="hero-style-two__content-box-1">
                                    <img src="/assets/img/hero/hero-2-1.png" alt="hero img" />
                                    <h3>Improve your business in the digital platform.</h3>
                                </div>
                                <div className="active-user">
                                    <ul>
                                        <li><img src="/assets/img/hero/user-1.png" alt="user img" /></li>
                                        <li><img src="/assets/img/hero/user-2.png" alt="user img" /></li>
                                        <li><img src="/assets/img/hero/user-3.png" alt="user img" /></li>
                                        <li className="user-number">100+</li>
                                    </ul>
                                    <span>More Active Customer</span>
                                </div>
                            </div>
                            <div className="col-xxl-7 col-xl-5 col-lg-6 col-md-12 text-end wow fadeInRight" data-wow-delay=".7s">
                                <div className="hero-style-two__content-box-2">
                                    <img src="/assets/img/hero/hero-2-2.png" alt="hero img" />
                                    <Link href="/contact">Let’s Talk <i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                                </div>
                                <div className="happy-client">
                                    <div className="rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <p>4000+ Clients Reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="hero-bottom-line"></div>
                    </div>
                </div>
            </div>
            {/* hero two end */}
        </>
    )
}

export default HeroTwo;