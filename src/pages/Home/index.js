import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import { Button } from '../../components';

export default class Home extends PureComponent {
  render() {
    return (
      // this is just an example of when the application will fill the whole page with it's contents!
      // please do not replicate this at every page.
      // Just use something more acurate like calc to get the full height/width that a component could use
      <div style={{ width: '100%', height: '100%', background: 'white' }}>
        <Helmet title="Home" />
        <Button primary> Book a call </Button>
      </div>
    );
  }
}
