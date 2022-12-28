import { FormattedMessage } from 'react-intl';

import LogoFooter from '../Logo/LogoFooter';
import BeGambleAware from '../../images/begambleaware.png';
import sprite from '../../images/sprite.svg';
import {
  Wrapper,
  LogoWrapper,
  TextWrapper,
  Text,
  RightWrapper,
  Telegram,
  TelegramLink,
  BeGamble,
} from './Footer.styled';

const Footer = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoFooter />
      </LogoWrapper>
      <TextWrapper data-nosnippet>
        <Text>
          <FormattedMessage
            id="footer_text"
            defaultMessage="Інформаційний ресурс Win to time не проводить ігри на реальні та/або віртуальні гроші, також сайт не приймає в жодній формі оплату ставок та/інших платежів, які пов'язані/можуть бути пов'язані з азартними іграми, букмекерами чи тоталізаторами. Будь-які матеріали на інформаційному ресурсі Win to time публікуються виключно з інформаційною метою. Участь в азартних іграх може викликати ігрову залежність. Дотримуйтесь правил (принципів) відповідальної гри. При появі перших ознак залежності негайно зверніться до фахівця. Пам'ятайте, що участь в азартних іграх не може бути джерелом доходів чи альтернативою роботі."
          />
        </Text>
        <a
          href="https://www.begambleaware.org/"
          target="_blank"
          rel="noreferrer"
          aria-label="BeGambleAware"
        >
          <BeGamble src={BeGambleAware} alt="BeGambleAware" width="150" height="50" />
        </a>
      </TextWrapper>
      <RightWrapper data-nosnippet>
        <Telegram>
          <FormattedMessage id="telegram_title" defaultMessage="Наш Телеграм" />
        </Telegram>
        <TelegramLink
          href="https://t.me/wintotime"
          target="_blank"
          rel="noreferrer"
          aria-label={<FormattedMessage id="telegram_title" defaultMessage="Наш Телеграм" />}
        >
          <svg width="40" height="40">
            <use href={sprite + '#icon-telegram'} />
          </svg>
        </TelegramLink>
      </RightWrapper>
    </Wrapper>
  );
};

export default Footer;
