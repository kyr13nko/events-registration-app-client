import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  padding-bottom: 2rem;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  width: 280px;

  background-color: var(--color-white);

  border: 1px solid var(--color-primary);
  border-radius: 0.5rem;

  padding: 0.75rem;

  & p {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-grey);
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & a {
    background-color: var(--color-secondary);
    border-radius: 0.5rem;

    padding: 0.25rem 0.5rem;

    transition: var(--transition);

    &:hover {
      background-color: var(--color-primary);
    }
  }
`;
