import { FormattedMessage } from 'react-intl';

import LogoFooter from '../Logo/LogoFooter';
import BeGambleAware from '../../images/begambleaware.png';
import { FaTelegramPlane } from 'react-icons/fa';
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
      <TextWrapper>
        <Text>
          <FormattedMessage id="footer_text" />
        </Text>
        <a href="https://www.begambleaware.org/" target="_blank" rel="noreferrer">
          <BeGamble src={BeGambleAware} alt="BeGambleAware" />
        </a>
      </TextWrapper>
      <RightWrapper>
        <Telegram>
          <FormattedMessage id="telegram_title" />
        </Telegram>
        <TelegramLink href="/" target="_blank" rel="noreferrer">
          <FaTelegramPlane size={25} style={{ fill: '#ffffff' }} />
        </TelegramLink>
      </RightWrapper>
    </Wrapper>
  );
};

export default Footer;
