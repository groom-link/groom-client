import { useEffect, useState } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import { Avatar, Tag } from '../../../components/atoms';
import { TopNavBar } from '../../../components/molecules';
import ButtonFooter from '../../../components/molecules/ButtonFooter';
import Image from '../../../components/utils/Image';
import useGetDetailWithCode from '../../../hooks/api/room/getDetailWithCode';
import colors from '../../../styles/colors';
import { regular16, semiBold16, semiBold20 } from '../../../styles/typography';

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

const Detail = () => {
  const [inviteCode, setInviteCode] = useState('');
  const {
    isError,
    isLoading,
    data: groupData
  } = useGetDetailWithCode(inviteCode);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const inviteCode = urlParams.get('code');
    if (!inviteCode) return;
    setInviteCode(inviteCode);
  }, []);

  const handleBackButtonClick = () => Router.push('/home');

  if (isError) return <div>에러가 발생했습니다.</div>;
  if (isLoading) return <div>로딩중...</div>;
  if (groupData === undefined) return <div>그룹 데이터 에러!</div>;

  return (
    <Background>
      <TopNavBar onBackButtonClick={handleBackButtonClick} setting={false} />
      <Image
        src={DEMO_GROUP_IMAGE_URL}
        alt="모임 프로필 이미지"
        layout="responsive"
        height="250px"
        width="414"
      />
      <WhiteBox>
        <GroupName>{groupData.name}</GroupName>
        <Description>{groupData.description}</Description>
        {/* 
        // TODO: room 테이블에 tags 데이터 추가되면 수정하기.
        <TagBox>
          <GroupTag type="default">태그</GroupTag>
          <GroupTag type="default">태그</GroupTag>
          <GroupTag type="default">태그</GroupTag>
          <GroupTag type="default">태그</GroupTag>
        </TagBox> */}
      </WhiteBox>
      <WhiteBox>
        <SubTitle>{`팀원(${groupData.nowPeopleNumber})`}</SubTitle>
        <ProfileBox>
          {groupData.roomParticipants.map(({ id, profileImageUrl }) => (
            <ProfileImage proptype="image" src={profileImageUrl} key={id} />
          ))}
        </ProfileBox>
      </WhiteBox>
      {/*
      // TODO: 모임비 관련 기능 추가되면 수정하기.
      <WhiteBox>
        <SubTitle>모임비</SubTitle>
        <Money>50,000원</Money>
      </WhiteBox> */}
      <ButtonFooter
        disabled={false}
        onClick={() =>
          Router.push(`./join/form?code=${inviteCode}&roomId=${groupData.id}`)
        }
      >
        가입 초대받기
      </ButtonFooter>
    </Background>
  );
};

export default Detail;
