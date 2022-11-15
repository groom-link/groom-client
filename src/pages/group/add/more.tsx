import { ChangeEventHandler, useState } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';
import { Carousel } from 'react-responsive-carousel';

import { Thumbnail } from '../../../components/atoms';
import { Warning } from '../../../components/atoms/icons';
import { RadioButton, Stepper, TopNavBar } from '../../../components/molecules';
import ButtonFooter from '../../../components/molecules/ButtonFooter';
import useGetMyInformation from '../../../hooks/api/auth/getMyInformation';
import useGetProducts from '../../../hooks/api/product/getProducts';
import usePostRoom from '../../../hooks/api/room/postRoom';
import useNewGroupInformationStore from '../../../store/newGroupInformation';
import colors from '../../../styles/colors';
import {
  bold16,
  medium10,
  medium12,
  regular16,
  semiBold20
} from '../../../styles/typography';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

type Gifticon = {
  id: string;
  company: string;
  menu: string;
  price: number;
};

const FOOTER_HEIGHT = '64px';

const GIFTICON_MOCK = [
  {
    id: '1',
    company: '버거컹',
    menu: '주니어와퍼버거',
    price: 2900
  },
  {
    id: '2',
    company: '버거컹',
    menu: '주니어와퍼버거',
    price: 2900
  },
  {
    id: '3',
    company: '버거컹',
    menu: '주니어와퍼버거',
    price: 2900
  },
  {
    id: '4',
    company: '버거컹',
    menu: '주니어와퍼버거',
    price: 2900
  },
  {
    id: '5',
    company: '버거컹',
    menu: '주니어와퍼버거',
    price: 2900
  },
  {
    id: '6',
    company: '버거컹',
    menu: '주니어와퍼버거',
    price: 2900
  }
];

const Background = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: calc(${FOOTER_HEIGHT} + 20px);
  background-color: ${colors.grayScale.gray01};
`;

const WhiteBox = styled.div`
  padding: 20px;
  background-color: ${colors.grayScale.white};

  &:not(:nth-of-type(2)) {
    margin-top: 16px;
  }
`;

const CarouselBox = styled.div`
  padding: 20px 0 20px 20px;
  background-color: ${colors.grayScale.white};
`;

const Title = styled.h1`
  ${semiBold20}
  color: ${colors.grayScale.gray05};
`;

const PenaltyStepper = styled(Stepper)`
  margin-top: 32px;
`;

const PenaltyDescription = styled.small`
  ${medium12}
  display: flex;
  align-items: center;
  margin-top: 16px;
  color: ${colors.grayScale.gray04};
`;

const WarningWithMargin = styled(Warning)`
  margin-right: 4px;
