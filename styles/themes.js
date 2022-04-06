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
    color: ${(props) => props.theme.fontColor}
	}
`;
