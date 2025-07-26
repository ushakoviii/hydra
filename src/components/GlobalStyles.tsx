import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
*, 
*::before,
*::after {
margin: 0px;
padding: 0px;
box-sizing: border-box;
} 

body {
max-width: 100wv;
background-color: ${Theme.colors.mainBgColor};
color: ${Theme.colors.mainFontColor};
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 400;
font-style: normal;
overflow: hidden;
font-size: 12px;
}
`
// background-color: ${Theme.colors.mainBgColor};