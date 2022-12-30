import { css } from 'styled-components';

export const IR = css`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const slEllipsis = css`
  display: block;
  white-space: nowrap;
  overflow: hidden;

  text-overflow: ellipsis;
`;

export const multiEllipsis = css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const loadingAnimation = css`
  // background: linear-gradient(
  //   120deg,
  //   #e5e5e5 30%,
  //   #f0f0f0 38%,
  //   #f0f0f0 40%,
  //   #e5e5e5 48%
  // );
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: loading 1.2s infinite;

  @keyframes loading {
    100% {
      background-position: -100% 0;
    }
  }
`;
