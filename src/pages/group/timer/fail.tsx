import { useRouter } from 'next/router';

import { GoBackHome } from '../../../components/templates';

const Fail = () => {
  const router = useRouter();

  const handleGoHomeClick = () => router.push('/home');

  return (
    <GoBackHome
      proptype="one-button"
      title="타이머를 해제하지 못했어요."
      description={
        <>
          회의에 지각했어요.
          <br /> 팀원들에게 기프티콘을 보내볼까요?
        </>
      }
      purpleButtonLabel="홈화면으로 돌아가기"
      onPurpleButtonClick={handleGoHomeClick}
      logoImageSrc="/illustrations/Warning.png"
    />
  );
};

export default Fail;
