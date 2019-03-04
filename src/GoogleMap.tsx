import * as React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import google from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};


export interface GoogleMapProps {
    google : google.GoogleAPI
}

export interface GoogleMapState {
}

class GoogleMap extends React.Component<GoogleMapProps, GoogleMapState> {
  constructor(props: GoogleMapProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
        <Map
        google={this.props.google}
        zoom={14}
       
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD74aggfVmTMHASeBZlb8gbrcScsm87TQs'
})(GoogleMap);