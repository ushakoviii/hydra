import { styled } from "styled-components";
import { Theme } from "./Theme";

type StyledTitleSectionPropsType = {
    textAlign?: string;
    margin?: string;
    tansform?: string;
}
export const StyledTitleSection = styled.h3<StyledTitleSectionPropsType>`
    font-size: ${Theme.font.secondaryFontSize};
    font-weight: ${Theme.font.secondaryFontWeight};
    width: 100%;
    text-align: ${props => props.textAlign || "reght"};
    margin: ${props => props.margin || "0px"};
    text-transform: ${props => props.tansform || "uppercase"}; 
`;