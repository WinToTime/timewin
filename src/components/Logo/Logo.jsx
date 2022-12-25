import { Wrapper, Time, To, Win, ExclamationMark } from './Logo.styled';

const Logo = () => {
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

export default Logo;
