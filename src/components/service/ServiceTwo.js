import React from 'react';
import Link from 'next/link';

const ServiceTwo = () => {
    return (
        <>
            {/* service two start */}
            <div className="service-two pt-140 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="d__column-two mb-60 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section-title__one">
                                <h2 className="section-title__one-title">Performance with <br /> Tailored SEO Services.</h2>
                            </div>
                            <div className="section-title__three-right">
                                <p className="section-title__three-tagline">Curabitur nec turpis sit amet mi tempus <br /> efficitur. Integer lobortis iaculis felis, in vehicula <br /> tortor viverra sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-two__single mb-30 bg-1">
                                <div className="icon-box">
                                    <img src="/assets/img/services/service-two-1.svg" alt="icon" />
                                </div>
                                <h3 className="service-two__single-title">Search Engine Optimization</h3>
                                <p>Nullam eu neque est facilisis facilisis vitae massa. Quisque libero pretium porta quam.</p>
                                <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                            <div className="service-two__single mb-30 bg-2">
                                <div className="icon-box">
                                    <img src="/assets/img/services/service-two-2.svg" alt="icon" />
                                </div>
                                <h3 className="service-two__single-title">Social Media Strategy Proposal</h3>
                                <p>Nullam eu neque est facilisis facilisis vitae massa. Quisque libero pretium porta quam.</p>
                                <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-two__single mb-30 bg-3">
                                <div className="icon-box">
                                    <img src="/assets/img/services/service-two-3.svg" alt="icon" />
                                </div>
                                <h3 className="service-two__single-title">Reporting & <br /> Analysis</h3>
                                <p>Nullam eu neque est facilisis facilisis vitae massa. Quisque libero pretium porta quam.</p>
                                <Link href="/service-details">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service two end */}
        </>
    )
}

export default ServiceTwo;