import { ChangeEventHandler, useEffect } from 'react';
import { useRouter } from 'next/router';

import { MeetingConfig } from '../../../components/templates';
import {
  UseDatetimePicker,
  useMeetingIdParams,
  useRoomIdParams
} from '../../../hooks';
import useGetDetailWithRoomId from '../../../hooks/api/room/getDetailWithRoomId';
import useGetScheduleDetail from '../../../hooks/api/teamSchedule/getScheduleDetail';
import usePatchSchedule from '../../../hooks/api/teamSchedule/patchSchedule';
import useEditParams from '../../../hooks/useEditParams';
import useNewMeetingFormStore from '../../../store/meetingLocation';
import showToastMessage from '../../../utils/showToastMessage';

const Edit = () => {
  const router = useRouter();
  const roomId = useRoomIdParams();
  const edit = useEditParams();
  const { startDatetime, endDatetime, setStartDatetime, setEndDatetime } =
    UseDatetimePicker();
  const meetingId = useMeetingIdParams();
  const participants = useNewMeetingFormStore((state) => state.participants);
  const setParticipants = useNewMeetingFormStore(
    (state) => state.setParticipants
  );
  const title = useNewMeetingFormStore((state) => state.title);
  const setTitle = useNewMeetingFormStore((state) => state.setTitle);
  const setStartDatetimeStore = useNewMeetingFormStore(
    (state) => state.setStartDate
  );
  const setEndDatetimeStore = useNewMeetingFormStore(
    (state) => state.setEndDate
  );
  const startDatetimeStored = useNewMeetingFormStore(
    (state) => state.startDate
  );
  const endDatetimeStored = useNewMeetingFormStore((state) => state.endDate);
  const address = useNewMeetingFormStore((state) => state.address);
  const setAddress = useNewMeetingFormStore((state) => state.setAddress);
  const coords = useNewMeetingFormStore((state) => state.coords);
  const setCoords = useNewMeetingFormStore((state) => state.setCoords);
  const {
    data: groupDetail,
    isLoading: isGroupDetailLoading,
    isError: isGroupDetailError
  } = useGetDetailWithRoomId(roomId);
  const {
    data: meetingDetail,
    isLoading: isMeetingDetailLoading,
    isError: isMeetingDetailError
  } = useGetScheduleDetail(meetingId);
  const { mutate: patchSchedule } = usePatchSchedule();

  useEffect(() => {
    if (!meetingDetail) return;
    console.log(edit);

    if (edit === 'true' || edit === 'loading') return;
    const {
      title,
      startTime,
      endTime,
      participants,
      meetingLocation: { address, latitude, longitude }
    } = meetingDetail;
    const numberCoords = [Number(latitude), Number(longitude)] as Coords;
    setTitle(title);
    setStartDatetimeStore(startTime);
    setEndDatetimeStore(endTime);
    setParticipants(participants.map(({ id }) => id));
    setAddress(address);
    setCoords(numberCoords);
  }, [meetingDetail, edit]);

  const handleBackButtonClick = () =>
    router.push(`/group/meeting?roomId=${roomId}`);

  const getIsMemerSelected = (id: number) => participants.includes(id);

  const onChangeMemberSelect = (id: number) => {
    if (participants.includes(id)) {
      setParticipants(participants.filter((item) => item !== id));
      return;
    }
    setParticipants([...participants, id]);
  };

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => setTitle(value);

  const handleStartDateTimeChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => {
    setStartDatetime(value);
    setStartDatetimeStore(value);
  };

  const handleEndDateTimeChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => {
    setEndDatetime(value);
    setEndDatetimeStore(value);
  };

  const handleSearchMapButtonClick = () =>
    router.push(`./add/map?roomId=${roomId}&meetingId=${meetingId}&edit=true`);

  const handleSumbitSchedule = () => {
    const body = {
      id: meetingId,
      title,
      startTime: startDatetimeStored,
      endTime: endDatetimeStored,
      participants: participants,
      meetingLocation: {
        address,
        latitude: coords[0].toString(),
        longitude: coords[1].toString()
      }
    };
    patchSchedule(body, {
      onSuccess: () => {
        showToastMessage('모임이 수정되었습니다.', 'success');
        router.push(`/group/meeting?roomId=${roomId}`);
      }
    });
  };

  const isSumbitButtonDisabled =
    !title ||
    !startDatetimeStored ||
    !setEndDatetimeStore ||
    !address ||
    !coords ||
    !participants.length;

  if (isGroupDetailLoading) return <div>그룹 상세 로딩중...</div>;
  if (isGroupDetailError) return <div>그룹 상세 로딩 에러!</div>;
  if (groupDetail === undefined) return <div>그룹 상세 데이터 오류!</div>;
  if (isMeetingDetailLoading) return <div>모임 상세 로딩중...</div>;
  if (isMeetingDetailError) return <div>모임 상세 로딩 에러!</div>;
  if (meetingDetail === undefined) return <div>모임 상세 데이터 오류!</div>;

  return (
    <MeetingConfig
      groupMembers={groupDetail.roomParticipants}
      title={title}
      onBackButtonClick={handleBackButtonClick}
      onMeetingTitleChange={handleTitleChange}
      onChangeStartDatetime={handleStartDateTimeChange}
      onChangeEndDatetime={handleEndDateTimeChange}
      startDatetime={startDatetimeStored || startDatetime}
      endDatetime={endDatetimeStored || endDatetime}
      getIsMemberSelected={getIsMemerSelected}
      onChangeMemberSelect={onChangeMemberSelect}
      isOnlineMeetingToggleOn={false}
      onOnlineMeetingToggleChange={function (): void {
        throw new Error('Function not implemented.');
      }}
      address={address}
      onSearchMapButtonClick={handleSearchMapButtonClick}
      submitText="회의 수정하기"
      onSubmitMeeting={handleSumbitSchedule}
      isSumbitButtonDisabled={isSumbitButtonDisabled}
    />
  );
};

export default Edit;
