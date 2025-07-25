import { styled } from "styled-components";
import { Theme } from "./Theme";

type StyledButtonPropsType = {
  width?: string;
  height?: string;
  $margi?: string;
  border?: string;
  radius?: string;
  bgc?: string;
  shadow?: string;
}
export const StyledButton = styled.button<StyledButtonPropsType>`
  position: relative;
  cursor: pointer;
  box-shadow: ${props => props.shadow || 'none'};
  border: ${props => props.border || `1px solid ${Theme.colors.accentColor}`};
  border-radius: ${props => props.radius || '10px;'};
  background-color: ${props => props.bgc || '#6adaff0c'};
  color: ${Theme.colors.mainFontColor};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '45px'};
  margin: ${props => props.$margi || '15px 0px 0px 0px'};
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
  font-weight: ${Theme.font.secondaryFontWeight};
  font-style: normal;
  font-size: ${Theme.font.secondaryFontSize};
  
  &:active {
    transform: translateY(2px);
    
  }
`;