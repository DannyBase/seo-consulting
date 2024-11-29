import React from 'react';
import Link from 'next/link';
import { ServiceThreeData } from '@/data/service';

const ServiceThree = () => {
    return (
        <>
            {/* service three start */}
            <div className="service-three pt-140 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center mb-50 wow fadeInUp" data-wow-delay=".3s">
                            <h2 className="section-title__two-title">We Provide SEO <br /> Solutions That Works</h2>
                        </div>
                    </div>
                    <div className="row">
                        {ServiceThreeData.map((item, i) => (
                            <div key={i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay={item.delay}>
                                <div className="service-three__single mb-30">
                                    <div className="service-three__single-img">
                                        <img src={item.icon} alt={item.alt} />
                                    </div>
                                    <h3><Link href={item.link}>{item.heading}</Link></h3>
                                    <p>{item.description}</p>
                                    <span>{item.service_no}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* service three end */}
        </>
    )
}

export default ServiceThree;