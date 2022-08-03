import { useState } from 'react';

import colors from '../../../styles/colors';
import {
  CalendarFill,
  CalendarOutline,
  HomeFill,
  HomeOutline,
  PersonFill,
  PersonOutline,
  SearchThick,
  SearchThin
} from '../../atom/icons';
import { ContainerDiv, LabelSpan, MenuBoxDiv } from './styled';

const MENUS = [
  {
    outlineIcon: (
      <HomeOutline width="28px" height="28px" color={colors.grayScale.gray04} />
    ),
    fillIcon: (
      <HomeFill width="28px" height="28px" color={colors.grayScale.gray06} />
    ),
    label: '홈'
  },
  {
    outlineIcon: (
      <SearchThin width="28px" height="28px" color={colors.grayScale.gray04} />
    ),
    fillIcon: (
      <SearchThick width="28px" height="28px" color={colors.grayScale.gray06} />
    ),
    label: '모임 찾기'
  },
  {
    outlineIcon: (
      <CalendarOutline
        width="28px"
        height="28px"
        color={colors.grayScale.gray04}
      />
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
      <PersonOutline
        width="28px"
        height="28px"
        color={colors.grayScale.gray04}
      />
    ),
    fillIcon: (
      <PersonFill width="28px" height="28px" color={colors.grayScale.gray06} />
    ),
    label: '내 GRoom'
  }
] as const;

type Props = {
  /**
   * 탭에서 활성화된 메뉴를 전달받습니다.
   */
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
