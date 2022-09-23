import Image from 'next/image';
import Router from 'next/router';
import styled from '@emotion/styled';

import { DEMO_PROFILE_IMAGE_URL } from '../../__mocks__';
import { Avatar, Tag } from '../../components/atoms';
import { TopNavBar } from '../../components/molecules';
import ButtonFooter from '../../components/molecules/ButtonFooter';
import colors from '../../styles/colors';
import { regular16, semiBold16, semiBold20 } from '../../styles/typography';

const DEMO_GROUP_IMAGE_URL =
  'https://img.freepik.com/premium-photo/group-diverse-friends-taking-selfie-beach_53876-91925.jpg?w=2000' as const;

const Background = styled.div`
  height: 100vh;
  padding-bottom: 80px;
  background-color: ${colors.grayScale.gray01};
`;

const WhiteBox = styled.div`
  padding: 20px;
  background-color: ${colors.grayScale.white};

  &:not(:nth-of-type(2)) {
    margin-top: 16px;
  }
`;

const GroupName = styled.h1`
  ${semiBold20}
  color: ${colors.grayScale.gray05};
`;

const Description = styled.p`
  ${regular16};
  color: ${colors.grayScale.gray04};
`;

const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
`;

const GroupTag = styled(Tag)`
  margin: 0 4px 4px 0;
`;

const SubTitle = styled.h2`
  ${semiBold16}
  margin-bottom: 12px;
  color: ${colors.grayScale.gray04};
`;

const ProfileBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProfileImage = styled(Avatar)`
  margin: 0 8px 8px 0;
`;

const Money = styled.strong`
  ${semiBold16}
  color: ${colors.mainColor.purple};
`;

const Detail = () => (
  <Background>
    <TopNavBar backURL="/home" setting={false} />
    <Image
      src={DEMO_GROUP_IMAGE_URL}
      alt="모임 프로필 이미지"
      layout="responsive"
      height="250px"
      width="414"
    />
    <WhiteBox>
      <GroupName>모임 이름</GroupName>
      <Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
        accusantium autem fugit, odio in, excepturi voluptatum quia quaerat
        exercitationem, quidem esse corporis sequi. Officiis asperiores illo,
        necessitatibus ex tempore molestiae voluptas ullam maxime beatae quaerat
        hic earum. Nemo voluptas a, molestiae rerum et unde esse. Suscipit illum
        sit tenetur provident.
      </Description>
      <TagBox>
        <GroupTag type="default">태그</GroupTag>
        <GroupTag type="default">태그</GroupTag>
        <GroupTag type="default">태그</GroupTag>
        <GroupTag type="default">태그</GroupTag>
      </TagBox>
    </WhiteBox>
    <WhiteBox>
      <SubTitle>팀원(5)</SubTitle>
      <ProfileBox>
        <ProfileImage src={DEMO_PROFILE_IMAGE_URL} />
        <ProfileImage src={DEMO_PROFILE_IMAGE_URL} />
        <ProfileImage src={DEMO_PROFILE_IMAGE_URL} />
      </ProfileBox>
    </WhiteBox>
    <WhiteBox>
      <SubTitle>모임비</SubTitle>
      <Money>50,000원</Money>
    </WhiteBox>
    <ButtonFooter
      label="가입 초대받기"
      disabled={false}
      onClick={() => Router.push('./join')}
    />
  </Background>
);

export default Detail;
