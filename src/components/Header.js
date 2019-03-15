import React from 'react';
import Logo from '../assets/images/FRDlogo.png';

const Header = () => (
  <div>
    <div className="infoBar">
      LOCATE OUR OFFICES • BOOK AN APPOINTMENT • CONFLICT-FREE DIAMONDS
    </div>
    <div className="detailBar">
      FREE SHIPPING • 30 DAY MONEY BACK GUARANTEE • CUSTOM MADE JEWELLERY • FREE RETURNS
    </div>
    <div className="headerBar z-depth-3">
      <div className="row">
        <div className="col s12 m3 l3 hide-on-med-and-down">
          <h5><i className="material-icons">mail_outline</i><i className="material-icons">perm_phone_msg</i> +1 (416) 363-5825</h5>
        </div>
        <div className="col s12 m12 l6">
          <img src={Logo} className="responsive-img logo" id="corpLogo" alt="FRD Logo" />
        </div>
        <div className="col s3"></div>
      </div>

      <nav className="nav-center">
        <div className="nav-wrapper">
          <ul>
            <li><a href="home.html">HOME</a></li>
            <li><a href="Education">EDUCATION</a></li>
            <li><a href="About">ABOUT US</a></li>
            <li><a href="ourServices.html">OUR SERVICES</a></li>
            <li><a href="contact.html">CONTACT</a></li>
          </ul>
        </div>
      </nav>

    </div>


  </div>
);

export default Header;