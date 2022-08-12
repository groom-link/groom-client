import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { medium10 } from '../../../styles/typography';
import {
  Calendar,
  CalendarFill,
  Home,
  HomeFill,
  Search,
  SearchFill,
  User,
  UserFill
} from '../../atoms/icons';

type ActiveProps = {
  isActive: boolean;
};

const ContainerDiv = styled.div`
  display: flex;
  height: 49px;
  border-top: 0.5px solid ${colors.grayScale.gray02};
`;

const MenuBoxDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LabelSpan = styled.div<ActiveProps>`
  ${medium10}
  color: ${({ isActive }) =>
    isActive ? colors.grayScale.gray06 : colors.grayScale.gray04};
`;

const MENUS = [
  {
    outlineIcon: (
      <Home width="28px" height="28px" color={colors.grayScale.gray04} />
    ),
    fillIcon: (
      <HomeFill width="28px" height="28px" color={colors.grayScale.gray06} />
    ),
    label: '홈'
  },
  {
    outlineIcon: (
      <Search width="28px" height="28px" color={colors.grayScale.gray04} />
    ),
    fillIcon: (
      <SearchFill width="28px" height="28px" color={colors.grayScale.gray06} />
    ),
    label: '모임 찾기'
  },
  {
    outlineIcon: (
      <Calendar width="28px" height="28px" color={colors.grayScale.gray04} />
    ),
    fillIcon: (
      <CalendarFill
        width="28px"
        height="28px"
        color={colors.grayScale.gray06}
      />
    ),
    label: '내 일정'
  },
  {
    outlineIcon: (
      <User width="28px" height="28px" color={colors.grayScale.gray04} />
    ),
    fillIcon: (
      <UserFill width="28px" height="28px" color={colors.grayScale.gray06} />
    ),
    label: '내 GRoom'
  }
] as const;

type Props = {
  activeMenu: '홈' | '모임 찾기' | '내 일정' | '내 GRoom';
};

const Tab = ({ activeMenu }: Props) => {
  return (
    <ContainerDiv>
      {MENUS.map(({ outlineIcon, fillIcon, label }) => (
        <MenuBoxDiv key={label}>
          {activeMenu === label ? fillIcon : outlineIcon}
          <LabelSpan isActive={activeMenu === label}>{label}</LabelSpan>
        </MenuBoxDiv>
      ))}
    </ContainerDiv>
  );
};

export default Tab;
