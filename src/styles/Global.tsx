import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const globalStyle = css`
  ${emotionNormalize}
`;

const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};

export default GlobalStyle;
