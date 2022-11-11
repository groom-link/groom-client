import { ChangeEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import {
  MemberList,
  TextArea,
  TextInput,
  TopNavBar
} from '../../../components/molecules';
import ButtonFooter from '../../../components/molecules/ButtonFooter';
import { useRoomIdParams, useTodoIdParams } from '../../../hooks';
import useGetDetailWithRoomId from '../../../hooks/api/room/getDetailWithRoomId';
import useDeleteTodo from '../../../hooks/api/todo/deleteTodo';
import useGetTodoDetail from '../../../hooks/api/todo/getTodoDetail';
import colors from '../../../styles/colors';
import { medium12, semiBold16, semiBold20 } from '../../../styles/typography';
import { queryClient } from '../../_app';

const Background = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  padding-bottom: 84px;
  background-color: ${colors.grayScale.gray01};
`;

const WhiteBox = styled.div`
  margin: 16px 0;
  padding: 20px;
  background-color: ${colors.grayScale.white};
`;

const MemberListLabel = styled.span`
  ${medium12}
  padding: 20px 20px 8px;
  display: block;
  color: ${colors.grayScale.gray05};
  background-color: ${colors.grayScale.white};
`;

const TitleContainer = styled.div`
  padding: 20px;
  margin-bottom: 16px;
  background-color: ${colors.grayScale.white};
`;

const Title = styled.h1`
  ${semiBold20}
  margin-bottom: 20px;
  color: ${colors.grayScale.gray05};
`;

// TODO: Button 컴포넌트 안에 통합하기.
const DeleteButton = styled.button`
  ${semiBold16};
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid ${colors.etcColor.alertRed};
  color: ${colors.etcColor.alertRed};
  background-color: ${colors.grayScale.white};
`;

const Edit = () => {
  const roomId = useRoomIdParams();
  const todoId = useTodoIdParams();
  const router = useRouter();
  const [participants, setParticipants] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {
    data: groupDetailData,
    isError: isGroupDetailError,
    isLoading: isGroupDetailLoading
  } = useGetDetailWithRoomId(202);
  const {
    data: todoDetailData,
    isError: isTodoDetailError,
    isLoading: isTodoDetailLoading
  } = useGetTodoDetail(todoId);
  const { mutate } = useDeleteTodo();

  useEffect(() => {
    if (!todoDetailData) return;
    const {
      title: preTitle,
      content: preContent,
      todoOwner: { id }
    } = todoDetailData;
    setTitle(preTitle);
    setContent(preContent);
    setParticipants(id);
  }, [todoDetailData]);

  const selectMember = (id: number) => {
    if (participants === id) {
      setParticipants(0);
      return;
    }
    setParticipants(id);
  };

  const handleClickButton = () =>
    mutate(todoId, {
      onSuccess: () => {
        queryClient.invalidateQueries(['todo']);
        router.push(`./?roomId=${roomId}`);
      }
    });

  const handleContentChange: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value }
  }) => setContent(value);

  if (isGroupDetailLoading) return <div>그룹 정보 로딩중...</div>;
  if (isGroupDetailError) return <div>그룹 정보 불러오기 에러!</div>;
  if (groupDetailData === undefined) return <div>그룹 정보 데이터 에러!</div>;
  if (isTodoDetailLoading) return <div>할 일 정보 로딩중...</div>;
  if (isTodoDetailError) return <div>할 일 정보 불러오기 에러!</div>;
  if (todoDetailData === undefined) return <div>할 일 정보 데이터 에러!</div>;

  return (
    <Background>
      <TopNavBar
        onBackButtonClick={() => router.push('./?roomId=202')}
        setting={false}
      />
      <TitleContainer>
        <Title>{title}</Title>
        <TextInput
          value={title}
          placeholder="할 일 제목을 입력해보세요."
          onChange={({ target: { value } }) => setTitle(value)}
        />
      </TitleContainer>
      <WhiteBox>
        <TextArea
          label="할 일 내용"
          placeholder="무슨 일을 해야하는지 적어보세요."
          value={content}
          onChange={handleContentChange}
        />
      </WhiteBox>
      <MemberListLabel>할 일을 맡을 사람</MemberListLabel>
      {groupDetailData.roomParticipants.map(
        ({ id, profileImageUrl, nickname }) => (
          <MemberList
            key={id}
            check={true}
            src={profileImageUrl}
            name={nickname}
            isChecked={id === participants}
            onChange={() => selectMember(id)}
          />
        )
      )}
      <WhiteBox>
        <DeleteButton type="button" onClick={handleClickButton}>
          할 일 삭제하기
        </DeleteButton>
      </WhiteBox>
      <ButtonFooter
        disabled={false}
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      >
        할 일 수정하기
      </ButtonFooter>
    </Background>
  );
};

export default Edit;
