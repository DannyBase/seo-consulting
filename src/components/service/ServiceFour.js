import React from 'react';
import Link from 'next/link';

const ServiceFour = () => {
    return (
        <>
            {/* service one start */}
            <div className="service-one  pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="section-title__one text-center mb-50 wow fadeInUp" data-wow-delay=".3s">
                            <h2 className="section-title__one-title">Boost Your Online <br /> Presence with Our Expert</h2>
                            <p className="section-title__one-subtitle">Curabitur nec turpis sit mi tempus Integer lobortis iaculis felis.</p>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-one__single style-1 mb-30">
                                <div className="service-one__icon bg-1 mb-30">
                                    <img src="/assets/img/icon/mike.png" alt="img" />
                                </div>
                                <h3 className="mb-35">Digital Research</h3>
                                <ul>
                                    <li><i className="fa-light fa-check"></i>Benchmarking</li>
                                    <li><i className="fa-light fa-check"></i>Website & app analysis</li>
                                    <li><i className="fa-light fa-check"></i>Industry research</li>
                                    <li><i className="fa-light fa-check"></i>Audience research</li>
                                </ul>
                                <div className="service-one__btn mt-50">
                                    <Link href="/service-details" className="rr-bounce-up">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                            <div className="service-one__single mb-30">
                                <div className="service-one__icon bg-2 mb-30">
                                    <img src="/assets/img/icon/mike.png" alt="img" />
                                </div>
                                <h3 className="mb-35">Digital Marketing</h3>
                                <ul>
                                    <li><i className="fa-light fa-check"></i>Benchmarking</li>
                                    <li><i className="fa-light fa-check"></i>Website & app analysis</li>
                                    <li><i className="fa-light fa-check"></i>Industry research</li>
                                    <li><i className="fa-light fa-check"></i>Audience research</li>
                                </ul>
                                <div className="service-one__btn mt-50">
                                    <Link href="/service-details" className="rr-bounce-up">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-one__single mb-30">
                                <div className="service-one__icon bg-3 mb-30">
                                    <img src="/assets/img/icon/mike.png" alt="img" />
                                </div>
                                <h3 className="mb-35">Shopper Intelligence</h3>
                                <ul>
                                    <li><i className="fa-light fa-check"></i>Benchmarking</li>
                                    <li><i className="fa-light fa-check"></i>Website & app analysis</li>
                                    <li><i className="fa-light fa-check"></i>Industry research</li>
                                    <li><i className="fa-light fa-check"></i>Audience research</li>
                                </ul>
                                <div className="service-one__btn mt-50">
                                    <Link href="/service-details" className="rr-bounce-up">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".9s">
                            <div className="service-one__single style-4 mb-30">
                                <div className="service-one__icon bg-4 mb-30">
                                    <img src="/assets/img/icon/mike.png" alt="img" />
                                </div>
                                <h3 className="mb-35">Stock Intelligence</h3>
                                <ul>
                                    <li><i className="fa-light fa-check"></i>Benchmarking</li>
                                    <li><i className="fa-light fa-check"></i>Website & app analysis</li>
                                    <li><i className="fa-light fa-check"></i>Industry research</li>
                                    <li><i className="fa-light fa-check"></i>Audience research</li>
                                </ul>
                                <div className="service-one__btn mt-50">
                                    <Link href="/service-details" className="rr-bounce-up">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="service-page-link text-center mt-50 wow fadeInUp" data-wow-delay=".3s">
                                <p>Check Out All of Our <Link href="/service-details">All features</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service one end */}
        </>
    )
}

export default ServiceFour;