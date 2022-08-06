import colors from '../../../styles/colors';
import {
  Calendar,
  CalendarFill,
  Home,
  HomeFill,
  Search,
  SearchFill,
  User,
  UserFill
} from '../../atom/icons';
import { ContainerDiv, LabelSpan, MenuBoxDiv } from './styled';

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
