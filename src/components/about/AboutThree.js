import React from 'react';

const AboutThree = () => {
    return (
        <>
            {/* about one start */}
            <div className="about-one pt-120 pb-145">
                <div className="about-one__animation_text">
                    <h2>About Us</h2>
                </div>
                <div className="about-one_animation1">
                    <img src="/assets/img/shape/1.svg" alt="shape" />
                </div>
                <div className="about-one_animation2">
                    <img src="/assets/img/shape/2.svg" alt="shape" />
                </div>
                <div className="about-one_animation3">
                    <img src="/assets/img/shape/3.svg" alt="shape" />
                </div>
                <div className="about-one_animation4">
                    <img src="/assets/img/shape/4.svg" alt="shape" />
                </div>
                <div className="about-one_circle1"></div>
                <div className="about-one_circle2"></div>
                <div className="about-one_circle3"></div>
                <div className="page-header__bg" data-background="assets/img/about/about-bg-1.png"></div>
                <div className="about-one__animation_3"></div>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay=".3s">
                            <div className="about-one__img">
                                <img src="/assets/img/about/about-img-1.jpg" alt="about img" />
                                <div className="about-one__img2">
                                    <img src="/assets/img/about/about-img-2.jpg" alt="about img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="about-one__right wow fadeInUp" data-wow-delay=".5s">
                                <div className="about-one__right-content">
                                    <span>About Us</span>
                                    <h2 className="section-title__one-title">Empowering Brands Online Our SEO Legacy and Commitment.</h2>
                                    <p>Etiam in elit non sem mollis luctus. Suspendisse egestas rutrum massa, accumsan pretium tortor Nullam enim ex, facilisis sit amet finibus vitae, volutpat eget lacus.</p>
                                </div>
                                <div className="about-one__counter">
                                    <div className="row">
                                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-6">
                                            <div className="counter-two__single">
                                                <div className="counter-two__single-inner">
                                                    <div className="text-box">
                                                        <h3 className="counter">13</h3>
                                                        <span className="counter-two__letter">+</span>
                                                        <p className="counter-two__text">Year of Experiences</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-6">
                                            <div className="counter-two__single">
                                                <div className="counter-two__single-inner">
                                                    <div className="text-box">
                                                        <h3 className="counter">4</h3>
                                                        <span className="counter-two__letter">K+</span>
                                                        <p className="counter-two__text">Satisfied Customers</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about one end */}
        </>
    )
}

export default AboutThree;