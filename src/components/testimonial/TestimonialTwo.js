import React, { useEffect } from 'react';

const TestimonialTwo = () => {

    useEffect(() => {

        // Testimonial Two
        if ($(".testimonial-two__active").length) {
            $(".testimonial-two__active").owlCarousel({
                items: 1,
                loop: true,
                nav: false,
                margin: 10,
                dotsData: true,
                animateOut: 'fadeOutDown',
                animateIn: 'fadeInDown',
            });
        }
          
    }, []);

    return (
        <>
            {/* testimonial two start */}
            <div className="testimonial-two pt-110">
                <div className="container">
                    <div className="row">
                        <div className="mb-70">
                            <h2 className="section-title__two-title text-center wow fadeInUp" data-wow-delay=".3s">What Clients Say About <br /> Our SEO Services.</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 wow fadeInUp" data-wow-delay=".5s">
                            <div className="testimonial-two__wrapper">
                                <div className="testimonial-two__img">
                                    <img src="/assets/img/testimonial/quote-icon.svg" alt="quote icon" />
                                </div>
                                <div className="testimonial-two__active owl-carousel">
                                    <div data-dot="<img src='assets/img/testimonial/testimonial-2-1.png' />" className="testimonial-two__single">
                                        <p>“Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia quis. Quisque amet velit sit amet dui hendrerit ultricies a id ipsum Mauris sit amet
                                            lacinia est, vitae tristique metus tempor nibh ultricies.”</p>
                                        <h4>Indigo Violet</h4>
                                        <span>Director, Client Experience</span>
                                    </div>
                                    <div data-dot="<img src='assets/img/testimonial/testimonial-2-2.png' />" className="testimonial-two__single">
                                        <p>“Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia quis. Quisque amet velit sit amet dui hendrerit ultricies a id ipsum Mauris sit amet
                                            lacinia est, vitae tristique metus tempor nibh ultricies.”</p>
                                        <h4>Michael Walker</h4>
                                        <span>Director, Client Experience</span>
                                    </div>
                                    <div data-dot="<img src='assets/img/testimonial/testimonial-2-3.png' />" className="testimonial-two__single">
                                        <p>“Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia quis. Quisque amet velit sit amet dui hendrerit ultricies a id ipsum Mauris sit amet
                                            lacinia est, vitae tristique metus tempor nibh ultricies.”</p>
                                        <h4>David Anderson</h4>
                                        <span>Director, Client Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonial two end */}
        </>
    )
}

export default TestimonialTwo;