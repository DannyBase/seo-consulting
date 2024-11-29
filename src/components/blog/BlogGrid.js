import React from 'react';
import Link from 'next/link';

const BlogGrid = () => {
    return (
        <>
            <div className="blog-one pb-140">
                <div className="tabs-one">
                    <div className="blog-category-tabs pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-12 text-center">
                                    <ul className="nav nav-pills mb-100" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-search-tab" data-bs-toggle="pill" data-bs-target="#pills-search" type="button" role="tab" aria-controls="pills-search" aria-selected="true">
                                                <img src="/assets/img/icon/globe.svg" className="no-active" alt="img" />
                                                <img src="/assets/img/icon/globe-white.svg" className="active-tab-icon" alt="img" />
                                                <span>Search Engine</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-analytics-tab" data-bs-toggle="pill" data-bs-target="#pills-analytics" type="button" role="tab" aria-controls="pills-analytics" aria-selected="false">
                                                <img src="/assets/img/icon/list.svg" className="no-active" alt="img" />
                                                <img src="/assets/img/icon/list-white.svg" className="active-tab-icon" alt="img" />
                                                <span>Analytics</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-social-tab" data-bs-toggle="pill" data-bs-target="#pills-social" type="button" role="tab" aria-controls="pills-social" aria-selected="false">
                                                <img src="/assets/img/icon/like-tag.svg" className="no-active" alt="img" />
                                                <img src="/assets/img/icon/like-tag-white.svg" className="active-tab-icon" alt="img" />
                                                <span>Social Media</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-marketing-tab" data-bs-toggle="pill" data-bs-target="#pills-marketing" type="button" role="tab" aria-controls="pills-marketing" aria-selected="false">
                                                <img src="/assets/img/icon/pen.svg" className="no-active" alt="img" />
                                                <img src="/assets/img/icon/pen-white.svg" className="active-tab-icon" alt="img" />
                                                <span>Content Marketing</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-management-tab" data-bs-toggle="pill" data-bs-target="#pills-management" type="button" role="tab" aria-controls="pills-management" aria-selected="false">
                                                <img src="/assets/img/icon/trend-up.svg" className="no-active" alt="img" />
                                                <img src="/assets/img/icon/trend-up-white.svg" className="active-tab-icon" alt="img" />
                                                <span>Management</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-optimization-tab" data-bs-toggle="pill" data-bs-target="#pills-optimization" type="button" role="tab" aria-controls="pills-optimization" aria-selected="false">
                                                <img src="/assets/img/icon/keyboard-open.svg" className="no-active" alt="img" />
                                                <img src="/assets/img/icon/keyboard-open-white.svg" className="active-tab-icon" alt="img" />
                                                <span>Optimization</span>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-digital-tab" data-bs-toggle="pill" data-bs-target="#pills-digital" type="button" role="tab" aria-controls="pills-digital" aria-selected="false">
                                                <img src="/assets/img/icon/status-up.svg" className="no-active" alt="" />
                                                <img src="/assets/img/icon/status-up-white.svg" className="active-tab-icon" alt="" />
                                                <span>Digital Marketing</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane show active fadeInUp" id="pills-search" role="tabpanel" aria-labelledby="pills-search-tab" tabindex="0">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/1.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>March 24,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Trends to Watch Staying Ahead in the Ever-Changing Digital Landscape.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/2.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>June 23,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">The Art of Crafting Your Digital Footprint Maximum Visibility.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/3.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>August 18,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Success Stories Real-Life Examples of Triumphing in the Online World.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/4.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>April 16,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Local SEO Checklist Steps Optimize Your Business For Searches.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/5.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>July 23,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">The Role of SEO in Brand Building and Online Business Reputation.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/6.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>March 29,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">SEO Content Marketing and Creating Valuable Content Searchable.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-analytics" role="tabpanel" aria-labelledby="pills-analytics-tab" tabindex="0">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/1.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>March 24,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Trends to Watch Staying Ahead in the Ever-Changing Digital Landscape.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/2.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>June 23,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">The Art of Crafting Your Digital Footprint Maximum Visibility.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/3.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>August 18,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Success Stories Real-Life Examples of Triumphing in the Online World.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/4.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>April 16,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Local SEO Checklist Steps Optimize Your Business For Searches.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/5.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>July 23,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">The Role of SEO in Brand Building and Online Business Reputation.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/6.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>March 29,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">SEO Content Marketing and Creating Valuable Content Searchable.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-social" role="tabpanel" aria-labelledby="pills-social-tab" tabindex="0">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/1.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>March 24,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Trends to Watch Staying Ahead in the Ever-Changing Digital Landscape.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/2.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>June 23,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">The Art of Crafting Your Digital Footprint Maximum Visibility.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/3.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>August 18,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Success Stories Real-Life Examples of Triumphing in the Online World.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/4.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>April 16,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Local SEO Checklist Steps Optimize Your Business For Searches.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/5.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>July 23,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">The Role of SEO in Brand Building and Online Business Reputation.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/6.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>March 29,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">SEO Content Marketing and Creating Valuable Content Searchable.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-marketing" role="tabpanel" aria-labelledby="pills-marketing-tab" tabindex="0">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/1.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>March 24,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Trends to Watch Staying Ahead in the Ever-Changing Digital Landscape.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/2.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>June 23,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">The Art of Crafting Your Digital Footprint Maximum Visibility.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/3.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>August 18,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Success Stories Real-Life Examples of Triumphing in the Online World.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/4.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>April 16,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Local SEO Checklist Steps Optimize Your Business For Searches.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/5.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>July 23,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">The Role of SEO in Brand Building and Online Business Reputation.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/6.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>March 29,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">SEO Content Marketing and Creating Valuable Content Searchable.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-management" role="tabpanel" aria-labelledby="pills-management-tab" tabindex="0">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/1.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>March 24,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Trends to Watch Staying Ahead in the Ever-Changing Digital Landscape.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/2.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>June 23,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">The Art of Crafting Your Digital Footprint Maximum Visibility.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/3.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>August 18,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Success Stories Real-Life Examples of Triumphing in the Online World.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/4.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>April 16,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Local SEO Checklist Steps Optimize Your Business For Searches.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/5.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>July 23,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">The Role of SEO in Brand Building and Online Business Reputation.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/6.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>March 29,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">SEO Content Marketing and Creating Valuable Content Searchable.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-optimization" role="tabpanel" aria-labelledby="pills-optimization-tab" tabindex="0">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/1.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>March 24,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Trends to Watch Staying Ahead in the Ever-Changing Digital Landscape.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/2.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>June 23,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">The Art of Crafting Your Digital Footprint Maximum Visibility.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/3.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>August 18,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Success Stories Real-Life Examples of Triumphing in the Online World.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/4.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>April 16,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Local SEO Checklist Steps Optimize Your Business For Searches.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/5.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>July 23,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">The Role of SEO in Brand Building and Online Business Reputation.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/6.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>March 29,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">SEO Content Marketing and Creating Valuable Content Searchable.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-digital" role="tabpanel" aria-labelledby="pills-digital-tab" tabindex="0">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/1.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>March 24,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Trends to Watch Staying Ahead in the Ever-Changing Digital Landscape.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/2.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>June 23,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">The Art of Crafting Your Digital Footprint Maximum Visibility.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/3.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>August 18,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Success Stories Real-Life Examples of Triumphing in the Online World.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/4.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>April 16,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">Local SEO Checklist Steps Optimize Your Business For Searches.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/5.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>July 23,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">The Role of SEO in Brand Building and Online Business Reputation.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                                <div className="blog-grid__single mb-30">
                                                    <div className="blog-grid__single-img">
                                                        <Link href="/blog-details">
                                                            <img src="/assets/img/blog/6.jpg" alt="Blog Img" />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-grid__single-content">
                                                        <div className="postbox__meta">
                                                            <span><i className="fa-light fa-calendar-lines"></i>March 29,2023</span>
                                                        </div>
                                                        <h2><Link href="/blog-details">SEO Content Marketing and Creating Valuable Content Searchable.</Link></h2>
                                                        <div className="btn-box postbox__read-more">
                                                            <Link href="/blog-details" className="tp-btn postbox__more-btn">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="basic-pagination text-center mt-40">
                                <nav>
                                    <ul>
                                        <li><Link href="/" className="prev"><i className="fa-regular fa-arrow-left"></i><span>Prew</span></Link></li>
                                        <li><span className="current">1</span></li>
                                        <li><Link href="/"><span>2</span></Link></li>
                                        <li><Link href="/"><span>3</span></Link></li>
                                        <li><Link href="/" className="next"><span>Next</span><i className="fa-regular fa-arrow-right"></i></Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogGrid;