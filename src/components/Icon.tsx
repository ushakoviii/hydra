import { styled } from 'styled-components';
import SvgSprite from './SvgSprite.svg'

type IconPropsType = {
  id: string,
  width: string,
  height: string,
  fill?: string;
}

export function Icon(props: IconPropsType) {
  return (
    <StyledSvg xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 -960 960 960" width={props.width} fill={props.fill}>
      <use xlinkHref={`${SvgSprite}#${props.id}`} />
    </StyledSvg>
  );
}

const StyledSvg = styled.svg `
  flex-shrink: 0
`