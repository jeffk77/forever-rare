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
    <div className="headerBar">
      <div className="row">
        <div className="col s12 m2 l2 hide-on-med-and-down">
          <p><i className="material-icons">mail_outline</i><i className="material-icons">perm_phone_msg</i> +1 (416) 363-5825</p>
        </div>
        <div className="col s12 m12 l8">
          <img src={Logo} className="responsive-img" id="corpLogo" alt="FRD Logo" />
        </div>
        <div className="col s2"></div>
      </div>
    </div>

    <nav className="nav-extended">
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right">
          <li><a href="home.html">HOME</a></li>
          <li><a href="education.html">EDUCATION</a></li>
          <li><a href="aboutUs.html">ABOUT US</a></li>
          <li><a href="ourServices.html">OUR SERVICES</a></li>
          <li><a href="contact.html">CONTACT</a></li>
        </ul>
      </div>
    </nav>

  </div>
);

export default Header;