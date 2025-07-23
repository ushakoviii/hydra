import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { StyledTitle } from "./StyledTitle";
import { useSession } from "./SessionContext";
import { Icon } from "./Icon";
import { StyledButton } from "./StyledButton";
import { StyledTitleSection } from "./StyledTitleSection";

const InstallLinkIos = "https://apps.apple.com/ru/app/happ-proxy-utility-plus/id6746188973"
const InstallLinkWindows = "https://github.com/Happ-proxy/happ-desktop/releases/latest/download/setup-Happ.x86.exe"
const InstallLinkMacOs = "https://apps.apple.com/ru/app/happ-proxy-utility-plus/id6746188973"

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
            <StyledPsevdo>
                <StyledDeviceWrapper>
                    <StyledDeviceIconWrapper>
                        <StyledIconWrapper>
                            <Icon id='device' width='25px' height='25px' fill="#ffffff" />

                        </StyledIconWrapper>
                        <StyledTitleSection>Ваше устройство</StyledTitleSection>
                    </StyledDeviceIconWrapper>
                    <DeviceSelect value={deviceType} onChange={(e) => setDeviceType(e.target.value)}>
                        <option value="ios">iOS</option>
                        <option value="android">Android</option>
                        <option value="macos_apple_m">macOS</option>
                        <option value="windows">Windows</option>
                    </DeviceSelect>
                </StyledDeviceWrapper>

                {(deviceType === "ios") && (
                    <div>
                        <StyledInstallWrapper>
                            <StyledIconWrapper>
                                <Icon id='download' width='25px' height='25px' fill="#ffffff" />
                            </StyledIconWrapper>

                            <StyledTitleWrapper>
                                <StyledTitleSection>Установите приложение</StyledTitleSection>
                                <StyledInstallText>
                                    Откройте страницу в App Store и установите приложение. Запустите его,
                                    в окне разрешения VPN-конфигурации нажмите Allow и введите свой пароль.
                                </StyledInstallText>
                                <StyledLink href="{InstallLinkIos}" target="_blank">
                                    Установить
                                </StyledLink>
                            </StyledTitleWrapper>

                        </StyledInstallWrapper>

                        {/* <StyledInstallWrapper>
                            <StyledIconWrapper>
                                <Icon id='import' width='25px' height='25px' fill="#ffffff" />
                            </StyledIconWrapper>
                            <StyledTitleWrapper>

                                <StyledTitleSection>Добавьте подписку</StyledTitleSection>
                                <StyledInstallText>
                                    Нажмите кнопку ниже — приложение откроется, и подписка добавится автоматически.
                                </StyledInstallText>
                                <StyledLink href={`happ://import/${subscriptionUrl}`} target="_blank">
                                    Добавить подписку
                                </StyledLink>
                            </StyledTitleWrapper>
                        </StyledInstallWrapper> */}
                        <StyledInstallWrapper>
                            <StyledIconWrapper>
                                <Icon id='import' width='25px' height='25px' fill="#ffffff" />
                            </StyledIconWrapper>
                            <StyledTitleWrapper>

                                <StyledTitleSection>Добавьте подписку</StyledTitleSection>
                                <StyledInstallText>
                                    Нажмите на иконку справа от ссылки, и вы скопируете ссылку подписки. Перейдите в приложение Happ и нажмите сверху иконку "+" и выберите из меню "Вставить из буфера обмена"
                                </StyledInstallText>
                                <StyledScrollWrapper>
                                    <StyledSkroll>
                                        <StyledLinkScroll>
                                            {subscriptionUrl}
                                        </StyledLinkScroll>
                                    </StyledSkroll>
                                    <StyledButton border="none" width="25px" height="25px" $margi="0px" onClick={() => {
                                        if (subscriptionUrl) {
                                            navigator.clipboard.writeText(subscriptionUrl)
                                        }
                                    }}>
                                        <Icon id='copy' width='25px' height='25px' fill="#6ad9ff" />
                                    </StyledButton>


                                </StyledScrollWrapper>

                            </StyledTitleWrapper>
                        </StyledInstallWrapper>

                        <StyledInstallWrapper>
                            <StyledIconWrapper>
                                <Icon id='location' width='25px' height='25px' fill="#ffffff" />
                            </StyledIconWrapper>

                            <StyledTitleWrapper>
                                <StyledTitleSection>Подключитесь</StyledTitleSection>
                                <StyledInstallText>
                                    В главном разделе найдите подписку "HYDRA VPN", выберите локацию из списка и затем нажмите
                                    большую кнопку включения в центре для подключения к VPN.
                                </StyledInstallText>
                            </StyledTitleWrapper>
                        </StyledInstallWrapper>
                    </div>
                )}
                {(deviceType === "windows") && (
                    <div>
                        <StyledInstallWrapper>
                            <StyledIconWrapper>
                                <Icon id='download' width='25px' height='25px' fill="#ffffff" />
                            </StyledIconWrapper>

                            <StyledTitleWrapper>
                                <StyledTitleSection>Установите приложение</StyledTitleSection>
                                <StyledInstallText>
                                    Перейдите по ссылке и скачате приложение. Далее установите и откройте приложение. После чего вернитесь в инструкцию для дальнейших действий
                                </StyledInstallText>
                                <StyledScrollWrapper>
                                    <StyledSkroll>
                                        <StyledLinkScroll>
                                            {InstallLinkWindows}
                                        </StyledLinkScroll>
                                    </StyledSkroll>
                                    <StyledButton border="none" width="25px" height="25px" $margi="0px" onClick={() => {
                                        if (InstallLinkWindows) {
                                            navigator.clipboard.writeText(InstallLinkWindows)
                                        }
                                    }}>
                                        <Icon id='copy' width='25px' height='25px' fill="#6ad9ff" />
                                    </StyledButton>


                                </StyledScrollWrapper>

                            </StyledTitleWrapper>

                        </StyledInstallWrapper>

                        <StyledInstallWrapper>
                            <StyledIconWrapper>
                                <Icon id='import' width='25px' height='25px' fill="#ffffff" />
                            </StyledIconWrapper>
                            <StyledTitleWrapper>

                                <StyledTitleSection>Скопируйте и добавьте подписку</StyledTitleSection>
                                <StyledInstallText>
                                    Нажмите кнопку ниже и скопируется подписка. Далее перейдите в приложение HAPP и вставьте подписку, после чего нажмите "Поехалиы"
                                </StyledInstallText>
                                <StyledScrollWrapper>
                                    <StyledSkroll>
                                        <StyledLinkScroll>
                                            {subscriptionUrl}
                                        </StyledLinkScroll>
                                    </StyledSkroll>
                                    <StyledButton border="none" width="25px" height="25px" $margi="0px" onClick={() => {
                                        if (subscriptionUrl) {
                                            navigator.clipboard.writeText(subscriptionUrl)
                                        }
                                    }}>
                                        <Icon id='copy' width='25px' height='25px' fill="#6ad9ff" />
                                    </StyledButton>


                                </StyledScrollWrapper>
                            </StyledTitleWrapper>
                        </StyledInstallWrapper>

                        <StyledInstallWrapper>
                            <StyledIconWrapper>
                                <Icon id='location' width='25px' height='25px' fill="#ffffff" />
                            </StyledIconWrapper>

                            <StyledTitleWrapper>
                                <StyledTitleSection>Подключитесь</StyledTitleSection>
                                <StyledInstallText>
                                    В разделе серверы найдите подписку "HYDRA VPN", выберите локацию из списка и затем нажмите
                                    большую кнопку включения в центре для подключения к VPN.
                                </StyledInstallText>
                            </StyledTitleWrapper>
                        </StyledInstallWrapper>
                    </div>
                )}
                {(deviceType === "android") && (
                    <div>
                        <StyledInstallWrapper>
                            <StyledIconWrapper>
                                <Icon id='download' width='25px' height='25px' fill="#ffffff" />
                            </StyledIconWrapper>

                            <StyledTitleWrapper>
                                <StyledTitleSection>Установите приложение</StyledTitleSection>
                                <StyledInstallText>
                                    Откройте страницу в Google Play и установите приложение. Запустите его,
                                    в окне разрешения VPN-конфигурации нажмите Allow и введите свой пароль.
                                </StyledInstallText>
                                <StyledLink href="https://play.google.com/store/apps/details?id=com.happproxy" target="_blank">
                                    Установить
                                </StyledLink>
                            </StyledTitleWrapper>

                        </StyledInstallWrapper>

                        {/* <StyledInstallWrapper>
                            <StyledIconWrapper>
                                <Icon id='import' width='25px' height='25px' fill="#ffffff" />
                            </StyledIconWrapper>
                            <StyledTitleWrapper>

                                <StyledTitleSection>Добавьте подписку</StyledTitleSection>
                                <StyledInstallText>
                                    Нажмите кнопку ниже — приложение откроется, и подписка добавится автоматически.
                                </StyledInstallText>
                                <StyledLink href={`happ://import/${subscriptionUrl}`} target="_blank">
                                    Добавить подписку
                                </StyledLink>
                            </StyledTitleWrapper>
                        </StyledInstallWrapper> */}
                        <StyledInstallWrapper>
                            <StyledIconWrapper>
                                <Icon id='import' width='25px' height='25px' fill="#ffffff" />
                            </StyledIconWrapper>
                            <StyledTitleWrapper>

                                <StyledTitleSection>Добавьте подписку</StyledTitleSection>
                                <StyledInstallText>
                                    Нажмите на иконку справа от ссылки, и вы скопируете ссылку подписки. Перейдите в приложение Happ и нажмите сверху иконку "+" и выберите из меню "Вставить из буфера обмена"
                                </StyledInstallText>
                                <StyledScrollWrapper>
                                    <StyledSkroll>
                                        <StyledLinkScroll>
                                            {subscriptionUrl}
                                        </StyledLinkScroll>
                                    </StyledSkroll>
                                    <StyledButton border="none" width="25px" height="25px" $margi="0px" onClick={() => {
                                        if (subscriptionUrl) {
                                            navigator.clipboard.writeText(subscriptionUrl)
                                        }
                                    }}>
                                        <Icon id='copy' width='25px' height='25px' fill="#6ad9ff" />
                                    </StyledButton>


                                </StyledScrollWrapper>

                            </StyledTitleWrapper>
                        </StyledInstallWrapper>
                        <StyledInstallWrapper>
                            <StyledIconWrapper>
                                <Icon id='location' width='25px' height='25px' fill="#ffffff" />
                            </StyledIconWrapper>

                            <StyledTitleWrapper>
                                <StyledTitleSection>Подключитесь</StyledTitleSection>
                                <StyledInstallText>
                                    В главном разделе найдите подписку "HYDRA VPN", выберите локацию из списка и затем нажмите
                                    большую кнопку включения в центре для подключения к VPN.
                                </StyledInstallText>
                            </StyledTitleWrapper>
                        </StyledInstallWrapper>
                    </div>
                )}
                {(deviceType === "macos_apple_m") && (
                    <div>
                        <StyledInstallWrapper>
                            <StyledIconWrapper>
                                <Icon id='download' width='25px' height='25px' fill="#ffffff" />
                            </StyledIconWrapper>

                            <StyledTitleWrapper>
                                <StyledTitleSection>Установите приложение</StyledTitleSection>
                                <StyledInstallText>
                                    Перейдите по ссылке и скачате приложение. Далее установите и откройте приложение. После чего вернитесь в инструкцию для дальнейших действий
                                </StyledInstallText>
                                <StyledScrollWrapper>
                                    <StyledSkroll>
                                        <StyledLinkScroll>
                                            {InstallLinkMacOs}
                                        </StyledLinkScroll>
                                    </StyledSkroll>
                                    <StyledButton border="none" width="25px" height="25px" $margi="0px" onClick={() => {
                                        if (InstallLinkMacOs) {
                                            navigator.clipboard.writeText(InstallLinkMacOs)
                                        }
                                    }}>
                                        <Icon id='copy' width='25px' height='25px' fill="#6ad9ff" />
                                    </StyledButton>


                                </StyledScrollWrapper>

                            </StyledTitleWrapper>

                        </StyledInstallWrapper>

                        <StyledInstallWrapper>
                            <StyledIconWrapper>
                                <Icon id='import' width='25px' height='25px' fill="#ffffff" />
                            </StyledIconWrapper>
                            <StyledTitleWrapper>

                                <StyledTitleSection>Скопируйте и добавьте подписку</StyledTitleSection>
                                <StyledInstallText>
                                    Нажмите кнопку ниже и скопируется подписка. Далее перейдите в приложение HAPP и вставьте подписку, после чего нажмите "Поехалиы"
                                </StyledInstallText>
                                <StyledScrollWrapper>
                                    <StyledSkroll>
                                        <StyledLinkScroll>
                                            {subscriptionUrl}
                                        </StyledLinkScroll>
                                    </StyledSkroll>
                                    <StyledButton border="none" width="25px" height="25px" $margi="0px" onClick={() => {
                                        if (subscriptionUrl) {
                                            navigator.clipboard.writeText(subscriptionUrl)
                                        }
                                    }}>
                                        <Icon id='copy' width='25px' height='25px' fill="#6ad9ff" />
                                    </StyledButton>


                                </StyledScrollWrapper>
                            </StyledTitleWrapper>
                        </StyledInstallWrapper>

                        <StyledInstallWrapper>
                            <StyledIconWrapper>
                                <Icon id='location' width='25px' height='25px' fill="#ffffff" />
                            </StyledIconWrapper>

                            <StyledTitleWrapper>
                                <StyledTitleSection>Подключитесь</StyledTitleSection>
                                <StyledInstallText>
                                    В разделе серверы найдите подписку "HYDRA VPN", выберите локацию из списка и затем нажмите
                                    большую кнопку включения в центре для подключения к VPN.
                                </StyledInstallText>
                            </StyledTitleWrapper>
                        </StyledInstallWrapper>
                    </div>
                )}
            </StyledPsevdo>

        </div>
    );
}


