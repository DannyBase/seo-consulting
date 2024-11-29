import React from 'react';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';

const FaqThree = () => {

    return (
        <>
            {/* faq three start */}
            <div className="faq-three pt-160 pb-100">
                <div className="faq-three__animation-1">
                    <img src="/assets/img/shape/12.svg" alt="shape icon" />
                </div>
                <div className="faq-three__animation-2">
                    <img src="/assets/img/shape/13.svg" alt="shape icon" />
                </div>
                <div className="faq-three__animation-3">
                    <img src="/assets/img/shape/14.svg" alt="shape icon" />
                </div>
                <div className="faq-three__animation-4">
                    <img src="/assets/img/shape/arrow-circle-line-3.png" alt="shape icon" />
                </div>
                <div className="faq-three__animation-5">
                    <img src="/assets/img/shape/arrow-circle-line-4.png" alt="shape icon" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6">
                            <div className="faq-three__faq">
                                <Accordion defaultActiveKey="1">
                                    <Accordion.Item eventKey="0" data-wow-delay=".3s">
                                        <Accordion.Header>Competitors Analysis</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                    <div className="pricing-list">
                                                        <ul>
                                                            <li><i className="fa-light fa-check"></i>10k row search results</li>
                                                            <li><i className="fa-light fa-check"></i>10k row data exports</li>
                                                            <li><i className="fa-light fa-check"></i>100 domain overview PDF's</li>
                                                            <li><i className="fa-light fa-check"></i>6 months historical data</li>
                                                            <li><i className="fa-light fa-check"></i>250 sales leads & domain contacts</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-footer d__column-two">
                                                        <h5>$39 <span>/ Month</span></h5>
                                                        <Link href="/contact">Free Try <i className="fa-light fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Keyword Research</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                    <div className="pricing-list">
                                                        <ul>
                                                            <li><i className="fa-light fa-check"></i>10k row search results</li>
                                                            <li><i className="fa-light fa-check"></i>10k row data exports</li>
                                                            <li><i className="fa-light fa-check"></i>100 domain overview PDF's</li>
                                                            <li><i className="fa-light fa-check"></i>6 months historical data</li>
                                                            <li><i className="fa-light fa-check"></i>250 sales leads & domain contacts</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-footer d__column-two">
                                                        <h5>$69 <span>/ Month</span></h5>
                                                        <Link href="/contact">Free Try <i className="fa-light fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Content Generation</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="accrodion-content">
                                                <div className="text">
                                                    <div className="pricing-list">
                                                        <ul>
                                                            <li><i className="fa-light fa-check"></i>10k row search results</li>
                                                            <li><i className="fa-light fa-check"></i>10k row data exports</li>
                                                            <li><i className="fa-light fa-check"></i>100 domain overview PDF's</li>
                                                            <li><i className="fa-light fa-check"></i>6 months historical data</li>
                                                            <li><i className="fa-light fa-check"></i>250 sales leads & domain contacts</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-footer d__column-two">
                                                        <h5>$89 <span>/ Month</span></h5>
                                                        <Link href="/contact">Free Try <i className="fa-light fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6">
                            <div className="faq-three__content wow fadeInRight" data-wow-delay=".5s">
                                <h2 className="section-title__two-title mb-10">Our Business-Friendly Pricing Solutions.</h2>
                                <p>Praesent mollis tortor augue, lacinia vestibulum sem cursus sed. Suspendisse quis sapien sed odio dictum fringilla eget eget ligula Duis varius ornare quam, interdum libero elementum bibendum arcu efficitur vehicula.</p>
                                <img src="/assets/img/faq/faq-3-1.png" alt="faq img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* faq three end */}
        </>
    )
}

export default FaqThree;