import { Button as antButton, ButtonProps } from "antd";
import styled from "styled-components";

const Button = ({ ...props }: ButtonProps) => {
  return <ButtonStyled type="default" {...props} />;
};

const ButtonStyled = styled(antButton)`
  background: ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.body};
`;

export default Button;
