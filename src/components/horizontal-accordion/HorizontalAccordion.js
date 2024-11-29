import React, { useEffect } from 'react';
import Link from 'next/link';

const HorizontalAccordion = () => {
    
    useEffect(() => {

        function mediaSize() {
            /* Set the matchMedia */
            if (window.matchMedia('(min-width: 768px)').matches) {
                const panels = document.querySelectorAll('.col-custom')
                panels.forEach(panel => {
                    panel.addEventListener('click', () => {
                        removeActiveClasses()
                        panel.classList.add('active')
                    })
                })
    
                function removeActiveClasses() {
                    panels.forEach(panel => {
                        panel.classList.remove('active')
                    })
                }
    
            } else {
                /* Reset for CSS changes â€“ Still need a better way to do this! */
                $(".col-custom ").addClass("active");
            }
        };
        /* Call the function */
        mediaSize();
        /* Attach the function to the resize event listener */
        window.addEventListener('resize', mediaSize, false);
            
    }, []);
    return (
        <>
            {/* horizontal accordion start */}
            <div className="horizontal-accordion">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section-title__two d__column-two mb-50 wow fadeInUp" data-wow-delay=".3s">
                                <h2 className="section-title__two-title">Empowering Businesses <br /> Demonstrating SEO Impact</h2>
                                <div className="section-title__two-right">
                                    <Link href="/" className="thm-btn-2 rr-bounce-up">View All Blogs</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row-custom-wrapper wow fadeInUp" data-wow-delay=".5s">
                            <div className="row-custom">
                                <div className="col-custom active">
                                    <div className="rr-panel-item">
                                        <div className="rr-panel-content">
                                            <h4 className="rr-panel-title child-one">01. Seo Marketing</h4>
                                        </div>
                                    </div>
                                    <div className="rr-panel-item-2">
                                        <div className="rr-panel-content-2">
                                            <h4 className="rr-panel-title-2">Seo Marketing</h4>
                                            <div className="rr-panel-content__img">
                                                <img src="/assets/img/accordion/1.jpg" alt="img" />
                                                <h3>True Potential of Your Brand Expert Branding Services.</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-custom">
                                    <div className="rr-panel-item">
                                        <div className="rr-panel-content">
                                            <h4 className="rr-panel-title child-one">02. Energize</h4>
                                        </div>
                                    </div>
                                    <div className="rr-panel-item-2">
                                        <div className="rr-panel-content-2">
                                            <h4 className="rr-panel-title-2">Energize</h4>
                                            <div className="rr-panel-content__img">
                                                <img src="/assets/img/accordion/2.jpg" alt="img" />
                                                <h3>Unleash Your Brand's True Potential with Expert Branding Services.</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-custom">
                                    <div className="rr-panel-item">
                                        <div className="rr-panel-content">
                                            <h4 className="rr-panel-title child-one">03. Build</h4>
                                        </div>
                                    </div>
                                    <div className="rr-panel-item-2">
                                        <div className="rr-panel-content-2">
                                            <h4 className="rr-panel-title-2">Build</h4>
                                            <div className="rr-panel-content__img">
                                                <img src="/assets/img/accordion/3.jpg" alt="img" />
                                                <h3>Empower Your Brand to Reach New Heights with Our Expert Branding Services.</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-custom">
                                    <div className="rr-panel-item">
                                        <div className="rr-panel-content">
                                            <h4 className="rr-panel-title child-one">04. Venture</h4>
                                        </div>
                                    </div>
                                    <div className="rr-panel-item-2">
                                        <div className="rr-panel-content-2">
                                            <h4 className="rr-panel-title-2">Venture</h4>
                                            <div className="rr-panel-content__img">
                                                <img src="/assets/img/accordion/4.jpg" alt="img" />
                                                <h3>Unlock Your Brand's True Potential with Our Proven Branding Strategies.</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-custom">
                                    <div className="rr-panel-item">
                                        <div className="rr-panel-content">
                                            <h4 className="rr-panel-title child-one">05. Protect</h4>
                                        </div>
                                    </div>
                                    <div className="rr-panel-item-2">
                                        <div className="rr-panel-content-2">
                                            <h4 className="rr-panel-title-2">Protect</h4>
                                            <div className="rr-panel-content__img">
                                                <img src="/assets/img/accordion/5.jpg" alt="img" />
                                                <h3>Transform Your Brand into a Powerful Asset with Our Expert Branding Services.</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* horizontal accordion end */}
        </>
    )
}

export default HorizontalAccordion;