// ——— СТИЛИ ———
const StyledModalOverlay = styled.div`
max-width: 330px;
`

const StyledPsevdo = styled.div`

`


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
  height: 40px;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 14px;
  text-decoration: none;
   &:active {
    transform: translateY(2px);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }
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
display: flex;
gap: 5px;
`
const StyledTitleWrapper = styled.div`
`
const StyledInstallText = styled.p`
margin: 5px 0px 10px 0px;
font-weight: 700;
text-transform: none;
color: #8b949e;
`
const StyledDeviceIconWrapper = styled.div`
display: flex;
align-items: center;
gap: 5px;
`
const StyledIconWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
background-color: #21a3ceff;
flex-shrink: 0;
width: 30px;
height: 30px;
`


const StyledSkroll = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
  background-color: #6adaff0c;
  color: #6ad9ff;
  width: 100%;
  max-width: 220px;
  height: 40px;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 14px;

   -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
const StyledLinkScroll = styled.p`
  display: inline-block;
  flex-shrink: 0;
  padding: 0 10px;
  color: #6ad9ff;
  white-space: nowrap;
  margin: 0; 
`
const StyledScrollWrapper = styled.div`
display: flex;
align-items: center;
width: 100%;
justify-content: space-between;
`

const StyledCopyWrapper = styled.div`
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
border: 2px solid #63d7fd;
`

