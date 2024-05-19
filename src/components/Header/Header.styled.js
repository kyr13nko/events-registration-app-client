import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderBlock = styled.header`
  padding: 1rem 0;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 500;

  background-color: var(--color-secondary);
  border-radius: 0.5rem;

  padding: 0.5rem 1rem;

  transition: var(--transition);

  &:hover {
    background-color: var(--color-primary);
  }
`;
