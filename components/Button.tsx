import { Button as antButton, ButtonProps } from 'antd';
import styled from 'styled-components';


const ButtonStyled = styled(antButton)`
  background: ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.body};

  &:hover {
    background: red;
  }
`;

const Button = ({ ...props }: ButtonProps) => {
  return (
    <ButtonStyled type="default" {...props} />
  )
}



export default Button;
