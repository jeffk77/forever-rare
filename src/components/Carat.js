import React from 'react';
import caratDiag from '../assets/images/caratWeight.jpg';

const Carat = () => (
  <div>

    <h4>The Four C's: Diamond Carat Weight</h4>
    <img className="responsive-img" src={caratDiag} alt="Carat Weight Diagram" />
    <p>
      One carat is divided into 100 points, so that a diamond of 75 points
      weighs 0.75 carats. The carat-weight of a diamond is the easiest
      measurement to determine.<br /><br />
      As the carat weight of a diamond increases, so does its rarity and
      therefore it's price and value.
    </p>

  </div>
);

export default Carat;