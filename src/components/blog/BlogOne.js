import React from 'react';
import Link from 'next/link';
import { BlogOneData } from '@/data/blog';

const BlogOne = () => {
    return (
        <>
            {/* blog one start */}
            <div className="blog-one pt-140 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section-title__two d__column-two mb-50 wow fadeInUp" data-wow-delay=".3s">
                                <h2 className="section-title__two-title">Boost Your Online <br /> Presence with Our Expert</h2>
                                <div className="section-title__two-right">
                                    <Link href="/blog" className="thm-btn-2 rr-bounce-up">View All Blogs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {BlogOneData.map((item, i) => (
                            <div key={i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={item.delay} >
                                <div className="blog-grid__single mb-30">
                                    <div className="blog-grid__single-img">
                                        <Link href={item.link}>
                                            <img src={item.image} alt={item.alt} />
                                        </Link>
                                    </div>
                                    <div className="blog-grid__single-content">
                                        <div className="postbox__meta">
                                            <span><i className="fa-light fa-calendar-lines"></i>{item.date}</span>
                                        </div>
                                        <h2><Link href={item.link}>{item.heading}</Link></h2>
                                        <div className="btn-box postbox__read-more">
                                            <Link href={item.link} className="rr-btn postbox__more-btn">{item.link_text} <i className="fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* blog one end */}
        </>
    )
}

export default BlogOne;