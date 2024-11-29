import React from 'react';
import Link from 'next/link';

const BlogTags = () => {
    return (
        <>
            <div className="sidebar__single widget_tag_cloud">
                <h3 className="sidebar__title mb-30">Tags</h3>
                <div className="tagcloud">
                    <Link href="/">Advertising</Link>
                    <Link href="/">Digital Agency</Link>
                    <Link href="/">Agency</Link>
                    <Link href="/">Digital Marketing</Link>
                    <Link href="/">seo agency</Link>
                    <Link href="/">SEO</Link>
                    <Link href="/">Social Media</Link>
                    <Link href="/">SEO theme</Link>
                </div>
            </div>
        </>
    )
}

export default BlogTags;