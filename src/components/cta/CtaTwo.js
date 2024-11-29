import React from 'react';

const CtaTwo = () => {
    return (
        <>
            {/* cta two start */}
            <div className="cta-two">
                <div className="cta-two__img">
                    <img src="/assets/img/cta/shape-top.png" alt="cta img" />
                </div>
                <div className="cta-two__line1">
                    <img src="/assets/img/cta/line.png" alt="line img" />
                </div>
                <div className="cta-two__line2">
                    <img src="/assets/img/cta/line.png" alt="line img" />
                </div>
                <div className="cta-two__line3">
                    <img src="/assets/img/cta/line.png" alt="line img" />
                </div>
                <div className="cta-two__line4">
                    <img src="/assets/img/cta/line.png" alt="line img" />
                </div>
                <div className="cta-two__line5">
                    <img src="/assets/img/cta/line.png" alt="line img" />
                </div>
                <div className="cta-two__arrow1">
                    <img src="/assets/img/cta/arrow-right.png" alt="line img" />
                </div>
                <div className="cta-two__arrow2">
                    <img src="/assets/img/cta/arrow-left.png" alt="line img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-lg-5 d-lg-block d-xl-block d-xxl-block d-none">
                            <div className="cta-two__img1 wow fadeInLeft" data-wow-delay=".3s">
                                <img src="/assets/img/cta/cta-2-1.png" alt="cta img" />
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12">
                            <div className="cta-two__content wow fadeInUp" data-wow-delay=".3s">
                                <h2>Get Our Every Update <br /> Join With Us.</h2>
                                <p>Lorem ipsum dolor sit amen, consectetur adipescent alit eiusmod <br /> adipiscing commodo imperdiet.</p>
                                <form action="#">
                                    <input type="text" placeholder="Enter your mail here....." />
                                    <button type="submit" className="rr-bounce-up">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cta-two__img_animation3">
                    <img src="/assets/img/cta/arrow.png" alt="cta img" />
                </div>
                <div className="cta-two__img2">
                    <img src="/assets/img/cta/cta-2-2.png" alt="cta img" />
                </div>
            </div>
            {/* cta two end */}
        </>
    )
}

export default CtaTwo;