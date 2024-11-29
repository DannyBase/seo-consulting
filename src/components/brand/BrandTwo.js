import React, { useEffect } from "react";
import { BrandTwoData } from '@/data/brand';

const BrandTwo = () => {
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
            {/* brand two start */}
            <div className="brand-one brand-one__active owl-carousel pt-75">
                {BrandTwoData.map((item, i) => (
                    <div key={i} className="brand-one__single">
                        <a href={item.link}>
                            <img src={item.image} alt={item.alt} />
                        </a>
                    </div>
                ))}
            </div>
            {/* brand two end */}
        </>
    )
}

export default BrandTwo;