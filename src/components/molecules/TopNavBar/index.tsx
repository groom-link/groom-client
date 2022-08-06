import Link from 'next/link';

import ArrowLeft from '../../atom/icons/ArrowLeft';
import Setting from '../../atom/icons/Setting';
import { NavBoxDiv } from './styled';

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
