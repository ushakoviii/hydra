import React, { useEffect } from 'react';
import { SessionProvider } from './components/SessionContext';
import { Auth } from './components/Auth';
import { ServiceList } from './components/ServiceList';
import { Theme } from './components/Theme';

const App: React.FC = () => {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (tg) {
      tg.ready(); // Обязательная инициализация Telegram Mini App

      const theme = tg.themeParams;

      // Устанавливаем цвета из темы
      tg.setHeaderColor(Theme.colors.mainBgColor);
    }
  }, []);

  return (
    <SessionProvider>
      <Auth />
      <ServiceList />
    </SessionProvider>
  );
};

export default App;