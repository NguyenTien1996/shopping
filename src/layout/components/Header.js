import React from 'react';
import './layout.css';
import {Banner} from '../../pages/Home/components';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

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
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/">Login</Link></li>
                  <li><Link to="/">Register</Link></li>
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