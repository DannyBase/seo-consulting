import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FaqOne = () => {
    return (
        <>
            {/* faq start */}
            <div className="faq-one pt-140 pb-140">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
                            <div className="faq-one-img">
                                <img src="/assets/img/faq.jpg" alt="Faq Page Image" />
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <div className="faq-one__content">
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
            {/* faq end */}
        </>
    )
}

export default FaqOne;