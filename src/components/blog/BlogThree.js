import React from 'react';
import Link from 'next/link';
import { BlogThreeData } from '@/data/blog';

const BlogThree = () => {
    return (
        <>
            {/* blog three start */}
            <div className="blog-three theme-gray-1 pt-140 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="section-title__one text-center mb-65 wow fadeInUp" data-wow-delay=".3s">
                            <h2 className="section-title__one-title">Powerful SEO Tips to Skyrocket <br /> Your Online Visibility</h2>
                        </div>
                    </div>
                    <div className="row">
                        {BlogThreeData.map((item, i) => (
                            <div key={i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={item.delay}>
                                <div className="blog-three__single mb-30">
                                    <div className="blog-three__img">
                                        <img src={item.image} alt={item.alt}  />
                                        <div className="icon">
                                            <Link href={item.link}><i className="fa-regular fa-arrow-up-right"></i></Link>
                                        </div>
                                    </div>
                                    <div className="blog-three__content">
                                        <div className="post-meta">
                                            <ul>
                                                <li>{item.date}</li>
                                                <li><Link href={item.category_link}>{item.category_text}</Link></li>
                                            </ul>
                                        </div>
                                        <h2 className="blog-three_title"><Link href={item.link}>{item.heading}</Link></h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* blog three end */}
        </>
    )
}

export default BlogThree;