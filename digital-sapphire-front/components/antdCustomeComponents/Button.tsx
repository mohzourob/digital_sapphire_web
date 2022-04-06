import { Button as antButton, ButtonProps } from 'antd';
import styled from 'styled-components';

const ButtonStyled = styled(antButton)`
  background: ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.body};

  &:hover {
    background: none;
  }
`;

const Button = ({ ...props }: ButtonProps) => {
  const button = <ButtonStyled type="default" {...props} />;

  return button;
};
export default Button;
