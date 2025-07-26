import React, { useEffect, useState } from 'react';
import { useSession } from './SessionContext';
import { styled } from 'styled-components';

export const Auth: React.FC = () => {
  const { isAuthenticated, setSession, setLoading } = useSession();
  const [error, setError] = useState<string | null>(null);

  const loginData = { login: 'ushakov.ii@yandex.ru', password: 'ushakov.ii' };
  const doLogin = async (): Promise<boolean> => {
    try {
      const response = await fetch('https://shmclient.hydra-service.online/shm/user/auth.cgi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      if (response.status === 401) return false;
      if (!response.ok) throw new Error(`Ошибка авторизации: ${response.status}`);

      const data = await response.json();

      if (data.session_id) {
        setSession(data.session_id);
        return true;
      } else {
        throw new Error('Сервер не вернул session_id');
      }
    } catch (err: any) {
      setError(err.message);
      return false;
    }
  };

  const doRegister = async (): Promise<boolean> => {
    try {
      const response = await fetch('https://shmclient.hydra-service.online/shm/v1/user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) throw new Error(`Ошибка регистрации: ${response.status}`);
      return true;
    } catch (err: any) {
      setError(`Не удалось зарегистрироваться: ${err.message}`);
      return false;
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(false);
      return;
    }

    const authorize = async () => {
      setLoading(true);
      setError(null);

      const loggedIn = await doLogin();

      if (!loggedIn) {
        const registered = await doRegister();

        if (registered) {
          const loggedInAgain = await doLogin();
          if (!loggedInAgain) {
            setError('Не удалось авторизоваться после регистрации');
          }
        } else {
          setError('Регистрация не удалась');
        }
      }

      setLoading(false);
    };

    authorize();
  }, [isAuthenticated, setSession, setLoading]);

  return (
    <StyledAuth>
      {error && <div>Ошибка: {error}</div>}
    </StyledAuth>
  );
};

declare global {
  interface Window {  
    Telegram: any;
  }
}

// export const Auth: React.FC = () => {
//   const { isAuthenticated, setSession, setLoading } = useSession();
//   const [error, setError] = useState<string | null>(null);
//   const [loginData, setLoginData] = useState<{ login: string; password: string } | null>(null);

//   // Подготавливаем login на основе Telegram ID
//   useEffect(() => {
//     const tgUser = window?.Telegram?.WebApp?.initDataUnsafe?.user;
//     if (tgUser && tgUser.id) {
//       const login = `${tgUser.id}@mail.ru`;
//       setLoginData({ login, password: 'admin12345' });
//     } else {
//       setError('Не удалось получить данные Telegram пользователя');
//     }
//   }, []);

//   const doLogin = async (): Promise<boolean> => {
//     if (!loginData) return false;

//     try {
//       const response = await fetch('https://shmclient.hydra-service.online/shm/user/auth.cgi', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(loginData),
//       });

//       if (response.status === 401) return false;
//       if (!response.ok) throw new Error(`Ошибка авторизации: ${response.status}`);

//       const data = await response.json();

//       if (data.session_id) {
//         setSession(data.session_id);
//         return true;
//       } else {
//         throw new Error('Сервер не вернул session_id');
//       }
//     } catch (err: any) {
//       setError(err.message);
//       return false;
//     }
//   };

//   const doRegister = async (): Promise<boolean> => {
//     if (!loginData) return false;

//     try {
//       const response = await fetch('https://shmclient.hydra-service.online/shm/v1/user', {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(loginData),
//       });

//       if (!response.ok) throw new Error(`Ошибка регистрации: ${response.status}`);
//       return true;
//     } catch (err: any) {
//       setError(`Не удалось зарегистрироваться: ${err.message}`);
//       return false;
//     }
//   };

//   useEffect(() => {
//     if (!loginData) return;
//     if (isAuthenticated) {
//       setLoading(false);
//       return;
//     }

//     const authorize = async () => {
//       setLoading(true);
//       setError(null);

//       const loggedIn = await doLogin();

//       if (!loggedIn) {
//         const registered = await doRegister();

//         if (registered) {
//           const loggedInAgain = await doLogin();
//           if (!loggedInAgain) {
//             setError('Не удалось авторизоваться после регистрации');
//           }
//         } else {
//           setError('Регистрация не удалась');
//         }
//       }

//       setLoading(false);
//     };

//     authorize();
//   }, [loginData, isAuthenticated, setSession, setLoading]);

//   return (
//     <StyledAuth>
//       {error && <div>Ошибка: {error}</div>}
//     </StyledAuth>
//   );
// };

const StyledAuth = styled.div`
  overflow: hidden;
`;
