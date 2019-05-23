import styled from 'styled-components';

const getFontSize = initial => ({ theme, fontSize }) =>
  theme.font.sizes[fontSize || initial];

const getTextAlign = ({ textAlign }) => textAlign || 'left';

const H1 = styled.h1`
  text-align: ${getTextAlign};
  font-size: ${getFontSize('h900')};
  font-weight: ${({
    theme: {
      font: { weights }
    }
  }) => weights.bold};
`;

const H2 = styled.h2`
  text-align: ${getTextAlign};
  font-size: ${getFontSize('h800')};
  font-weight: ${({
    theme: {
      font: { weights }
    }
  }) => weights.bold};
`;

const H3 = styled.h3`
  text-align: ${getTextAlign};
  font-size: ${getFontSize('h700')};
  font-weight: ${({
    theme: {
      font: { weights }
    }
  }) => weights.bold};
`;

const H4 = styled.h4`
  text-align: ${getTextAlign};
  font-size: ${getFontSize('h600')};
  font-weight: ${({
    theme: {
      font: { weights }
    }
  }) => weights.bold};
`;

const H5 = styled.h5`
  text-align: ${getTextAlign};
  font-size: ${getFontSize('h500')};
  font-weight: ${({
    theme: {
      font: { weights }
    }
  }) => weights.bold};
`;

const H6 = styled.h6`
  text-align: ${getTextAlign};
  font-size: ${getFontSize('h400')};
  font-weight: ${({
    theme: {
      font: { weights }
    }
  }) => weights.bold};
`;

const P = styled.p`
  text-align: ${getTextAlign};
  font-size: ${getFontSize('h400')};
  margin: 0;
  line-height: ${({ lineHeight }) => lineHeight || '100%'};
  font-weight: ${({
    theme: {
      font: { weights }
    }
  }) => weights.regular};
`;

const Span = styled.span`
  line-height: ${p => (p.lineHeight ? p.lineHeight : '1em')};
  text-align: ${getTextAlign};
  font-size: ${getFontSize('h200')};
`;

const A = styled.a`
  text-decoration: none;
`;

export { H1, H2, H3, H4, H5, H6, P, Span, A };
