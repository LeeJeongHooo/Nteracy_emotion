import styled from "@emotion/styled";

export const RadioButton = styled.label<{
  checked: boolean;
  disabled: boolean;
}>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 1rem 1.2rem;
  border-radius: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.color.primary};

  ${({ checked, theme }) =>
    checked &&
    `
    background-color: ${theme.color.primary};
    color: #fff;
  `}

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
  `}

  &:hover {
    color: #fff;

    background-color: ${({ theme }) => theme.color.primary};
  }

  input {
    display: none;
  }
`;
