import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { regular16, semiBold16 } from '../../../styles/typography';
import getRandomString from '../../../utils/getRandomString';
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

type DeleteProps = {
  check: false;
  isDeleteButtonExposed: boolean;
  onBlur: () => void;
  onListClick: () => void;
  onDeleteButtonClick: () => void;
} & DefaultProps;

type Props = ListProps | CheckProps | DeleteProps;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
`;

const ListItemContainer = styled.label`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  min-width: 100%;
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

const DeleteButton = styled.button<Pick<DeleteProps, 'isDeleteButtonExposed'>>`
  ${semiBold16}
  min-width: ${({ isDeleteButtonExposed }) =>
    isDeleteButtonExposed ? '64px' : '0'};
  max-width: ${({ isDeleteButtonExposed }) =>
    isDeleteButtonExposed ? '64px' : '0'};
  color: ${colors.grayScale.white};
  background-color: ${colors.etcColor.alertRed};
  transition: min-width 0.15s;
  word-break: keep-all;
`;

const MemberList = ({ className, src, name, ...props }: Props) => {
  const [inputID, setInputID] = useState('');

  useEffect(() => {
    const inputIDWithRandomString = `${name}-check-input-${getRandomString()}`;
    setInputID(inputIDWithRandomString);
  }, [name]);

  return (
    <>
      <Container onBlur={'onBlur' in props ? props.onBlur : () => {}}>
        <ListItemContainer
          className={className}
          htmlFor={inputID}
          onClick={'onListClick' in props ? props.onListClick : () => {}}
        >
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
        </ListItemContainer>
        {'onListClick' in props && (
          <DeleteButton
            onClick={props.onDeleteButtonClick}
            isDeleteButtonExposed={props.isDeleteButtonExposed}
          >
            삭제
          </DeleteButton>
        )}
      </Container>
      {props.check && (
        <DummyInput
          id={inputID}
          type="checkbox"
          checked={props.isChecked}
          onChange={props.onChange}
        />
      )}
    </>
  );
};

export default MemberList;
