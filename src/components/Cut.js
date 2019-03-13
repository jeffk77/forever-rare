import React from 'react';

import brilliantCutFaceting from '../assets/images/brilliantcutfaceting.png';
import crown from '../assets/images/crown.png';
import culet from '../assets/images/culet.png';
import cutDefinitions from '../assets/images/cutdefinitions.jpg';
import cutGrade from '../assets/images/cutgrade.png';
import deepCut from '../assets/images/deepcut.png';
import diamondAnatomy from '../assets/images/diamondanatomy.png';
import diamondCuts from '../assets/images/diamondcuts.png';
import diamondLoupeCrop from '../assets/images/diamondloupecrop-1.jpg';
import diamondRow1 from '../assets/images/diamondrow-1.png';
import girdle from '../assets/images/girdle.png';
import idealCut from '../assets/images/idealcut.png';
import pavilion from '../assets/images/pavilion.png';
import polish from '../assets/images/polish.png';
import reddiamondClamp from '../assets/images/reddiamond_inaclamp.jpg';
import redDiamonds from '../assets/images/reddiamonds.jpg';
import shallowCut from '../assets/images/shallowcut.png';
import stepcutFaceting from '../assets/images/stepcutfaceting.png';
import symmetry from '../assets/images/symmetry.png';
import table from '../assets/images/table.png';


