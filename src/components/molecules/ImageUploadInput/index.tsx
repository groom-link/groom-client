import { ChangeEventHandler } from 'react';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { FilledCancel, Upload } from '../../atoms/icons';

type ImageUploadInputProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const UploadIcon = styled(Upload)`
  height: 44px;
`;

const UploadDiscription = styled.span`
  margin-top: 4px;
  color: ${colors.grayScale.gray03};
`;

const ProfileImageInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  background-color: ${colors.grayScale.gray01};
  cursor: pointer;
`;

const ProfileImageInput = styled.input`
  display: none;
`;

const ImageInput = ({ onChange }: ImageUploadInputProps) => {
  return (
    <>
      <ProfileImageInputLabel htmlFor="image-input">
        <UploadIcon width="44px" color={colors.grayScale.gray03} />
        <UploadDiscription>모임 대표 사진을 업로드해보세요.</UploadDiscription>
      </ProfileImageInputLabel>
      <ProfileImageInput
        type="file"
        id="image-input"
        value=""
        accept="image/*"
        onChange={onChange}
      />
    </>
  );
};

type ThumbnailImageContainer = {
  src: string;
  onClick: () => void;
};

const ImageContainer = styled.div`
  position: relative;
  height: 250px;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const DeleteImageButton = styled.button`
  position: absolute;
  top: 15px;
  right: 13px;
`;

const ThumbnailImageContainer = ({ src, onClick }: ThumbnailImageContainer) => {
  return (
    <ImageContainer>
      <ThumbnailImage alt="모임 프로필" src={src} />
      <DeleteImageButton onClick={onClick}>
        <FilledCancel />
      </DeleteImageButton>
    </ImageContainer>
  );
};

type Props = {
  profileImage: string;
  onClickDeleteImage: () => void;
  onChangeImageFile: ChangeEventHandler<HTMLInputElement>;
};

const ImageUploadInput = ({
  profileImage,
  onChangeImageFile,
  onClickDeleteImage
}: Props) => {
  return profileImage ? (
    <ThumbnailImageContainer src={profileImage} onClick={onClickDeleteImage} />
  ) : (
    <ImageInput onChange={onChangeImageFile} />
  );
};

export default ImageUploadInput;
