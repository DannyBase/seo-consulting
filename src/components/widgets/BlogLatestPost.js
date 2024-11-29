import React from 'react';
import Link from 'next/link';

const BlogLatestPost = () => {
    return (
        <>
            <div className="sidebar__single widget_latest_post">
                <h3 className="sidebar__title mb-30">Recent Posts</h3>
                <div className="sidebar__post-box">
                    <div className="sidebar__post-single">
                        <div className="sidebar-post__img">
                            <Link href="/blog-details"><img src="/assets/img/blog/1.jpg" alt="img" /></Link>
                        </div>
                        <div className="sidebar__post-content-box">
                            <h3><Link href="/blog-details">SEO Checklist Steps Optimize Your Business.</Link></h3>
                            <span><i className="fa-light fa-calendar-lines"></i>March 29,2023</span>
                        </div>
                    </div>
                    <div className="sidebar__post-single">
                        <div className="sidebar-post__img">
                            <Link href="/blog-details"><img src="/assets/img/blog/2.jpg" alt="img" /></Link>
                        </div>
                        <div className="sidebar__post-content-box">
                            <h3><Link href="/blog-details">The Role of SEO in Brand Building and Online.</Link></h3>
                            <span><i className="fa-light fa-calendar-lines"></i>April 24,2023</span>
                        </div>
                    </div>
                    <div className="sidebar__post-single">
                        <div className="sidebar-post__img">
                            <Link href="/blog-details"><img src="/assets/img/blog/3.jpg" alt="img" /></Link>
                        </div>
                        <div className="sidebar__post-content-box">
                            <h3><Link href="/blog-details">SEO Content Marketing Content Searchable.</Link></h3>
                            <span><i className="fa-light fa-calendar-lines"></i>June 28,2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogLatestPost;