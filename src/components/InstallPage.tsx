import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { StyledTitle } from "./StyledTitle";
import { useSession } from "./SessionContext";
import { Icon } from "./Icon";


type InstallPageProps = {
    subscriptionUrl?: string | null;
};
export function InstallPage({ subscriptionUrl }: InstallPageProps) {
    const { sessionId } = useSession();
    const [error, setError] = useState<string | null>(null);
    const [deviceType, setDeviceType] = useState<string>("unknown");

    useEffect(() => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (/android/.test(userAgent)) {
            setDeviceType("android");
        } else if (/iphone|ipad|ipod/.test(userAgent)) {
            setDeviceType("ios");
        } else if (/macintosh|mac os x/.test(userAgent)) {
            setDeviceType("macos");
        } else if (/windows/.test(userAgent)) {
            setDeviceType("windows");
        } else {
            setDeviceType("unknown");
        }
    }, []);
    return (
        <div>
            <StyledTitle>Установка и настройка</StyledTitle>

            <StyledDeviceWrapper>
                <StyledIconWrapper>
                    <Icon id='device' width='20px' height='20px' />
                    <StyledTitleSection>Ваше устройство</StyledTitleSection>
                </StyledIconWrapper>
                <DeviceSelect value={deviceType} onChange={(e) => setDeviceType(e.target.value)}>
                    <option value="ios">iOS</option>
                    <option value="android">Android</option>
                    <option value="macos">macOS</option>
                    <option value="windows">Windows</option>
                </DeviceSelect>
            </StyledDeviceWrapper>

            {(deviceType === "ios" || deviceType === "android" || deviceType === "windows" || deviceType === "macos") && (
                <div>
                    <StyledInstallWrapper>
                        <StyledIconWrapper>
                            <Icon id='download' width='20px' height='20px' />
                            <StyledTitleSection>Установите приложение</StyledTitleSection>
                        </StyledIconWrapper>
                        <StyledInstallText>
                            Откройте страницу в App Store и установите приложение. Запустите его,
                            в окне разрешения VPN-конфигурации нажмите Allow и введите свой пароль.
                        </StyledInstallText>
                        <StyledLink href="https://apps.apple.com/ru/app/streisand/id6450534064" target="_blank">
                            Установить
                        </StyledLink>
                    </StyledInstallWrapper>

                    <StyledInstallWrapper>
                        <StyledIconWrapper>
                            <Icon id='import' width='20px' height='20px' />
                            <StyledTitleSection>Добавьте подписку</StyledTitleSection>
                        </StyledIconWrapper>
                        <StyledInstallText>
                            Нажмите кнопку ниже — приложение откроется, и подписка добавится автоматически.
                        </StyledInstallText>
                        {subscriptionUrl ? (
                            <StyledLink href={`streisand://import/${subscriptionUrl}`} target="_blank">
                               Добавить подписку
                            </StyledLink>
                        ) : (
                            <StyledLink>Загрузка ссылки...<LoadSpinnerlink /></StyledLink>
                        )}
                    </StyledInstallWrapper>

                    <StyledInstallWrapper>
                        <StyledIconWrapper>
                            <Icon id='location' width='20px' height='20px' />
                            <StyledTitleSection>Подключитесь</StyledTitleSection>
                        </StyledIconWrapper>
                        <StyledInstallText>
                            В главном разsделе найдите подписку "HYDRA VPN", выберите локацию из списка и затем нажмите
                            большую кнопку включения в центре для подключения к VPN.
                        </StyledInstallText>
                    </StyledInstallWrapper>
                </div>
            )}
        </div>
    );
}


// ——— СТИЛИ ———

const StyledTitleSection = styled.h3`
    font-size: 14px; 
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #63d7fd;
  border-radius: 10px;
  background-color: #6adaff0c;
  color: #6ad9ff;
  width: 100%;
  height: 50px;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 16px;
  text-decoration: none;
`;

const DeviceSelect = styled.select`
  cursor: pointer;
  border: 1px solid #6ad9ff;
  border-radius: 10px;
  background-color: #6adaff0c;
  color: #6ad9ff;
  width: 100px;
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 16px;
  
  option {
    background-color: transparent;
    font-weight: 800;
    color: #6ad9ff;
  }
`;
const StyledDeviceWrapper = styled.div`
margin-top: 20px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
const StyledInstallWrapper = styled.div`
margin-top: 25px;
`
const StyledInstallText = styled.p`
margin: 10px 0px;
font-weight: 700;
text-transform: none;
color: #8b949e;
`
const StyledIconWrapper = styled.div`
display: flex;
align-items: center;
gap: 5px;
`



function LoadSpinnerlink() {
    return (
        <LoaderWrapperLink>
            <SpinnerLink />
        </LoaderWrapperLink>
    );
}
const LoaderWrapperLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SpinnerLink = styled.div`
  border: 4px solid #6ad9ff;
  border-top: 4px solid white;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;