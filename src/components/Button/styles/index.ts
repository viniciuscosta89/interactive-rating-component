import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

type ButtonTypes = {
  variant: string;
};

const variantStyles = (variant = 'primary') =>
  ({
    primary: css`
      background-color: var(--primary);
      color: var(--white);

      &:hover {
        background-color: var(--white);
        color: var(--primary);
      }
    `,
  }[variant]);

export const Button = styled.button<ButtonTypes>`
  position: relative;
  border: none;
  border-radius: 2em;
  font-weight: 500;
  letter-spacing: 0.25em;
  padding: 1em 2em;
  text-transform: uppercase;
  width: 100%;
  transition: var(--transition);

  &:hover {
    cursor: pointer;
  }

  ${({ variant }) => variantStyles(variant)};
`;

export const StyledLink = styled(Link)<ButtonTypes>`
  position: relative;
  border: none;
  border-radius: 2em;
  display: block;
  font-weight: 500;
  letter-spacing: 0.25em;
  padding: 1em 2em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: var(--transition);

  &:hover {
    cursor: pointer;
  }

  ${({ variant }) => variantStyles(variant)};
`;
