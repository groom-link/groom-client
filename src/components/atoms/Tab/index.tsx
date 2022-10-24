import { ReactNode } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { semiBold16 } from '../../../styles/typography';

type Props = {
  className?: string;
  isSelected: boolean;
  htmlFor: string;
  children: ReactNode;
  href: string;
};

const TabLink = styled.a<Pick<Props, 'isSelected'>>`
  ${semiBold16}
  color: ${({ isSelected }) =>
    isSelected ? colors.grayScale.gray05 : colors.grayScale.gray03};
  text-decoration: none;
`;

const Tab = ({ className, isSelected, htmlFor, children, href }: Props) => {
  return (
    <Link href={href} passHref>
      <TabLink {...{ className, isSelected, htmlFor, href }}>
        {children}
      </TabLink>
    </Link>
  );
};

export default Tab;
