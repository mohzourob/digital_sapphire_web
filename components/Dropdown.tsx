import { Dropdown as AntDropdown } from "antd";
import styled from "styled-components";

const Dropdown = (props: any) => {
  return <StyledDropdown {...props} />;
};

const StyledDropdown = styled(AntDropdown)``;

export default Dropdown;
