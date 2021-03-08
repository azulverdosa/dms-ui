import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Link from 'next/link';

import defaultTheme from './theme';
import getInternalLink from '../global/utils/getInternalLink';

const StyledLink = styled('a')`
  ${({ theme }: { theme: typeof defaultTheme }) => css`
    color: ${theme.colors.secondary_accessible};
    ${theme.typography.regular};
    line-height: 24px;
    &:hover {
      color: ${theme.colors.accent};
    }
  `}
`;

export const StyledLinkAsButton = styled(StyledLink)`
  ${({ theme }: { theme: typeof defaultTheme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.accent};
    ${theme.typography.subheading2};
    line-height: 24px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.accent};
    padding: 6px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.accent_dark};
    }
  `}
`;

export const InternalLink = ({ children, path }: { children: React.ReactNode; path: string }) => (
  <Link href={getInternalLink({ path })} passHref>
    {children}
  </Link>
);

export default StyledLink;
