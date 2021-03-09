import React from 'react';
import './layout.css';
import Banner from '../../pages/Home/Banner/index';

const HeaderComponent = () => {

    return(
        <section className="section" id="section0" >
        <div className="banner" id="particles-js">
          <div className="container">
            <div className="header">
              <div id="logo" >
                <a href title>
                  <img src={process.env.PUBLIC_URL + '/assets/images/logo4.png'} alt="" />
                </a>
              </div>
              <div className="sticker-menu">
                <ul>
                  <li className="wow fadeInRight"><a href title>Home</a></li>
                  <li className="wow fadeInRight"><a href title>About</a></li>
                  <li className="wow fadeInRight"><a href title>login</a></li>
                  <li className="wow fadeInRight"><a href title>register</a></li>
                </ul>
              </div>
            </div>
            <Banner/>
          </div>
        </div>
      </section>
    )
}
export default React.memo(HeaderComponent)