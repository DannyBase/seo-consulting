import React, { useEffect } from 'react';
import { CaseStudyOneData } from '@/data/case-study';
import Link from 'next/link';

const CaseStudyOne = () => {
    useEffect(() => {

        // Case Study One
        if ($(".case-study-one__active").length) {
            new Swiper(".case-study-one__active", {
                slidesPerView: 6,
                spaceBetween: 50,
                loop: true,
                scrollbar: {
                    el: ".rr-scrollbar",
                    clickable: true,
                },
            });
        }
            
    }, []);
    return (
        <>
            {/* case study one start */}
            <div className="case-study-one pt-110 pb-140">
                <div className="case-study-one__color-effect1"></div>
                <div className="case-study-one__color-effect2"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <h2 className="section-title__one-title">The Power of Optimization <br /> SEO Case Studies.</h2>
                        </div>
                    </div>
                </div>
                <div className="container-fulid">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="has-scrollbar position-relative">
                                <div className="case-study-one__active swiper-container" data-wow-delay=".5s">
                                    <div className="swiper-wrapper">
                                        {CaseStudyOneData.map((item, i) => (
                                            <div key={i} className="case-study-one__single swiper-slide wow fadeInUp" data-wow-delay={item.delay}>
                                                <div className="header">
                                                    <div className="img">
                                                        <img src={item.image} alt={item.alt} />
                                                    </div>
                                                    <div className="content">
                                                        <img src={item.logo} alt={item.logo_alt} />
                                                        <h2><Link href={item.link}>{item.heading}</Link></h2>
                                                    </div>
                                                </div>
                                                <div className="footer">
                                                    <div className="footer__left">
                                                        <h3>{item.heading_left}</h3>
                                                        <p>{item.description_left}</p>
                                                    </div>
                                                    <div className="footer__left">
                                                        <h3>{item.heading_right}</h3>
                                                        <p>{item.description_right}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="rr-scrollbar mt-70 wow fadeInUp" data-wow-delay=".3s"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* case study one end */}
        </>
    )
}

export default CaseStudyOne;