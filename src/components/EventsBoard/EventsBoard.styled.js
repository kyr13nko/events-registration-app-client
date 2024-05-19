import styled from "styled-components";

export const SortButtonsBLock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  margin: 3rem 0;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 0.5rem;

  & a {
    background-color: var(--color-secondary);
    border: 1px solid var(--color-primary);
    border-radius: 0.5rem;

    padding: 0.25rem 0.5rem;

    transition: var(--transition);

    &:hover {
      background-color: var(--color-primary);
    }
  }
`;
