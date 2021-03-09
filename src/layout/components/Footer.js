import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = () => {
    return(
            <div className="footer">
                <div className="join-us">
                    <p>Join our community and connect with us!</p>
                    <div className="mxh">
                    <ul className="tbl">
                        <li className="tbl-cell wow  bounceIn">
                        <a target="_bank" href="" title="">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        </li>
                        <li className="tbl-cell wow bounceIn">
                        <a target="_bank" href="" title="">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        </li>
                        
                        <li className="tbl-cell wow bounceIn">
                        <a target="_bank" href=" title=">
                        <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        </li>
                        
                        <li className="tbl-cell wow bounceIn">
                        <a target="_bank" href="" title="">
                        <FontAwesomeIcon icon={faPinterest} />
                        </a>
                        </li>
                    </ul>
                    </div>
                    <span>© 2019 ST9. All Rights Reserved.</span>
                </div>
            </div>
    )
}
export default React.memo(FooterComponent)