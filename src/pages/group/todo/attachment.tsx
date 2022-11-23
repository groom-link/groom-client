import { ChangeEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Rating } from 'react-simple-star-rating';

import { Avatar } from '../../../components/atoms';
import {
  Cancel,
  File,
  StarFill,
  StarOutline,
  Upload
} from '../../../components/atoms/icons';
import { MemberList, TextArea, TopNavBar } from '../../../components/molecules';
import ButtonFooter from '../../../components/molecules/ButtonFooter';
import { useRoomIdParams, useTodoIdParams } from '../../../hooks';
import useGetMyInformation from '../../../hooks/api/auth/getMyInformation';
import useDeleteEvaluation from '../../../hooks/api/evaluation/deleteEvaluation';
import useGetEvaluation, {
  Evaluation
} from '../../../hooks/api/evaluation/getEvaluation';
import usePostEvaluation from '../../../hooks/api/evaluation/postEvaluation';
import useGetTodoDetail from '../../../hooks/api/todo/getTodoDetail';
import usePatchTodo from '../../../hooks/api/todo/patchTodo';
import useDeleteFile from '../../../hooks/api/upload/deleteFile';
import useGetFile from '../../../hooks/api/upload/getFile';
import usePostFile from '../../../hooks/api/upload/postFile';
import colors from '../../../styles/colors';
import {
  medium12,
  regular16,
  semiBold16,
  semiBold20
} from '../../../styles/typography';
import showToastMessage from '../../../utils/showToastMessage';

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

type FileUploadInputProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const FileUploadInput = ({ onChange }: FileUploadInputProps) => {
  return (
    <FileUploadBox htmlFor="file-upload">
      <Upload color={colors.grayScale.gray03} width="44px" />
      <FileUploadDesciption>
        할 일의 결과물을 등록해주세요.
      </FileUploadDesciption>
      <HiddenInput type="file" id="file-upload" onChange={onChange} />
    </FileUploadBox>
  );
};

const UploadedFileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Downloadlink = styled.a`
  display: flex;
  align-items: center;
  padding: 8px 0;
  text-decoration: none;
`;

const FileNameContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  text-decoration: none;
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

const FileDeleteButton = styled.button`
  width: 33px;
  height: 33px;
  margin-left: 20px;
`;

type UploadedFileProps = {
  fileName: string;
  onDeleteClick: () => void;
  downloadUrl: string;
  isTodoOwner: boolean;
};

const UploadedFile = ({
  fileName,
  onDeleteClick,
  downloadUrl,
  isTodoOwner
}: UploadedFileProps) => {
  const fileExtension = fileName.split('.').pop();

  return (
    <UploadedFileContainer>
      {downloadUrl ? (
        <Downloadlink download={`산출물.${fileExtension}`} href={downloadUrl}>
          <FileIconBox>
            <File width="32px" color={colors.grayScale.white} />
          </FileIconBox>
          <FileName>{fileName}</FileName>
        </Downloadlink>
      ) : (
        <FileNameContainer>
          <FileIconBox>
            <File width="32px" color={colors.grayScale.white} />
          </FileIconBox>
          <FileName>{fileName}</FileName>
        </FileNameContainer>
      )}
      {isTodoOwner && (
        <FileDeleteButton type="button" onClick={onDeleteClick}>
          <Cancel width="30px" />
        </FileDeleteButton>
      )}
    </UploadedFileContainer>
  );
};

const Background = styled.div`
  min-height: 100vh;
  padding-bottom: 84px;
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

type RatingInputProps = {
  rating: number;
  onChangeRating: (rating: number) => void;
  comment: string;
  onChangeComment: ChangeEventHandler<HTMLTextAreaElement>;
};

const RatingInput = ({
  rating,
  onChangeRating,
  comment,
  onChangeComment
}: RatingInputProps) => {
  return (
    <RatingInputContainer>
      <Rating
        initialValue={rating}
        onClick={onChangeRating}
        fillIcon={<StarFill width="44px" color={colors.mainColor.navy} />}
        emptyIcon={<StarOutline width="44px" color={colors.grayScale.gray02} />}
      />
      <RatingInputDescription>팀원의 결과물이 어땠나요?</RatingInputDescription>
      <TextArea
        width="100%"
        placeholder="팀원에게 한 줄 평을 남겨주세요."
        value={comment}
        onChange={onChangeComment}
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

const DeleteButton = styled.button`
  ${semiBold16}
  margin-left: auto;
  color: ${colors.etcColor.alertRed};
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

