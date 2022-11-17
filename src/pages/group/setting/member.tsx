import { useState } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import { TextButton } from '../../../components/atoms';
import {
  Dialog,
  MemberList,
  SegmentTab,
  TopNavBar
} from '../../../components/molecules';
import { useRoomIdParams } from '../../../hooks';
import useGetMyInformation from '../../../hooks/api/auth/getMyInformation';
import useDeleteParticipant from '../../../hooks/api/room/deleteParticipant';
import useGetDetailWithRoomId from '../../../hooks/api/room/getDetailWithRoomId';
import useGetInviteCode from '../../../hooks/api/room/getInviteCode';
import colors from '../../../styles/colors';
import { regular16, semiBold16 } from '../../../styles/typography';
import showToastMessage from '../../../utils/showToastMessage';

const Background = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: 84px;
  background-color: ${colors.grayScale.gray01};
`;

const TabContainer = styled.div`
  padding: 12px 20px;
  background-color: ${colors.grayScale.white};
`;

const InviteCodeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background-color: ${colors.grayScale.white};
`;

const CodeLabel = styled.span`
  ${regular16}
  margin-right: 12px;
  color: ${colors.grayScale.gray04};
`;

const InviteCode = styled.strong`
  ${semiBold16}
  color: ${colors.grayScale.gray05};
`;

const InviteCodePasteButton = styled(TextButton)`
  margin-left: auto;
`;

const WhiteBox = styled.div`
  margin-top: 16px;
  background-color: ${colors.grayScale.white};
`;

const Member = () => {
  const roomId = useRoomIdParams();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    data: inviteCode,
    isLoading: isInviteCodeLoading,
    isError: isInviteCodeError
  } = useGetInviteCode(roomId);
  const {
    data: roomDetail,
    isLoading: isRoomDetailLoading,
    isError: isRoomDetailError
  } = useGetDetailWithRoomId(roomId);
  const {
    data: myInformation,
    isLoading: isMyInformationLoading,
    isError: isMyInformationError
  } = useGetMyInformation();
  const { mutate: deleteParticipant } = useDeleteParticipant();
  const [deleteModeId, setDeleteModeId] = useState<number>(0);

  const setClipboard = (text: string) => navigator.clipboard.writeText(text);

  const handleBackButtonClick = () => Router.push(`/group?roomId=${roomId}`);

  if (isInviteCodeLoading) return <div>초대코드 로딩중...</div>;
  if (isInviteCodeError) return <div>초대코드 로딩 실패</div>;
  if (inviteCode === undefined) return <div>초대코드 에러</div>;
  if (isRoomDetailLoading) return <div>방 정보 로딩중...</div>;
  if (isRoomDetailError) return <div>방 정보 로딩 실패</div>;
  if (roomDetail === undefined) return <div>방 정보 에러</div>;
  if (isMyInformationLoading) return <div>내 정보 로딩중...</div>;
  if (isMyInformationError) return <div>내 정보 로딩 실패</div>;
  if (myInformation === undefined) return <div>내 정보 에러</div>;

  return (
    <Background>
      <TopNavBar onBackButtonClick={handleBackButtonClick} setting={false} />
      <TabContainer>
        <SegmentTab
          leftTabLabel="모임 정보"
          rightTabLabel="구성원 관리"
          leftTabHref={`./information?roomId=${roomId}`}
          rightTabHref=""
          selectedTabIndex={1}
        />
      </TabContainer>
      <InviteCodeContainer>
        <CodeLabel>초대 코드</CodeLabel>
        <InviteCode>{inviteCode}</InviteCode>
        <InviteCodePasteButton
          color="navy"
          disabled={false}
          onClick={() => {
            setClipboard(inviteCode);
            showToastMessage('초대 코드가 복사되었습니다.', 'success');
          }}
        >
          초대 코드 복사하기
        </InviteCodePasteButton>
      </InviteCodeContainer>
      <WhiteBox>
        {roomDetail.roomParticipants.map(
          ({ id, profileImageUrl, nickname }) => (
            <MemberList
              key={id}
              check={false}
              onBlur={() => {
                if (isDialogOpen) return;
                setDeleteModeId(0);
              }}
              isDeleteButtonExposed={deleteModeId === id}
              onListClick={() => {
                if (myInformation.id !== roomDetail.ownerId) return;
                if (id === myInformation.id) return;
                setDeleteModeId((pre) => {
                  if (pre === id) return 0;
                  return id;
                });
              }}
              onDeleteButtonClick={() => {
                setIsDialogOpen(true);
              }}
              src={profileImageUrl}
              name={nickname}
            />
          )
        )}
      </WhiteBox>
      <Dialog
        buttonType="two"
        illustrationURL="/illustrations/Warning.png"
        isOpen={isDialogOpen}
        isGrayButtonDisabled={false}
        isPurpleButtonDisabled={false}
        onGrayButtonClick={() => {
          deleteParticipant(
            { roomId, userId: deleteModeId },
            {
              onSuccess: () => {
                setIsDialogOpen(false);
                showToastMessage('모임에서 내보냈습니다.', 'success');
              }
            }
          );
        }}
        onPurpleButtonClick={() => setIsDialogOpen(false)}
        title="정말 내보내시겠어요?"
        description="모임에서 내보내면 다시 초대해야 합니다."
        grayButtonText="네, 내보낼게요"
        purpleButtonText="아니요"
      />
    </Background>
  );
};

export default Member;
