import Image from 'next/image';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { semiBold16 } from '../../../styles/typography';

type ImageProps = {
  proptype: 'image';
  className?: string;
  src?: string;
};

type MoreProfileProps = {
  proptype: 'more-profile';
  className?: string;
  count: number;
};

type Props = ImageProps | MoreProfileProps;

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

const MoreProfile = styled.span`
  ${semiBold16}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: ${colors.mainColor.navy};
  background-color: ${colors.grayScale.gray01};
`;

const Avatar = (props: Props) => {
  if (props.proptype === 'more-profile') {
    return <MoreProfile>+{props.count}</MoreProfile>;
  }

  const { className, src } = props;

  return (
    <Circle className={className}>
      {src && (
        <ProfileImg src={src} alt="avatar" layout="fill" objectFit="cover" />
      )}
    </Circle>
  );
};

export default Avatar;
