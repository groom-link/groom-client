import Link from 'next/link';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { ArrowLeft, Setting } from '../../atoms/icons';

const NavBox = styled.div`
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
    <NavBox>
      <Link href={backURL}>
        <a>
          <ArrowLeft width="24px" />
        </a>
      </Link>
      {setting && (
        <Link href={prop.settingURL}>
          <Setting width="24px" />
        </Link>
      )}
    </NavBox>
  );
};

export default TopNavBar;
