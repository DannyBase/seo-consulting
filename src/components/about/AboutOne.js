import React from 'react';
import Link from 'next/link';

const AboutOne = () => {
    return (
        <>
            {/* about one start */}
            <div className="about-three">
                <div className="container custom-container-1">
                    <div className="row g-0">
                        <div className="about-three__wrapper">
                            <div className="col-xxl-12">
                                <div className="tabs-one">
                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-search-tab" data-bs-toggle="pill" data-bs-target="#pills-search" type="button" role="tab" aria-controls="pills-search" aria-selected="true">
                                                <img src="/assets/img/icon/globe.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/globe-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>Search Engine</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-analytics-tab" data-bs-toggle="pill" data-bs-target="#pills-analytics" type="button" role="tab" aria-controls="pills-analytics" aria-selected="false">
                                                <img src="/assets/img/icon/list.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/list-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>Analytics</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-social-tab" data-bs-toggle="pill" data-bs-target="#pills-social" type="button" role="tab" aria-controls="pills-social" aria-selected="false">
                                                <img src="/assets/img/icon/like-tag.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/like-tag-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>Social Media</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-marketing-tab" data-bs-toggle="pill" data-bs-target="#pills-marketing" type="button" role="tab" aria-controls="pills-marketing" aria-selected="false">
                                                <img src="/assets/img/icon/pen.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/pen-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>Content Marketing</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-management-tab" data-bs-toggle="pill" data-bs-target="#pills-management" type="button" role="tab" aria-controls="pills-management" aria-selected="false">
                                                <img src="/assets/img/icon/trend-up.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/trend-up-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>Management</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-optimization-tab" data-bs-toggle="pill" data-bs-target="#pills-optimization" type="button" role="tab" aria-controls="pills-optimization" aria-selected="false">
                                                <img src="/assets/img/icon/keyboard-open.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/keyboard-open-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>Optimization</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-digital-tab" data-bs-toggle="pill" data-bs-target="#pills-digital" type="button" role="tab" aria-controls="pills-digital" aria-selected="false">
                                                <img src="/assets/img/icon/status-up.svg" className="no-active" alt="icon" />
                                                <img src="/assets/img/icon/status-up-white.svg" className="active-tab-icon" alt="icon" />
                                                <span>Digital Marketing</span>
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-search" role="tabpanel" aria-labelledby="pills-search-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Tailored SEO Solutions Boost Your Business.</h2>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Nulla vel dolor accumsan neque vestibulum</li>
                                                                    <li>Cras lacinia elit a turpis ultricies bibendum</li>
                                                                    <li>posuere a ligula molestie, suscipit ullamcorper velit</li>
                                                                    <li>Nulla ac varius tellus, in laoreet libero</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-analytics" role="tabpanel" aria-labelledby="pills-analytics-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Customized SEO Strategies Drive Business Growth</h2>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Nulla vel dolor accumsan neque vestibulum</li>
                                                                    <li>Cras lacinia elit a turpis ultricies bibendum</li>
                                                                    <li>posuere a ligula molestie, suscipit ullamcorper velit</li>
                                                                    <li>Nulla ac varius tellus, in laoreet libero</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-social" role="tabpanel" aria-labelledby="pills-social-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Strategic SEO Optimization Elevates Your Brand Presence.</h2>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Nulla vel dolor accumsan neque vestibulum</li>
                                                                    <li>Cras lacinia elit a turpis ultricies bibendum</li>
                                                                    <li>posuere a ligula molestie, suscipit ullamcorper velit</li>
                                                                    <li>Nulla ac varius tellus, in laoreet libero</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-marketing" role="tabpanel" aria-labelledby="pills-marketing-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Precision-Driven SEO Fuels Business Success.</h2>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Nulla vel dolor accumsan neque vestibulum</li>
                                                                    <li>Cras lacinia elit a turpis ultricies bibendum</li>
                                                                    <li>posuere a ligula molestie, suscipit ullamcorper velit</li>
                                                                    <li>Nulla ac varius tellus, in laoreet libero</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-management" role="tabpanel" aria-labelledby="pills-management-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Targeted SEO Initiatives Enhance Your Online Visibility.</h2>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Nulla vel dolor accumsan neque vestibulum</li>
                                                                    <li>Cras lacinia elit a turpis ultricies bibendum</li>
                                                                    <li>posuere a ligula molestie, suscipit ullamcorper velit</li>
                                                                    <li>Nulla ac varius tellus, in laoreet libero</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-optimization" role="tabpanel" aria-labelledby="pills-optimization-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Expert-Crafted SEO Campaigns Propel Your Business Forward.</h2>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Nulla vel dolor accumsan neque vestibulum</li>
                                                                    <li>Cras lacinia elit a turpis ultricies bibendum</li>
                                                                    <li>posuere a ligula molestie, suscipit ullamcorper velit</li>
                                                                    <li>Nulla ac varius tellus, in laoreet libero</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-digital" role="tabpanel" aria-labelledby="pills-digital-tab" tabindex="0">
                                            <div className="about-three__single">
                                                <div className="about-three__animation-1">
                                                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-2">
                                                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                                                </div>
                                                <div className="about-three__animation-3">
                                                    <img src="/assets/img/shape/11.svg" alt="shape icon" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                                                        <div className="about-three__single-content">
                                                            <h2>Bespoke SEO Tactics Amplify Your Reach.</h2>
                                                            <div className="list">
                                                                <ul className="list-unstyled">
                                                                    <li>Nulla vel dolor accumsan neque vestibulum</li>
                                                                    <li>Cras lacinia elit a turpis ultricies bibendum</li>
                                                                    <li>posuere a ligula molestie, suscipit ullamcorper velit</li>
                                                                    <li>Nulla ac varius tellus, in laoreet libero</li>
                                                                </ul>
                                                            </div>
                                                            <Link href="/case-study" className="about-three-btn rr-btn-style-1 mt-45">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                                                        <div className="about-three__single-img">
                                                            <img src="/assets/img/about/about-3-1.png" alt="about img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about one end */}
        </>
    )
}

export default AboutOne;