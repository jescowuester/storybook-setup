import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import { Button, Text } from '../../components';

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Home" />
        <Text type="h1"> Text </Text>
        <Button primary> Book a call </Button>
      </div>
    );
  }
}
