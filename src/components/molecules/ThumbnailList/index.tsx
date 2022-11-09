import styled from '@emotion/styled';

import { DEMO_GROUP_IMAGE_URL } from '../../../__mocks__';
import colors from '../../../styles/colors';
import { textEllipsis } from '../../../styles/mixins';
import { medium10, medium12, medium18 } from '../../../styles/typography';
import { Tag } from '../../atoms';
import Image from '../../utils/Image';

type Meeting = {
  title: string;
  location: string;
  date: string;
};

type Props = {
  className?: string;
  profileImageURL: string;
  title: string;
  numberOfMembers: number;
  numberOfMyTodos: number;
  tags: string[];
  nearMeeting?: Meeting;
};

const Container = styled.div<{ hasNearMeeting: boolean }>`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 16px;
  border-radius: ${({ hasNearMeeting }) =>
    hasNearMeeting ? '8px 8px 0 0' : '8px'};
  background-color: ${colors.grayScale.white};
`;

const TopBox = styled.div`
  display: flex;
  align-items: center;
`;

const ImageBox = styled.div`
  flex-shrink: 0;
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

const TextContainer = styled.div`
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Title = styled.strong`
  ${medium18}
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  max-width: 70%;
  color: ${colors.grayScale.gray05};
`;

const NumberOfMyTodos = styled.span`
  ${medium10}
  display: block;
  width: fit-content;
  margin-left: 8px;
  padding: 4px 6px;
  border-radius: 12px;
  color: ${colors.grayScale.white};
  background-color: ${colors.mainColor.purple};
`;

const NumberOfMembers = styled.span`
  ${medium10}
  display: block;
  margin-top: 4px;
  color: ${colors.grayScale.gray03};
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

const MeetingInformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 12px;
  border-radius: 0 0 12px 12px;
  background-color: ${colors.grayScale.gray02};
`;

const MeetingTitle = styled.strong`
  ${medium12}
  ${textEllipsis}
  flex: 2;
  color: ${colors.grayScale.gray05};
`;

const MeetingLocation = styled.span`
  ${medium10}
  ${textEllipsis}
  flex: 2;
  color: ${colors.grayScale.gray04};
`;

const MeetingDate = styled.time`
  ${medium10}
  ${textEllipsis}
  flex: 1;
  margin-left: 8px;
  color: ${colors.grayScale.gray04};
`;

const ThumbnailList = ({
  className,
  profileImageURL,
  title,
  nearMeeting,
  numberOfMembers,
  numberOfMyTodos,
  tags
}: Props) => (
  <div className={className}>
    <Container hasNearMeeting={nearMeeting !== null}>
      <TopBox>
        <ImageBox>
          <Image
            src={
              profileImageURL === '' || 'string'
                ? DEMO_GROUP_IMAGE_URL
                : profileImageURL
            }
            layout="fill"
            objectFit="cover"
            alt="모임 프로필"
          />
        </ImageBox>
        <TextContainer>
          <TitleContainer>
            <Title>{title}</Title>
            <NumberOfMyTodos>할 일 {numberOfMyTodos}개</NumberOfMyTodos>
          </TitleContainer>
          <NumberOfMembers>인원 수 {numberOfMembers}명</NumberOfMembers>
        </TextContainer>
      </TopBox>
      <TagBox>
        {tags.map((tag) => (
          <GroupTag type="default" key={tag}>
            {tag}
          </GroupTag>
        ))}
      </TagBox>
    </Container>
    {nearMeeting && (
      <MeetingInformationContainer>
        <MeetingTitle>{nearMeeting.title}</MeetingTitle>
        <MeetingLocation>{nearMeeting.location}</MeetingLocation>
        <MeetingDate>{nearMeeting.date}</MeetingDate>
      </MeetingInformationContainer>
    )}
  </div>
);

export default ThumbnailList;
