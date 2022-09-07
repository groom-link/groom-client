import styled from '@emotion/styled';

import colors from '../../../styles/colors';

type Props = {
  className?: string;
  isOn: boolean;
  onClick: () => void;
};

const ToggleFrame = styled.div<Pick<Props, 'isOn'>>`
  box-sizing: border-box;
  width: 52px;
  height: 28px;
  display: flex;
  padding: 0 2px;
  align-items: center;
  justify-content: flex-end;
  border-radius: 16px;
  transition: 0.2s;
  background-color: ${({ isOn }) =>
    isOn ? colors.mainColor.navy : colors.grayScale.gray01};
`;

const ToggleButton = styled.div<Pick<Props, 'isOn'>>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  transition: 0.2s;
  transform: ${({ isOn }) => !isOn && 'translateX(-24px)'};
  background-color: ${colors.grayScale.white};
`;

const Toggle = ({ className, isOn, onClick }: Props) => {
  return (
    <button type="button" {...{ className, onClick }}>
      <ToggleFrame isOn={isOn}>
        <ToggleButton isOn={isOn} />
      </ToggleFrame>
    </button>
  );
};

export default Toggle;
