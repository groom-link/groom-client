import Link from 'next/link';
import Router from 'next/router';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { ArrowLeft, Setting } from '../../atoms/icons';

type DefaultProps = {
  backURL: string;
  backConfirmCallback?: () => boolean;
};

type OnlyBackButtonProps = {
  setting: false;
} & DefaultProps;

type BackButtonWithSettingProps = {
  setting: true;
  settingURL: string;
} & DefaultProps;

type Props = OnlyBackButtonProps | BackButtonWithSettingProps;

const NavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  height: 44px;
  background-color: ${colors.grayScale.white};
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const TopNavBar = (prop: Props) => {
  const { setting, backURL } = prop;

  const handleBackButtonClick = () => {
    if (!prop.backConfirmCallback) {
      Router.push(backURL);
      return;
    }
    const ok = prop.backConfirmCallback();
    if (!ok) return;
    Router.push(backURL);
  };

  return (
    <NavBox>
      <BackButton type="button" onClick={handleBackButtonClick}>
        <ArrowLeft width="24px" />
      </BackButton>
      {setting && (
        <Link href={prop.settingURL}>
          <a>
            <Setting width="24px" />
          </a>
        </Link>
      )}
    </NavBox>
  );
};

export default TopNavBar;