`;

const More = () => {
  const [selectedGifticon, setSelectedGifticon] = useState<Gifticon>(
    GIFTICON_MOCK[0]
  );
  const {
    data: products,
    isError: isProductsError,
    isLoading: isProductLoading
  } = useGetProducts();
  const {
    data: myInformation,
    isError: isMyInformationError,
    isLoading: isMyInformationLoading
  } = useGetMyInformation();
  const [penaltyCount, setPenaltyCount] = useState(0);
  const [isPublic, SetIsPublic] = useState<1 | 2>(2);
  const profileImageURL = useNewGroupInformationStore(
    (state) => state.profileImageURL
  );
  const name = useNewGroupInformationStore((state) => state.name);
  const description = useNewGroupInformationStore((state) => state.description);
  const tags = useNewGroupInformationStore((state) => state.tags);
  const numberOfMembers = useNewGroupInformationStore(
    (state) => state.numberOfMembers
  );
  const { mutate } = usePostRoom();

  const handleGifticonSelect = (gifticon: Gifticon) =>
    setSelectedGifticon(gifticon);

  const handlePenaltyCountIncrease = () => setPenaltyCount((pre) => ++pre);

  const handlePenaltyCountDecrease = () =>
    setPenaltyCount((pre) => {
      if (pre <= 0) return 0;
      return --pre;
    });

  const handleIsPublicChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => SetIsPublic(parseInt(value) as 1 | 2);

  const handleNextButtonClick = (id: number) => {
    mutate(
      {
        name,
        description,
        mainImageUrl: profileImageURL,
        summary: '',
        maxPeople: numberOfMembers,
        roomParticipants: [],
        roomPenaltyPostDto: {
          maxAmount: penaltyCount,
          gifticonId: parseInt(selectedGifticon.id),
          roomId: 0
        }
      },
      {
        onSuccess: ({ data: { code } }) => Router.push(`./success?code=${code}`)
      }
    );
  };

  const handleBackButtonClick = () => Router.push('./basic');

  if (isProductLoading) return <div>기프티콘 로딩중...</div>;
  if (isProductsError) return <div>기프티콘 로딩 에러!</div>;
  if (products === undefined) return <div>기프티콘 데이터 에러!</div>;

  if (isMyInformationLoading) return <div>내 정보 로딩중...</div>;
  if (isMyInformationError) return <div>내 정보 데이터 에러!</div>;
  if (myInformation === undefined) return <div>내 정보 데이터 에러!</div>;

  return (
    <Background>
      <TopNavBar setting={false} onBackButtonClick={handleBackButtonClick} />
      <WhiteBox>
        <Title>기프티콘을 통해 모임비를 정해보세요.</Title>
      </WhiteBox>
      <CarouselBox>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          centerMode
          emulateTouch
          preventMovementUntilSwipeScrollTolerance
          centerSlidePercentage={50}
          showIndicators={false}
        >
          {products.map(
            ({ id, organization: { name: companyName }, name, price }) => (
              <Thumbnail
                key={id}
                size="small"
                isActive={id.toString() === selectedGifticon?.id}
                onClick={() =>
                  handleGifticonSelect({
                    id: id.toString(),
                    company: companyName,
                    menu: name,
                    price
                  })
                }
                company={companyName}
                menu={name}
                price={price}
              />
            )
          )}
        </Carousel>
        <PenaltyStepper
          label="1인 최대 패널티 횟수"
          value={penaltyCount}
          color="navy"
          decreaseDisabled={penaltyCount <= 0}
          increaseDisabled={false}
          onDecrease={handlePenaltyCountDecrease}
          onIncrease={handlePenaltyCountIncrease}
        />
        <PenaltyDescription>
          <WarningWithMargin width="18px" color={colors.grayScale.gray04} />
          패널티는 3~5회를 권장합니다.
        </PenaltyDescription>
      </CarouselBox>
      <WhiteBox>
        <RadioButton
          radioLabel="모임 공개 여부"
          option1Label="전체 공개 (검색을 통해 찾을 수 있어요, 준비중이에요!)"
          option2Label="비공개 (링크로만 초대할 수 있어요)"
          selectedValue={isPublic}
          onChange={() => {}}
        />
      </WhiteBox>
      <WhiteBox>
        <SelectedResultRow
          type={selectedGifticon?.price ? 'default' : 'error'}
          label="기프티콘을 선택해주세요."
          value={selectedGifticon?.price.toLocaleString()}
          unit="원"
        />
        <SelectedResultRow
          type="default"
          label="모임원 수"
          value="3"
          unit="명"
        />
        <SelectedResultRow
          type={penaltyCount ? 'default' : 'error'}
          label="최대 패널티 횟수"
          value={penaltyCount.toString()}
          unit="회"
        />
        <SelectedResultRow
          type="result"
          label="총 모임비"
          value={
            selectedGifticon
              ? (selectedGifticon.price * penaltyCount * 3).toLocaleString()
              : '0'
          }
          unit="원"
          smallLabel="(기프티콘 가격 X 모임원 수 X 최대 패널티 횟수)"
        />
      </WhiteBox>
      <ButtonFooter
        disabled={!(selectedGifticon && penaltyCount)}
        onClick={() => handleNextButtonClick(myInformation.id)}
      >
        모임비 결제하기
      </ButtonFooter>
    </Background>
  );
};

export default More;

type TextType = 'error' | 'default' | 'result';

type SelectedResultRowProps = {
  type: TextType;
  label: string;
  smallLabel?: string;
  value?: string;
  unit: string;
};

const leftColorPicker = (type: TextType) => {
  if (type === 'result') return colors.grayScale.gray04;
  if (type === 'error') return colors.etcColor.alertRed;
  return colors.grayScale.gray03;
};

const rightColorPicker = (type: TextType) => {
  if (type === 'result') return colors.mainColor.purple;
  if (type === 'error') return colors.etcColor.alertRed;
  return colors.grayScale.gray05;
};

const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
`;

const LeftText = styled.span<Pick<SelectedResultRowProps, 'type'>>`
  ${medium12}
  color: ${({ type }) => leftColorPicker(type)};
`;

const SmallLabel = styled.small`
  ${medium10}
  display: block;
  color: ${colors.grayScale.gray04};
`;

const RightText = styled.span<Pick<SelectedResultRowProps, 'type'>>`
  ${regular16}
  color: ${({ type }) => rightColorPicker(type)};

  strong {
    ${bold16}
  }
`;

const SelectedResultRow = ({
  type,
  label,
  smallLabel,
  value = '0',
  unit
}: SelectedResultRowProps) => {
  return (
    <TextBox>
      <div>
        <LeftText type={type}>{label}</LeftText>
        {smallLabel && <SmallLabel>{smallLabel}</SmallLabel>}
      </div>
      <RightText type={type}>
        <strong>{value}</strong>
        {unit}
      </RightText>
    </TextBox>
  );
};
