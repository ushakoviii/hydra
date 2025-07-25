import React, { useState } from 'react';
import { StyledButton } from './StyledButton';
import { keyframes, styled } from 'styled-components';
import { InstallPage } from './InstallPage';


type InstallModalButtonProps = {
  happLink?: string | null;
};
export const InstallModalButton: React.FC<InstallModalButtonProps> = ({ happLink }) => {
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setIsClosing(false);
    }, 500); // Время закрывающей анимации
  };

  return (
    <StyledInstallWrapper>
      <StyledButton onClick={() => setShowModal(true)}>
        Установка и настройка
      </StyledButton>

      {showModal && (


        <ModalOverlay className={isClosing ? 'closing' : ''}>
          <StyledButtonWrapper>
            <StyledButton onClick={handleClose} shadow="none" width='24px' height='24px' $margi='0px 0px 0px 0px'
              border='none' radius="50%" >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </StyledButton>
          </StyledButtonWrapper>
          <StyledModalWrapper className={isClosing ? 'closing' : ''}>

            <InstallPage happLink={happLink} />
          </StyledModalWrapper>
        </ModalOverlay>

      )
      }
    </StyledInstallWrapper >
  );
};
const StyledInstallWrapper = styled.div`
width: 100%;
`


const ModalOverlay = styled.div`
  
  position: fixed;
  inset: 0;
  z-index: 2;
  padding: 15px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
 
  }

  ol {
    text-align: justify;
    counter-reset: item;
    list-style: none;
    padding-left: 1em;
    font-weight: 400;
    font-size: 16px;
  }

  li {
    display: block;
    position: relative;
    margin-top: 10px;
  }

  li:before {
    counter-increment: item;
    content: counters(item, ".") ". ";
    position: absolute;
    left: -1.5em;
    width: 1.5em;
    text-align: right;
  }

  li > ol {
    counter-reset: item;
  }

  li + li {
    margin-top: 5px;
  }
`;

const blurFadeIn = keyframes`
  0% {
    backdrop-filter: blur(0px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    backdrop-filter: blur(10px);
    transform: translateY(0px);
    opacity: 1;
  }
`;

const blurFadeOut = keyframes`
  0% {
    backdrop-filter: blur(10px);
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    backdrop-filter: blur(0px);
    transform: translateY(50px);
    opacity: 0;
  }
`;
const StyledModalWrapper = styled.div`
        background-color: #1c1c1eb7;
        position: relative;
        max-height: 80%;
        height: 100%;
        overflow-y: auto;
        padding: 15px 15px;
        width: 100%;
        max-width: 330px;
        border-radius: 10px 10px 10px 10px;

        animation: ${blurFadeIn} 0.5s ease-out forwards;

        &.closing {
        animation: ${blurFadeOut} 0.5s ease-out forwards;
        }
        `;

const StyledButtonWrapper = styled.div`
  margin: 0px 0px 5px 0px;
  z-index: 5;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  
`;