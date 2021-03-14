import React from 'react';

const Banner = () => {
    return(
            <div className="desc-banner">
              <div className="desc-info">
                <div className="take">
                  <div className="item ">
                    <h3>take place</h3>
                    <small className="id1">24</small><span>/</span><small className="id1">24</small>
                  </div>
                  <div className="item ">
                    <h3>trading volume</h3>
                    <span>$<small className="id1">5.4</small></span>
                    <p>Trillion each day</p>
                  </div>
                </div>
                <div className="from wow fadeInUp">
                  <p>Trading Centers</p>
                  <h4>London, New York, Tokyo, Sydney, China </h4>
                </div>
              </div>
              <div className="desc-map">
                <div className="img-id wow  zoomIn">
                    <img src={process.env.PUBLIC_URL + '/assets/images/img-map.png'} alt="" />
                    <div className="dot-map">
                    <div className="ic-1">
                        <div className="text">
                        <h3>LonDon</h3>
                        </div>
                        <div className="img">
                        <img src={process.env.PUBLIC_URL + '/assets/images/ic-map.png'} alt="" />
                        </div>
                    </div>
                    <div className="ic-1">
                        <div className="text">
                        <h3>New York</h3>
                        </div>
                        <div className="img">
                        <img src={process.env.PUBLIC_URL + '/assets/images/ic-map.png'} alt="" />
                        </div>
                    </div>
                    <div className="ic-1">
                        <div className="text">
                        <h3>China</h3>
                        </div>
                        <div className="img">
                        <img src={process.env.PUBLIC_URL + '/assets/images/ic-map.png'} alt="" />
                        </div>
                    </div>
                    <div className="ic-1">
                        <div className="text">
                        <h3>Tokyo</h3>
                        </div>
                        <div className="img">
                        <img src={process.env.PUBLIC_URL + '/assets/images/ic-map.png'} alt="" />
                        </div>
                    </div>
                    <div className="ic-1">
                        <div className="text">
                        <h3>Sydney</h3>
                        </div>
                        <div className="img">
                        <img src={process.env.PUBLIC_URL + '/assets/images/ic-map.png'} alt="" />
                        </div>
                    </div>
                    </div> 
                </div>
                </div>

            </div>
    )
}
export default Banner;