type RatingCardProps = {
  profileImage: string;
  nickname: string;
  comment: string;
  score: string;
  onDeleteClick: () => void;
  isOwner: boolean;
};

const RatingCard = ({
  profileImage,
  nickname,
  comment,
  score,
  onDeleteClick,
  isOwner
}: RatingCardProps) => {
  const NumberOfFilledStar = parseInt(score, 10);
  const NumberOfEmptyStar = 5 - NumberOfFilledStar;

  return (
    <RatingCardContainer>
      <RatingTopContainer>
        <Avatar proptype="image" src={profileImage} />
        <RatingContentContainer>
          <RatingMemberName>{nickname}</RatingMemberName>
          <RatingStarsContainer>
            {Array.from({ length: NumberOfFilledStar }).map((_, index) => (
              <StarFill
                key={index}
                width="20px"
                color={colors.mainColor.navy}
              />
            ))}
            {Array.from({ length: NumberOfEmptyStar }).map((_, index) => (
              <StarOutline
                key={index}
                width="20px"
                color={colors.grayScale.gray02}
              />
            ))}
          </RatingStarsContainer>
        </RatingContentContainer>
        {isOwner && (
          <DeleteButton type="button" onClick={onDeleteClick}>
            삭제
          </DeleteButton>
        )}
      </RatingTopContainer>
      <RatingComment>{comment}</RatingComment>
    </RatingCardContainer>
  );
};

const NoFileDescription = styled.span`
  ${regular16}

  color: ${colors.grayScale.gray03};
  text-align: center;
`;

