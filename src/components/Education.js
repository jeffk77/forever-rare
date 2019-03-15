import React from 'react';

import Cut from './Cut';
import Carat from './Carat';
import Clarity from './Clarity';
import Color from './Color';

const Education = () => (
  <div>
    <div className="educationImg parallax"></div>
    <div className="titleSubtitle">
      <h1>EDUCATION</h1>
      <h5>LEARNING THE IN'S AND OUT'S OF THE NATURAL COLOR DIAMOND 4 C'S</h5>
      <hr className="divider" />
    </div>

    <div className="container">
      <p>
        Buying a diamond does not have to be an uncomfortable experience. Diamond Education
        is designed to give you the tools and information you need to properly evaluate
        diamond quality and value with confidence.<br /><br />

        Every diamond is unique, and there are a variety of factors which affect the price
        of a diamond. Focus on those factors most important to you, and choose a diamond
        that satisfies your individual standards for beauty and value. This might be a
        very different diamond than someone else with a similar budget would choose.
        At Forever Rare, we want to help find the best diamond for you.<br /><br />

        You also have access to a personal diamond representative; who can walk you through
        the diamond selection process or answer any questions you have. chat online, or
        send your request to info@forever-rare.com.<br /><br /><br />
      </p>
    </div>

    <div className="educMainImg parallax"></div><br /><br />

    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s3"><a className="active" href="#diamCut"><h6>Diamond Cut</h6></a></li>
              <li className="tab col s3"><a href="#diamCarat"><h6>Diamond Carat</h6></a></li>
              <li className="tab col s3"><a href="#diamColor"><h6>Diamond Color</h6></a></li>
              <li className="tab col s3"><a href="#diamClarity"><h6>Diamond Clarity</h6></a></li>
            </ul>
          </div>
          <div id="diamCut" className="col s12"><Cut /></div>
          <div id="diamCarat" className="col s12"><Carat /></div>
          <div id="diamColor" className="col s12"><Color /></div>
          <div id="diamClarity" className="col s12"><Clarity /></div>
        </div>
      </div>

    </div>

  </div>
);

export default Education;