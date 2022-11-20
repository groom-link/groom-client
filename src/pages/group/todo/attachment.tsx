import { ChangeEventHandler, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Rating } from 'react-simple-star-rating';

import { Avatar } from '../../../components/atoms';
import {
  File,
  StarFill,
  StarOutline,
  Upload
} from '../../../components/atoms/icons';
import { MemberList, TextArea, TopNavBar } from '../../../components/molecules';
import ButtonFooter from '../../../components/molecules/ButtonFooter';
import { useRoomIdParams, useTodoIdParams } from '../../../hooks';
import useGetTodoDetail from '../../../hooks/api/todo/getTodoDetail';
import colors from '../../../styles/colors';
import {
  medium12,
  regular16,
  semiBold16,
  semiBold20
} from '../../../styles/typography';

const FileUploadBox = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: ${colors.grayScale.gray01};
`;

const FileUploadDesciption = styled.span`
  ${medium12};
  margin-top: 4px;
  color: ${colors.grayScale.gray03};
`;

const HiddenInput = styled.input`
  display: none;
`;

const FileUploadInput = () => {
  return (
    <FileUploadBox htmlFor="file-upload">
      <Upload color={colors.grayScale.gray03} width="44px" />
      <FileUploadDesciption>
        할 일의 결과물을 등록해주세요.
      </FileUploadDesciption>
      <HiddenInput type="file" accept="image/*" id="file-upload" />
    </FileUploadBox>
  );
};

const UploadedFileContainer = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

const FileIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 16px;
  border-radius: 4px;
  background-color: ${colors.grayScale.gray03};
`;

const FileName = styled.span`
  ${regular16}
  color: ${colors.grayScale.gray05};
`;

const UploadedFile = () => {
  return (
    <UploadedFileContainer>
      <FileIconBox>
        <File width="32px" color={colors.grayScale.white} />
      </FileIconBox>
      <FileName>파일 이름.ppt</FileName>
    </UploadedFileContainer>
  );
};

const Background = styled.div`
  min-height: 100vh;
  background-color: ${colors.grayScale.gray01};
`;

const TodoTitle = styled.h1`
  ${semiBold20}
  display: block;
  padding: 20px;
  color: ${colors.grayScale.gray05};
  background-color: ${colors.grayScale.white};
`;

const WhiteBox = styled.div`
  padding: 20px;
  background-color: ${colors.grayScale.white};

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

const FileUploadTitle = styled.h2`
  ${semiBold16}
  display: block;
  margin-bottom: 12px;
  color: ${colors.grayScale.gray04};
`;

const RatingInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RatingInputDescription = styled.span`
  ${medium12}
  margin: 8px 0 20px;
  color: ${colors.grayScale.gray03};
`;

const RatingInput = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleChangeComment: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value }
  }) => setComment(value);

  const handleChangeRating = (newRating: number) => setRating(newRating);

  return (
    <RatingInputContainer>
      <Rating
        initialValue={rating}
        onClick={handleChangeRating}
        fillIcon={<StarFill width="44px" color={colors.mainColor.navy} />}
        emptyIcon={<StarOutline width="44px" color={colors.grayScale.gray02} />}
      />
      <RatingInputDescription>팀원의 결과물이 어땠나요?</RatingInputDescription>
      <TextArea
        width="100%"
        placeholder="팀원에게 한 줄 평을 남겨주세요."
        value={comment}
        onChange={handleChangeComment}
      />
    </RatingInputContainer>
  );
};

const RatingCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 32px;
  }
`;

const RatingTopContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const RatingContentContainer = styled.div`
  margin-left: 12px;
`;

const RatingMemberName = styled.span`
  ${medium12}
  color: ${colors.grayScale.gray03};
`;

const RatingStarsContainer = styled.div`
  display: flex;
`;

const RatingComment = styled.p`
  ${regular16}
  color: ${colors.grayScale.gray05};
`;

const RatingCard = () => {
  return (
    <RatingCardContainer>
      <RatingTopContainer>
        <Avatar proptype="image" />
        <RatingContentContainer>
          <RatingMemberName>팀원 이름</RatingMemberName>
          <RatingStarsContainer>
            <StarFill width="20px" color={colors.mainColor.navy} />
            <StarFill width="20px" color={colors.mainColor.navy} />
            <StarFill width="20px" color={colors.mainColor.navy} />
            <StarOutline width="20px" color={colors.grayScale.gray02} />
            <StarOutline width="20px" color={colors.grayScale.gray02} />
          </RatingStarsContainer>
        </RatingContentContainer>
      </RatingTopContainer>
      <RatingComment>
        정말 열심히 한 흔적이 보입니다! 그런데 이 부분은 조금 아쉬워서
        수정까지하면 너무 좋을 것 같아요.
      </RatingComment>
    </RatingCardContainer>
  );
};

const Attachment = () => {
  const router = useRouter();
  const roomId = useRoomIdParams();
  const todoId = useTodoIdParams();
  const {
    data: todoData,
    isError: isTodoDataError,
    isLoading: isTodoDataLoading
  } = useGetTodoDetail(todoId);

  const handleBackButtonClick = () => router.push(`./?roomId=${roomId}`);

  const handleClickSubmitButton = () => console.log('submit!');

  if (isTodoDataLoading) return <div>할 일 데이터 로딩중...</div>;
  if (isTodoDataError) return <div>할 일 데이터 에러!</div>;
  if (todoData === undefined) return <div>할 일 데이터 에러!</div>;

  return (
    <Background>
      <TopNavBar onBackButtonClick={handleBackButtonClick} setting={false} />
      <TodoTitle>{todoData.title}</TodoTitle>
      <MemberList
        check={false}
        src={todoData.todoOwner.profileImageUrl}
        name={todoData.todoOwner.nickname}
      />
      <WhiteBox>
        <FileUploadTitle>파일 첨부</FileUploadTitle>
        {todoData.fileUrl ? <UploadedFile /> : <FileUploadInput />}
      </WhiteBox>
      {todoData.fileUrl && (
        <WhiteBox>
          <FileUploadTitle>팀원 평가</FileUploadTitle>
          {false ? (
            <RatingInput />
          ) : (
            <>
              <RatingCard />
              <RatingCard />
            </>
          )}
        </WhiteBox>
      )}
      <ButtonFooter onClick={handleClickSubmitButton} disabled={false}>
        평가 남기기
      </ButtonFooter>
    </Background>
  );
};

export default Attachment;
