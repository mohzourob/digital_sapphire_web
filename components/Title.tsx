import { Typography } from "antd";
import styled from "styled-components";

const { Title: TitleAnd } = Typography;

const Title = (props: any) => {
  return <StyledTitle {...props} />;
};

const StyledTitle = styled(TitleAnd)`
  color: ${(props) => `${props.theme.fontColor}`};
`;

export default Title;
