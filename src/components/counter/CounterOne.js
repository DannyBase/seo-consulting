import React, { useEffect } from "react";
import { CounterOneData } from '@/data/counter';

const CounterOne = () => {
    useEffect(() => {

        // Fun Fact
        if ($(".counter").length) {
            $('.counter').countUp({
                delay: 10,
                time: 2000
            });
        }
            
    }, []);
    return (
        <>
            {/* fun fact start */}
            <div className="fun-fact pt-140 pb-130">
                <div className="container">
                    <div className="row">
                        {CounterOneData.map((item, i) => (
                            <div key={i} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={item.delay}>
                                <div className="counter-one__single mb-30">
                                    <div className="counter-one__single-inner">
                                        <div className="icon-box">
                                            <img src={item.image} alt={item.alt} />
                                        </div>
                                        <div className="text-box">
                                            <h3 className="counter">{item.countNumber}</h3>
                                            <span className="counter-one__letter">{item.countNumberLetter}</span>
                                            <p className="counter-one__text">{item.countNumberText}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* fun fact end */}
        </>
    )
}

export default CounterOne;