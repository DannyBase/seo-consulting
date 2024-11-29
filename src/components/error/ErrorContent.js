import React, { useEffect } from 'react';
import Link from 'next/link';

const ErrorContent = () => {
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
			<div className="error-page pt-165 pb-170">
				<div className="error-page__animation1">
					<img src="/assets/img/shape/1.svg" alt="shape img" />
				</div>
				<div className="error-page__animation2">
					<img src="/assets/img/shape/2.svg" alt="shape img" />
				</div>
				<div className="error-page__animation3">
					<img src="/assets/img/shape/3.svg" alt="shape img" />
				</div>
				<div className="error-page__animation4">
					<img src="/assets/img/shape/4.svg" alt="shape img" />
				</div>
				<div className="error-page__img1">
					<img src="/assets/img/404/shape_01.png" alt="error img" />
				</div>
				<div className="error-page__img2">
					<img src="/assets/img/404/shape_02.png" alt="error img" />
				</div>
				<div className="page-header__bg" data-background="/assets/img/backgrounds/breadcrumb.jpg"></div>
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="error-page__content text-center wow fadeInUp" data-wow-delay=".3s">
								<h1>404</h1>
								<h2>Oops... Page Not Found!</h2>
								<p>We’re sorry. the page you requested could no be <br /> found Please go back to the home page</p>
								<Link href="/" className="rr-btn-style-1"><i className="fa-regular fa-arrow-left"></i>Go Back to Home</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
        </>
    )
}

export default ErrorContent;