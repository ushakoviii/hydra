import { styled } from "styled-components";

type StyledTitleSectionPropsType = {
    textAlign?: string;
    margin?: string;
}
export const StyledTitleSection = styled.h3<StyledTitleSectionPropsType>`
    font-size: 14px; 
    width: 100%;
    text-align: ${props => props.textAlign || "reght"};
    margin: ${props => props.margin || "0px"};
`;