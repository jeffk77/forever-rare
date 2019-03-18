import React from 'react';

import SimpleMap from './SimpleMap';

const Contact = () => (
  <div>
    <div className="aboutImg parallax"></div>

    <div className="row homeSection1">

      <h1>FOREVER RARE COLOR DIAMONDS LTD.</h1>
      <h5>Natural Color Diamonds at the World's Best Prices... Guaranteed</h5>
      <hr className="divider" />

      <div className="container">
        <div className="row">
          <div className="col s12 m6 l6">
            <h4>
              49 ONTARIO STREET<br />
              SUITE 704<br />
              TORONTO, ONTARIO<br />
              CANADA  M5A 2V1<br />
              <br />
              [T] 416.363.5825<br />
              [F] 416.352.1572<br />
              [E] info@forever-rare.com
            </h4>
          </div>
          <div className="col s12 m6 l6">
          </div>
        </div>
      </div>

      <br /><br /><br />
      
      <SimpleMap />

    </div>

  </div>
);

export default Contact;