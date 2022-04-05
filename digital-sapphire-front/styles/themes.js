import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#fff',
  fontColor: '#000',
};

export const darkTheme = {
  body: '#000',
  fontColor: '#fff',
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    transition: all .5s ease ;
  }

	body {
    padding: 0;
    margin: 0;
		background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor}
	}

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.fontColor}
  }

`;
