import { Wrapper, Time, To, Win, ExclamationMark } from './Logo.styled';

const Logo = () => {
  return (
    <Wrapper>
      <Time>Time</Time>
      <To>To</To>
      <Win>
        Win<ExclamationMark>!</ExclamationMark>
      </Win>
    </Wrapper>
  );
};

export default Logo;
