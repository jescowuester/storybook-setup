/* eslint-disable no-eval */
import styled from 'styled-components';
import { P, H1, H2, H3, H4, H5, H6 } from '../Typography';

const StyledText = styled(P)`
  font-size: ${({
    fontSize,
    theme: {
      font: { sizes }
    }
  }) => sizes[fontSize]};
  color: ${({ color, theme: { colors } }) => colors[color]};
`;

const H1Text = styled(H1)`
  color: ${({ color, theme: { colors } }) => colors[color]};
`;

const H2Text = styled(H2)`
  color: ${({ color, theme: { colors } }) => colors[color]};
`;

const H3Text = styled(H3)`
  color: ${({ color, theme: { colors } }) => colors[color]};
`;

const H4Text = styled(H4)`
  color: ${({ color, theme: { colors } }) => colors[color]};
`;

const H5Text = styled(H5)`
  color: ${({ color, theme: { colors } }) => colors[color]};
`;

const H6Text = styled(H6)`
  color: ${({ color, theme: { colors } }) => colors[color]};
`;

export { StyledText, H1Text, H2Text, H3Text, H4Text, H5Text, H6Text };
