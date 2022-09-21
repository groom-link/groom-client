import Image from 'next/image';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { medium12, medium18 } from '../../../styles/typography';
import { Tag } from '../../atoms';

type Props = {
  className?: string;
};

const DEMO_GROUP_IMAGE_URL =
  'https://img.freepik.com/premium-photo/group-diverse-friends-taking-selfie-beach_53876-91925.jpg?w=2000' as const;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${colors.grayScale.white};
`;

const TopBox = styled.div`
  display: flex;
  align-items: center;
`;

const ImageBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin-right: 12px;
  overflow: hidden;
  background-color: ${colors.grayScale.gray01};
  border-radius: 6px;
`;

const Name = styled.strong`
  ${medium18}
  color: ${colors.grayScale.gray05};
`;

const Description = styled.span`
  ${medium12}
  display: block;
  margin-top: 9.5px;
  color: ${colors.grayScale.gray04};
`;

const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 12px;
`;

const GroupTag = styled(Tag)`
  margin: 4px 4px 0 0;
`;

const ThumbnailList = ({ className }: Props) => (
  <Container className={className}>
    <TopBox>
      <ImageBox>
        <Image
          src={DEMO_GROUP_IMAGE_URL}
          layout="fill"
          objectFit="cover"
          alt="모임 프로필"
        />
      </ImageBox>
      <div>
        <Name>모임 이름</Name>
        <Description>모임 설명</Description>
      </div>
    </TopBox>
    <TagBox>
      <GroupTag type="default" onTyping={false}>
        태그
      </GroupTag>
      <GroupTag type="default" onTyping={false}>
        태그
      </GroupTag>
      <GroupTag type="default" onTyping={false}>
        태그
      </GroupTag>
      <GroupTag type="default" onTyping={false}>
        태그
      </GroupTag>
      <GroupTag type="default" onTyping={false}>
        태그
      </GroupTag>
    </TagBox>
  </Container>
);

export default ThumbnailList;
