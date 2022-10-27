const getRandomString = () => {
  const random = Math.random().toString(36).substring(2, 11);
  return random;
};

export default getRandomString;
