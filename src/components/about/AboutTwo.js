import React, { useEffect } from 'react';

const AboutTwo = () => {
    useEffect(() => {

        if ($(".count-bar").length) {
            $(".count-bar").appear(
              function () {
                var el = $(this);
                var percent = el.data("percent");
                $(el).css("width", percent).addClass("counted");
              }, {
                accY: -50
              }
            );
        }
        
        if ($(".progress-levels .progress-box .bar-fill").length) {
            $(".progress-box .bar-fill").each(
                function () {
                $(".progress-box .bar-fill").appear(function () {
                    var progressWidth = $(this).attr("data-percent");
                    $(this).css("width", progressWidth + "%");
                });
                }, {
                accY: 0
                }
            );
        }
            
      }, []);
    return (
        <>
            {/* about two start */}
            <div className="about-two pt-140 pb-160">
                <div className="about-two__wrapper position-relative">
                    <div className="about-two-img-animation2">
                        <img src="/assets/img/shape/2.svg" alt="shape" />
                    </div>
                    <div className="about-two-img-animation3">
                        <img src="/assets/img/shape/1.svg" alt="shape" />
                    </div>
                    <div className="about-two-img-animation4">
                        <img src="/assets/img/shape/3.svg" alt="shape" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <div className="about-two__content">
                                    <h2 className="about-two__title mb-60">How Our Strategies Transformed Businesses.</h2>
                                    <div className="about-two__info-list wow fadeInUp" data-wow-delay=".3s">
                                        <div className="about-two__info-box mb-20">
                                            <div className="img">
                                                <img src="/assets/img/about/consulting.svg" alt="feature icon" />
                                            </div>
                                            <div className="text">
                                                <h4>Consulting</h4>
                                                <p>Nam blandit tellus at pulvinar ultrices sed justo sapien, sodales.</p>
                                            </div>
                                        </div>
                                        <div className="about-two__info-box mb-20 wow fadeInUp" data-wow-delay=".5s">
                                            <div className="img">
                                                <img src="/assets/img/about/production.svg" alt="feature icon" />
                                            </div>
                                            <div className="text">
                                                <h4>Production</h4>
                                                <p>Nam blandit tellus at pulvinar ultrices sed justo sapien, sodales.</p>
                                            </div>
                                        </div>
                                        <div className="about-two__info-box wow fadeInUp" data-wow-delay=".7s">
                                            <div className="img">
                                                <img src="/assets/img/about/support.svg" alt="feature icon" />
                                            </div>
                                            <div className="text">
                                                <h4>24/7 support</h4>
                                                <p>Nam blandit tellus at pulvinar ultrices sed justo sapien, sodales.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <div className="about-two__img text-end wow fadeInUp" data-wow-delay=".3s">
                                    <div className="about-two__img-animation1">
                                        <img src="/assets/img/shape/star.svg" alt="star shape" />
                                    </div>
                                    <img src="/assets/img/about/about-img-3.jpg" alt="about img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about two end */}
        </>
    )
}

export default AboutTwo;