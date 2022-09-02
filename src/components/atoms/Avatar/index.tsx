import Image from 'next/image';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';

type Props = {
  className?: string;
  src?: string;
};

const Circle = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${colors.grayScale.gray03};
`;

const ProfileImg = styled(Image)`
  border-radius: 22px;
  object-fit: cover;
`;

const Avatar = ({ className, src }: Props) => {
  return (
    <Circle className={className}>
      {src && (
        <ProfileImg src={src} alt="avatar" layout="fill" objectFit="cover" />
      )}
    </Circle>
  );
};

export default Avatar;
