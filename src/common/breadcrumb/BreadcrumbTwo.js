import React, { useEffect } from 'react';

const BreadcrumbTwo = ({heading = "About Us", currentPage = "About"}) => {
    useEffect(() => {

        // Data Background Js
        $("[data-background]").each(function() {
            $(this).css(
                "background-image",
                "url( " + $(this).attr("data-background") + "  )"
            );
        });
            
    }, []);
    return (
        <>
            {/* breadcrumb start */}
            <div className="page-header">
                <div className="page-header__img1">
                    <img src="/assets/img/shape/1.svg" alt="img" />
                </div>
                <div className="page-header__img2">
                    <img src="/assets/img/shape/2.svg" alt="img" />
                </div>
                <div className="page-header__img3">
                    <img src="/assets/img/shape/3.svg" alt="img" />
                </div>
                <div className="page-header__img4">
                    <img src="/assets/img/shape/4.svg" alt="img" />
                </div>
                <div className="page-header__bg" data-background="/assets/img/backgrounds/breadcrumb.jpg"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-header__wrapper">
                                <div className="page-header__content">
                                    <h2>{heading}</h2>
                                    <div className="page-header__menu">
                                        <p className="no-breadcrumb-navigation">{currentPage}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* breadcrumb end */}
        </>
    )
}

export default BreadcrumbTwo;