import React from 'react';
import caratDiag from '../assets/images/caratWeight.jpg';
import colorDiag from '../assets/images/colorgrades.png';
import blueDiamondIcon from '../assets/images/bluediamondicon.png';
import brownDiamondIcon from '../assets/images/browndiamondicon.png';
import orangeDiamondIcon from '../assets/images/orangediamondicon.png';
import pinkDiamondIcon from '../assets/images/pinkdiamondicon.png';
import redDiamondIcon from '../assets/images/reddiamondicon.png';
import yellowDiamondIcon from '../assets/images/yellowdiamondicon.png';

const Home = () => (
  <div>
    <div className="homeImg parallax"></div>

    <div className="row homeSection1">
      <h1>BEAUTY AND VALUE</h1>
      <h5>NATURAL COLOR DIAMONDS, A HARD ASSET CLASS A BILLION YEARS IN THE MAKING</h5>
      <hr className="divider" />
      <p className="container">With Forever Rare, you may be assured that your needs will be
      anticipated and met with care, honesty, integrity, competence, attention to detail, and
      absolute discretion. With many years of combined experience devoted to the diamond industry,
      our principal owners and sales representatives are professionally trained to assist our
      clients in all matters relating to the investment and potential re-marketing of natural
      colour diamonds through private sources or auction. ​The vast inventory of natural colour
      diamonds held and made available to Forever Rare, the superior design and craftsmanship
      of your custom hand-crafted jewellery creations, as well as our exceptional price points
      on all natural colour diamonds have made us one of the leading organizations in the natural
      colour diamond industry.</p>
    </div>

    <div className="midImg parallax"></div>

    <div className="row homeSection2">
      <h1>EDUCATION</h1>
      <h5>NERVOUS ABOUT THE UNFAMILIAR? WE'LL EDUCATE YOU!</h5>
      <hr className="divider" />

      <div className="row">

        <div className="col s12 m12 l3">
          <div className="card purple darken-4">
            <div className="card-content white-text">
              <span className="card-title">Four C's: Carat Weight</span>
              <p>

              </p>
            </div>

            <div className="card-action">
              <a href="#modal1" className="modal-trigger">Learn More</a>

              <div id="modal1" className="modal">
                <div className="modal-content">
                  <h4>The Four C's: Diamond Carat Weight</h4>
                  <img className="responsive-img" src={caratDiag} alt="Carat Weight Diagram" />
                  <p>One carat is divided into 100 points, so that a diamond of
                    75 points weighs 0.75 carats. The carat-weight of a diamond
                    is the easiest measurement to determine.<br /><br />
                    As the carat weight of a diamond increases,
                    so does its rarity and therefore it's price and value.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="col s12 m12 l3">
          <div className="card purple darken-4">
            <div className="card-content white-text">
              <span className="card-title">Four C's: Color</span>
              <p>The purest characteristic of the natural color diamonds,
                is the vibrant hue it shows to the world. Glorious pinks,
                luscious yellows, beautiful greens, and more make up the
                broad and unique collection of nature's finest miracles.</p>
            </div>
            <div className="card-action">
              <a href="#modal2" className="modal-trigger">Learn More</a>

              <div id="modal2" className="modal">
                <div className="modal-content">
                  <h4>The Four C's: Diamond Colors Across the Spectrum</h4>
                  <img className="responsive-img" src={caratDiag} alt="Carat Weight Diagram" />
                  <p>One carat is divided into 100 points, so that a diamond of
                    75 points weighs 0.75 carats. The carat-weight of a diamond
                    is the easiest measurement to determine.<br /><br />
                    As the carat weight of a diamond increases,
                    so does its rarity and therefore it's price and value.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="col s12 m12 l3">
          <div className="card purple darken-4">
            <div className="card-content white-text">
              <span className="card-title">Four C's: Clarity</span>
              <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col s12 m12 l3">
          <div className="card purple darken-4">
            <div className="card-content white-text">
              <span className="card-title">Four C's: Cut</span>
              <p>Many factors that determine a diamond’s brilliance. Primarily, is its ability to reflect light. As a diamond is moved through a light source, tiny flashes will be visible within the stone. Commonly known as sparkle, this is also referred to as scintillation.</p>
            </div>
            <div className="card-action">
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>


      </div>

    </div>

    <div className="lowerImg parallax"></div>

    <div className="row homeSection2">
      <h1>CUSTOM JEWELLERY</h1>
      <h5>INCREASE THE BEAUTY AND INCREASE THE VALUE!</h5>
      <hr className="divider" />
    </div>

  </div>
);

export default Home;