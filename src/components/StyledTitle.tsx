import { styled } from "styled-components";
import { Theme } from "./Theme";

export const StyledTitle = styled.h2`
  font-size: ${Theme.font.mainFontSize};
  font-weight: ${Theme.font.mainFontWeight};
  text-transform: uppercase;
  width: 100%;
  text-align: center;
`;