import React from 'react';
import { TeamOneData } from '@/data/team';

const TeamOne = () => {
    return (
        <>
          {/* team start */}
          <div className="team-one pt-120 pb-90">
              <div className="container">
                  <div className="row">
                      {/* single team start */}
                      {TeamOneData.map((item, i) => (
                        <div key={i} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="team-one__single mb-30">
                                <div className="team-one__single-img">
                                    <img src={item.image} alt={item.alt} />
                                    <div className="overlay-content">
                                        <div className="social-link">
                                            <a href={item.twitter}><i className="fa-brands fa-twitter"></i></a>
                                            <a href={item.facebook}><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href={item.linkedin}><i className="fa-brands fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="title-box">
                                    <h5>{item.name}</h5>
                                    <span>{item.position}</span>
                                </div>
                            </div>
                        </div>
                      ))}
                      {/* single team end */}
                  </div>
              </div>
          </div>
          {/* team end */}
        </>
    )
}

export default TeamOne;