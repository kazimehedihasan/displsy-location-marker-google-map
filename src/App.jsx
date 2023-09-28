/* eslint-disable react/prop-types */

import './App.css'
import GoogleMapReact from 'google-map-react';
import { googleApiKey } from './googleApiKey';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
function App() {
  const defaultProps = {
    center: {
      lat:90.4152,
      lng: 22.8041 
    },
    zoom: 11
  };

  return (
    <>
     <div style={{ height: '500px', width: '500px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleApiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
     
    </>
  )
}

export default App
