import React, { useState } from 'react';
import { StyledButton } from './StyledButton';
import { keyframes, styled } from 'styled-components';
import { StyledTitle } from './StyledTitle';
import { StyledTitleSection } from './StyledTitleSection';
import { Icon } from './Icon';
import { Theme } from './Theme';

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
    <StyledTermsWrapper>
      <StyledButton onClick={() => setShowModal(true)}>
        Тариф
      </StyledButton>

      {showModal && (


        <ModalOverlay >

          <StyledButtonWrapper>
            <StyledButton onClick={handleClose} width='30px' height='30px' $margi='0px 0px 0px 0px' radius="50%"
                          bgc={Theme.colors.secondaryBgColor}
                          border='none'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </StyledButton>
          </StyledButtonWrapper>
            <StyledModalWrapper className={isClosing ? 'closing' : ''}>
              <StyledTitle>Тарифы</StyledTitle>
              <StyledTariffWrapper>
                <StyledPriceWrapper>
                  <StyledPrice>190 руб.</StyledPrice>
                </StyledPriceWrapper>

                <StyledTitleSection textAlign="center" margin="15px 0px 15px 0px">1 Месяц</StyledTitleSection>
                <StyledTariffItemWrapper>
                  <Icon id='time' width='20px' height='20px' fill="#ffffff" />
                  <StyledText>Срок действия тарифа 1 месяц</StyledText>
                </StyledTariffItemWrapper>
                <StyledTariffItemWrapper>
                  <Icon id='download' width='20px' height='20px' fill="#ffffff" />
                  <StyledText>Неограниченный трафик</StyledText>
                </StyledTariffItemWrapper>
                <StyledTariffItemWrapper>
                  <Icon id='devices' width='20px' height='20px' fill="#ffffff" />
                  <StyledText>Подключайте до 3-х устройств по одной подписке</StyledText>
                </StyledTariffItemWrapper>
                <StyledTariffItemWrapper>
                  <Icon id='location' width='20px' height='20px' fill="#ffffff" />
                  <StyledText>Вы получите 3 локации для подключения</StyledText>
                </StyledTariffItemWrapper>
              </StyledTariffWrapper>
            
            </StyledModalWrapper>

        </ModalOverlay>

      )
      }
    </StyledTermsWrapper >
  );
};
const StyledTermsWrapper = styled.div`
        display: flex;
        justify-content: center;
        
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
          text-transform: none;
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
  font-size: 12px;
  text-transform: none;
  font-weight: 400;
`;

const StyledButtonWrapper = styled.div`
          z-index: 4;
          position: sticky;
          top: 0px;
          right: 0px;
          display: flex;
          justify-content: flex-end;
          width: 100%;
          max-width: 330px;
        `;

const StyledTermsButton = styled.button`
        margin-top: 15px;
        background-color: transparent;
        border: none;
        color: #999999ff;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
        
        &:active {
            transform: translateY(1px);
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
            color: ${Theme.colors.accentColor};
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
        backdrop-filter: blur(10px);
        position: relative;
        max-height: 90%;
        min-height: 360px;
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



const StyledTariffWrapper = styled.div`
position: relative;
margin-top: 15px;
border: 1px solid ${Theme.colors.accentColor};
border-radius: 10px;
padding: 15px 15px;
`
const StyledPrice = styled.h4`
font-size: 14px;

`
const StyledTariffItemWrapper = styled.div`
gap: 5px;
display: flex;
padding: 5px 0px;
`
const StyledPriceWrapper = styled.div`
position: absolute;
top: 10px;
right: 10px;
display: inline-block;
padding: 10px 10px;
background-color: ${Theme.colors.accentColor};
border-radius: 10px 10px 10px 10px;
 `

