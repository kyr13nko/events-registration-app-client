import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 25rem;

  background-color: var(--color-white);

  border: 1px solid var(--color-secondary);
  border-radius: 1rem;

  padding: 2rem;
`;

const Message = styled.div`
  font-size: 0.75rem;

  margin-top: 0.25rem;
  margin-left: 0.875rem;
`;

export const ErrorMessage = styled(Message)`
  color: var(--color-red);
`;

export const SuccessMessage = styled(Message)`
  color: var(--color-green);
`;

export const RadioWrapper = styled.div`
  display: flex;
  gap: 1rem;

  margin-top: 0.25rem;
`;

export const StyledRadioButton = styled.input.attrs({ type: "radio" })`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  outline: none;
  display: none;

  + label {
    display: inline-block;
    position: relative;

    font-size: 0.875rem;
    font-weight: 400;

    padding-left: 1.75rem;
    cursor: pointer;
  }

  + label:before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
    border: 0.1563rem solid var(--color-grey);
    border-radius: 50%;
  }

  &:checked + label:before {
    border-color: var(--color-primary);
  }

  + label:after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0.3125rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    background-color: var(--color-primary);
    display: none;
  }

  &:checked + label:after {
    display: block;
  }
`;
