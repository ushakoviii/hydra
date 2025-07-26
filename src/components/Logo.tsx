import { keyframes, styled } from "styled-components";
import SvgSprite from './SvgSprite.svg'
import { Theme } from "./Theme";

type LogoPropsType = {
  id: string,
  width: string;
  height: string;
  fill: string;
}
// Использование:
export function Logo(props: any) {
  return (
    <PulsingLogo
      id={props.id}
      viewBox="0 0 640 640"
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill}>
      <use xlinkHref={`${SvgSprite}#${props.id}`} />
    </PulsingLogo >
  );
}
const pulse = keyframes`
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.15);
  }
`;

const PulsingLogo = styled.svg`
  animation: ${pulse} 7s ease-in-out infinite;
  position: absolute;
  top: 50%;
  left: 50%;
`;
