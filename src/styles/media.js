/* Generate media query templates for the defined breakpoints.
 *
 * Use as follows:
 * const Test = styled.div`
 *   ${media.max-xs`width: 200px;`}
 * `;
 */

import { css } from 'styled-components';

const breakpoints = {
  'max-xs': '(max-width: 767px)',
  'max-sm': '(max-width: 991px)',
  'max-md': '(max-width: 1199px)',

  'min-sm': '(min-width: 768px)',
  'min-md': '(min-width: 992px)',
  'min-lg': '(min-width: 1200px)'
};

// Iterate through the breakpoints and create a media template
const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media ${breakpoints[label]} {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
