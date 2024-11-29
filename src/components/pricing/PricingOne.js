import React, { useEffect } from 'react';
import Link from 'next/link';

const PricingOne = () => {

    useEffect(() => {

        if ($(".tabs-box").length) {
            $(".tabs-box .tab-buttons .tab-btn").on("click", function(e) {
                e.preventDefault();
                var target = $($(this).attr("data-tab"));
    
                if ($(target).is(":visible")) {
                    return false;
                } else {
                    target
                        .parents(".tabs-box")
                        .find(".tab-buttons")
                        .find(".tab-btn")
                        .removeClass("active-btn");
                    $(this).addClass("active-btn");
                    target
                        .parents(".tabs-box")
                        .find(".tabs-content")
                        .find(".tab")
                        .fadeOut(0);
                    target
                        .parents(".tabs-box")
                        .find(".tabs-content")
                        .find(".tab")
                        .removeClass("active-tab");
                    $(target).fadeIn(300);
                    $(target).addClass("active-tab");
                }
            });
        }
          
    }, []);

    return (
        <>
            <div className="pricing-page-header pt-100 pb-40">
                <div className="pricing-page-header__bg"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-header__wrapper">
                                <div className="page-header__content text-center">
                                    <h2>Choose Your Simple <br /> Pricing Plan</h2>
                                    <div className="pricing-navigation mt-35">
                                        <div className="tab-one__tabs tabs-box">
                                            <ul className="tab-buttons mb-70 clearfix">
                                                <li data-tab="#monthly" className="tab-btn active-btn"><span>Monthly</span>
                                                </li>
                                                <li data-tab="#annually" className="tab-btn"><span>Annually</span></li>
                                            </ul>
                                            <div className="tabs-content">
                                                {/* Start Tab */}
                                                <div className="tab active-tab" id="monthly">
                                                    <div className="row clearfix">
                                                        <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-12 col-sm-12">
                                                            <div className="pricing-plan-one__single mb-30 text-start">
                                                                <div className="pricing-header">
                                                                    <span>Silver Pack</span>
                                                                    <h2>$69<span>/ month</span></h2>
                                                                    <p>Get 7 Days Free Trial</p>
                                                                </div>
                                                                <div className="pricing-feature-list">
                                                                    <ul>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Daily ranking updates</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>10 websites</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Multiple users</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>White-labeled reports</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>On-demand ranking updates</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>API access</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Keyword gap</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Share of Voice</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Preferred page tracking</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Position history import</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>External users</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Project permissions</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Priority support</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="pricing-btn">
                                                                    <Link href="/contact" className="rr-bounce-up">
                                                                        Get Started <i className="fa-regular fa-arrow-right"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-12 col-sm-12">
                                                            <div className="pricing-plan-one__single mb-30 text-start">
                                                                <div className="pricing-badge">Most Popular</div>
                                                                <div className="pricing-header">
                                                                    <span>Gold pack</span>
                                                                    <h2>$124<span>/ month</span></h2>
                                                                    <p>Get 7 Days Free Trial</p>
                                                                </div>
                                                                <div className="pricing-feature-list">
                                                                    <ul>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Daily ranking updates</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>10 websites</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Multiple users</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>White-labeled reports</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>On-demand ranking updates</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>API access</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Keyword gap</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Share of Voice</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Preferred page tracking</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Position history import</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>External users</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Project permissions</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Priority support</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="pricing-btn">
                                                                    <Link href="/contact" className="rr-bounce-up">
                                                                        Get Started <i className="fa-regular fa-arrow-right"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-12 col-sm-12">
                                                            <div className="pricing-plan-one__single mb-30 text-start">
                                                                <div className="pricing-header">
                                                                    <span>Platinum pack</span>
                                                                    <h2>$249<span>/ month</span></h2>
                                                                    <p>Get 7 Days Free Trial</p>
                                                                </div>
                                                                <div className="pricing-feature-list">
                                                                    <ul>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Daily ranking updates</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>10 websites</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Multiple users</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>White-labeled reports</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>On-demand ranking updates</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>API access</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Keyword gap</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Share of Voice</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Preferred page tracking</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Position history import</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>External users</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Project permissions</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Priority support</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="pricing-btn">
                                                                    <Link href="/contact" className="rr-bounce-up">
                                                                        Get Started <i className="fa-regular fa-arrow-right"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Tab */}
                                                {/* Start Tab */}
                                                <div className="tab" id="annually">
                                                    <div className="row clearfix">
                                                        <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-12 col-sm-12">
                                                            <div className="pricing-plan-one__single mb-30 text-start">
                                                                <div className="pricing-header">
                                                                    <span>Silver Pack</span>
                                                                    <h2>$828<span>/ month</span></h2>
                                                                    <p>Get 7 Days Free Trial</p>
                                                                </div>
                                                                <div className="pricing-feature-list">
                                                                    <ul>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Daily ranking updates</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>10 websites</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Multiple users</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>White-labeled reports</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>On-demand ranking updates</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>API access</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Keyword gap</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Share of Voice</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Preferred page tracking</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Position history import</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>External users</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Project permissions</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Priority support</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="pricing-btn">
                                                                    <Link href="/contact" className="rr-bounce-up">
                                                                        Get Started <i className="fa-regular fa-arrow-right"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-12 col-sm-12">
                                                            <div className="pricing-plan-one__single mb-30 text-start">
                                                                <div className="pricing-badge">Most Popular</div>
                                                                <div className="pricing-header">
                                                                    <span>Gold pack</span>
                                                                    <h2>$1526<span>/ month</span></h2>
                                                                    <p>Get 7 Days Free Trial</p>
                                                                </div>
                                                                <div className="pricing-feature-list">
                                                                    <ul>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Daily ranking updates</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>10 websites</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Multiple users</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>White-labeled reports</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>On-demand ranking updates</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>API access</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Keyword gap</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Share of Voice</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Preferred page tracking</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Position history import</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>External users</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Project permissions</li>
                                                                        <li className="del"><i className="fa-sharp fa-solid fa-circle-xmark"></i>Priority support</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="pricing-btn">
                                                                    <Link href="/contact" className="rr-bounce-up">
                                                                        Get Started <i className="fa-regular fa-arrow-right"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-12 col-sm-12">
                                                            <div className="pricing-plan-one__single mb-30 text-start">
                                                                <div className="pricing-header">
                                                                    <span>Platinum pack</span>
                                                                    <h2>$2988<span>/ month</span></h2>
                                                                    <p>Get 7 Days Free Trial</p>
                                                                </div>
                                                                <div className="pricing-feature-list">
                                                                    <ul>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Daily ranking updates</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>10 websites</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Multiple users</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>White-labeled reports</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>On-demand ranking updates</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>API access</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Keyword gap</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Share of Voice</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Preferred page tracking</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Position history import</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>External users</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Project permissions</li>
                                                                        <li><i className="fa-sharp fa-solid fa-circle-check"></i>Priority support</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="pricing-btn">
                                                                    <Link href="/contact" className="rr-bounce-up">
                                                                        Get Started <i className="fa-regular fa-arrow-right"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Tab */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingOne;