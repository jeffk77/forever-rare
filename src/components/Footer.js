import React from 'react';
import Logo from '../assets/images/FRDlogo.png';
import ccLogos from '../assets/images/ccLogos.png';

const Footer = () => (
  <div>
      <footer>
        <div className="row">
          <div className="col l2 m2 hide-on-med-and-down">
            <img className="responsive-img footerLogo" src={Logo} alt="FRD Logo" /><br /><br />
            49 Ontario Street, Suite 704<br />
            Toronto, Ontario | Canada | M5A 2V1
          </div>
          <div className="col l8 m12 s12">
            <h5>Forever Rare Color Diamonds Ltd.</h5>
            <p>[T] 416.363.5825 -- [F] 416-352-1572<br />
            [E] info@forever-rare.com</p>
          </div>
          <div className="col l2 m2 hide-on-med-and-down">
            <img className="responsive-img ccLogos" src={ccLogos} alt="Credit Card Logos" />
          </div>
        </div>
      </footer>
  </div>
);

export default Footer;