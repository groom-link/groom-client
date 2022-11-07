import { GoBackHome } from '../../../components/templates';

const Fail = () => {
  return (
    <GoBackHome
      proptype="two-button"
      title="타이머를 해제하지 못했어요."
      description={
        <>
          회의에 지각했어요.
          <br /> 패널티가 자동으로 부여됩니다.
        </>
      }
      purpleButtonLabel="팀원에게 용서 구하기"
      grayButtonLabel="패널티 받기"
      grayButtonOnClick={() => {}}
      onPurpleButtonClick={() => {}}
      logoImageSrc="/illustrations/Warning.png"
    />
  );
};

export default Fail;
