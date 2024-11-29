import React, { useEffect } from 'react';
import Link from 'next/link';

const PortfolioOne = () => {
    useEffect(() => {

        var $gridOne = $('.portfolio-active').isotope();
        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $gridOne.isotope({ filter: filterValue });
        });

        // Isotop Filter Activation
        $('.portfolio-menu button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        // Data Background Js
        $("[data-background]").each(function() {
            $(this).css(
                "background-image",
                "url( " + $(this).attr("data-background") + "  )"
            );
        });
      
    }, []);
    return (
        <>
            {/* portfolio one start */}
            <div className="project-area pt-140 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="section-title__column-two mb-60 wow fadeInUp" data-wow-delay=".3s">
                            <h2 className="section-title__two-title">Real-Life Case <br /> Studies That Inspire.</h2>
                            <div className="section-title__two-right">
                                <div className="portfolio-menu mb-xl-60">
                                    <button className="active" data-filter="*">
                                        <span className="short-message">
                                            <span>New</span>
                                        </span>
                                        All
                                    </button>
                                    <button data-filter=".branding">
                                        <span className="short-message">
                                            <span>New</span>
                                        </span>
                                        Branding
                                    </button>
                                    <button data-filter=".marketing">
                                        <span className="short-message">
                                            <span>New</span>
                                        </span>
                                        Marketing
                                    </button>
                                    <button data-filter=".seo">
                                        <span className="short-message">
                                            <span>New</span>
                                        </span>
                                        SEO
                                    </button>
                                    <button data-filter=".web">
                                        <span className="short-message">
                                            <span>New</span>
                                        </span>
                                        Web
                                    </button>
                                    <button data-filter=".design">
                                        <span className="short-message">
                                            <span>New</span>
                                        </span>
                                        Digital Design
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row portfolio-active">
                        <div className="col-xl-4 col-lg-4 col-md-6 branding seo wow fadeInUp" data-wow-delay=".3s">
                            <div className="portfolio__single bg-property mb-30" data-background="/assets/img/portfolio/1.jpg">
                                <div className="portfolio__single-content">
                                    <span>Branding</span>
                                    <h3><Link href="/case-study">Business Branding</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 marketing branding wow fadeInUp" data-wow-delay=".5s">
                            <div className="portfolio__single bg-property mb-30" data-background="/assets/img/portfolio/2.jpg">
                                <div className="portfolio__single-content">
                                    <span>Digital Design</span>
                                    <h3><Link href="/case-study">Photo Retouching</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 seo marketing wow fadeInUp" data-wow-delay=".7s">
                            <div className="portfolio__single bg-property mb-30" data-background="/assets/img/portfolio/3.jpg">
                                <div className="portfolio__single-content">
                                    <span>Social</span>
                                    <h3><Link href="/case-study">Social Marketing</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 web design wow fadeInUp" data-wow-delay=".9s">
                            <div className="portfolio__single bg-property mb-30" data-background="/assets/img/portfolio/4.jpg">
                                <div className="portfolio__single-content">
                                    <span>Web</span>
                                    <h3><Link href="/case-study">Website Building</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 design web wow fadeInUp" data-wow-delay=".3s">
                            <div className="portfolio__single bg-property mb-30" data-background="/assets/img/portfolio/6.jpg">
                                <div className="portfolio__single-content">
                                    <span>Graphic</span>
                                    <h3><Link href="/case-study">Poster Design</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 marketing design wow fadeInUp" data-wow-delay=".5s">
                            <div className="portfolio__single bg-property mb-30" data-background="/assets/img/portfolio/5.jpg">
                                <div className="portfolio__single-content">
                                    <span>Marketing</span>
                                    <h3><Link href="/case-study">Digital Marketing</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* portfolio one end */}
        </>
    )
}

export default PortfolioOne;