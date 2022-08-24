import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { Button } from '../../atoms';

type Props = {
  label: string;
  disabled: boolean;
  onClick: () => void;
};

const ButtonBox = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 20px;
  background-color: ${colors.grayScale.white};
`;

const ButtonFooter = ({ label, onClick, disabled }: Props) => {
  return (
    <ButtonBox>
      <Button
        label={label}
        size="medium"
        disabled={disabled}
        color="purple"
        onClick={onClick}
      />
    </ButtonBox>
  );
};

export default ButtonFooter;
