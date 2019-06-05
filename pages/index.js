import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  position: absolute;
  height: 500px;
  width: 100%;
  background: ${p => (p.transparent ? 'transparent' : p.theme.gradients.nav)};
`;

const index = () => {
  return <div css="height: 5000px">:)</div>;
};

export default index;
