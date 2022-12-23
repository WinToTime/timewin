import styled from 'styled-components';
import LatoRegular from '../../assets/fonts/Lato-Regular.ttf';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  font-size: 90px;
  font-family: ${LatoRegular};
  text-transform: uppercase;
  line-height: 0.55;

  @media screen and (min-width: 768px) {
    font-size: 128px;
  }
`;

// export const LogoFont = styled.span`
//   font-size: 90px;
//   font-family: ${LatoRegular};
//   text-transform: uppercase;
//   line-height: 0.55;

//   @media screen and (min-width: 768px) {
//     font-size: 128px;
//   }
// `;

export const Time = styled.span`
  animation: showOpacity 0.4s;
  animation-fill-mode: forwards;
  animation-delay: 0s;
  opacity: 0;

  @keyframes showOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const To = styled.span`
  color: #ff7c0a;
  z-index: 1;
  opacity: 0;

  animation: showOpacity 0.4s;
  animation-fill-mode: forwards;
  animation-delay: 0.8s;

  @keyframes showOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Win = styled.span`
  animation: showOpacity 0.4s;
  animation-fill-mode: forwards;
  animation-delay: 0.4s;
  opacity: 0;

  @keyframes showOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const ExclamationMark = styled.span`
  color: #ff7c0a;

  animation: showOpacity 0.4s;
  animation-fill-mode: forwards;
  animation-delay: 1.2s;
  opacity: 0;

  @keyframes showOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
