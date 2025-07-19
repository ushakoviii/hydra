import React, { useState } from 'react';
import { StyledButton } from './StyledButton';
import { keyframes, styled } from 'styled-components';

export const TariffModalButton: React.FC = () => {
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
        <StyledModalWrapper>
            <StyledButton onClick={() => setShowModal(true)}>
                Тарифы
            </StyledButton>

            {showModal && (
                <ModalOverlay className={isClosing ? 'closing' : ''}>
                    <div>
                        <StyledButtonWrapper>
                            <StyledButton onClick={handleClose} width='30px' height='30px' $margi='0px'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#63d7fd">
                                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                </svg>
                            </StyledButton>
                        </StyledButtonWrapper>
                        <p>сейчас доступен только тариф 1 месяц</p>
                        <p>другие тарифы в разработке</p>

                    </div>
                </ModalOverlay>
            )}
        </StyledModalWrapper>
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
  background-color: #000000;
  padding: 60px 15px 15px 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  animation: ${slideUp} 0.5s ease-out;

  &.closing {
    animation: ${slideDown} 0.5s ease-out forwards;
  }
`;

const StyledText = styled.p`
  font-weight: 400;
  font-size: 16px;
  text-align: justify;
`;

const StyledModalWrapper = styled.div`
width: 100%;
`;

const StyledButtonWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: fit-content;
`;