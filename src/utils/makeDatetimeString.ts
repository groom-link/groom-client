const makeDateTimeString = (datetime: string) => {
  const datetimeList = datetime.split('T');
  const date = datetimeList[0];
  const time = datetimeList[1];
  const dateList = date.split('-');
  const year = dateList[0];
  const month = dateList[1];
  const day = dateList[2];
  const timeList = time.split(':');
  const hour = parseInt(timeList[0]);
  const minute = timeList[1];
  const ampm = hour < 12 ? '오전' : '오후';
  const hour12 = hour > 12 ? hour - 12 : hour;

  return {
    dateString: `${year}년 ${month}월 ${day}일`,
    timeString: `${ampm} ${hour12}:${minute}`
  };
};

export default makeDateTimeString;
