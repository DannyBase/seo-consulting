import React from 'react';

const QuoteFormOne = () => {
    return (
        <>
            {/* quote form one start */}
            <div className="quote-form-one pt-160 pb-160">
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
                                    <img src="/assets/img/quote-form/bg-1.png" alt="img" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="quote-form-one__content wow fadeInUp" data-wow-delay=".3s">
                                    <h2 className="quote-form-one__title">Get in touch</h2>
                                    <p className="mb-40">Projects case study environmental stewardship has impacted economical.</p>
                                    <form action="#" className="contact-quote-form">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <input type="text" placeholder="Your name" />
                                            </div>
                                            <div className="col-xl-6">
                                                <input type="text" placeholder="Your email" />
                                            </div>
                                            <div className="col-xl-6">
                                                <input type="text" placeholder="Your phone" />
                                            </div>
                                            <div className="col-xl-6">
                                                <input type="text" placeholder="Your subject" />
                                            </div>
                                            <div className="col-xl-12">
                                                <textarea name="message" id="message" placeholder="Type your message..."></textarea>
                                                <button type="submit" className="contact-btn rr-bounce-up">Send Message</button>
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

export default QuoteFormOne;