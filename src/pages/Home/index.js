import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import {
  PrimaryButton,
  SecondaryButton,
  Text,
  SecondaryText,
  Header
} from '../../components';

import { View } from './style';

export default class Home extends PureComponent {
  render() {
    return (
      <View>
        <Helmet title="Home" />
        <Header> This is a title </Header>
        <SecondaryText> Sub heading Text </SecondaryText>
        <Text> This is just the plain main Text </Text>
        <PrimaryButton> Book a call </PrimaryButton>
        <SecondaryButton> Make an appointment </SecondaryButton>
      </View>
    );
  }
}
