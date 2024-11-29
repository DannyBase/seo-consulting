import React, { useEffect } from 'react';
import { TestimonialThreeData } from '@/data/testimonial';

const TestimonialThree = () => {

    useEffect(() => {

        // Testimonial Three
        if ($(".testimonial-three__active").length) {
            $(".testimonial-three__active").slick({
                dots: true,
                fade: false,
                autoplay: false,
                slidesToShow: 1,
                prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-arrow-right"></i></button>',
                arrows: true,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                        }
                    }
                ]
            });
        }
          
    }, []);

    return (
        <>
            {/* testimonial three start */}
            <div className="testimonial-three pt-110 pb-10 mb-200">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="d__column-two testimonial-border">
                                <h2 className="testimonial-three_section__title wow fadeInUp" data-wow-delay=".3s">What Our Clients Say</h2>
                                <div className="testimonial-rating wow fadeInUp" data-wow-delay=".5s">
                                    <div className="star-rating">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <span>4000+ Clients Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="testimonial-three__wrapper">
                                <div className="testimonial-three__active">
                                    {TestimonialThreeData.map((item, i) => (
                                        <div key={i} className="testimonial-three__single wow fadeInUp" data-wow-delay=".3s">
                                            <img src={item.image_logo} alt={item.image_logo_alt} />
                                            <p>{item.description}</p>
                                            <div className="author-info">
                                                <div className="img">
                                                    <img src={item.image} alt={item.alt} />
                                                </div>
                                                <div className="content">
                                                    <h4>{item.name}</h4>
                                                    <span>{item.position}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="testimonial-three__img">
                                    <img src="/assets/img/testimonial/quote-right.png" alt="quote icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonial three end */}
        </>
    )
}

export default TestimonialThree;