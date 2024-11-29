import React, { useEffect } from 'react';
import { TestimonialOneData } from '@/data/testimonial';

const TestimonialFour = () => {

    useEffect(() => {

      // Testimonial One
      if ($(".testimonial-one__active").length) {
        $(".testimonial-one__active").owlCarousel({
            loop: true,
            navText: ['<i class="fa-light fa-arrow-left"></i>', '<i class="fa-light fa-arrow-right"></i>'],
            nav: true,
            margin: 10,
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
            {/* testimonial one start */}
            <div className="testimonial-one pt-60 pb-180">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title__one text-center mb-60 wow fadeInUp" data-wow-delay=".3s">
                                <h2 className="section-title__one-title">What Clients Say About <br /> Our SEO Services.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-one__active owl-carousel owl-theme">
                    {TestimonialOneData.map((item, i) => (
                        <div key={i} className="testimonial-one__single wow fadeInUp" data-wow-delay={item.delay}>
                            <div className="testimonial-one__single-wrapper">
                                <div className="testimonial-one__single-img">
                                    <img src={item.image} alt={item.alt} />
                                </div>
                                <div className="testimonial-one__single-content">
                                    <div className="testimonial-one__video">
                                        <div className="icon">
                                            <a href={item.video_link} className="popup-video">
                                                <img src="/assets/img/icon/play-icon.svg" alt="play icon" /> Watch The Video
                                            </a>
                                        </div>
                                    </div>
                                    <p>{item.description}</p>
                                    <h4>{item.name}</h4>
                                    <span>{item.position}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* testimonial two end */}
        </>
    )
}

export default TestimonialFour;