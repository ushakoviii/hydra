import React from 'react';
import styled from 'styled-components';
import bgvideo2 from './media/bgvideo2.mp4'
import bggif from './media/bggif.gif'

export const BackgroundVideo: React.FC = () => {
  return (
    // <Video
    //   autoPlay
    //   muted
    //   loop
    //   playsInline
    // >
    //   <source src={bgvideo2} type="video/webm" />
    // </Video>
    <StyledImg src={bggif}></StyledImg>
  );
};


const Video = styled.video`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;

const StyledImg = styled.img`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
  z-index: -1;
`

