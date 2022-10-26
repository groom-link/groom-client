import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { regular16 } from '../../../styles/typography';
import Avatar from '../../atoms/Avatar';
import { CheckCircle } from '../../atoms/icons';

type DefaultProps = {
  className?: string;
  src: string;
  name: string;
};

type ListProps = {
  check: false;
} & DefaultProps;

type CheckProps = {
  check: true;
  isChecked: boolean;
  onChange: () => void;
} & DefaultProps;

type Props = ListProps | CheckProps;

const Container = styled.label`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 20px;
  background-color: ${colors.grayScale.white};
`;

const Name = styled.span`
  ${regular16}
  margin-left: 12px;
  color: ${colors.grayScale.gray05};
`;

const DummyInput = styled.input`
  display: none;
`;

const CheckCircleStyled = styled(CheckCircle)`
  margin-left: auto;
`;

const MemberList = ({ className, src, name, ...props }: Props) => {
  const inputId = `${name}-check-input`;

  return (
    <>
      <Container className={className} htmlFor={inputId}>
        <Avatar proptype="image" src={src} />
        <Name>{name}</Name>
        {props.check && (
          <CheckCircleStyled
            width="36px"
            color={
              props.isChecked
                ? colors.mainColor.purple
                : colors.grayScale.gray02
            }
          />
        )}
      </Container>
      {props.check && (
        <DummyInput
          id={inputId}
          type="checkbox"
          checked={props.isChecked}
          onChange={props.onChange}
        />
      )}
    </>
  );
};

export default MemberList;
