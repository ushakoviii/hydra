import SvgSprite from './SvgSprite.svg'

type IconPropsType = {
  id: string,
  width?: string,
  height?: string,
}

export function Icon(props: IconPropsType) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={props.height} viewBox="0 -960 960 960" width={props.width} fill="#63d7fd">
      <use xlinkHref={`${SvgSprite}#${props.id}`} />
    </svg>
  );
}