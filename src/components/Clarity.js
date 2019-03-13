import React from 'react';

import diamondRow from '../assets/images/diamondrow.png';
import clarityScale from '../assets/images/clarityscale.png';
import diamondLoupe from '../assets/images/diamondloupecrop.jpg';
import dispersion from '../assets/images/dispersion.png';
import giaCertcropped from '../assets/images/giacertcropped.jpg';
import reflection from '../assets/images/reflection.png';
import refraction from '../assets/images/refraction.png';

const Clarity = () => (
  <div>
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
      <h5>Certification</h5>
      <p>
        A diamond certificate, also known as a diamond grading report, is an easily understood document prepared
        by an expert gemologist that describes the key characteristics of a diamond. Every diamond sold by
        Excalibur Royale is certified a third-party certification laboratory such as the Gemological Institute of America (GIA).
      </p><br /><br />

      <img className="responsive-img" src={clarityScale} alt="Clarity Scale" />
      <h5>Clarity Scale</h5>
      <p>
        <ul>
          <li>FL-IF: No Internal Inclusions</li>
          <li>VVS-1 - VVS-2: Very very small inclusions. Very difficult to detect until 10x magnification.</li>
          <li>VS-1 - VS-2: Very small inclusions. Can be seen under 10x magnification and in some cases to the naked eye.</li>
          <li>SI-1 - SI-3: Small inclusions. Can be seen under 10x magnification and in some cases to the naked eye.</li>
          <li>I-1 - I-3: Imperfect. Inclusions are visible under 10x magnification and in most cases to the naked eye.</li>
        </ul>
      </p><br /><br />

      <h5>Selecting a Clarity</h5>
      <p>
        Below are some points to consider when selecting your desired clarity rating:<br /><br />

        Those who prefer a diamond with little or no inclusions will likely choose a clarity rating of FL-IF or VVS.
        Although they are priced higher, these high-quality diamonds boast a near-perfect appearance.<br /><br />

        While still considered high quality, diamonds rated in the VS clarity range will not cost as much as more
        premium clarities. VS diamonds will contain inclusions that are undetectable to the unaided eye.<br /><br />

        Considered by many to be a great value, SI1-SI2 diamonds will contain inclusions that can be detected with
        magnification, yet are typically undetectable to the unaided eye and do not detract from the beauty of the
        diamond. If you are considering a diamond with an SI rating, contact a Brilliance diamond and jewelry expert
        to ensure the inclusions are not visible to the naked eye.<br /><br />

        Those who desire large carat weights at lower prices may choose diamonds in the SI3-I1 clarity range.
        Inclusions in these stones are usually noticeable without magnification.<br /><br />

        The location of a diamond's inclusions significantly impacts the stone's clarity rating. External and
        internal characteristics hidden near the side facets of a diamond detract from its beauty less than
        inclusions and blemishes located in the center of the diamond.<br /><br />
      </p><br /><br />
    </div>
  </div>
);

export default Clarity;