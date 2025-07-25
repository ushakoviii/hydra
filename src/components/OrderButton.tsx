import React, { useState } from 'react';
import { useSession } from './SessionContext';
import { StyledButton } from './StyledButton';
import { styled } from 'styled-components';
import { Theme } from './Theme';

interface OrderButtonProps {
  onOrderSuccess: () => void;
}

export const OrderButton: React.FC<OrderButtonProps> = ({ onOrderSuccess }) => {
  const { sessionId } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleOrder = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('https://shmclient.hydra-service.online/shm/v1/service/order', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'session-id': sessionId || '',
        },
        body: JSON.stringify({ service_id: 13 }), // ⚠️ Заменить на нужный ID услуги
      });

      if (!response.ok) throw new Error(`Ошибка заказа: ${response.status}`);

      setSuccess(true);
      onOrderSuccess(); // можно обновить родителя или просто дождаться автообновления
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledOrderButtonWrapper>
      <StyledButton bgc={Theme.colors.accentColor}
        onClick={handleOrder}
        disabled={loading}
        
      >
        {loading ? 'Подключение...' : 'Подключиться'}
      </StyledButton>
      {error && <div>Ошибка: {error}</div>}
    </StyledOrderButtonWrapper>
  );
};
const StyledOrderButtonWrapper = styled.div `
width: 100%;
`