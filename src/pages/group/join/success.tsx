import Router from 'next/router';

import { GoBackHome } from '../../../components/templates';

const Success = () => {
  const handleClick = () => Router.push('/home');

  return (
    <GoBackHome
      proptype="one-button"
      logoImageSrc="/illustrations/Join.png"
      title="모임 가입이 완료되었습니다!"
      description="홈 화면에 새 모임이 추가되었습니다."
      purpleButtonLabel="홈화면으로 돌아가기"
      onPurpleButtonClick={handleClick}
    />
  );
};

export default Success;
