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
  ContactTitle,
  ContactList,
  ContactItem,
  ContactSvg,
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
      <RightWrapper>
        <address>
          <ContactTitle>
            <FormattedMessage id="contacts" defaultMessage="Наші контакти:" />
          </ContactTitle>

          <ContactList>
            <ContactItem>
              <a
                href="https://t.me/wintotime"
                target="_blank"
                rel="noreferrer"
                aria-label={<FormattedMessage id="telegram_title" defaultMessage="Наш Телеграм" />}
              >
                <ContactSvg width="40" height="40">
                  <use href={sprite + '#icon-telegram'} />
                </ContactSvg>
              </a>
            </ContactItem>
            <ContactItem>
              <a
                href="mailto:support@wintotime.com"
                aria-label={<FormattedMessage id="mail_title" defaultMessage="Наша пошта" />}
              >
                <ContactSvg width="40" height="40">
                  <use href={sprite + '#icon-mail'} />
                </ContactSvg>
              </a>
            </ContactItem>
            <ContactItem>
              <a
                href="https://www.facebook.com/wintotimecom"
                target="_blank"
                rel="noreferrer"
                aria-label={<FormattedMessage id="facebook_title" defaultMessage="Наш Facebook" />}
              >
                <ContactSvg width="40" height="40">
                  <use href={sprite + '#icon-facebook'} />
                </ContactSvg>
              </a>
            </ContactItem>
            <ContactItem>
              <a
                href="https://www.instagram.com/wintotime/"
                target="_blank"
                rel="noreferrer"
                aria-label={
                  <FormattedMessage id="instagram_title" defaultMessage="Наш Instagram" />
                }
              >
                <ContactSvg width="40" height="40">
                  <use href={sprite + '#icon-instagram'} />
                </ContactSvg>
              </a>
            </ContactItem>
          </ContactList>
        </address>
      </RightWrapper>
    </Wrapper>
  );
};

export default Footer;
