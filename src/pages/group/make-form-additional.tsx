import Router from 'next/router';
import styled from '@emotion/styled';
import { Carousel } from 'react-responsive-carousel';

import { Thumbnail } from '../../components/atoms';
import { Warning } from '../../components/atoms/icons';
import { RadioButton, Stepper, TopNavBar } from '../../components/molecules';
import ButtonFooter from '../../components/molecules/ButtonFooter';
import colors from '../../styles/colors';
import {
  bold16,
  medium10,
  medium12,
  regular16,
  semiBold20
} from '../../styles/typography';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Background = styled.div`
  min-height: 100vh;
  background-color: ${colors.grayScale.gray01};
`;

const WhiteBox = styled.div`
  padding: 20px;
  background-color: ${colors.grayScale.white};

  &:not(:nth-of-type(2)) {
    margin-top: 16px;
  }

  &:nth-of-type(5) {
    margin-bottom: 100px;
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

const MakeFormAdditional = () => {
  return (
    <Background>
      <TopNavBar setting={false} backURL="./make-form-basic" />
      <WhiteBox>
        <Title>기프티콘을 통해 모임비를 정해보세요.</Title>
      </WhiteBox>
      <CarouselBox>
        <Carousel
          showThumbs={false}
          showStatus={false}
          centerMode={true}
          centerSlidePercentage={47}
          showIndicators={false}
        >
          <Thumbnail
            size="small"
            company="버거킹"
            menu="와퍼주니어버거"
            price="6,900"
            isActive={false}
            onClick={() => console.log('clicked')}
          />
          <Thumbnail
            size="small"
            company="버거킹"
            menu="와퍼주니어버거"
            price="6,900"
            isActive={false}
            onClick={() => console.log('clicked')}
          />
          <Thumbnail
            size="small"
            company="버거킹"
            menu="와퍼주니어버거"
            price="6,900"
            isActive={false}
            onClick={() => console.log('clicked')}
          />
          <Thumbnail
            size="small"
            company="버거킹"
            menu="와퍼주니어버거"
            price="6,900"
            isActive={false}
            onClick={() => console.log('clicked')}
          />
          <Thumbnail
            size="small"
            company="버거킹"
            menu="와퍼주니어버거"
            price="6,900"
            isActive={false}
            onClick={() => console.log('clicked')}
          />
          <Thumbnail
            size="small"
            company="버거킹"
            menu="와퍼주니어버거"
            price="6,900"
            isActive={false}
            onClick={() => console.log('clicked')}
          />
        </Carousel>
        <PenaltyStepper
          label="1인 최대 패널티 횟수"
          value={0}
          color={'navy'}
          decreaseDisabled={false}
          increaseDisabled={false}
          onDecrease={function (): void {
            throw new Error('Function not implemented.');
          }}
          onIncrease={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <PenaltyDescription>
          <WarningWithMargin
            width="18px"
            height="18px"
            color={colors.grayScale.gray04}
          />
          패널티는 3~5회를 권장합니다.
        </PenaltyDescription>
      </CarouselBox>
      <WhiteBox>
        <RadioButton
          radioLabel="모임 공개 여부"
          option1Label="전체 공개 (검색을 통해 찾을 수 있어요)"
          option2Label="비공개 (링크로만 초대할 수 있어요)"
          selectedValue={1}
          onChange={() => console.log('clicked')}
        />
      </WhiteBox>
      <WhiteBox>
        <SelectedResultRow
          type="default"
          label="기프티콘을 선택해주세요."
          value={0}
          unit="원"
        />
        <SelectedResultRow
          type="default"
          label="모임원 수"
          value={0}
          unit="명"
        />
        <SelectedResultRow
          type="default"
          label="최대 패널티 횟수"
          value={0}
          unit="회"
        />
        <SelectedResultRow
          type="result"
          label="총 모임비"
          value={0}
          unit="원"
          smallLabel="(기프티콘 가격 X 모임원 수 X 최대 패널티 횟수)"
        />
      </WhiteBox>
      <ButtonFooter
        label="모임비 결제하기"
        disabled={false}
        onClick={() => Router.push('/home')}
      />
    </Background>
  );
};

export default MakeFormAdditional;

type LeftTextType = 'error' | 'default' | 'result';

type SelectedResultRowProps = {
  type: LeftTextType;
  label: string;
  smallLabel?: string;
  value: number;
  unit: string;
};

const colorPicker = (type: LeftTextType) => {
  if (type === 'result') return colors.grayScale.gray04;
  if (type === 'error') return colors.etcColor.alertRed;
  return colors.grayScale.gray03;
};

const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
`;

const LeftText = styled.span<Pick<SelectedResultRowProps, 'type'>>`
  ${medium12}
  color: ${({ type }) => colorPicker(type)};
`;

const SmallLabel = styled.small`
  ${medium10}
  display: block;
  color: ${colors.grayScale.gray04};
`;

const RightText = styled.span<Pick<SelectedResultRowProps, 'type'>>`
  ${regular16}
  color: ${({ type }) =>
    type === 'result' ? colors.mainColor.purple : colors.grayScale.gray05};

  strong {
    ${bold16}
  }
`;

const SelectedResultRow = ({
  type,
  label,
  smallLabel,
  value,
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
