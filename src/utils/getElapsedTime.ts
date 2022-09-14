const getElapsedTime = (createdDate: Date, todaysDate: Date) => {
  const yearDefference = todaysDate.getFullYear() - createdDate.getFullYear();
  if (yearDefference !== 0) return `${yearDefference}년 전`;
  const monthDefference = todaysDate.getMonth() - createdDate.getMonth();
  if (monthDefference !== 0) return `${monthDefference}달 전`;
  const dateDefference = todaysDate.getDate() - createdDate.getDate();
  if (dateDefference !== 0) return `${dateDefference}일 전`;
  const hoursDefference = todaysDate.getHours() - createdDate.getHours();
  if (hoursDefference !== 0) return `${hoursDefference}시간 전`;
  const minutesDefference = todaysDate.getMinutes() - createdDate.getMinutes();
  if (minutesDefference !== 0) return `${minutesDefference}분 전`;
  return '방금 전';
};

export default getElapsedTime;
