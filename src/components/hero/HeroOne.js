import React, { useEffect } from "react";
import Link from "next/link";
import BackgroundOne from '../../../public/assets/img/hero/hero-bg-1.png';

const HeroOne = () => {

    return (
        <>
            <div className="hero-one" style={{backgroundImage: `url(${BackgroundOne.src})`}}>
                <div className="hero-one__wrapper">
                    <div className="hero-one__animation-1">
                        <img src="/assets/img/hero/rocket.png" alt="rocket img" />
                    </div>
                    <div className="hero-one__animation-2">
                        <img src="/assets/img/hero/ranking.png" alt="rocket img" />
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xxl-12 col-xl-7 col-lg-12 col-md-12 col-sm-12">
                                <div className="hero-one__content wow fadeInLeft" data-wow-delay=".3s">
                                    <h2>Discover <span className="hero-highlighter-1"> 
                                        Your Business
                                        <svg xmlns="http://www.w3.org/2000/svg" width="323" height="19" viewBox="0 0 323 19" fill="none">
                                            <path d="M0.235266 0.259698C0.36753 0.122473 0.543476 0.0336098 0.734079 0.00779267C0.924682 -0.0180245 1.11855 0.0207378 1.28371 0.117677C31.0522 17.2159 91.3701 14.4253 125.484 12.0537C170.314 8.93659 289.851 -11.7474 322.808 17.9259C322.896 18.0079 322.958 18.1137 322.985 18.23C323.012 18.3462 323.003 18.4677 322.96 18.5792C322.923 18.6736 322.865 18.7584 322.789 18.8269C322.713 18.8954 322.623 18.9458 322.524 18.974C322.425 19.0022 322.321 19.0076 322.22 18.9896C322.118 18.9716 322.023 18.9307 321.94 18.8703C297.472 1.49519 214.631 11.7697 182.122 12.3662C136.157 15.6821 89.4684 21.0289 43.5322 14.5815C28.9192 12.2739 12.9178 9.68215 0.372647 1.51649C0.27059 1.4495 0.184751 1.36133 0.12119 1.25819C0.0576282 1.15506 0.0178932 1.0395 0.00479111 0.919634C-0.00831098 0.799773 0.00553889 0.678549 0.0453624 0.564519C0.085186 0.450489 0.150013 0.346434 0.235266 0.259698Z" fill="url(#paint0_linear_1_4956)"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_4956" x1="0" y1="9.5" x2="323" y2="9.5" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stop-color="#FF3007"/>
                                            <stop offset="1" stop-color="#FF9700"/>
                                            </linearGradient>
                                            </defs>
                                            </svg>
                                        </span>
                                        <br /> SEO Solution.</h2>
                                    <p>Maecenas egret risks qualm Cohabiter diapaus magna egret vehicular <br /> pellentesque lobortis iaculis felis viverra sit amet.</p>
                                    <form action="#">
                                        <div className="hero__input">
                                            <i className="fa-regular fa-magnifying-glass"></i>
                                            <input type="text" placeholder="Analyze any website or app" />
                                            <button type="submit" className="hero-btn-1 rr-btn-style-1">Search</button>
                                        </div>
                                    </form>
                                    <div className="hero-popular-search">
                                        <span>Popular:</span>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <img src="/assets/img/icon/google.svg" alt="google icon" /> Google.com
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="/assets/img/icon/facebook-two.svg" alt="facebook icon" />Facebook.com</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="/assets/img/icon/twitter.svg" alt="facebook icon" />Twitter.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroOne;