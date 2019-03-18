import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.653100,
      lng: -79.366166
    },
    zoom: 18
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '350px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDt5I_lgWOmq2S-SPvNmpn5j8jM0dyjWpI" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={43.653100}
            lng={-79.366166}
            text={'Forever Rare Head Office'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;


