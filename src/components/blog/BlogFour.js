import React from 'react';
import Link from 'next/link';
import { BlogFourData } from '@/data/blog';

const BlogFour = () => {
    return (
        <>
            {/* blog four start */}
            <div className="blog-four theme-gray-1 pt-120 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="section-title__one text-center mb-65 wow fadeInUp" data-wow-delay=".3s">
                            <h2 className="section-title__one-title">Trends and Predictions <br /> for Online Success.</h2>
                        </div>
                    </div>
                    <div className="row">
                        {BlogFourData.map((item, i) => (
                            <div key={i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay={item.delay}>
                                <div className="blog-four__single mb-30">
                                    <div className="blog-four__img">
                                        <img src={item.image} alt={item.alt} />
                                        <div className="category">
                                            <Link href={item.link}>{item.category}</Link>
                                        </div>
                                    </div>
                                    <div className="blog-four__content">
                                        <div className="post-meta">
                                            <ul>
                                                <li><i className="fa-light fa-calendar-lines"></i>{item.date}</li>
                                            </ul>
                                        </div>
                                        <h2 className="blog-four_title"><Link href={item.link}>{item.heading}</Link></h2>
                                        <Link href={item.link} className="tp-btn postbox__more-btn">
                                            Read More <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* blog four end */}
        </>
    )
}

export default BlogFour;