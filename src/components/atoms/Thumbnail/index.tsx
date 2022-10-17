import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { textEllipsis } from '../../../styles/mixins';
import {
  bold16,
  medium12,
  medium18,
  medium20,
  regular16,
  semiBold16,
  semiBold20
} from '../../../styles/typography';
import Image from '../../utils/Image';

type ThumbmailSize = 'small' | 'medium' | 'large';

type Props = {
  className?: string;
  size: ThumbmailSize;
  company: string;
  menu: string;
  price: number;
  isActive: boolean;
  onClick: () => void;
};

const DEMO_IMAGE_URL =
  'https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/2c77a3ee-cd2d-4f52-8f17-29d92e124896.png' as const;

const heightPicker = (size: ThumbmailSize) => {
  if (size === 'small') return '240px';
  if (size === 'medium') return '246px';
  return '365px';
};

const Background = styled.button<Pick<Props, 'size' | 'isActive'>>`
  box-sizing: border-box;
  width: ${({ size }) => (size === 'small' ? '172px' : '336px')};
  height: ${({ size }) => heightPicker(size)};
  padding: 12px 16px;
  border: 2px solid
    ${({ isActive }) => (isActive ? colors.mainColor.purple : 'transparent')};
  border-radius: 12px;
  background-color: ${colors.grayScale.gray01};
  text-align: ${({ size }) => (size === 'large' ? 'center' : 'start')};
`;

const ImageBox = styled.div<Pick<Props, 'size'>>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => (size === 'small' ? '140px' : '304px')};
  height: ${({ size }) => (size === 'large' ? '250px' : '140px')};
  margin-bottom: 12px;
  overflow: hidden;
  border-radius: 8px;
  background-color: ${colors.grayScale.white};
`;

const Company = styled.h2`
  ${medium12}
  color: ${colors.grayScale.gray03};
  ${textEllipsis};
`;

const Menu = styled.h1<Pick<Props, 'size'>>`
  ${({ size }) =>
    size === 'small' ? medium12 : size === 'medium' ? semiBold16 : medium18};
  color: ${colors.grayScale.gray05};
  ${textEllipsis};
`;

const Price = styled.strong<Pick<Props, 'size'>>`
  ${({ size }) => (size === 'large' ? semiBold20 : bold16)}
  color: ${colors.grayScale.gray05};
  ${textEllipsis};
`;

const Won = styled.span<Pick<Props, 'size'>>`
  ${({ size }) => (size === 'large' ? medium20 : regular16)}
  color: ${colors.grayScale.gray05};
`;

const Thumbnail = ({
  className,
  size,
  company,
  menu,
  price,
  isActive,
  onClick
}: Props) => {
  return (
    <Background
      type="button"
      aria-label={`${menu} 기프티콘 선택`}
      {...{ size, isActive, onClick, className }}
    >
      <ImageBox size={size}>
        <Image
          src={DEMO_IMAGE_URL}
          alt="기프티콘 썸네일"
          layout="fill"
          objectFit="cover"
        />
      </ImageBox>
      <Company>{company}</Company>
      <Menu size={size}>{menu}</Menu>
      <Price size={size}>{price.toLocaleString()}</Price>
      <Won size={size}>원</Won>
    </Background>
  );
};

export default Thumbnail;
