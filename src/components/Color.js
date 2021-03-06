import React from 'react';

import colorDiag from '../assets/images/colorgrades.png';

import blueDiamondIcon from '../assets/images/bluediamondicon.png';
import brownDiamondIcon from '../assets/images/browndiamondicon.png';
import orangeDiamondIcon from '../assets/images/orangediamondicon.png';
import pinkDiamondIcon from '../assets/images/pinkdiamondicon.png';
import redDiamondIcon from '../assets/images/reddiamondicon.png';
import yellowDiamondIcon from '../assets/images/yellowdiamondicon.png';


const Color = () => (
  <div>
    <h4>The Four C's: Diamond Colors Across the Spectrum</h4><br /><br />
    <h5>PALE COLOR</h5>
    <h6>Less Rare & More Affordable</h6>
    <img className="responsive-img" src={colorDiag} alt="Color Grades Diagram" />
    <h5>STRONG COLOR</h5>
    <h6>More Rare & Less Affordable</h6><br /><br />

    <div className="row">

      <div className="col s12 m12 l6">
        <div className="card eduDiamCard">
          <div className="card-image">
            <img src={redDiamondIcon} alt="Red Diamond" />
          </div>
          <div className="card-content">
            <span className="card-title">Red Diamonds</span>
            <p>
              The rarest of the rare, with fewer than 80 pure natural red diamonds in
              the entire world. Natural reds range from dark pink hues, to purplish red.
              The deeper the color, the higher the value, with an average natural red around
              0.20 carats, starting at around $100,000 in value.
                          </p>
          </div>
        </div>
      </div>

      <div className="col s12 m12 l6">
        <div className="card eduDiamCard">
          <div className="card-image">
            <img src={blueDiamondIcon} alt="Blue Diamond" />
          </div>
          <div className="card-content">
            <span className="card-title">Blue Diamonds</span>
            <p>
              Blue diamonds are nearly the rarest diamonds of all, with their color being derived
              from boron being trapped within the structure of the diamond. One in around 200,000
              diamonds contain any hint of blue, with even fewer possessing any significant depth in color.
                          </p>
          </div>
        </div>
      </div>

    </div>

    <div className="row">

      <div className="col s12 m12 l6">
        <div className="card eduDiamCard">
          <div className="card-image">
            <img src={orangeDiamondIcon} alt="Orange Diamond" />
          </div>
          <div className="card-content">
            <span className="card-title">Orange Diamonds</span>
            <p>
              Orange diamonds represent an indelibly rare category of natural colors, with only a handful
              of pure oranges being found a year. A rare orange was sold at auction for an incredible
              £22 million, setting this color in a class by itself.
                          </p>
          </div>
        </div>
      </div>

      <div className="col s12 m12 l6">
        <div className="card eduDiamCard">
          <div className="card-image">
            <img src={pinkDiamondIcon} alt="Pink Diamond" />
          </div>
          <div className="card-content">
            <span className="card-title">Pink Diamonds</span>
            <p>
              Pink diamonds have long been the popular section of choice by investors and collectors worldwide,
              particularly Argyle diamonds, from the Argyle Mine in Australia, source of more than 90% of the
              world’s pinks. With the mine’s pending 2020 closure, these treasures are in higher demand than ever.
                          </p>
          </div>
        </div>
      </div>

      <div className="col s12 m12 l6">
        <div className="card eduDiamCard">
          <div className="card-image">
            <img src={yellowDiamondIcon} alt="Yellow Diamond" />
          </div>
          <div className="card-content">
            <span className="card-title">Yellow Diamonds</span>
            <p>
              Less common than brown diamonds, but fairly common compared to the other natural colors,
              demand for yellow diamonds has increased expontentially thanks to their huge demand in
              China and India for engagement rings and by collectors.
                          </p>
          </div>
        </div>
      </div>

      <div className="col s12 m12 l6">
        <div className="card eduDiamCard">
          <div className="card-image">
            <img src={brownDiamondIcon} alt="Brown Diamond" />
          </div>
          <div className="card-content">
            <span className="card-title">Brown Diamonds</span>
            <p>
              The most common of the fancy color diamonds. Up until 20 years ago they were considered
              valuable primarily for industrial purposes such as cutting machine blades. Their value
              has rocketed in recent years due to an upswing in the popularity of “chocolate” diamonds.
                          </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Color;