import React, { useEffect } from "react";
import BrandTwo from "../brand/BrandTwo";

const HeroThree = () => {

    useEffect(() => {

        // Data Background Js
        $("[data-background]").each(function() {
            $(this).css(
                "background-image",
                "url( " + $(this).attr("data-background") + "  )"
            );
        });

        // Nice Select Js
        if ($("select").length) {
            $("select").niceSelect();
        }

        // Brand One
        if ($(".brand-one__active").length) {
            $('.brand-one__active').owlCarousel({
                loop: true,
                nav: false,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            });
        }
            
    }, []);

    return (
        <>
            {/* hero three start */}
            <div className="hero-style-three d-flex align-items-center" data-background="/assets/img/hero/hero-bg-3.png">
                <div className="hero-style-three__animation-1">
                    <img src="/assets/img/hero/line-1.png" alt="line shape" />
                </div>
                <div className="hero-style-three__animation-2">
                    <img src="/assets/img/hero/line-2.png" alt="line shape" />
                </div>
                <div className="hero-style-three__animation-3">
                    <img src="/assets/img/hero/line-3.png" alt="line shape" />
                </div>
                <div className="hero-style-three__animation-4">
                    <img src="/assets/img/hero/line-4.png" alt="line shape" />
                </div>
                <div className="hero-style-three__animation-5">
                    <img src="/assets/img/hero/line-5.png" alt="line shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-style-three__content text-center">
                                <h2 className="mb-60 wow fadeInUp" data-wow-delay=".3s">Proven SEO <span>Strategies for Growth</span></h2>
                                <div className="slider__form wow fadeInUp" data-wow-delay=".5s">
                                    <form action="#">
                                        <div className="slider__form-wrapper flex-wrap">
                                            <div className="slider__form-input">
                                                <input type="text" placeholder="Enter domain, keyword or URL here" />
                                            </div>
                                            <div className="slider__form-input has-select">
                                                <select>
                                                    <option value="1">google.com.bd</option>
                                                    <option value="2">Wedding</option>
                                                    <option value="3">Photography</option>
                                                    <option value="4">Consulting</option>
                                                </select>
                                                <div className="nice-select" tabindex="0"><span className="current">google.com.bd</span>
                                                    <ul className="list">
                                                        <li data-value="1" className="option selected focus">google.com.bd</li>
                                                        <li data-value="2" className="option">Wedding</li>
                                                        <li data-value="3" className="option">Photography</li>
                                                        <li data-value="4" className="option">Consulting</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="slider__form-input">
                                                <button type="button" className="slider-form-btn tp-link-btn-3 rr-bounce-up">Search</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".7s">
                                    <div className="col-xl-10">
                                        <BrandTwo />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero three end */}
        </>
    )
}

export default HeroThree;