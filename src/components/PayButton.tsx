import React, { useState } from 'react';
import { StyledButton } from './StyledButton';
import { keyframes, styled } from 'styled-components';
import { StyledTitle } from './StyledTitle';
import { StyledTitleSection } from './StyledTitleSection';
import { Icon } from './Icon';
import { Theme } from './Theme';

type PayButtonProps = {
    text?: string | null;
    link?: string | null;
    cost?: number | null;

};
export const PayButton: React.FC<PayButtonProps> = ({ text, link, cost }) => {
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
        <StyledPayWrapper>
            <StyledButton
                onClick={() => setShowModal(true)} bgc={Theme.colors.accentColor}>
                {/* <Icon id='pay' width='20px' height='20px' fill="#ffffff" /> */}
                {text}
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
                        {cost === 0 ? (
                            // 👉 Контент, если оплатить не нужно
                            <StyledLinkWrapper>
                                <StyledTitle>Подписка активна</StyledTitle>
                                <StyledTitleSection tansform="none" margin='10px 0px' textAlign="center">У вас достаточно средств на балансе. Подписка продлится автоматически.</StyledTitleSection>
                                
                            </StyledLinkWrapper>
                        ) : (
                            // 👉 Контент, если нужно оплатить
                            <StyledLinkWrapper>
                                <StyledTitle>Подтверждение оплаты</StyledTitle>
                                <StyledTitleSection tansform="none" margin='10px 0px' textAlign="center">Нажмите ниже, чтобы оплатить подписку</StyledTitleSection>
                                <StyledLink href={`${link}${cost}`}>Оплатить <StyledCost>{cost} руб.</StyledCost></StyledLink>
                            </StyledLinkWrapper>
                        )}
                    </StyledModalWrapper>

                </ModalOverlay>

            )
            }
        </StyledPayWrapper >
    );
};
const StyledLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid ${Theme.colors.accentColor};
  border-radius: 10px;
  background-color: ${Theme.colors.accentColor};
  color: ${Theme.colors.mainFontColor};
  width: 100%;
  height: 45px;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 14px;
  text-decoration: none;
   
  &:active {
    transform: translateY(2px);
  }
`;
const StyledPayWrapper = styled.div`
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

const StyledCost = styled.span`
position: absolute;
top: 50%;
right: 10px;
transform: translateY(-50%);
`
const StyledLinkWrapper = styled.div`
`