const Cut = () => (
  <div>
    <h4>The Four C's: Diamond Cut</h4>
    <img className="responsive-img" src={reddiamondClamp} alt="Red Diamond in Clamp" />
    <br /><br />

    <div className="row">
      <div className="col s12 m12 l4">
        <h4>Cut Definitions</h4>
        <p>
          There are many factors that determine a diamond’s brilliance, the most important of
          which is its ability to reflect light. As a diamond is moved through a light source,
          tiny flashes will be visible within the stone. Commonly known as sparkle, this is also
          referred to as scintillation, an effect of the stone’s reflection and refraction of light.
        </p>
      </div>
      <div className="col s12 m12 l8">
        <img className="responsive-img" src={cutDefinitions} alt="Diamond Definitions Diagram" />
      </div>
    </div>
    <br /><br />
    <img className="responsive-img" src={diamondRow1} alt="Diamond Row" />
    <br /><br />

    <h4>Proportions</h4>
    <p>
      A diamond’s proportions, a measure of the number and size of facets and its overall length and
      width, are integral in determining the quality of its cut. When a diamond is cut with the ideal
      proportions for its shape, it will reflect more light out of the top, resulting in higher levels
      of fire and brilliance. A poorly cut diamond with incongruous proportions will allow light to
      escape out the bottom and sides, resulting in a dull, dark appearance.
    </p>
    <br /><br />

    <h4>Table Percentage</h4>
    <p>
      A diamond’s table is the largest facet of the stone, comprising the flat surface on the top.
      The table percentage is the ratio is the width of the diamond’s top facet in relation to the
      width of the entire stone. The right ratio results in a large amount of fire and brilliance.
    </p>
    <br /><br />

    <h4>Depth & Depth Percentage</h4>
    <p>
      A diamond’s depth can be determined by measuring the entire stone’s height from the table
      to the culet and is described in millimeters. The depth percentage measures the ratio of
      the stone’s depth (from the table to the culet) to the diamond’s total diameter.
    </p>
    <br /><br />

    <h4>Measurements</h4>
    <p>
      Measured in millimeters, the measurements of a diamond's length, width, and height are
      used to evaluate the symmetry and quality of its cut.
    </p>
    <br /><br />
    
    <div className="row">
      <div className="col s12 m12 l3">
        <h4>Cut/Shape</h4>
        <p>
          Round diamonds have long been the most popular, although many modern consumers prefer
          alternative shapes, including emerald, princess, radiant, and asscher, among others.
        </p>
      </div>
      <div className="col s12 m12 l9">
        <img className="responsive-img" src={diamondCuts} alt="Diamond Cuts Diagram" />
      </div>
    </div>
    <br /><br />

    <h4>Diamond Components</h4>
    <img className="responsive-img" src={diamondAnatomy} alt="Diamond Components Diagram" />
    <br /><br />

    <div className="row">
      <div className="col s12 m12 l6">
        <h4>Table</h4>
        <img className="responsive-img" src={table} alt="Table Diagram" />
        <p>
          This is the largest facet of the stone. It comprises the flat surface on the top, resembling a ‘table’.
        </p>
      </div>
      <div className="col s12 m12 l6">
        <h4>Crown</h4>
        <img className="responsive-img" src={crown} alt="Crown Diagram" />
        <p>
          A diamond’s crown extends from the top of the stone (the ‘table’) down to the girdle (the widest point of
          the diamond). Crowns can be comprised of step cut facets or brilliant cut facets.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col s12 m12 l4">
        <h4>Girdle</h4>
        <img className="responsive-img" src={girdle} alt="Girdle Diagram" />
        <p>
          This is the portion of the diamond between the crown and the pavilion, essentially spanning
          the width of the stone from side to side. The measurement of the girdle represents the perimeter
          of the diamond. A diamond’s girdle can be rough, polished, or faceted, and does not typically
          affect the quality or appearance of the stone.
        </p>
      </div>
      <div className="col s12 m12 l4">
        <h4>Pavilion</h4>
        <img className="responsive-img" src={pavilion} alt="Pavilion Diagram" />
        <p>
          Located at the bottom of the diamond, the pavilion is integral to the stone’s light reflecting
          properties. A properly cut pavilion will allow the maximum amount of light to reflect from the
          surface of the stone. An excessively deep or shallow diamond can cause light to escape out the
          bottom and sides, reducing its sparkle.
        </p>
      </div>
      <div className="col s12 m12 l4">
        <h4>Culet</h4>
        <img className="responsive-img" src={culet} alt="Culet Diagram" />
        <p>
          The smallest facet of a diamond, the culet is located at the very bottom of the stone. If the
          diamond ends in a point, the diamond grading report will show a value of ‘None’ for the culet
          designation. This small facet was originally intended to protect the diamond’s pavilion, although
          today’s settings are usually strong enough to render it unnecessary.
        </p>
      </div>
    </div>
    <br /><br />

    <img className="responsive-img" src={diamondLoupeCrop} alt="Diamond Loupe" />
    <br /><br />

    <div className="row">
      <div className="col s12 m12 l6">
        <h4>Step-Cut Faceting</h4>
        <img className="responsive-img" src={stepcutFaceting} alt="Step Cut Faceting Diagram" />
        <p>
          This is the largest facet of the stone. It comprises the flat surface on the top, resembling a ‘table’.
        </p>
      </div>
      <div className="col s12 m12 l6">
        <h4>Brilliant Cut Faceting</h4>
        <img className="responsive-img" src={brilliantCutFaceting} alt="Brilliant Cut Faceting Diagram" />
        <p>
          A diamond’s crown extends from the top of the stone (the ‘table’) down to the girdle (the widest point
          of the diamond). Crowns can be comprised of step cut facets or brilliant cut facets.
        </p>
      </div>
    </div>
    
    <div className="row">
      <div className="col s12 m12 l4">
        <h4>Polish</h4>
        <img className="responsive-img" src={polish} alt="Polish Diagram" />
        <p>
          A diamond’s ratings for symmetry, polish, and cut grade may vary based on which Gemological
          Laboratory is evaluating it, as each agency uses a different scale.
        </p>
      </div>
      <div className="col s12 m12 l4">
        <h4>Symmetry</h4>
        <img className="responsive-img" src={symmetry} alt="Symmetry Diagram" />
        <p>
          A symmetrical diamond will have well-balanced, properly aligned facets, resulting in a high
          level of fire and brilliance. If the facets are not symmetrical or not optimally shaped, they’ll display less sparkle.
        </p>
      </div>
      <div className="col s12 m12 l4">
        <h4>Cut Grade</h4>
        <img className="responsive-img" src={cutGrade} alt="Cut Grade Diagram" />
        <p>
          A gemologist assigns a cut grade as a means of measuring a diamond’s proportions, craftsmanship, quality of polish,
          and light reflecting properties. A diamond with a high quality cut grade will exude a large amount of brilliance and fire.
        </p>
      </div>
    </div>
    <br /><br />

    <img className="responsive-img" src={redDiamonds} alt="Red Diamonds" />
    <br /><br />

    <div className="row">
      <div className="col s12 m12 l6">
        <h4>Well-Cut</h4>
        <p>
          A well-cut stone sacrifices more of the rough diamond during the cutting process, resulting in a higher market value.
          It will also exhibit better light reflecting properties, exuding greater fire and brilliance.
        </p>
      </div>
      <div className="col s12 m12 l6">
        <h4>Improperly Cut</h4>
        <p>
          Improperly cut diamonds will have less visual appeal and a decreased value. To ensure the best value, look for a
          certified diamond with polish and symmetry ratings of ‘Good’ or better.
        </p>
      </div>
    </div>
    
    <div className="row">
      <div className="col s12 m12 l4">
        <h4>Shallow Cut</h4>
        <img className="responsive-img" src={shallowCut} alt="Shallow Cut Diagram" />
        <p>
          Although a shallow cut diamond will create the illusion of a larger stone, it allows light to escape out the sides
          instead of reflecting off the top, creating a lack of brilliance and sparkle.
        </p>
      </div>
      <div className="col s12 m12 l4">
        <h4>Ideal Cut</h4>
        <img className="responsive-img" src={idealCut} alt="Ideal Cut Diagram" />
        <p>
          This is the cut of a high quality diamond that beautifully reflects light. This premier cut style is well-proportioned
          and carefully angled to achieve a luminous appearance.
        </p>
      </div>
      <div className="col s12 m12 l4">
        <h4>Deep Cut</h4>
        <img className="responsive-img" src={deepCut} alt="Deep Cut Diagram" />
        <p>
          This type of cut poorly reflects light, resulting in a dull, muted appearance.
        </p>
      </div>
    </div>
    <br /><br />
    
  </div>
);

export default Cut;