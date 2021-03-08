import React from 'react';
import './layout.css';

const HeaderComponent = () => {
    return(
        <section className="section" id="section0">
        <div className="banner" id="particles-js">
          <div className="container">
            <div className="header">
              <div id="logo" className="wow zoomIn">
                <a href title>
                  <img src="../images/logo.png" alt="" />
                </a>
              </div>
              <div className="sticker-menu">
                <ul>
                  <li className="wow fadeInRight"><a href title>login</a></li>
                  <li className="wow fadeInRight"><a href title>register</a></li>
                  <li className="wow fadeInRight"><a href title>Login to similar</a></li>
                </ul>
              </div>
            </div>
            <div className="desc-banner">
              <div className="desc-info">
                <span>The biggest financial market on the planet</span>
                <div className="take">
                  <div className="item wow zoomIn">
                    <h3>take place</h3>
                    <small className="id1">24</small><span>/</span><small className="id1">24</small>
                  </div>
                  <div className="item wow zoomIn">
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
                  <img src="images/img-map.png" alt="" />
                  <div className="dot-map">
                    <div className="ic-1">
                      <div className="text">
                        <h3>LonDon</h3>
                      </div>
                      <div className="img">
                        <img src="images/ic-map.png" alt="" />
                      </div>
                    </div>
                    <div className="ic-1">
                      <div className="text">
                        <h3>New York</h3>
                      </div>
                      <div className="img">
                        <img src="images/ic-map.png" alt="" />
                      </div>
                    </div>
                    <div className="ic-1">
                      <div className="text">
                        <h3>China</h3>
                      </div>
                      <div className="img">
                        <img src="images/ic-map.png" alt="" />
                      </div>
                    </div>
                    <div className="ic-1">
                      <div className="text">
                        <h3>Tokyo</h3>
                      </div>
                      <div className="img">
                        <img src="images/ic-map.png" alt="" />
                      </div>
                    </div>
                    <div className="ic-1">
                      <div className="text">
                        <h3>Sydney</h3>
                      </div>
                      <div className="img">
                        <img src="images/ic-map.png" alt="" />
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default React.memo(HeaderComponent)