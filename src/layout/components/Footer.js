import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-solid-svg-icons';

const FooterComponent = () => {
    return(
            <div className="footer">
                <div className="join-us">
                    <p>Join our community and connect with us!</p>
                    <div className="mxh">
                    <ul className="tbl">
                        {/* <li className="tbl-cell wow  bounceIn">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </li>
                        <li className="tbl-cell wow bounceIn">
                            <FontAwesomeIcon icon={faTwitter} />
                        </li>
                        <li className="tbl-cell wow bounceIn">
                            <FontAwesomeIcon icon={faInstagram} />
                        </li>
                        <li className="tbl-cell wow bounceIn">
                            <FontAwesomeIcon icon={faPinterest} />
                        </li> */}
                    </ul>
                    </div>
                    <span>© 2019 ST9. All Rights Reserved.</span>
                </div>
            </div>
    )
}
export default React.memo(FooterComponent)