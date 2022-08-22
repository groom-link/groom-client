import Image from 'next/image';
import Router from 'next/router';
import styled from '@emotion/styled';

import { Avatar, Button, Tag } from '../../components/atoms';
import { TopNavBar } from '../../components/molecules';
import colors from '../../styles/colors';
import { regular16, semiBold16, semiBold20 } from '../../styles/typography';

const DEMO_GROUP_IMAGE_URL =
  'https://img.freepik.com/premium-photo/group-diverse-friends-taking-selfie-beach_53876-91925.jpg?w=2000' as const;
const DEMO_PROFILE_IMAGE_URL =
  'https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU=' as const;
const TOP_NAV_BAR_HEIGHT = '44px' as const;
const PROFILE_IMAGE_HEIGHT = '250px' as const;

const Background = styled.div`
  padding-bottom: 80px;
  background-color: ${colors.grayScale.gray01};
  min-height: calc(100vh - ${TOP_NAV_BAR_HEIGHT} - ${PROFILE_IMAGE_HEIGHT});
`;

const WhiteBox = styled.div`
  padding: 20px;
  background-color: ${colors.grayScale.white};

  &:not(:first-child) {
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

const ButtonBox = styled.div`
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 20px;
  background-color: ${colors.grayScale.white};
`;

const Detail = () => (
  <>
    <TopNavBar backURL="/home" setting={false} />
    <Image
      src={DEMO_GROUP_IMAGE_URL}
      alt="모임 프로필 이미지"
      layout="responsive"
      height={PROFILE_IMAGE_HEIGHT}
      width="414"
    />
    <Background>
      <WhiteBox>
        <GroupName>모임 이름</GroupName>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          accusantium autem fugit, odio in, excepturi voluptatum quia quaerat
          exercitationem, quidem esse corporis sequi. Officiis asperiores illo,
          necessitatibus ex tempore molestiae voluptas ullam maxime beatae
          quaerat hic earum. Nemo voluptas a, molestiae rerum et unde esse.
          Suscipit illum sit tenetur provident.
        </Description>
        <TagBox>
          <GroupTag state="default" text="태그" />
          <GroupTag state="default" text="태그" />
          <GroupTag state="default" text="태그" />
          <GroupTag state="default" text="태그" />
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
      <ButtonBox>
        <Button
          label="가입 초대받기"
          size="medium"
          disabled={false}
          color="purple"
          onClick={() => Router.push('./join')}
        />
      </ButtonBox>
    </Background>
  </>
);

export default Detail;
