import React from 'react';
import Link from 'next/link';

const BlogService = () => {
    return (
        <>
            <div className="sidebar__single widget_services wow fadeInUp" data-wow-delay=".3s">
                <h3 className="sidebar__title mb-25">All Services</h3>
                <ul>
                    <li><Link href="/">Keyword Research</Link> <span><i className="fa-solid fa-angle-right"></i></span></li>
                    <li><Link href="/">On-Page SEO</Link> <span><i className="fa-solid fa-angle-right"></i></span></li>
                    <li><Link href="/">Content Marketing</Link> <span><i className="fa-solid fa-angle-right"></i></span></li>
                    <li><Link href="/">Mobile SEO</Link> <span><i className="fa-solid fa-angle-right"></i></span></li>
                    <li><Link href="/">Search Optimization</Link> <span><i className="fa-solid fa-angle-right"></i></span></li>
                    <li><Link href="/">E-commerce SEO</Link> <span><i className="fa-solid fa-angle-right"></i></span></li>
                </ul>
            </div>
        </>
    )
}

export default BlogService;