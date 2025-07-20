import { createGlobalStyle } from "styled-components";

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
text-transform: uppercase;
color: white;
background-color: #000000ff;
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 500;
font-style: normal;
overflow: hidden;
font-size: 12px;
}
`