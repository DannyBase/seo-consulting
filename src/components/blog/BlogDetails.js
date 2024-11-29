import React from 'react';
import Link from 'next/link';
import BlogSearch from '../widgets/BlogSearch';
import BlogCategory from '../widgets/BlogCategory';
import BlogLatestPost from '../widgets/BlogLatestPost';
import BlogTags from '../widgets/BlogTags';

const BlogDetails = () => {
    return (
        <>
            <div className="blog-details pt-120 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="blog-details__left">
                                <div className="blog-details__img mb-25">
                                    <img src="/assets/img/blog/blog-details.jpg" alt="Blog Details" />
                                </div>
                                <div className="blog-details__content">
                                    <div className="blog-details__meta mb-20">
                                        <ul>
                                            <li><i className="fa-light fa-calendar-lines"></i><span>March 24,2023</span></li>
                                            <li><i className="fa-light fa-user-large"></i><Link href="/">By Admin</Link></li>
                                            <li><i className="fa-sharp fa-light fa-comment-dots"></i><Link href="/">3 Comment</Link></li>
                                        </ul>
                                    </div>
                                    <h2 className="postbox__title">Trends to Watch Staying Ahead in the Ever-Changing Digital Landscape.</h2>
                                    <p className="mb-50">Phasellus eu tristique sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Done laoreet augue sit amet quam vulputate, a blandit arcu eleifend. Nam convallis velit libero nec cursus nunc vehicula non. Ut posuere
                                        nibh at dapibus posuere.</p>
                                    <blockquote>
                                        There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour, randomised words which don't look even slightly believable.
                                        <cite>Dylan Meringue</cite>
                                    </blockquote>
                                    <div className="row pt-25 pb-10">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <img src="/assets/img/blog/blog-details-1.jpg" className="mb-30" alt="blog details img" />
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <img src="/assets/img/blog/blog-details-2.jpg" className="mb-30" alt="blog details img" />
                                        </div>
                                    </div>
                                    <h3 className="postbox__title">Insights Outrank Your Competitors.</h3>
                                    <p>Nunc maximus tellus ac interdum porttitor. Vestibulum maximus, ante porttitor rutrum velit odio consequat nunc, at condimentum nisi est a lectus. Quisque non euismod enim. Etiam vel orci molestie, lacinia nulla porta, ultricies
                                        arcu.
                                    </p>
                                    <div className="blog-details__bottom">
                                        <div className="blog-details__tags">
                                            <span>Tags :</span>
                                            <Link href="/">Seo agency</Link>
                                            <Link href="/">Digital Marketing</Link>
                                        </div>
                                        <div className="blog-details__social-list social-hvr">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                                {/* post navigation start */}
                                <div className="post-navigation mt-15">
                                    <div className="row">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <div className="post-navigation__prev">
                                                <div className="post-navigation__img">
                                                    <Link href="/"><img src="/assets/img/blog/1.jpg" alt="img" /></Link>
                                                    <div className="post-navigation__img-hover">
                                                        <Link href="/blog-details"><i className="fa-regular fa-arrow-left"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="post-navigation__content">
                                                    <h4><Link href="/blog-details">SEO Checklist Steps Optimize Your Business.</Link></h4>
                                                    <span><i className="fa-light fa-calendar-lines"></i>March 29,2023</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <div className="post-navigation__next">
                                                <div className="post-navigation__img">
                                                    <Link href="/"><img src="/assets/img/blog/2.jpg" alt="img" /></Link>
                                                    <div className="post-navigation__img-hover">
                                                        <Link href="/blog-details"><i className="fa-regular fa-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="post-navigation__content">
                                                    <h4><Link href="/blog-details">The Role of SEO in Brand Building and Online.</Link></h4>
                                                    <span><i className="fa-light fa-calendar-lines"></i>March 29,2023</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* post navigation end */}
                                {/* latest comments start */}
                                <div className="latest-comments mt-50 mb-70">
                                    <h3 className="comment-one__title">2 Comments</h3>
                                    <ul>
                                        <li>
                                            <div className="comments-box comment-one__single">
                                                <div className="comments-avatar comment-one__image">
                                                    <img src="/assets/img/blog/comment-1.jpg" alt="author avatar" />
                                                </div>
                                                <div className="comments-text comment-one__content">
                                                    <h3><Link href="/">Hanson Deck</Link></h3>
                                                    <span>march 26,2023 at 10:47 pm</span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id tortor justo elementum ultrices donec metus risus, vulputate id magna a, euismod egestas tortor.</p>
                                                    <div className="comments-replay">
                                                        <Link href="/" className="comment-one__btn">Reply</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="children">
                                                <li>
                                                    <div className="comments-box comment-one__single">
                                                        <div className="comments-avatar comment-one__image">
                                                            <img src="/assets/img/blog/comment-2.jpg" alt="author avatar" />
                                                        </div>
                                                        <div className="comments-text comment-one__content">
                                                            <h3><Link href="/">Jane Paul</Link></h3>
                                                            <span>November 14, 2023</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing Nam id tortor justo elementum ultrices donec metus risus, vulputate.</p>
                                                            <div className="comments-replay">
                                                                <Link href="/" className="comment-one__btn">Reply</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                {/* latest comments end */}
                                {/* comment form start */}
                                <div id="comments" className="blog-post-comment comment-one pb-60">
                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">
                                            Leave a Reply
                                            <small><a rel="nofollow" href="#">Cancel reply</a></small>
                                        </h3>
                                        <form action="#" method="post" id="commentform" className="comment-form">
                                            <p className="comment-notes">
                                                <span id="email-notes">Your email address will not be published.</span>
                                                <span className="required-field-message">Required fields are marked <span className="required">*</span></span>
                                            </p>
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="comment-form__input-box">
                                                        <input type="text" placeholder="Your Name" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="comment-form__input-box">
                                                        <input type="email" placeholder="Your Email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="comment-form__input-box">
                                                        <input type="text" placeholder="Your phone" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="comment-form__input-box">
                                                        <input type="text" placeholder="Your subject" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row post-input">
                                                <div className="col-md-12">
                                                    <div className="comment-form__input-box">
                                                        <textarea name="message" placeholder="Type your message..."></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <button className="comment-form__btn rr-btn-style-1" type="submit">Post Comment</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* comment form end */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            {/* sidebar start */}
                            <div className="sidebar">
                                <BlogSearch />
                                <BlogLatestPost />
                                <BlogCategory />
                                <BlogTags />
                            </div>
                            {/* sidebar end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetails;