import React from 'react';

const QuoteFormTwo = () => {
    return (
        <>
            {/* quote form one start */}
            <div className="quote-form-one pt-160">
                <div className="quote-form-one__wrapper">
                    <div className="quote-form-one__img1">
                        <img src="/assets/img/quote-form/shape1.svg" alt="img" />
                    </div>
                    <div className="quote-form-one__img2">
                        <img src="/assets/img/quote-form/shape2.svg" alt="img" />
                    </div>
                    <div className="quote-form-one__img3">
                        <img src="/assets/img/quote-form/shape3.svg" alt="img" />
                    </div>
                    <div className="quote-form-one__img4">
                        <img src="/assets/img/quote-form/shape4.svg" alt="img" />
                    </div>
                    <div className="quote-form-one__img5">
                        <img src="/assets/img/quote-form/shape5.svg" alt="img" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 wow fadeInLeft" data-wow-delay=".3s">
                                <div className="quote-form-one__img">
                                    <img src="/assets/img/quote-form/bg-2.png" alt="" />
                                    <div className="quote-form-one__img-animation1">
                                        <img src="/assets/img/quote-form/quote-img-1.png" alt="quote img" />
                                    </div>
                                    <div className="quote-form-one__img-animation2">
                                        <img src="/assets/img/quote-form/quote-img-2.png" alt="quote img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="quote-form-one__content">
                                    <h2 className="quote-form-one__title">Get in touch</h2>
                                    <p className="mb-40">Projects case study environmental stewardship has impacted economical.</p>
                                    <form action="#" className="contact-quote-form">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <input type="text" className="rounded-0" placeholder="Your name" />
                                            </div>
                                            <div className="col-xl-6">
                                                <input type="text" className="rounded-0" placeholder="Your email" />
                                            </div>
                                            <div className="col-xl-6">
                                                <input type="text" className="rounded-0" placeholder="Your phone" />
                                            </div>
                                            <div className="col-xl-6">
                                                <input type="text" className="rounded-0" placeholder="Your subject" />
                                            </div>
                                            <div className="col-xl-12">
                                                <textarea name="message" id="message" className="rounded-0" placeholder="Type your message..."></textarea>
                                                <button type="submit" className="contact-btn rr-bounce-up rounded-0">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* quote form one end */}
        </>
    )
}

export default QuoteFormTwo;