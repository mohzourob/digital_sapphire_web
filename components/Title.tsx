import { Typography } from 'antd';
import styled from "styled-components"

const { Title: TitleAnd } = Typography;


const Title = (props: any)=>{
    return  <StyledTitle {...props} /> 
    }


const StyledTitle = styled(TitleAnd)`
    color: ${(props) => {
        return `${props.theme.fontColor} !important`
    }}
`



export default Title