import { Wrapper, To, ExclamationMark } from './LogoFooter.styled';

const LogoFooter = () => {
  return (
    <Wrapper>
      <span>Time</span>
      <To>To</To>
      <span>
        Win<ExclamationMark>!</ExclamationMark>
      </span>
    </Wrapper>
  );
};

export default LogoFooter;
