import { CircleDiv, ProfileImg } from './styled';

type Props = {
  src?: string;
};

const Avatar = ({ src }: Props) => {
  return (
    <CircleDiv>
      {src && <ProfileImg src={src} alt="avatar" layout="fill" />}
    </CircleDiv>
  );
};

export default Avatar;
