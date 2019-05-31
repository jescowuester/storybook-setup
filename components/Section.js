import styled from 'styled-components';
import { space, color, position, height, textAlign } from 'styled-system';

const Background = styled.section`
  ${color}
  width: 100%;
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SectionInner = styled.div`
  width: 100%;

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    max-width: ${p => (p.fullWidth ? '100%' : '1400px')};
  }

  ${space}
  ${color}
  ${position}
  ${height}
  ${textAlign}
`;

const Section = ({ bg, children, ...props }) => (
  <Background bg={bg}>
    <SectionInner {...props}>{children}</SectionInner>
  </Background>
);

Section.defaultProps = {
  p: ['16px', '40px', '160px']
};

export default Section;
