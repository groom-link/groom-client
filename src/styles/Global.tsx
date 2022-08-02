import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import { fontFace } from './font';

const globalStyle = css`
  ${emotionNormalize}
  ${fontFace}
  
  * {
    font-family: 'Pretendard Variable', serif, sans-serif;
  }
`;

const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};

export default GlobalStyle;
