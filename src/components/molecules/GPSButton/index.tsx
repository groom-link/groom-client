import styled from "@emotion/styled";
import colors from "../../../styles/colors";
import { GPS } from "../atoms/icons";

type Props = {
  className?: string;
  selected: boolean;
  onClick: () => void;
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: ${colors.grayScale.white};
  border-radius: 8px;
  box-shadow: 0px 2px 16px rgba(105, 112, 119, 0.2);
`;

const GPSButton = ({ selected, onClick }: Props) => {
  return (
    <Button
      type="button"
      aria-label="내 위치로 이동하기"
      {...{ onClick, className }}
    >
      <GPS
        width="28px"
        color={selected ? colors.main.purple : colors.grayScale.gray05}
      />
    </Button>
  );
};

export default GPSButton;
