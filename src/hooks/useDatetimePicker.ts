import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';

const MILLISECOND_SCALING_VALUE = 60000;
const DATETIME_START_INDEX = 0;
const DATETIME_END_INDEX = 16;
const DATE_START_INDEX = 0;
const DATE_END_INDEX = 10;
const DEFAULT_ISO_TIME_VALUE = 'T00:00';

type TargetDatetime = 'start' | 'end';

const UseDatetimePicker = () => {
  const tzoffset = new Date().getTimezoneOffset() * MILLISECOND_SCALING_VALUE;
  const ISOString = new Date(Date.now() - tzoffset).toISOString();
  const todayDatetime = ISOString.slice(
    DATETIME_START_INDEX,
    DATETIME_END_INDEX
  );
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [startDatetime, setStartDatetime] = useState(todayDatetime);
  const [endDatetime, setEndDatetime] = useState(todayDatetime);

  useEffect(() => {
    if (isToggleOn) {
      setStartDatetime((pre) => pre.slice(DATE_START_INDEX, DATE_END_INDEX));
      setEndDatetime((pre) => pre.slice(DATE_START_INDEX, DATE_END_INDEX));
      return;
    }
    if (startDatetime.length <= DATE_END_INDEX)
      setStartDatetime((pre) => pre + DEFAULT_ISO_TIME_VALUE);
    if (endDatetime.length <= DATE_END_INDEX)
      setEndDatetime((pre) => pre + DEFAULT_ISO_TIME_VALUE);
    // useEffect 내에서 startDatetime과 endDatetime을 사용하고 있지만 이 effect는 오직 isToggleOn에 의해서만 실행되어야 합니다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isToggleOn]);

  const handleChangeDatetime = (
    { target: { value } }: ChangeEvent<HTMLInputElement>,
    target: TargetDatetime
  ) => {
    if (target === 'start') {
      setStartDatetime(value);
      return;
    }
    setEndDatetime(value);
  };

  const handleChangeStartDatetime: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => handleChangeDatetime(event, 'start');

  const handleChangeEndDatetime: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => handleChangeDatetime(event, 'end');

  const handleClickToggle = () => setIsToggleOn((pre) => !pre);

  return {
    startDatetime,
    endDatetime,
    handleChangeStartDatetime,
    handleChangeEndDatetime,
    isToggleOn,
    handleClickToggle
  };
};

export default UseDatetimePicker;
