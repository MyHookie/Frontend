import styled, { keyframes } from 'styled-components';

const bounceIn = keyframes`
0% {
  transform: scale(0.2);
}
50% {
  transform: scale(1.1);
}
70% {
  transform: scale(0.9);
}
100% {
  transform: scale(1);
}
`;

export const Container = styled.div`
  width: 390px;
  height: 100vh;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const SplashImage = styled.img`
  display: block;
  width: 30rem;
  animation: ${bounceIn} 1s;
  transform: scale(1);
  transition: all 0.4s cubic-bezier(0.8, 1.8, 0.75, 0.75);
`;
