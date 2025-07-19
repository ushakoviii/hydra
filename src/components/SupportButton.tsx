import React from 'react';
import { styled } from 'styled-components';
import { StyledButton } from './StyledButton';

export const SupportButton: React.FC = () => {
  const telegramUsername = 'ushakov_ii'; // замените на нужный username без @

  const handleClick = () => {
    window.open(`https://t.me/${telegramUsername}`, '_blank');
  };

  return (
    <StyledButton onClick={handleClick}>
      Техподдержка
    </StyledButton>
  );
};