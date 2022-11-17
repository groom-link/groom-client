import styled from '@emotion/styled';

import Image from '../../utils/Image';

type Props = {
  className?: string;
  width?: string;
  height?: string;
  onClick: () => void;
};

const Button = styled.button<Pick<Props, 'width' | 'height'>>`
  width: ${({ width }) => (width ??= '374px')};
  max-width: 90%;
  height: ${({ height }) => (height ??= '56px')};
`;

const KakaoLoginButton = ({ onClick, width, height, className }: Props) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      aria-label="카카오 계정으로 로그인하기"
      {...{ width, height, className }}
    >
      <Image
        src="/images/kakao-login-button.png"
        alt="카카오 로그인 버튼"
        width="374"
        height="56"
      />
    </Button>
  );
};

export default KakaoLoginButton;