const Attachment = () => {
  const router = useRouter();
  const roomId = useRoomIdParams();
  const todoId = useTodoIdParams();
  const [fileName, setFileName] = useState('');
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [isTodoOwner, setIsTodoOwner] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const {
    data: todoData,
    isError: isTodoDataError,
    isLoading: isTodoDataLoading
  } = useGetTodoDetail(todoId);
  const {
    data: myInformation,
    isError: isMyInformationError,
    isLoading: isMyInformationLoading
  } = useGetMyInformation();
  const {
    data: todoEvaluationData,
    isError: isTodoEvaluationDataError,
    isLoading: isTodoEvaluationDataLoading
  } = useGetEvaluation(todoId);
  const { data: file } = useGetFile(uploadedFileName);
  const { mutate: postFile } = usePostFile();
  const { mutate: patchTodo } = usePatchTodo();
  const { mutate: deleteFile } = useDeleteFile();
  const { mutate: postEvaluation } = usePostEvaluation();
  const { mutate: deleteEvaluation } = useDeleteEvaluation();

  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setDownloadUrl(url);
  }, [file]);

  useEffect(() => {
    if (!todoData) return;
    if (!todoData.fileName || !todoData.fileUrl) return;
    const { fileName, fileUrl } = todoData;
    setFileName(fileName);
    setUploadedFileName(fileUrl);
  }, [todoData]);

  useEffect(() => {
    if (!todoData || !myInformation) return;
    const {
      todoOwner: { id: ownerId }
    } = todoData;
    const { id: myId } = myInformation;
    setIsTodoOwner(ownerId === myId);
  }, [todoData, myInformation]);

  const handleChangeComment: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value }
  }) => setComment(value);

  const handleChangeRating = (newRating: number) => setRating(newRating);

  const handleBackButtonClick = () => router.push(`./?roomId=${roomId}`);

  const handleFileUpload: ChangeEventHandler<HTMLInputElement> = ({
    target: { files }
  }) => {
    if (!files) return;
    const file = files[0];
    const { name } = file;
    setFileName(name);
    setOriginalFile(file);
  };

  const handleDeleteFileClick = (uuidFileName: string | undefined) => {
    if (!todoData) return;
    if (!uuidFileName) {
      setFileName('');
      setOriginalFile(null);
      return;
    }
    deleteFile(uuidFileName, {
      onSuccess: () => {
        const {
          id,
          title,
          content,
          roomSlot,
          todoOwner: { id: todoOwnerId }
        } = todoData;
        const todoDataForPating = {
          id,
          title,
          content,
          roomSlot,
          todoOwnerId
        };
        patchTodo(todoDataForPating, {
          onSuccess: () => {
            setFileName('');
            setDownloadUrl('');
            showToastMessage('파일이 삭제되었습니다.', 'success');
          }
        });
      }
    });
  };

  const handleAttachmentSubmit = (name: string) => {
    if (!originalFile || !todoData) return;
    const formData = new FormData();
    formData.append('file', originalFile);
    postFile(formData, {
      onSuccess: (uuidFileName) => {
        const {
          id,
          title,
          content,
          roomSlot,
          todoOwner: { id: todoOwnerId }
        } = todoData;
        const todoDataForPating = {
          id,
          title,
          content,
          roomSlot,
          todoOwnerId,
          fileName: name,
          fileUrl: uuidFileName
        };
        patchTodo(todoDataForPating, {
          onSuccess: () => {
            setFileName('');
            setOriginalFile(null);
            showToastMessage('파일이 업로드 되었습니다.', 'success');
          },
          onError: () => {
            deleteFile(uuidFileName);
            showToastMessage('파일 업로드에 실패했습니다.', 'error');
          }
        });
      },
      onError: () => showToastMessage('파일 업로드에 실패했습니다.', 'error')
    });
  };

  const getisFileUploadInputShowen = (
    fileUrl: string | undefined,
    name: string
  ) => {
    if (fileUrl) return false;
    if (name) return false;
    return true;
  };

  const handleEvaluationSubmit = () => {
    const evaluationDataForSubmitting = {
      todoId,
      body: {
        score: rating.toString(),
        comment
      }
    };
    postEvaluation(evaluationDataForSubmitting, {
      onSuccess: () => {
        setComment('');
        setRating(0);
        showToastMessage('평가가 완료되었습니다.', 'success');
      },
      onError: () => showToastMessage('평가에 실패했습니다.', 'error')
    });
  };

  const handleDeleteEvaluationClick = (evaluationId: number) => {
    const deleteRequestData = { todoId, evaluationId };
    deleteEvaluation(deleteRequestData, {
      onSuccess: () => showToastMessage('평가가 삭제되었습니다.', 'success')
    });
  };

  const getIsMyRatingExists = (ratings: Evaluation[], myId: number) => {
    const myRatings = ratings.filter((rating) => rating.ownerId === myId);
    if (myRatings.length === 0) return false;
    return true;
  };

  if (isTodoDataLoading) return <div>할 일 데이터 로딩중...</div>;
  if (isTodoDataError) return <div>할 일 데이터 에러!</div>;
  if (todoData === undefined) return <div>할 일 데이터 에러!</div>;
  if (isMyInformationLoading) return <div>내 정보 로딩중...</div>;
  if (isMyInformationError) return <div>내 정보 에러!</div>;
  if (myInformation === undefined) return <div>내 정보 에러!</div>;
  if (isTodoEvaluationDataLoading) return <div>평가 로딩중...</div>;
  if (isTodoEvaluationDataError) return <div>평가 에러!</div>;
  if (todoEvaluationData === undefined) return <div>평가 에러!</div>;

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
        {getisFileUploadInputShowen(todoData.fileUrl, fileName) ? (
          isTodoOwner ? (
            <FileUploadInput onChange={handleFileUpload} />
          ) : (
            <NoFileDescription>등록된 파일이 없어요.</NoFileDescription>
          )
        ) : (
          <>
            <UploadedFile
              {...{ fileName, downloadUrl, isTodoOwner }}
              onDeleteClick={() => handleDeleteFileClick(todoData.fileUrl)}
            />
          </>
        )}
      </WhiteBox>
      {getIsMyRatingExists(todoEvaluationData, myInformation.id) ||
        isTodoOwner || (
          <WhiteBox>
            <FileUploadTitle>팀원 평가</FileUploadTitle>
            <RatingInput
              rating={rating}
              onChangeRating={handleChangeRating}
              comment={comment}
              onChangeComment={handleChangeComment}
            />
          </WhiteBox>
        )}
      {!!todoEvaluationData.length && (
        <WhiteBox>
          {todoEvaluationData.map(
            ({ profileImage, id, comment, score, nickname, ownerId }) => (
              <RatingCard
                key={id}
                onDeleteClick={() => handleDeleteEvaluationClick(id)}
                isOwner={ownerId === myInformation.id}
                {...{ profileImage, comment, score, nickname }}
              />
            )
          )}
        </WhiteBox>
      )}
      {isTodoOwner ? (
        <ButtonFooter
          onClick={() => handleAttachmentSubmit(fileName)}
          disabled={!originalFile}
        >
          산출물 올리기
        </ButtonFooter>
      ) : (
        <ButtonFooter onClick={handleEvaluationSubmit} disabled={!comment}>
          평가 등록하기
        </ButtonFooter>
      )}
    </Background>
  );
};

export default Attachment;
