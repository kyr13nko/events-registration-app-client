import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: relative;

  width: 100%;

  & button {
    position: absolute;
    bottom: 0.25rem;
    right: 0.25rem;

    border-radius: 0.5rem;
    background-color: var(--color-secondary);

    transition: var(--transition);

    &:hover {
      background-color: var(--color-primary);
    }
  }
`;
