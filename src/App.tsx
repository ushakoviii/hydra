import React from 'react';
import { SessionProvider } from './components/SessionContext';
import { Auth } from './components/Auth';
import { ServiceList } from './components/ServiceList';


const App: React.FC = () => {
  return (
    <SessionProvider>
        <Auth />
        <ServiceList />
    </SessionProvider>
  );
};

export default App;