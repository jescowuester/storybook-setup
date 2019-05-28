import React, { PureComponent } from 'react';
import Script from 'react-load-script';

const styles = [{}];

class Maps extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      hasError: false
    };
  }

  handleScriptCreate = () =>
    this.setState({
      isLoaded: false
    });

  handleScriptError = () =>
    this.setState({
      hasError: true
    });

  handleScriptLoad = () => {
    const { location } = this.props;

    // eslint-disable-next-line no-new
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 16,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      styles
    });

    // eslint-disable-next-line no-new
    new window.google.maps.Marker({ position: location, map });

    return this.setState({
      isLoaded: true
    });
  };

  render() {
    const { isLoaded, hasError } = this.state;

    if (hasError && !isLoaded) {
      console.log('Oops something went wrong');
    }

    return (
      <Script
        url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDCWjThlxD1yMPg_XE47rTlqj98sov9S2Q"
        onCreate={this.handleScriptCreate}
        onError={this.handleScriptError}
        onLoad={this.handleScriptLoad}
      />
    );
  }
}

export default Maps;
