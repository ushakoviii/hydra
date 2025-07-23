import { styled } from "styled-components";

type StyledButtonPropsType = {
  width?: string;
  height?: string;
  $margi?: string;
  border?: string;
  radius?: string;
  bgc?: string;
}
export const StyledButton = styled.button<StyledButtonPropsType>`
  cursor: pointer;
  border: ${props => props.border || '1px solid #63d7fd'};
  border-radius: ${props => props.radius || '10px;'};
  background-color: ${props => props.bgc || '#6adaff0c'};
  color: #6ad9ff;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '40px'};
  margin: ${props => props.$margi || '15px 0px 0px 0px'};
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 14px;
  
  &:active {
    transform: translateY(2px);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;