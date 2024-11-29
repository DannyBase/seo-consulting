import React from 'react';
import Link from 'next/link';

const CtaOne = () => {
    return (
        <>
            {/* <!-- cta one start */}
            <div className="cta-one theme-gray-3 position-relative wow fadeInUp" data-wow-delay=".3s">
                <div className="container">
                    <div className="cta-one__overlay"></div>
                    <div className="cta-one__wrapper">
                        <div className="cta-one__img1">
                            <img src="/assets/img/cta/dotted.svg" alt="shape" />
                        </div>
                        <div className="cta-one__img2">
                            <img src="/assets/img/cta/leaf.png" alt="shape" />
                        </div>
                        <div className="cta-one__img3">
                            <img src="/assets/img/cta/cta-1-2.png" alt="shape" />
                        </div>
                        <div className="cta-one__img4">
                            <img src="/assets/img/cta/cta-1-3.png" alt="shape" />
                        </div>
                        <div className="cta-one__img5">
                            <img src="/assets/img/cta/arrow-top-corner.png" alt="shape" />
                        </div>
                        <div className="cta-one__img6">
                            <img src="/assets/img/cta/arrow-down-corner.png" alt="shape" />
                        </div>
                        <div className="cta-one__img7">
                            <img src="/assets/img/cta/arrow-left.png" alt="shape" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 text-center">
                                    <div className="cta-main__img">
                                        <img src="/assets/img/cta/cta-1-1.png" alt="cta img" />
                                    </div>
                                </div>
                                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12">
                                    <h2>Be the First to Know <br /> Join Us for All Updates.</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing commodo imperdiet.</p>
                                    <div className="cta-one__wrapper-form">
                                        <form action="#">
                                            <input type="text" placeholder="Enter your mail here....." />
                                            <button type="submit" className="cta-one__btn rr-btn-style-1">Sign Up</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cta one end */}
        </>
    )
}

export default CtaOne;