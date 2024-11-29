import React, { useEffect } from 'react';
import { CaseStudyTwoData } from '@/data/case-study';
import Link from 'next/link';

const CaseStudyOne = () => {
    useEffect(() => {

        // Testimonial Two
        if ($(".case-study-two__active").length) {
            $('.case-study-two__active').owlCarousel({
                loop: true,
                navText: ['<i class="fa-light fa-arrow-left"></i>', '<i class="fa-light fa-arrow-right"></i>'],
                nav: true,
                autoHeight: true,
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 0,
                    },
                    576: {
                        items: 1,
                        stagePadding: 0,
                    },
                    768: {
                        items: 1,
                        stagePadding: 120,
                    },
                    992: {
                        items: 1,
                        stagePadding: 160,
                    },
                    1200: {
                        items: 1,
                        stagePadding: 150,
                    },
                    1400: {
                        items: 1,
                        stagePadding: 200,
                    },
                    1600: {
                        items: 1,
                        stagePadding: 290,
                    },
                }
            });
        }
      
    }, []);
    return (
        <>
            {/* case study two start */}
            <div className="case-study-two theme-gray-2 pb-140">
                <div className="case-study-two__active owl-carousel">
                    {CaseStudyTwoData.map((item, i) => (
                        <div key={i} className="case-study-two__single" data-merge={item.no} data-background={item.image}>
                            <div className="case-study-two__single-box">
                                <span>{item.subheading}</span>
                                <h4>{item.heading}</h4>
                                <Link href={item.link}>{item.link_text}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* case study two end */}
        </>
    )
}

export default CaseStudyOne;