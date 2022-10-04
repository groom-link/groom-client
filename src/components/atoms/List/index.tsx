import { ReactNode } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { regular16 } from '../../../styles/typography';

type Props = {
  children: ReactNode;
  href: string;
};

const ListItem = styled.a`
  ${regular16}
  display: block;
  padding: 12px;
  color: ${colors.grayScale.gray06};
  background-color: ${colors.grayScale.white};
  border-radius: 8px;
  text-decoration: none;

  &:active {
    background-color: ${colors.grayScale.gray01};
  }
`;

const List = ({ children, href }: Props) => {
  return (
    <Link href={href} passHref>
      <ListItem>{children}</ListItem>
    </Link>
  );
};

export default List;
