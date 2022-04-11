import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFFFFF",
  fontColor: "#20283B",
};

export const darkTheme = {
  body: "#20283B",
  fontColor: "#FFFFFF",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
    color: ${(props: any) => props.theme.fontColor}
	}

  h1, h2, h3, h4, h5, h6 {
    color: ${(props: any) => props.theme.fontColor} !important
  }

  input[type='text'] {
    background-color: ${(props) => props.theme.body};
    color: ${(props: any) => props.theme.fontColor}
  }
  
  .ant-input-affix-wrapper {
    background-color: ${(props) => props.theme.body};
    color: ${(props: any) => props.theme.fontColor} !important
  }
`;
