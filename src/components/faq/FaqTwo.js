import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FaqTwo = () => {

    return (
        <>
            {/* faq two start */}
            <div className="faq-two">
                <div className="row g-0 align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12">
                        <div className="faq-two-content__wrapper">
                            <div className="faq-two__animation1">
                                <img src="/assets/img/shape/arrow-snack.svg" alt="shape" />
                            </div>
                            <div className="faq-two__animation2">
                                <img src="/assets/img/shape/6.svg" alt="shape" />
                            </div>
                            <div className="faq-two__animation3">
                                <img src="/assets/img/shape/5.svg" alt="shape" />
                            </div>
                            <div className="faq-two__animation4">
                                <img src="/assets/img/shape/11.svg" alt="shape" />
                            </div>
                            <div className="faq-two__animation5">
                                <img src="/assets/img/shape/arrow-circle-line-2.png" alt="shape" />
                            </div>
                            <div className="fac-two__content">
                                <h2 className="section-title__one-title">Recover From Google <br /> Penalties with SEO.</h2>
                                <div className="faq-two__faq">
                                    <div className="accordion" id="accordionExample">
                                        <Accordion defaultActiveKey="1">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Competitors Analysis</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="accrodion-content">
                                                        <div className="text">
                                                            <div className="list">
                                                                <ul>
                                                                    <li><a href="#">Cohabiter elemental simple <i className="fa-regular fa-arrow-up-right"></i></a></li>
                                                                    <li><a href="#">Phaseolus nulls ellipt <i className="fa-regular fa-arrow-up-right"></i></a></li>
                                                                </ul>
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
                                                            <div className="list">
                                                                <ul>
                                                                    <li><a href="#">Cohabiter elemental simple <i className="fa-regular fa-arrow-up-right"></i></a></li>
                                                                    <li><a href="#">Phaseolus nulls ellipt <i className="fa-regular fa-arrow-up-right"></i></a></li>
                                                                </ul>
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
                                                            <div className="list">
                                                                <ul>
                                                                    <li><a href="#">Cohabiter elemental simple <i className="fa-regular fa-arrow-up-right"></i></a></li>
                                                                    <li><a href="#">Phaseolus nulls ellipt <i className="fa-regular fa-arrow-up-right"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>Keyword Clustering</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="accrodion-content">
                                                        <div className="text">
                                                            <div className="list">
                                                                <ul>
                                                                    <li><a href="#">Cohabiter elemental simple <i className="fa-regular fa-arrow-up-right"></i></a></li>
                                                                    <li><a href="#">Phaseolus nulls ellipt <i className="fa-regular fa-arrow-up-right"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12">
                        <div className="faq-two__right wow fadeInUp" data-wow-delay=".3s">
                            <div className="faq-two__right-img">
                                <img src="/assets/img/faq/faq-1.png" alt="faq img" />
                                <div className="faq-two__right-img1">
                                    <img src="/assets/img/faq/faq-2.png" alt="faq img" />
                                </div>
                                <div className="faq-two__right-img2">
                                    <img src="/assets/img/faq/faq-3.png" alt="faq img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* faq two end */}
        </>
    )
}

export default FaqTwo;