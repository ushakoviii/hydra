import React, { useState } from 'react';
import { StyledButton } from './StyledButton';
import { keyframes, styled } from 'styled-components';

export const TermsModalButton: React.FC = () => {
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
      <StyledTermsButton onClick={() => setShowModal(true)}>
        Пользовательское соглашение
      </StyledTermsButton>

      {showModal && (


        <ModalOverlay className={isClosing ? 'closing' : ''}>
          
          <StyledButtonWrapper>
            <StyledButton onClick={handleClose} width='24px' height='24px' $margi='0px 0px 0px 0px'
              border='none' radius="50%">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </StyledButton>
          </StyledButtonWrapper>
          <StyledModalWrapper>


            <StyledText>
              Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между сервисом, предоставляемым Индивидуальным предпринимателем Ушаковым Иваном Ивановичем (далее — «Сервис», «Исполнитель») и физическим лицом, использующим Сервис (далее — «Пользователь»).<br />
              Перед использованием Сервиса, пожалуйста, внимательно ознакомьтесь с настоящим Соглашением. Используя Сервис, вы подтверждаете своё согласие с его условиями.
            </StyledText>
            <ol>
              <li>Общие положения</li>
              <ol>
                <li>сервис предоставляет доступ к виртуальной частной сети, позволяющей пользователю защищать своё интернет-соединение.</li>
                <li>сервис не является средством обхода законодательных ограничений и не предназначен для использования в противоправных целях.</li>
                <li>использование Сервиса регулируется законодательством Российской Федерации.</li>
              </ol>
              <li>Пользователь обязуется</li>
              <ol>
                <li>не использовать Сервис для распространения противоправного контента;</li>
                <li>не использовать Сервис для взлома, DDoS-атак, фишинга, распространения вредоносного ПО, а также других действий, нарушающих нормы законодательства РФ;</li>
                <li>соблюдать авторские права и права третьих лиц;</li>
                <li>предоставлять достоверную информацию при регистрации (если предусмотрена).</li>
              </ol>
              <li>Администрация в праве</li>
              <ol>
                <li>В одностороннем порядке ограничить доступ пользователя к Сервису в случае выявления нарушений настоящего Соглашения.</li>
                <li>передавать данные уполномоченным органам при наличии официального запроса, в соответствии с требованиями закона.</li>
              </ol>
              <li>Конфиденциальность и персональные данные</li>
              <ol>
                <li>обработка персональных данных осуществляется в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».</li>
                <li>cервис не передаёт данные третьим лицам, за исключением случаев, предусмотренных законодательством РФ.</li>
              </ol>
              <li>Ответственность</li>ы
              <ol>
                <li>пользователь несёт полную ответственность за любые действия, совершаемые через Сервис.</li>
                <li>в случае нарушений законодательства РФ, ответственность несёт исключительно пользователь, совершивший противоправные действия.</li>
              </ol>
              <li>Стоимость услуг и порядок оплаты</li>
              <ol>
                <li>сервис оказывает платные услуги на основании настоящего Соглашения.</li>
                <li>актуальные тарифы размещаются на официальных ресурсах Сервиса, включая веб-сайт и/или Telegram-бот. Ссылки на тарифы могут быть размещены в интерфейсе пользователя или предоставлены при запросе.</li>
                <li>оплата услуг означает согласие Пользователя с действующими тарифами и условиями.</li>
                <li>сервис оставляет за собой право изменять стоимость услуг в одностороннем порядке. Новые тарифы вступают в силу с момента их публикации, если не указано иное.</li>
                <li>возврат средств осуществляется только в случаях, предусмотренных законодательством РФ или по усмотрению Исполнителя в индивидуальном порядке.</li>
                <li>все расчёты производятся в российских рублях.</li>
              </ol>
              <li>Изменения и расторжение соглашения</li>
              <ol>
                <li>сервис вправе в любое время изменить условия настоящего Соглашения. Обновлённая версия публикуется на сайте и вступает в силу с момента публикации.</li>
                <li>пользователь вправе прекратить использование Сервиса в любое время, без объяснения причин.</li>
              </ol>
              <li>Заключительные положения</li>
              <ol>
                <li>настоящее Соглашение регулируется нормами права Российской Федерации.</li>
                <li>все споры, возникающие из настоящего Соглашения, подлежат разрешению в порядке, установленном действующим законодательством РФ.</li>
                <li>использование Сервиса означает безоговорочное согласие Пользователя со всеми условиями настоящего Соглашения.</li>
              </ol>
              <li>Реквизиты Исполнителя</li>
              <p>Индивидуальный предприниматель
                ФИО: Ушаков Иван Иванович<br />
                ИНН: 231222977273<br />
                ОГРНИП: 318237500069278<br />
                Телеграм: @ushakov_ii
              </p>
            </ol>
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
const slideUp = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(50px);
    opacity: 0;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2;
  padding: 15px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  animation: ${slideUp} 0.5s ease-out;

  &.closing {
    animation: ${slideDown} 0.5s ease-out forwards;
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
text-transform: none;
  font-weight: 400;
  font-size: 16px;
`;

const StyledButtonWrapper = styled.div`
  z-index: 4;
  position: sticky;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const StyledTermsButton = styled.button`
margin-top: 15px;
background-color: transparent;
color: #ffffff;
border: none;
color: #6d6d6dff;
text-transform: uppercase;
font-size: 12px;
font-weight: 700;

&:active {
    transform: translateY(1px);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
    color: #6ad9ff;
  }
`;
const StyledModalWrapper = styled.div`
position: relative;
max-height: 95%;
overflow-y: auto;
padding: 15px 15px;
background-color: #1c1c1eb7;
backdrop-filter: blur(10px);
width: 100%;
max-width: 330px;
border-radius: 10px 10px 10px 10px;
`;