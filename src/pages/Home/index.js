import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import { Button } from '../../components';

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Home" />

        <Button>Test</Button>
      </div>
    );
  }
}
