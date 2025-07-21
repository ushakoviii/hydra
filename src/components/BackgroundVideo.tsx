import React from 'react';
import styled from 'styled-components';
import bgvideo2 from './media/bgvideo2.mp4'
import bggif2 from './media/bggif2.gif'

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
    <StyledImg src={bggif2}></StyledImg>
  );
};


// const Video = styled.video`
//   position: absolute;
//   left: 50%;
//   top: -20%;
//   transform: translateX(-50%);
//   z-index: -1;
// `;

const StyledImg = styled.img`
object-fit: contain;
height: 100%;
width: auto;
position: absolute;
left: 50%;
top: -10%;
transform: translateX(-50%);
  z-index: -1;
`

