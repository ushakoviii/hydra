import { styled } from "styled-components";

type StyledButtonPropsType = {
  width?: string;
  height?: string;
  $margi?: string;
}
export const StyledButton = styled.button<StyledButtonPropsType>`
  cursor: pointer;
  border: 1px solid #63d7fd;
  border-radius: 10px;
  background-color: #6adaff0c;
  color: #6ad9ff;
  width: ${props => props.width || '300px'};
  height: ${props => props.height || '40px'};
  margin: ${props => props.$margi || '20px 0px 0px 0px'};
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 14px;
  
`;