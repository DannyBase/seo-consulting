import React from 'react';
import Link from 'next/link';

const BlogContactBanner = () => {
    return (
        <>
            <div className="sidebar__single widget_contact_banner mt-40 mb-40 wow fadeInUp" data-wow-delay=".5s">
                <div className="contact-banner__img1">
                    <img src="/assets/img/shape/5.svg" alt="shape" />
                </div>
                <div className="contact-banner__img2">
                    <img src="/assets/img/shape/6.svg" alt="shape" />
                </div>
                <div className="contact-banner__img3">
                    <img src="/assets/img/shape/7.svg" alt="shape" />
                </div>
                <div className="widget_contact_banner__img">
                    <img src="/assets/img/backgrounds/contact-banner-bg.png" alt="shape" />
                </div>
                <span className="contact_banner__subheading">Contact Us</span>
                <h4 className="contact_banner__title">Free Your Creativity with Cutting-Edge Web Solutions.</h4>
                <Link href="/contact">Get In Touch <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </>
    )
}

export default BlogContactBanner;