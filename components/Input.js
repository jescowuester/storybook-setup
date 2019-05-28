import styled from 'styled-components';
import { space, color, width, fontSize } from 'styled-system';

const Input = styled.input`
  box-shadow: inset ${p => p.theme.shadows.z1};
  border-radius: 5px;
  border: 1px solid ${p => p.theme.colors.grey};
  color: ${p => p.theme.colors.blackLighter};
  transition: background 0.2s, box-shadow 0.2s;

  &:hover {

  };

  &:disabled {
    background: ${p => p.theme.colors.grey};
  }

  &:active, &:focus {
    box-shadow: inset ${p => p.theme.shadows.z1};
    outline: none;
  }

  ${space}
  ${color}
  ${width}
  ${fontSize}
`;

Input.defaultProps = {
  py: '18px',
  px: '20px',
  fontSize: '18px'
};

export default Input;
