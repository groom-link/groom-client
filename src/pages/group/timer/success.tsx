import Router from 'next/router';

import { GoBackHome } from '../../../components/templates';

const Success = () => {
  const handleClick = () => Router.push('/home');

  return (
    <GoBackHome
      proptype="one-button"
      title="타이머가 해제되었습니다!"
      description={
        <>
          축하합니다!
          <br /> 약속 장소에 늦지 않고 도착하셨네요.
        </>
      }
      purpleButtonLabel="홈화면으로 돌아가기"
      onPurpleButtonClick={handleClick}
    />
  );
};

export default Success;
