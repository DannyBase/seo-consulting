import React, { useEffect } from 'react';
import Link from 'next/link';
import { StackedCardOneData } from '@/data/stacked-card';

const StackedCardOne = () => {
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
            {/* stack card one start */}
            <div className="stack-card theme-gray-4 pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-12 fix-scroll">
                            {StackedCardOneData.map((item, i) => (
                                <div className="stack-card__inner wow fadeInUp" data-wow-duration="600ms" data-background={item.image}>
                                    <div className="row">
                                        <div className="col-12 col-xl-8 col-xxl-7">
                                            <div className="stack-card__inner-content">
                                                <h2>{item.heading}</h2>
                                                <Link href={item.link}>{item.link_text} <i className="fa-regular fa-arrow-up-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* stack card one end */}
        </>
    )
}

export default StackedCardOne;