import { ChangeEventHandler } from 'react';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { regular16, semiBold16 } from '../../../styles/typography';
import { Toggle } from '../../atoms';

const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: ${colors.grayScale.white};
`;

const Label = styled.span`
  ${semiBold16}
  color: ${colors.grayScale.gray04};
`;

const DatetimeInput = styled.input`
  ${regular16}
  border: none;
  color: ${colors.grayScale.gray04};
  background-color: ${colors.grayScale.white};

  &:focus {
    outline: none;
    // 안드로이드 크롬에서 datetime-locale input 클릭 시 테두리 생기는 것 방지.
  }
`;

type TimeBarProps = {
  isAllDay: boolean;
  label: string;
  datetime: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const TimeBar = ({ isAllDay, label, datetime, onChange }: TimeBarProps) => {
  return (
    <>
      <TimeContainer>
        <Label>{label}</Label>
        <DatetimeInput
          type={isAllDay ? 'date' : 'datetime-local'}
          value={datetime}
          onChange={onChange}
        />
      </TimeContainer>
    </>
  );
};

type DefaultProps = {
  className?: string;
  startDatetime: string;
  endDatetime: string;
  onChangeStartDatetime: ChangeEventHandler<HTMLInputElement>;
  onChangeEndDatetime: ChangeEventHandler<HTMLInputElement>;
};

type OnlyTimePickerProps = {
  allDayOption: false;
} & DefaultProps;

type AllDayOptionProps = {
  allDayOption: true;
  isToggleOn: boolean;
  onClickToggle: () => void;
} & DefaultProps;

type Props = OnlyTimePickerProps | AllDayOptionProps;

const TimePicker = ({
  className,
  startDatetime,
  endDatetime,
  onChangeStartDatetime,
  onChangeEndDatetime,
  ...props
}: Props) => {
  return (
    <>
      {props.allDayOption && (
        <TimeContainer className={className}>
          <Label>하루 종일</Label>
          <Toggle isOn={props.isToggleOn} onClick={props.onClickToggle} />
        </TimeContainer>
      )}
      <TimeBar
        isAllDay={props.allDayOption ? props.isToggleOn : false}
        label="시작"
        datetime={startDatetime}
        onChange={onChangeStartDatetime}
      />
      <TimeBar
        isAllDay={props.allDayOption ? props.isToggleOn : false}
        label="끝"
        datetime={endDatetime}
        onChange={onChangeEndDatetime}
      />
    </>
  );
};

export default TimePicker;
