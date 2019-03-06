import React from 'react';
import caratDiag from '../assets/images/caratWeight.jpg';
import colorDiag from '../assets/images/colorgrades.png';
import blueDiamondIcon from '../assets/images/bluediamondicon.png';
import brownDiamondIcon from '../assets/images/browndiamondicon.png';
import orangeDiamondIcon from '../assets/images/orangediamondicon.png';
import pinkDiamondIcon from '../assets/images/pinkdiamondicon.png';
import redDiamondIcon from '../assets/images/reddiamondicon.png';
import yellowDiamondIcon from '../assets/images/yellowdiamondicon.png';

import diamondRow from '../assets/images/diamondrow.png';
import clarityScale from '../assets/images/clarityscale.png';
import diamondLoupe from '../assets/images/diamondloupecrop.jpg';
import dispersion from '../assets/images/dispersion.png';
import giaCertcropped from '../assets/images/giacertcropped.jpg';
import reflection from '../assets/images/reflection.png';
import refraction from '../assets/images/refraction.png';


const Home = () => (
  <div>
    <div className="homeImg parallax"></div>

    <div className="row homeSection1">
      <h1>BEAUTY AND VALUE</h1>
      <h5>NATURAL COLOR DIAMONDS, A HARD ASSET CLASS A BILLION YEARS IN THE MAKING</h5>
      <hr className="divider" />
      <div className="container">
        <p>
          With Forever Rare, you may be assured that your needs will be
          anticipated and met with care, honesty, integrity, competence, attention to detail, and
          absolute discretion. With many years of combined experience devoted to the diamond industry,
          our principal owners and sales representatives are professionally trained to assist our
          clients in all matters relating to the investment and potential re-marketing of natural
          colour diamonds through private sources or auction. ​The vast inventory of natural colour
          diamonds held and made available to Forever Rare, the superior design and craftsmanship
          of your custom hand-crafted jewellery creations, as well as our exceptional price points
          on all natural colour diamonds have made us one of the leading organizations in the natural
          colour diamond industry.
        </p>
      </div>
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
                One carat is divided into 100 points, so that a diamond of 75 points is 0.75 carats.
                The carat-weight of a diamond is the easiest measurement to determine. As the weight
                of a diamond increases, so does its rarity and therefore it's price and value.
              </p>
            </div>

            <div className="card-action">
              <a href="#modal1" className="modal-trigger">Learn More</a>

              <div id="modal1" className="modal">
                <div className="modal-content">
                  <h4>The Four C's: Diamond Carat Weight</h4>
                  <img className="responsive-img" src={caratDiag} alt="Carat Weight Diagram" />
                  <p>
                    One carat is divided into 100 points, so that a diamond of
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
              <p>
                The purest characteristic of the natural color diamonds,
                is the vibrant hue it shows to the world. Glorious pinks,
                luscious yellows, beautiful greens, and more make up the
                broad and unique collection of nature's finest miracles.
                </p>
            </div>
            <div className="card-action">
              <a href="#modal2" className="modal-trigger">Learn More</a>

              <div id="modal2" className="modal">
                <div className="modal-content">
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
              </div>

            </div>
          </div>
        </div>
        <div className="col s12 m12 l3">
          <div className="card purple darken-4">
            <div className="card-content white-text">
              <span className="card-title">Four C's: Clarity</span>
              <p>
                A diamond is defined most often by its cut, colour, clarity and carat weight
                contribute heavily as well to a diamond’s value and aesthetic appeal, however
                it’s the cut that impacts directly on the stone’s facets, proportions, and light reflection.
              </p>
            </div>
            <div className="card-action">
              <a href="#modal3" className="modal-trigger">Learn More</a>

              <div id="modal3" className="modal">
                <div className="modal-content">
                  <h4>The Four C's: Diamond Clarity</h4>
                  <img className="responsive-img" src={diamondRow} alt="Row of Diamonds" />
                  <p>
                    A diamond is defined by professionals and the public alike, most often by its cut,
                    colour, clarity and carat weight contribute heavily as well to a diamond’s value and
                    aesthetic appeal, however it’s the cut that impacts directly on the stone’s facets,
                    proportions, and light reflection.

                    Inclusions found on a diamond can be considered nature's birthmarks, the distinguishing
                    characteristics that make the stone unique. When grading a diamond, the amount of inclusions
                    and blemishes has a direct impact on its clarity and value. Flawless diamonds containing
                    no inclusions are extremely rare and very expensive. A majority of the commercially sold
                    diamonds contains inclusions that are undetectable to the unaided eye. To ensure a large
                    selection, Brilliance offers diamonds with a range of clarity ratings from FL (Flawless)
                    to I1 (Included). Diamonds with clarity ratings of I1 or higher contain inclusions that
                    are typically undetectable without special magnified viewers.
                  </p><br /><br />

                  <img className="responsive-img" src={diamondLoupe} alt="Diamond Loupe" />
                  <h5>Light's Effect on a Diamond</h5>
                  <p>
                    There are many factors that determine a diamond’s brilliance, the most important of which
                    is its ability to reflect light. As a diamond is moved through a light source, tiny flashes
                    will be visible within the stone. Commonly known as sparkle, this is also referred to as
                    scintillation, an effect of the stone’s reflection and refraction of light.
                  </p><br /><br />

                  <div className="row">

                    <div className="col s12 m12 l4">
                      <div className="card eduDiamCard">
                        <div className="card-image">
                          <img src={reflection} alt="Reflection Diagram" />
                        </div>
                        <div className="card-content">
                          <span className="card-title">Reflection Diagram</span>
                          <p>
                            When light enters the surface of a diamond, a portion of it is reflected back out of the top.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col s12 m12 l4">
                      <div className="card eduDiamCard">
                        <div className="card-image">
                          <img src={refraction} alt="Refraction Diagram" />
                        </div>
                        <div className="card-content">
                          <span className="card-title">Refraction Diagram</span>
                          <p>
                            The remaining rays of light travel into the center of the diamond and bounce off its internal walls,
                            an effect known as refraction.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col s12 m12 l4">
                      <div className="card eduDiamCard">
                        <div className="card-image">
                          <img src={dispersion} alt="Dispersion Diagram" />
                        </div>
                        <div className="card-content">
                          <span className="card-title">Dispersion Diagram</span>
                          <p>
                            As light exits the diamond, dispersion causes the white light to be separated into multiple colours.
                            Some light will escape out the bottom and sides, and some will reflect out of the top of the stone.
                          </p>
                        </div>
                      </div>
                      <br /><br />
                    </div>

                    <img className="responsive-img" src={giaCertcropped} alt="GIA Certificate" />
                    



                  </div>


























                  
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col s12 m12 l3">
            <div className="card purple darken-4">
              <div className="card-content white-text">
                <span className="card-title">Four C's: Cut</span>
                <p>
                  Many factors determine a diamond’s brilliance. Primarily, is its ability to reflect light.
                  As a diamond is moved through a light source, tiny flashes will be visible within the stone.
                  Commonly known as sparkle, this is also referred to as scintillation.
                </p>
              </div>
              <div className="card-action">
                <a href="#modal4" className="modal-trigger">Learn More</a>

                <div id="modal4" className="modal">
                  <div className="modal-content">
                    <h4>The Four C's: Diamond Colors Across the Spectrum</h4>
                    <img className="responsive-img" src={caratDiag} alt="Carat Weight Diagram" />
                    <p>
                      One carat is divided into 100 points, so that a diamond of
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


        </div>

      </div>

      <div className="lowerImg parallax"></div>

      <div className="row homeSection2">
        <h1>CUSTOM JEWELLERY</h1>
        <h5>INCREASE THE BEAUTY AND INCREASE THE VALUE!</h5>
        <hr className="divider" />
        <div className="container">
          <p>
            The overwhelming majority of the world’s supply of cut and polished diamonds are ultimately
            incorporated and showcased into finished pieces of luxury jewelry. Thereafter the jewelry is
            marketed globally through upscale retailers, auction houses or through private sales to end
            users (consumers) seeking quality of design and fabrication. This process enhances the value
            and aesthetic beauty of the diamond(s) so incorporated.
        </p>
          <p>
            By incorporating one or more rare natural colour diamonds into a unique and aesthetically desirable
            jewelry creation, the value of the finished product is increased and the ability to showcase the
            diamonds for sale to a third party buyer is enhanced.
        </p>
          <p>
            At Forever Rare, we design and manufacture custom (one-of-a-kind) jewelry creations
            to showcase the beauty of our clients natural colour diamonds.
  
            According to the Diamond Industry Report, prepared by Bain & Company, Inc., global retail
            sales of jewelry incorporating diamonds for the year 2011 was approximately USD $72 billion
            and it was estimated that this figure would increase by 6% per year due to the expansive
            wealth and buying patterns which have emerged in China, India and Russia.
        </p>
          <p>
            In creating a custom designed jewelry creation our clients provide us with their budget
            and are thereafter provided with one or more design renderings for their selection.
            Depending on the design selected in consultation with their respective account representatives,
            the jewelry piece is crafted in either 14 karat or 18 karat gold (white, yellow or rosê) or
            platinum incorporating our clients natural colour diamond(s).
        </p>
          <p>
            Depending on our clients budget, various additional white diamonds can be included, all of
            which are VS clarity or better. One must appreciate that natural colour diamonds are similar
            to snowflakes... each is unique and no two are exactly alike. This also holds true for our
            custom-made jewelry. Each piece is unique and one-of-a-kind.
        </p>
          <p>
            Our account representatives and design team can fulfill virtually any request for a custom
            designed jewelry creation incorporating our clients natural colour diamonds.
        </p>
          <p>
            Our design service is gratis to the clients of Genesis Rare Diamonds and custom design
            renderings in advance of fabrication are available for rings, earrings, bracelets,
            pendants, necklaces and brooches.
        </p>
        </div>
      </div>

    </div>
    );
    
export default Home;