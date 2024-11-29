import React, { useEffect } from "react";
import { BrandOneData } from '@/data/brand';

const BrandOne = () => {
    useEffect(() => {

        // Brand One
        if ($(".brand-one__active").length) {
            $('.brand-one__active').owlCarousel({
                loop: true,
                nav: false,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            });
        }
            
    }, []);
    return (
        <>
            {/* brand one start */}
            <div className="brand-one pt-80 pb-140 wow fadeInUp" data-wow-delay=".3s">
                <div className="container">
                    <div className="row">
                        <h2 className="brand-one__title">Trusted by 25,000+ companies</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="brand-one__active owl-carousel">
                                {BrandOneData.map((item, i) => (
                                    <div key={i} className="brand-one__single">
                                        <a href={item.link}><img src={item.image} alt={item.alt} /></a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* brand one end */}
        </>
    )
}

export default BrandOne;