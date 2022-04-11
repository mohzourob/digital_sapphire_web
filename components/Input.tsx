import { Input as AntInput } from "antd";
import styled from "styled-components";

const Input = (props: any) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled(AntInput)`
  border-radius: 24px;
  margin: 0 1rem;

  .anticon-search {
    color: ${(props: any) => props.theme.fontColor} !important;
  }
`;

export default Input;
