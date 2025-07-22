import React, { useEffect, useState } from 'react';
import { useSession } from './SessionContext';
import { OrderButton } from './OrderButton';
import { SupportButton } from './SupportButton';
import { styled } from 'styled-components';
import { StyledButton } from './StyledButton';
import { Logo } from './Logo';
import { BackgroundVideo } from './BackgroundVideo';
import { LoadSpinner } from './LoadSpinner';
import { InstallModalButton } from './InstallModalButton';
import { TariffModalButton } from './TariffModalButton';
import { TermsModalButton } from './TermsModalButton';

export const ServiceList: React.FC = () => {
  const { isAuthenticated, sessionId } = useSession();

  const [services, setServices] = useState<any[]>([]);
  const [itemsCount, setItemsCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loginId, setLoginId] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [subscriptionUrl, setSubscriptionUrl] = useState<string | null>(null);
  const [next, setNext] = useState<number | null>(null);
  const [orderCosts, setOrderCosts] = useState<{ service_id: number; cost: number }[]>([]);
  const [reloadFlag, setReloadFlag] = useState<boolean>(false);

  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  const fetchAllData = async () => {
    if (!sessionId) return;

    if (!initialLoading) {
      setLoading(true);
    }

    const headers = { 'session-id': sessionId };

    try {
      // 1. Загрузка user services
      const url = new URL('https://shmclient.hydra-service.online/shm/v1/user/service');
      url.searchParams.append('filter', '{}');
      url.searchParams.append('limit', '25');
      url.searchParams.append('offset', '0');

      const response = await fetch(url.toString(), { method: 'GET', headers });
      if (!response.ok) throw new Error(`Ошибка загрузки: ${response.status}`);

      const data = await response.json();
      setServices(data.data);
      setItemsCount(data.items);
      setError(null);

      const firstService = data.data?.[0];
      setNext(firstService?.next ?? null);

      // 2. Загрузка профиля
      const profileRes = await fetch('https://shmclient.hydra-service.online/shm/v1/user', { headers });
      if (profileRes.ok) {
        const profileData = await profileRes.json();
        const user = profileData.data?.[0];
        setLoginId(user?.login?.split('@')[0] || null);
        setBalance(user?.balance || null);
      }

      // 3. Загрузка VPN подписки
      if (firstService?.user_service_id) {
        const storageRes = await fetch(
          `https://shmclient.hydra-service.online/shm/v1/storage/manage/vpn_mrzb_${firstService.user_service_id}?format=json`,
          { headers }
        );
        if (storageRes.ok) {
          const storageData = await storageRes.json();
          setSubscriptionUrl(storageData.subscriptionUrl ?? null);
        }
      }

      // 4. Загрузка всех доступных услуг (order) и сохранение их стоимости
      const orderRes = await fetch('https://shmclient.hydra-service.online/shm/v1/service/order', { headers });
      if (orderRes.ok) {
        const orderData = await orderRes.json();
        const costs = Array.isArray(orderData.data)
          ? orderData.data.map((item: any) => ({
            service_id: item.service_id,
            cost: item.cost
          }))
          : [];
        setOrderCosts(costs);
      }

    } catch (err: any) {
      setError(err.message);
    } finally {
      if (initialLoading) setInitialLoading(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated || !sessionId) return;
    fetchAllData();
  }, [isAuthenticated, sessionId, reloadFlag]);

  useEffect(() => {
    if (!isAuthenticated || !sessionId) return;
    const interval = setInterval(() => {
      fetchAllData();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAuthenticated, sessionId]);

  if (initialLoading) return <LoadSpinner />;
  if (error) return <div className="text-red-600">Ошибка: {error}</div>;

  const handleOrderSuccess = () => {
    setReloadFlag(prev => !prev);
  };

  const firstService = services.length > 0 ? services[0] : null;
  const firstServiceStatus = firstService?.status?.toUpperCase();

  let bottomButtonText = '';
  if (itemsCount === 0) {
    bottomButtonText = 'Подключиться';
  } else if (firstServiceStatus === 'BLOCK') {
    bottomButtonText = 'Продлить 190 руб.';
  } else {
    bottomButtonText = 'Пополнить 190 руб.';
  }

  return (
    <StyledMain>
      <BackgroundVideo />
      <StyledLogoWrapper>

        <Logo />
      </StyledLogoWrapper>

      <StyledMenuWrapper>
        {itemsCount === 0 && (
          <OrderButton onOrderSuccess={handleOrderSuccess} />
        )}

        {itemsCount !== 0 &&
          services.map((service) => {
            const expireDate = service.expire
              ? new Date(service.expire).toLocaleDateString('ru-RU')
              : 'не указано';

            const status = service.status?.toUpperCase();
            const statusText =
              status === 'BLOCK'
                ? <StyledStatus>подписка истекла</StyledStatus>
                : status === 'ACTIVE'
                  ? <StyledStatus color='#07a12eff'>подписка активна</StyledStatus>
                  : <StyledStatus color='transparent'>неизвестный статус</StyledStatus>;

            let tariffLabel = 'Неизвестный тариф';
            if (service.service_id === 12) {
              tariffLabel = 'месяц';
            } else if (service.service_id === 13) {
              tariffLabel = 'Тестовый';
            }

            return (
              <StyledProfileWrapper key={service.user_service_id}>
                <StyledItemWrapper>
                  <p>Ваш ID:</p>
                  <p>{loginId}</p>
                </StyledItemWrapper>
                <StyledItemWrapper>
                  <p>Баланс:</p>
                  <p>{balance ?? 0} руб.</p>
                </StyledItemWrapper>
                <StyledItemWrapper>
                  <p>Тариф:</p>
                  <p>{tariffLabel}</p>
                </StyledItemWrapper>
                <StyledItemWrapper>
                  <p>Статус:</p>
                  <StyledDataWrapper>
                    <p>до {expireDate}</p>
                    <StyledStatus>{statusText}</StyledStatus>
                  </StyledDataWrapper>
                </StyledItemWrapper>
              </StyledProfileWrapper>
            );
          })}

        {itemsCount !== 0 && (
          <>
            {bottomButtonText && (
              <StyledButton onClick={() => console.log('Кнопка внизу')}>
                {bottomButtonText}
              </StyledButton>
            )}
            <InstallModalButton subscriptionUrl={subscriptionUrl} />
            <StyledButtonWrapper>
              <TariffModalButton />
              <SupportButton />

            </StyledButtonWrapper>
            <TermsModalButton />
          </>
        )}
      </StyledMenuWrapper>
    </StyledMain>
  );
};









const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 0px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease-out forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledMenuWrapper = styled.div`
  width: 330px;
  background-color: #1c1c1eb7;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 15px 15px;
`;

const StyledLogoWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const StyledProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 0px 10px 0px;
  border-bottom: 2px solid #747474ff;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;
  }
`;

const StyledItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5px;
`;

const StyledDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0px 0px;
`;

type StyledStatusPropsType = {
  color?: string;
};

const StyledStatus = styled.div<StyledStatusPropsType>`

  margin-top: 1px;
  margin-bottom: 0px;
  font-weight: 800;
  font-size: 12px;
  color: ${(props) => props.color || '#c12f2fff'};
`;
const StyledButtonWrapper = styled.div`
display: flex;
width: 100%;
gap: 10px;

`