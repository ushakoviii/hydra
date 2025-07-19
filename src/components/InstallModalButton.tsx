import React, { useState } from 'react';
import { StyledButton } from './StyledButton';
import { keyframes, styled } from 'styled-components';
import { InstallPage } from './InstallPage';


type InstallModalButtonProps = {
  subscriptionUrl?: string | null;
};
export const InstallModalButton: React.FC<InstallModalButtonProps> = ({ subscriptionUrl }) => {
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
    <div>
      <StyledButton onClick={() => setShowModal(true)}>
        Установка и настройкаы
      </StyledButton>

      {showModal && (


        <ModalOverlay className={isClosing ? 'closing' : ''}>
          <StyledModalWrapper>
            <StyledButtonWrapper>
              <StyledButton onClick={handleClose} width='30px' height='30px' $margi='0px 0px 0px 0px'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#63d7fd">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </StyledButton>
            </StyledButtonWrapper>
            <InstallPage subscriptionUrl={subscriptionUrl}/>
          </StyledModalWrapper>
        </ModalOverlay>

      )
      }
    </div >
  );
};
const slideUp = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(50px);
    opacity: 0;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2;
  padding: 0px 15px 15px 15px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow-y: auto;
  animation: ${slideUp} 0.3s ease-out;

  &.closing {
    animation: ${slideDown} 0.3s ease-out forwards;
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

const StyledText = styled.p`
  font-weight: 400;
  font-size: 16px;
  text-align: justify;
`;

const StyledModalWrapper = styled.div`
padding: 15px 15px;
background-color: #000000;
width: 100%;
border-radius: 10px 10px 0px 0px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;