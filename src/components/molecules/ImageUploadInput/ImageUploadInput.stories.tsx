import { ChangeEventHandler, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import readFileAsURL from '../../../utils/readFileAsURL';
import ImageUploadInput from './index';

export default {
  title: 'molecules/ImageUploadInput',
  component: ImageUploadInput
} as ComponentMeta<typeof ImageUploadInput>;

export const Primary: ComponentStory<typeof ImageUploadInput> = () => {
  const [profileImage, setProfileImage] = useState('');

  const handleChangeImageFile: ChangeEventHandler<HTMLInputElement> = ({
    target: { files }
  }) => {
    if (!files) return;
    const file = files[0];
    readFileAsURL(file, (url) => setProfileImage(url));
  };

  const handleClickDeleteImage = () => setProfileImage('');

  return (
    <ImageUploadInput
      profileImage={profileImage}
      onChangeImageFile={handleChangeImageFile}
      onClickDeleteImage={handleClickDeleteImage}
    />
  );
};
