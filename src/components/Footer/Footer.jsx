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
          Информационный ресурс Time to win не проводит игры на реальные и/или виртуальные деньги,
          также сайт не принимает ни в какой форме оплату ставок и/иных платежей, которые
          связаны/могут быть связаны с азартными играми, букмекерами или тотализаторами. Любые
          материалы на информационном ресурсе Time to win публикуются исключительно в информационных
          целях. Участие в азартных играх может вызвать игровую зависимость. Соблюдайте правила
          (принципы) ответственной игры. При появлении первых признаков зависимости незамедлительно
          обратитесь к специалисту. Помните, что участие в азартных играх не может быть источником
          доходов или альтернативой работе.
        </Text>
        <a href="https://www.begambleaware.org/" target="_blank" rel="noreferrer">
          <BeGamble src={BeGambleAware} alt="BeGambleAware" />
        </a>
      </TextWrapper>
      <RightWrapper>
        <Telegram>Наш Телеграм</Telegram>
        <TelegramLink href="/" target="_blank" rel="noreferrer">
          <FaTelegramPlane size={25} style={{ fill: '#ffffff' }} />
        </TelegramLink>
      </RightWrapper>
    </Wrapper>
  );
};

export default Footer;
