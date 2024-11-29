import React from 'react';
import Link from 'next/link';

const BlogCategory = () => {
    return (
        <>
            <div className="sidebar__single widget_categories">
                <h3 className="sidebar__title mb-30">Categories</h3>
                <ul>
                    <li><Link href="/">Keyword Research</Link></li>
                    <li><Link href="/">On-Page SEO</Link></li>
                    <li><Link href="/">Content Marketing</Link></li>
                    <li><Link href="/">Mobile SEO</Link></li>
                    <li><Link href="/">Search Optimization</Link></li>
                    <li><Link href="/">E-commerce SEO</Link></li>
                </ul>
            </div>
        </>
    )
}

export default BlogCategory;