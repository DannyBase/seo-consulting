import React from 'react';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import BlogService from '../widgets/BlogService';
import BlogContactBanner from '../widgets/BlogContactBanner';

const ServiceDetails = () => {
    return (
        <>
            {/* service start */}
            <div className="service-details pt-140 pb-140">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <BlogService />
                            <BlogContactBanner />
                        </div>
                        <div className="col-xl-8">
                            <div className="service-details-content">
                                <div className="service-details__img mb-40">
                                    <img src="/assets/img/services/service-details.jpg" alt="shape" />
                                </div>
                                <h2 className="service-details-title mb-20">Boost Your Online Presence with Top-Notch SEO Services.</h2>
                                <p className="mb-50">Praesent pellentesque libero enim, eu placerat turpis vehicula quis. Nunc massa mi, fringilla a hendrerit ac, aliquam eget mi. Nunc vehicula nibh et convallis mattis. Aliquam nec efficitur lectus, et vestibulum diam. Class aptent
                                    taciti sociosqu.
                                    <br />
                                    <br /> Litora torquent per conubia nostra, per inceptos himenaeos. Sed nec velit justo. Nullam et metus finibus, tincidunt risus quis, tempor ante. Vestibulum mattis nec elit at rutrum. Duis sagittis, lectus et varius imperdiet,
                                    magna felis fringilla justo, sit amet molestie nisi nulla nec massa.</p>
                                <h3 className="service-details-subheading mb-25">Improve Rankings, Increase Traffic</h3>
                                <div className="row mb-55">
                                    <div className="col-xl-4">
                                        <div className="bullet-list-1">
                                            <ul>
                                                <li>+ Dominate Search</li>
                                                <li>+ Website's Potential</li>
                                                <li>+ Results-Driven</li>
                                                <li>+ Our Comprehensive</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="bullet-list-1">
                                            <ul>
                                                <li>+ Dominate Search</li>
                                                <li>+ Website's Potential</li>
                                                <li>+ Results-Driven</li>
                                                <li>+ Our Comprehensive</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="service-details-subheading mb-15">Get Found, Get Noticed</h3>
                                <p className="mb-35">Praesent luctus gravida mi a vestibulum. Donec vel faucibus dui. Vivamus ut vulputate nulla, suscipit auctor mi. Maecenas ultrices nibh a risus dictum lobortis ac nec nunc.</p>
                                <div className="row mb-30">
                                    <div className="col-xxl-6 col-xl-6 col-lg-5 col-md-6 col-sm-12">
                                        <div className="service-details__img mb-30">
                                            <img src="/assets/img/services/service-details-1.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-5 col-md-6 col-sm-12">
                                        <div className="service-details__img mb-30">
                                            <img src="/assets/img/services/service-details-2.jpg" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="faq-one__content wow fadeInUp" data-wow-delay=".3s">
                                <div className="faq-one__faq">
                                <Accordion defaultActiveKey="1">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Why is SEO important for my website?</Accordion.Header>
                                            <Accordion.Body>
                                                SEO comprises various elements, including on-page SEO (optimizing content, keywords, meta tags), technical SEO (site structure, speed, mobile-friendliness), and off-page SEO (backlinks, social signals, brand mentions).
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>What are the key components of SEO?</Accordion.Header>
                                            <Accordion.Body>
                                                Search Engine Optimization (SEO) encompasses various elements, including on-page optimization of content, keywords, and meta tags, technical aspects like site structure, loading speed, and mobile compatibility, and off-page strategies such as backlinks,
                                                social media engagement, and brand reputation management.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>How do search engines rank websites?</Accordion.Header>
                                            <Accordion.Body>
                                                This version highlights the comprehensive nature of SEO, emphasizing the importance of both technical aspects and user experience in achieving search engine success. It also conveys the overall goal of SEO: to make websites easily discoverable, engaging,
                                                and relevant to users' search queries.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>What are keywords, and how do I choose them?</Accordion.Header>
                                            <Accordion.Body>
                                                This version encapsulates the essence of SEO in a single sentence, using strong verbs and evocative language to convey the importance of each SEO aspect. It paints a picture of SEO as an orchestrating force that harmonizes the website's inner workings
                                                and external reputation to achieve top rankings.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>Are backlinks still important for SEO?</Accordion.Header>
                                            <Accordion.Body>
                                                This version conveys the essence of SEO in a concise manner, emphasizing the importance of balancing all three aspects to achieve successful search engine optimization. It uses straightforward language that is easy to understand and targets both search
                                                engines and users as its audience.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>How long does it take to see SEO results?</Accordion.Header>
                                            <Accordion.Body>
                                                Each SEO aspect while using descriptive language to capture the essence of SEO. It emphasizes the creation of high-quality content, the optimization of website structure, and the building of backlinks as key ingredients for successful SEO.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service end */}
        </>
    )
}

export default ServiceDetails;