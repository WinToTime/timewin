import { Wrapper, Win, To, Time, ExclamationMark } from './LogoFooter.styled';

const LogoFooter = () => {
  return (
    <Wrapper>
      <Win>Win</Win>
      <To>To</To>
      <Time>
        Time<ExclamationMark>!</ExclamationMark>
      </Time>
    </Wrapper>
  );
};

export default LogoFooter;
