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
      <p><i className="material-icons">mail_outline</i><i className="material-icons">perm_phone_msg</i> +1 (416) 363-5825</p>
      <img src={Logo} id="corpLogo" alt="FRD Logo" />
    </div>

    <nav className="nav-extended">
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="home.html">HOME</a></li>
          <li><a href="education.html">EDUCATION</a></li>
          <li><a href="aboutUs.html">ABOUT US</a></li>
          <li><a href="ourServices.html">OUR SERVICES</a></li>
          <li><a href="contact.html">CONTACT</a></li>
        </ul>
      </div>
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          <li className="tab"><a href="#test1">Test 1</a></li>
          <li className="tab"><a className="active" href="#test2">Test 2</a></li>
          <li className="tab"><a href="#test4">Test 4</a></li>
        </ul>
      </div>
    </nav>

  </div>
);

export default Header;