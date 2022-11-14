import styled from '@emotion/styled';

import { GroupPage } from '../../components/templates';
import { useRoomIdParams } from '../../hooks';
import useGetDetailWithRoomId from '../../hooks/api/room/getDetailWithRoomId';
import useGetInviteCode from '../../hooks/api/room/getInviteCode';
import colors from '../../styles/colors';
import { regular16, semiBold16, semiBold24 } from '../../styles/typography';

const InviteCode = styled.span`
  ${semiBold16}
  display: block;
  width: min-content;
  margin: 44px auto 0;
  padding: 14px 52.5px;
  border-radius: 8px;
  color: ${colors.grayScale.gray05};
  background-color: ${colors.grayScale.white};
`;

const Title = styled.h1`
  ${semiBold24}
  display: block;
  margin: 20px auto 0;
  text-align: center;
  color: ${colors.grayScale.gray05};
`;

const Description = styled.p`
  ${regular16}
  display: block;
  margin: 8px auto 0;
  text-align: center;
  color: ${colors.grayScale.gray04};
`;

const Invite = () => {
  const roomId = useRoomIdParams();
  const {
    data: inviteCode,
    isLoading: isInviteCodeLoading,
    isError: isInviteCodeError
  } = useGetInviteCode(roomId);
  const {
    data: groupDetail,
    isLoading: isGroupDetailLoading,
    isError: isGroupDetailError
  } = useGetDetailWithRoomId(roomId);

  if (isInviteCodeLoading) return <div>초대코드 로딩중...</div>;
  if (isInviteCodeError) return <div>초대코드 로딩 실패</div>;
  if (inviteCode === undefined) return <div>초대코드 오류</div>;
  if (isGroupDetailLoading) return <div>그룹 상세 로딩중...</div>;
  if (isGroupDetailError) return <div>그룹 상세 로딩 에러!</div>;
  if (groupDetail === undefined) return <div>그룹 상세 데이터 오류!</div>;

  return (
    <GroupPage roomName={groupDetail.name} roomId={roomId} selectedTabIndex={3}>
      <InviteCode>{inviteCode}</InviteCode>
      <Title>친구들을 초대하세요!</Title>
      <Description>
        친구들에게 초대코드를 전달해주면,
        <br />
        초대코드로 모임에 가입할 수 있어요.
      </Description>
    </GroupPage>
  );
};

export default Invite;
