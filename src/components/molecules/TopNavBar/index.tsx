import Link from 'next/link';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { ArrowLeft, Setting } from '../../atom/icons';

const NavBoxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  height: 44px;
  background-color: ${colors.grayScale.white};
`;

type Props =
  | {
      backURL: string;
      setting: false;
    }
  | {
      backURL: string;
      settingURL: string;
      setting: true;
    };

const TopNavBar = (prop: Props) => {
  const { setting, backURL } = prop;

  return (
    <NavBoxDiv>
      <Link href={backURL}>
        <ArrowLeft width="24px" height="24px" />
      </Link>
      {setting && (
        <Link href={prop.settingURL}>
          <Setting width="24px" height="24px" />
        </Link>
      )}
    </NavBoxDiv>
  );
};

export default TopNavBar;
