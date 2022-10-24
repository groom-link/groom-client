import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { semiBold20 } from '../../../styles/typography';
import { Tab } from '../../atoms';
import { TopNavBar } from '../../molecules';

type Props = {
  className?: string;
  groupName: string;
};

const GroupName = styled.h1`
  ${semiBold20}
  display: block;
  height: 50px;
  padding-left: 20px;
  background-color: ${colors.grayScale.white};
  color: ${colors.grayScale.gray05};
  line-height: 50px;
`;

const NavigationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 56px;
  border-bottom: 1px solid ${colors.grayScale.gray02};
  background-color: ${colors.grayScale.white};
`;

const GroupPageHeader = ({ className, groupName }: Props) => {
  return (
    <div className={className}>
      <TopNavBar
        backURL="/home"
        setting={true}
        settingURL="./setting/information"
      />
      <GroupName>{groupName}</GroupName>
      <NavigationBox>
        <Tab isSelected={true} htmlFor="" href="">
          홈
        </Tab>
        <Tab isSelected={false} htmlFor="" href="">
          회의 시간
        </Tab>
        <Tab isSelected={false} htmlFor="" href="">
          초대하기
        </Tab>
      </NavigationBox>
    </div>
  );
};

export default GroupPageHeader;
